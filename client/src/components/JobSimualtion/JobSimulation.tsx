import {
    Stack,
    Box,
    Image,
    Group,
    Text,
    Button,
    Divider,
    ScrollArea,
    TypographyStylesProvider,
    Overlay,
    Modal,
    Center,
} from "@mantine/core";
import {
    IconTag,
    IconClockHour1,
    IconReceipt2,
    IconBadge,
    IconSchool,
    IconFileCheck,
    IconCircleCheck,
} from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { motion } from "framer-motion";
import { notifications } from "@mantine/notifications";

import { ReadMore } from "../ReadMore";
import { Loading } from "../Loading";
import { jobSimulationService } from "../../services/job_simulation.service";

const JOB_DETAIL_INIT = {
    job_simulation_id: 0,
    company_logo: "",
    company_name: "",
    company_video_intro: "",
    job_simulation_price: 0,
    job_simulation_name: "",
    job_category_name: "",
    job_simulation_thumnail: "",
    job_simulation_time_spaced: "",
    job_simulation_des: "",
    job_simulation_why_register: "",
};

interface ITask {
    task_id: number;
    job_simulation_id: number;
    task_name: string;
    task_time_spaced: string;
    task_des: string;
    task_what_learn: string;
    task_what_do: string;
    task_video_intro: string;
    task_number: number;
    task_level: string;
}

