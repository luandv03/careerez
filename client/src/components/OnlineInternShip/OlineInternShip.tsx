import {
    Center,
    Text,
    Stack,
    Flex,
    Input,
    InputBase,
    Combobox,
    useCombobox,
    SimpleGrid,
    Card,
    Image,
    // Badge,
    Group,
    Box,
} from "@mantine/core";
import { useState } from "react";
import { IconTag, IconClockHour1 } from "@tabler/icons-react";

import styles from "./OnlineInternShip.module.css";

const groceries = [
    "🍎 Data",
    "🍌 Phân tích rủi ro",
    "🥦 Báo cáo tài chính",
    "🥕 Marketing",
    "🍫 Kỹ thuật phần mềm",
];

const companies = [
    "🍎 Pepsi",
    "🍌 Coca cola",
    "🥦 Toyota",
    "🥕 Google",
    "🍫 Facebook",
];

const JOB_INIT = [
    {
        job_simulation_id: 1,
        company_logo:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700277137/careerez/google_logo_labso4.png",
        company_name: "Google",
        job_simulation_name: "Back-End Engineering",
        job_simulation_category: "Software Engineer",
        job_simulation_thumnail:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        job_simulation_time_spaced: "3-4 giờ",
        job_simulation_des:
            "A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications.",
    },
    {
        job_simulation_id: 2,
        company_logo:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700277137/careerez/google_logo_labso4.png",
        company_name: "Google",
        job_simulation_name: "Back-End Engineering",
        job_simulation_category: "Software Engineer",
        job_simulation_thumnail:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        job_simulation_time_spaced: "3-4 giờ",
        job_simulation_des:
            "A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications.",
    },
    {
        job_simulation_id: 3,
        company_logo:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700277137/careerez/google_logo_labso4.png",
        company_name: "Google",
        job_simulation_name: "Back-End Engineering",
        job_simulation_category: "Software Engineer",
        job_simulation_thumnail:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        job_simulation_time_spaced: "3-4 giờ",
        job_simulation_des:
            "A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications.",
    },
    {
        job_simulation_id: 4,
        company_logo:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700277137/careerez/google_logo_labso4.png",
        company_name: "Google",
        job_simulation_name: "Back-End Engineering",
        job_simulation_category: "Software Engineer",
        job_simulation_thumnail:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        job_simulation_time_spaced: "3-4 giờ",
        job_simulation_des:
            "A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications.",
    },
    {
        job_simulation_id: 5,
        company_logo:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700277137/careerez/google_logo_labso4.png",
        company_name: "Google",
        job_simulation_name: "Back-End Engineering",
        job_simulation_category: "Software Engineer",
        job_simulation_thumnail:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        job_simulation_time_spaced: "3-4 giờ",
        job_simulation_des:
            "A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications.",
    },
];

