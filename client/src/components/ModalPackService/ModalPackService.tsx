import {
    Button,
    Checkbox,
    Flex,
    Group,
    Loader,
    Modal,
    ScrollArea,
    Stack,
    Text,
} from "@mantine/core";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { notifications } from "@mantine/notifications";

import { jobSimulationService } from "../../services/job_simulation.service";

interface IJobCategory {
    job_category_id: number;
    job_category_name: string;
}

interface ICompany {
    company_id: number;
    company_name: string;
}

interface IType extends IJobCategory {
    list_company: ICompany[];
}

export const ModalPackService = ({
    openedJob,
    closeJob,
    userBuyServicePackId,
}: {
    openedJob: boolean;
    closeJob: () => void;
    userBuyServicePackId: number;
}) => {
    const [tabModal, setTabModal] = useState<number>(1);
    const [listCategory, setListCategory] = useState<IJobCategory[] | []>([]);
    const [listCompany, setListCompany] = useState<IType[] | []>([]);

    const [selectedListJobCategory, setSelectedListJobCategory] = useState<
        string[]
    >([]);

    const [selectedListCompany, setSelectedListCompany] = useState<string[]>(
        []
    );

    const [loading, setLoading] = useState(false);
    const [jobCategoryNumber, setJobCategoryNumber] = useState(2);
    const [companyNumber, setCompanyNumber] = useState(2);

    const handleGetListJobCategory = async () => {
        const res = await jobSimulationService.getListJobCategory();

        if (res.statusCode === 200) {
            setListCategory(res.data.job_categories);
        }
    };

    const handleNextPage = async () => {
        if (!selectedListJobCategory.length) {
            return alert("Please choose job category");
        }

        if (selectedListJobCategory.length > jobCategoryNumber) {
            return alert("Bạn chỉ được chọn 1 nhóm ngành mà thôi");
        }

        const arrOfNum = selectedListJobCategory.map((str) => {
            return Number(str);
        });

        setLoading(true);
        const res = await jobSimulationService.getListCompanyByCategoryId(
            arrOfNum
        );
        setLoading(false);

        if (res.statusCode === 200) {
            setListCompany(res.data.list_job_category);
        }

        setTabModal(2);
    };

    const handleGetUserPack = async () => {
        const res = await jobSimulationService.getUserBuyServicePackById(
            userBuyServicePackId
        );

        if (res.statusCode === 200) {
            setJobCategoryNumber(
                res.data.user_buy_service_pack.job_category_number
            );
            setCompanyNumber(res.data.user_buy_service_pack.company_number);
        }
    };

    const handleApplyServicePack = async () => {
        if (selectedListCompany.length > companyNumber * 2) {
            return alert(
                `Mỗi nhóm ngành chỉ được chọn ${companyNumber} công ty!`
            );
        }

        // submit
        const payload = selectedListCompany.map((item) => {
            const filterElement = item.split("-");

            return {
                job_category_id: Number(filterElement[0]),
                company_id: Number(filterElement[1]),
            };
        });

        setLoading(true);
        const res =
            await jobSimulationService.applyServicePackJobCategoryCompany(
                userBuyServicePackId,
                payload
            );
        setLoading(false);

        if (res.statusCode === 200) {
            closeJob();
        }

        return notifications.show({
            message: res.message,
        });
    };

    useEffect(() => {
        handleGetUserPack();
        handleGetListJobCategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Modal
            opened={openedJob}
            onClose={closeJob}
            mih={300}
            xOffset={0}
            scrollAreaComponent={ScrollArea.Autosize}
            centered
            style={{ color: "rgb(40, 89, 182)" }}
        >
            {tabModal === 1 ? (
                <>
                    <Text fw={500} size="20px">
                        Hãy chọn nhóm ngành mà bạn quan tâm
                    </Text>
                    <span>
                        Bạn được chọn tối đa {jobCategoryNumber} nhóm ngành
                    </span>

                    <Stack>
                        <Checkbox.Group
                            value={selectedListJobCategory}
                            onChange={setSelectedListJobCategory}
                        >
                            <Stack mt="xs">
                                {listCategory.length > 0 &&
                                    listCategory.map((item) => (
                                        <Checkbox
                                            value={`${item.job_category_id}`}
                                            label={item.job_category_name}
                                        />
                                    ))}
                            </Stack>
                        </Checkbox.Group>
                    </Stack>
                    <Button
                        mt="10px"
                        variant="light"
                        onClick={() => handleNextPage()}
                        disabled={!selectedListJobCategory.length}
                    >
                        {!loading ? (
                            <Group justify="center">
                                <Text>Tiếp tục</Text>
                                <IconArrowNarrowRight />
                            </Group>
                        ) : (
                            <Loader color="blue" type="dots" />
                        )}
                    </Button>
                </>
            ) : (
                <>
                    <Text fw={500} size="20px">
                        Hãy chọn công ty mà bạn quan tâm
                    </Text>
                    <span>
                        Bạn được chọn tối đa {companyNumber} công ty tương ứng
                        với nhóm ngành
                    </span>

                    {listCompany.length > 0 &&
                        listCompany.map((item) => (
                            <Stack gap={0} key={item.job_category_id}>
                                <Text fw={500}>{item.job_category_name}</Text>

                                <Checkbox.Group
                                    value={selectedListCompany}
                                    onChange={setSelectedListCompany}
                                >
                                    <Stack mt="xs">
                                        {item.list_company.map((company) => (
                                            <Checkbox
                                                value={`${item.job_category_id}-${company.company_id}`}
                                                label={company.company_name}
                                            />
                                        ))}
                                    </Stack>
                                </Checkbox.Group>
                            </Stack>
                        ))}
                    <Flex justify="space-between">
                        <Button
                            mt="10px"
                            variant="light"
                            onClick={() => setTabModal(1)}
                        >
                            <Group justify="center">
                                <IconArrowNarrowLeft />
                                <Text>Quay lại</Text>
                            </Group>
                        </Button>
                        <Button
                            mt="10px"
                            variant="light"
                            onClick={() => handleApplyServicePack()}
                            disabled={loading}
                        >
                            {!loading ? (
                                <Text>Đăng ký</Text>
                            ) : (
                                <Loader color="blue" type="dots" />
                            )}
                        </Button>
                    </Flex>
                </>
            )}
        </Modal>
    );
};