export const JobSimulation = () => {
    const [jobSimulation, setJobSimulation] = useState(JOB_DETAIL_INIT);
    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [seletectedTasks, setSeletectedTasks] = useState(1);
    const { job_simulation_id } = useParams();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);

    const handleGetJobSimulationDetail = async () => {
        const res = await jobSimulationService.getJobSimulationDetailById(
            Number(job_simulation_id)
        );

        if (res.statusCode === 200) {
            setJobSimulation(res.data.job_simulation);
        }
    };

    const handleRegisterJob = async () => {
        setVisible(true);

        if (!JSON.parse(localStorage.getItem("isAuthenticated") as string)) {
            navigate("/signin");
        }

        const res = await jobSimulationService.registerJobSimulationById(
            Number(searchParams.get("job_category_id")),
            Number(searchParams.get("company_id")),
            Number(job_simulation_id)
        );

        if (res.statusCode === 403) {
            setTimeout(() => {
                setVisible(false);

                notifications.show({
                    title: "Chú ý",
                    message: `${res.message}! 🤥`,
                });
            }, 500);

            return;
        }

        if (res.statusCode === 200) {
            /// thong bao thanh cong
            /// dieu huong den trang job cua no

            setTimeout(() => {
                setVisible(false);
                open();
            }, 1000);

            return;
        }

        setVisible(false);
    };

    const handleGetTaskByJobId = async () => {
        const res = await jobSimulationService.getTaskByJobId(
            Number(job_simulation_id)
        );

        if (res.statusCode === 200) {
            setTasks(res.data.tasks);
        }
    };

    useEffect(() => {
        handleGetJobSimulationDetail();
        handleGetTaskByJobId();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {visible && (
                <Overlay
                    style={{
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                >
                    <div
                        style={{
                            width: "100%",
                            height: "100vh",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Loading />
                    </div>
                </Overlay>
            )}
            <Modal
                opened={opened}
                onClose={close}
                centered
                style={{ color: "rgb(40, 89, 182)" }}
            >
                <Stack>
                    <Center>
                        <IconCircleCheck size={40} />
                    </Center>
                    <Center>
                        <Text fw={500}>Bạn đã đăng ký thành thông </Text>
                    </Center>
                </Stack>
            </Modal>
            <Stack>
                <motion.div
                    style={{
                        backgroundImage: `url(${jobSimulation.job_simulation_thumnail})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "432px",
                        width: "100%",
                        position: "relative",
                        padding: "40px",
                    }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div
                        style={{
                            height: "100%",
                            width: "100%",
                            background: "rgba(0, 0, 0, 0.5)",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            zIndex: 1,
                        }}
                    />

                    <Box
                        style={{
                            position: "absolute",
                            top: "80px",
                            left: "80px",
                            zIndex: 20,
                            color: "#fff",
                        }}
                    >
                        <Stack>
                            <Group>
                                <Image
                                    src={jobSimulation.company_logo}
                                    w={200}
                                    h={40}
                                    fit="contain"
                                />
                                <Text size="24px" fw={700}>
                                    {jobSimulation.company_name}
                                </Text>
                            </Group>

                            <Text size="28px" fw={700}>
                                {jobSimulation.job_simulation_name}
                            </Text>

                            <Group gap={4}>
                                <IconTag size="16px" />
                                <Text size="16px">
                                    {jobSimulation.job_category_name}
                                </Text>
                            </Group>

                            <Group gap={4}>
                                <IconClockHour1 size="16px" />
                                <Text size="16px">
                                    {jobSimulation.job_simulation_time_spaced}
                                </Text>
                            </Group>

                            <Group gap={4}>
                                <IconReceipt2 size="16px" />
                                <Text size="16px">
                                    {jobSimulation.job_simulation_price > 0
                                        ? jobSimulation.job_simulation_price
                                        : "Miễn phí"}
                                </Text>
                            </Group>

                            <Button
                                w={200}
                                color="rgb(40, 89, 182)"
                                onClick={() => handleRegisterJob()}
                            >
                                Tham gia ngay
                            </Button>
                        </Stack>
                    </Box>
                </motion.div>

                <Box px={50}>
                    <Stack>
                        <Text size="20px" fw={700}>
                            Tại sao bạn nên chọn công việc này ?
                        </Text>

                        <Text>{jobSimulation.job_simulation_why_register}</Text>

                        <Text size="20px" fw={700}>
                            Mô tả công việc
                        </Text>
                        <Stack gap={0}>
                            <Text>
                                <ReadMore
                                    text={jobSimulation.job_simulation_des}
                                ></ReadMore>
                            </Text>
                        </Stack>

                        <Group justify="space-between">
                            <Stack style={{ flex: 1 }}>
                                <Image
                                    src={jobSimulation.company_logo}
                                    w={100}
                                    h={40}
                                    fit="contain"
                                />
                                <Text size="26px" fw={700}>
                                    Giới thiệu về công ty{" "}
                                    {jobSimulation.company_name}
                                </Text>
                            </Stack>
                            <Box
                                p={8}
                                w={611}
                                h={353}
                                style={{
                                    borderRadius: "8px",
                                    overflow: "hidden",
                                    boxShadow:
                                        "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                }}
                            >
                                <video
                                    src={jobSimulation.company_video_intro}
                                    style={{ width: "100%", height: "100%" }}
                                    controls
                                    loop
                                    muted
                                ></video>
                            </Box>
                        </Group>

                        <Text fw={700} size="20px">
                            Các nhiệm vụ cần hoàn thành
                        </Text>

                        <Box
                            p={8}
                            style={{
                                borderRadius: "8px",
                                overflow: "hidden",
                                boxShadow:
                                    "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                            }}
                        >
                            <Group h={560}>
                                <ScrollArea
                                    style={{ height: "100%" }}
                                    w={300}
                                    p={10}
                                >
                                    <Stack>
                                        {tasks.length > 0 &&
                                            tasks.map((item) => (
                                                <>
                                                    <Box
                                                        p={10}
                                                        style={{
                                                            borderRadius: "4px",
                                                            cursor: "pointer",
                                                            background:
                                                                seletectedTasks ===
                                                                item.task_number
                                                                    ? "rgb(223, 215, 215)"
                                                                    : "rgb(247, 247, 247)",
                                                        }}
                                                        onClick={() =>
                                                            setSeletectedTasks(
                                                                item.task_number
                                                            )
                                                        }
                                                    >
                                                        <Group>
                                                            <Button
                                                                style={{
                                                                    borderRadius:
                                                                        "50rem",
                                                                }}
                                                            >
                                                                {
                                                                    item.task_number
                                                                }
                                                            </Button>
                                                            <Text
                                                                size="20px"
                                                                fw={500}
                                                            >
                                                                Nhiệm vụ{" "}
                                                                {
                                                                    item.task_number
                                                                }
                                                            </Text>
                                                        </Group>
                                                    </Box>
                                                    <Divider variant="dashed" />
                                                </>
                                            ))}
                                    </Stack>
                                </ScrollArea>

                                <ScrollArea
                                    style={{ height: "100%", flex: 1 }}
                                    p={10}
                                >
                                    {tasks.length > 0 && (
                                        <Stack>
                                            <Text size="20px" fw={700}>
                                                Nhiệm vụ{" "}
                                                {
                                                    tasks[seletectedTasks - 1]
                                                        .task_number
                                                }
                                                .
                                                {
                                                    tasks[seletectedTasks - 1]
                                                        .task_name
                                                }
                                            </Text>

                                            <Group gap={4}>
                                                <IconClockHour1 size="16px" />
                                                <Text size="16px">
                                                    {
                                                        tasks[
                                                            seletectedTasks - 1
                                                        ].task_time_spaced
                                                    }
                                                </Text>
                                            </Group>

                                            <Group gap={4}>
                                                <IconBadge size="16px" />
                                                <Text size="16px">
                                                    {
                                                        tasks[
                                                            seletectedTasks - 1
                                                        ].task_level
                                                    }
                                                </Text>
                                            </Group>

                                            <Box style={{ width: "100%" }}>
                                                <TypographyStylesProvider>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: tasks[
                                                                seletectedTasks -
                                                                    1
                                                            ].task_des,
                                                            //     .task_des (
                                                            //     <ReadMore
                                                            //         text={
                                                            //             tasks[
                                                            //                 seletectedTasks -
                                                            //                     1
                                                            //             ]
                                                            //                 .task_des
                                                            //         }
                                                            //     ></ReadMore>
                                                            // ),
                                                        }}
                                                    />
                                                </TypographyStylesProvider>
                                            </Box>

                                            <Box
                                                bg="rgb(247, 247, 247)"
                                                p={10}
                                                style={{
                                                    borderRadius: "4px",
                                                }}
                                            >
                                                <Group>
                                                    <IconSchool size="20px" />
                                                    <Text size="18px" fw={700}>
                                                        Bạn sẽ học được gì ?
                                                    </Text>
                                                </Group>
                                                <TypographyStylesProvider>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: tasks[
                                                                seletectedTasks -
                                                                    1
                                                            ].task_what_learn,
                                                        }}
                                                    />
                                                </TypographyStylesProvider>
                                            </Box>

                                            <Box
                                                bg="rgb(247, 247, 247)"
                                                p={10}
                                                style={{
                                                    borderRadius: "4px",
                                                }}
                                            >
                                                <Group>
                                                    <IconFileCheck size="20px" />
                                                    <Text size="18px" fw={700}>
                                                        Bạn sẽ làm được gì ?
                                                    </Text>
                                                </Group>
                                                <TypographyStylesProvider>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: tasks[
                                                                seletectedTasks -
                                                                    1
                                                            ].task_what_do,
                                                        }}
                                                    />
                                                </TypographyStylesProvider>
                                            </Box>

                                            {tasks[seletectedTasks - 1]
                                                .task_video_intro && (
                                                <>
                                                    <Text>
                                                        Lời nhắn trước khi làm
                                                        nhiệm vụ
                                                    </Text>
                                                    <Box
                                                        p={8}
                                                        w={611}
                                                        h={353}
                                                        style={{
                                                            borderRadius: "8px",
                                                            overflow: "hidden",
                                                            boxShadow:
                                                                "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                                                        }}
                                                    >
                                                        <video
                                                            src={
                                                                tasks[
                                                                    seletectedTasks -
                                                                        1
                                                                ]
                                                                    .task_video_intro
                                                            }
                                                            style={{
                                                                width: "100%",
                                                                height: "100%",
                                                            }}
                                                            controls
                                                            loop
                                                            muted
                                                        ></video>
                                                    </Box>
                                                </>
                                            )}
                                        </Stack>
                                    )}
                                </ScrollArea>
                            </Group>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </>
    );
};