export const OnlineInternShip = () => {
    const comboboxJobCategory = useCombobox({
        onDropdownClose: () => comboboxJobCategory.resetSelectedOption(),
    });

    const comboboxCompany = useCombobox({
        onDropdownClose: () => comboboxCompany.resetSelectedOption(),
    });

    const [jobCategory, setJobCategory] = useState<string | null>(null);
    const [company, setCompany] = useState<string | null>(null);

    const options = groceries.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    const optionsCompany = companies.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img
                    src="https://static.wixstatic.com/media/657d93c686e44e2d9b543a6e1e42cbca.jpg/v1/fill/w_1895,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/657d93c686e44e2d9b543a6e1e42cbca.jpg"
                    alt="Avatar Career Experience"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Thực tập trực tuyến</h1>
                </div>
            </div>
            <div className={styles.about}>
                <div>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutContentText}>
                            <p>
                                Chương trình Thực tập trực tuyến xây dựng các kỹ
                                năng thực tế cho các vai trò thực tế, cung cấp
                                cơ hội tiếp cận hàng chục công ty chỉ với 1 cú
                                click chuột. Khám phá nghề nghiệp và chuẩn bị
                                cho sự nghiệp tương lai với các mô phỏng công
                                việc miễn phí được thiết kế bởi các doanh nghiệp
                                hàng đầu Việt Nam. Đây cũng là cơ hội để tiếp
                                cận vòng tuyển dụng của các doanh nghiệp.
                            </p>
                        </div>
                    </div>

                    <div className={styles.aboutProgress}>
                        <div className={styles.aboutProgressContainer}>
                            <div
                                className={
                                    styles.aboutProgressContainerCircleList
                                }
                            >
                                <div
                                    className={
                                        styles.aboutProgressContainerCircleList
                                    }
                                >
                                    <div
                                        className={
                                            styles.aboutProgressContainerCircleBox
                                        }
                                    >
                                        <div
                                            className={
                                                styles.aboutProgressContainerCircleItem
                                            }
                                        >
                                            <button>
                                                <span>1</span>
                                            </button>
                                        </div>

                                        <p>
                                            Đăng ký và cho chúng tôi biết thông
                                            tin về bản thân bạn.
                                        </p>
                                    </div>

                                    <div
                                        className={
                                            styles.aboutProgressContainerCircleBox
                                        }
                                    >
                                        <div
                                            className={
                                                styles.aboutProgressContainerCircleItem
                                            }
                                        >
                                            <button>
                                                <span>2</span>
                                            </button>
                                        </div>

                                        <p>
                                            Lựa chọn ngành bạn muốn thực tập và
                                            hoàn thành các công việc liên quan
                                        </p>
                                    </div>

                                    <div
                                        className={
                                            styles.aboutProgressContainerCircleBox
                                        }
                                    >
                                        <div
                                            className={
                                                styles.aboutProgressContainerCircleItem
                                            }
                                        >
                                            <button>
                                                <span>3</span>
                                            </button>
                                        </div>

                                        <p>
                                            So sánh bài làm của bạn với các câu
                                            trả lời mẫu và nhận chứng chỉ
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className={styles.aboutProgressDivide}></div> */}
                        </div>
                    </div>
                </div>
            </div>

            <Stack>
                <Center>
                    <Stack>
                        <Text fw={700} ta="center">
                            Thực tập trực tuyến đây, tham gia đi
                        </Text>

                        <Center>
                            <Flex gap={10}>
                                <Combobox
                                    store={comboboxJobCategory}
                                    onOptionSubmit={(val) => {
                                        setJobCategory(val);
                                        comboboxJobCategory.closeDropdown();
                                    }}
                                    width={276}
                                    style={{
                                        width: "200px",
                                    }}
                                >
                                    <Combobox.Target>
                                        <InputBase
                                            component="button"
                                            pointer
                                            rightSection={<Combobox.Chevron />}
                                            onClick={() =>
                                                comboboxJobCategory.toggleDropdown()
                                            }
                                        >
                                            {jobCategory || (
                                                <Input.Placeholder>
                                                    Lĩnh vực
                                                </Input.Placeholder>
                                            )}
                                        </InputBase>
                                    </Combobox.Target>

                                    <Combobox.Dropdown>
                                        <Combobox.Options>
                                            {options}
                                        </Combobox.Options>
                                    </Combobox.Dropdown>
                                </Combobox>

                                <Combobox
                                    store={comboboxCompany}
                                    onOptionSubmit={(val) => {
                                        setCompany(val);
                                        comboboxCompany.closeDropdown();
                                    }}
                                    width={200}
                                    style={{
                                        width: "200px",
                                    }}
                                >
                                    <Combobox.Target>
                                        <InputBase
                                            component="button"
                                            pointer
                                            rightSection={<Combobox.Chevron />}
                                            onClick={() =>
                                                comboboxCompany.toggleDropdown()
                                            }
                                        >
                                            {company || (
                                                <Input.Placeholder>
                                                    Công ty
                                                </Input.Placeholder>
                                            )}
                                        </InputBase>
                                    </Combobox.Target>

                                    <Combobox.Dropdown>
                                        <Combobox.Options>
                                            {optionsCompany}
                                        </Combobox.Options>
                                    </Combobox.Dropdown>
                                </Combobox>
                            </Flex>
                        </Center>

                        <SimpleGrid cols={3} p={20} spacing={50}>
                            {JOB_INIT.map((item) => (
                                <Card
                                    key={item.job_simulation_id}
                                    shadow="sm"
                                    padding="lg"
                                    radius="md"
                                    w={320}
                                    withBorder
                                    className={styles.jobHover}
                                >
                                    <Card.Section
                                        style={{ position: "relative" }}
                                    >
                                        <Image
                                            src={item.job_simulation_thumnail}
                                            height={160}
                                            alt="Norway"
                                        />
                                        <Box
                                            h={40}
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: "10px",
                                                borderTopLeftRadius: "4px",
                                                borderTopRightRadius: "4px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <Image
                                                src={item.company_logo}
                                                height={40}
                                                width={100}
                                                alt="Norway"
                                            />
                                        </Box>
                                    </Card.Section>

                                    <Text style={{ color: "rgb(40, 89, 182)" }}>
                                        {item.company_name}
                                    </Text>

                                    <Group justify="space-between" mb="xs">
                                        <Text
                                            fw={700}
                                            style={{
                                                color: "rgb(40, 89, 182)",
                                            }}
                                        >
                                            {item.job_simulation_name}
                                        </Text>
                                        {/* <Badge color="pink" variant="light">
                                            In Progress
                                        </Badge> */}
                                    </Group>
                                    <Group
                                        gap={4}
                                        style={{
                                            color: "rgb(40, 89, 182)",
                                        }}
                                    >
                                        <IconTag size="16px" />
                                        <Text size="16px">
                                            {item.job_simulation_category}
                                        </Text>
                                    </Group>

                                    <Group
                                        gap={4}
                                        mt={8}
                                        style={{
                                            color: "rgb(40, 89, 182)",
                                        }}
                                    >
                                        <IconClockHour1 size="16px" />
                                        <Text size="16px">
                                            {item.job_simulation_time_spaced}
                                        </Text>
                                    </Group>

                                    <Text
                                        size="sm"
                                        c="dimmed"
                                        mt={8}
                                        lineClamp={2}
                                    >
                                        {item.job_simulation_des}
                                    </Text>
                                </Card>
                            ))}
                        </SimpleGrid>
                    </Stack>
                </Center>
            </Stack>
        </div>
    );
};
