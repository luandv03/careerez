import {
    Group,
    ScrollArea,
    Stack,
    Button,
    Divider,
    TypographyStylesProvider,
    Box,
    Text,
    Tabs,
    Image,
    Pagination,
    Center,
} from "@mantine/core";
import {
    IconClockHour1,
    IconBadge,
    IconSchool,
    IconFileCheck,
    IconStack2,
    IconCalendarWeek,
    IconTag,
    IconReceipt2,
} from "@tabler/icons-react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";

import { ReadMore } from "../ReadMore";
import { jobSimulationService } from "../../services/job_simulation.service";
import { JobSimulation } from "../JobSimualtion";
import { Requirement } from "../Requirement";
import { Loading } from "../Loading";

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
    number_of_requirement: number;
}

const JOB_DETAIL_INIT = {
    job_simulation_id: 0,
    company_logo:
        "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700277137/careerez/google_logo_labso4.png",
    company_name: "Google",
    status: null,
    company_video_intro: "",
    job_simulation_price: 0,
    job_simulation_name: "Back-End Engineering",
    job_category_name: "Software Engineer",
    job_simulation_thumnail:
        "https://cdn.theforage.com/vinternships/companyassets/prBZoAihniNijyD6d/CSN4y3ePwJCyRZTtj/1631126862718/Homepage%20Hero%20%E2%80%93%204%20R1.jpg",
    job_simulation_time_spaced: "3-4 giờ",
    job_simulation_des:
        "A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications. A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications. A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications. A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications. A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications.",
    job_simulation_why_register:
        "Được học miễn phí, trải nghiệm kiến thức thực tế khi đi làm từ các chuyên từ các công ty hàng đầu về Công nghệ",
};

export const JobSimulationUser = () => {
    const [jobSimulation, setJobSimulation] = useState(JOB_DETAIL_INIT);
    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [seletectedTasks, setSeletectedTasks] = useState(1);
    const { job_simulation_id } = useParams();
    const [pageNumber, setPageNumber] = useState(1);
    const [requirement, setRequirement] = useState({
        requirement_id: 0,
        requirement_name: "",
        requirement_des: "",
    });
    const [loading, setLoading] = useState(false);

    const handleGetJobSimulationDetail = async () => {
        const res =
            await jobSimulationService.getJobSimulationDetailByIdAndUserId(
                Number(job_simulation_id)
            );

        if (res.statusCode === 200) {
            setJobSimulation(res.data.job_simulation);
        }
    };

    const handleGetTaskByJobId = async () => {
        const res = await jobSimulationService.getTaskByJobId(
            Number(job_simulation_id)
        );

        if (res.statusCode === 200) {
            setTasks(res.data.tasks);
        }
    };

    const handleSeletectTask = (taskNumber: number) => {
        setSeletectedTasks(taskNumber);
        setPageNumber(1);
    };

    const handleChangeTaskRequirement = async (
        taskId: number,
        pageNumber: number
    ) => {
        if (pageNumber === 1) return setPageNumber(pageNumber);

        setLoading(true);
        const res = await jobSimulationService.getTaskRequirement(
            Number(job_simulation_id),
            taskId,
            pageNumber - 1
        );
        setLoading(false);

        if (res.statusCode === 200) {
            setPageNumber(pageNumber);
            return setRequirement(res.data.requirement);
        }

        notifications.show({
            message: res.message,
        });
    };

    useEffect(() => {
        handleGetJobSimulationDetail();
        handleGetTaskByJobId();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {jobSimulation.status !== "0" ? (
                <Box
                    p={8}
                    style={{
                        borderRadius: "8px",
                        overflow: "hidden",
                        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                    }}
                >
                    <Tabs defaultValue="gallery">
                        <Tabs.List>
                            <Tabs.Tab
                                value="gallery"
                                leftSection={<IconCalendarWeek />}
                            >
                                <Text size="18px" fw={500}>
                                    Tổng quan
                                </Text>
                            </Tabs.Tab>
                            <Tabs.Tab
                                value="messages"
                                leftSection={<IconStack2 />}
                            >
                                <Text size="18px" fw={500}>
                                    Nhiệm vụ
                                </Text>
                            </Tabs.Tab>
                        </Tabs.List>

                        <Tabs.Panel value="gallery">
                            <div
                                style={{
                                    backgroundImage: `url(${jobSimulation.job_simulation_thumnail})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    height: "432px",
                                    width: "100%",
                                    position: "relative",
                                    padding: "40px",
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
                                                {
                                                    jobSimulation.job_category_name
                                                }
                                            </Text>
                                        </Group>

                                        <Group gap={4}>
                                            <IconClockHour1 size="16px" />
                                            <Text size="16px">
                                                {
                                                    jobSimulation.job_simulation_time_spaced
                                                }
                                            </Text>
                                        </Group>

                                        <Group gap={4}>
                                            <IconReceipt2 size="16px" />
                                            <Text size="16px">
                                                {jobSimulation.job_simulation_price >
                                                0
                                                    ? jobSimulation.job_simulation_price
                                                    : "Miễn phí"}
                                            </Text>
                                        </Group>

                                        <Group gap={4}>
                                            <IconSchool size="16px" />
                                            <Text size="16px">
                                                {jobSimulation.status === "1"
                                                    ? "Đang làm"
                                                    : "Đã hoàn thành"}
                                            </Text>
                                        </Group>
                                    </Stack>
                                </Box>
                            </div>
                            <Box p={50}>
                                <Stack>
                                    <Text size="20px" fw={700}>
                                        Tại sao bạn nên chọn công việc này ?
                                    </Text>

                                    <Text>
                                        {
                                            jobSimulation.job_simulation_why_register
                                        }
                                    </Text>

                                    <Text size="20px" fw={700}>
                                        Mô tả công việc
                                    </Text>
                                    <Stack gap={0}>
                                        <Text>
                                            <ReadMore
                                                text={
                                                    jobSimulation.job_simulation_des
                                                }
                                            ></ReadMore>
                                        </Text>
                                    </Stack>

                                    <Group justify="space-between">
                                        <Stack>
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
                                                src={
                                                    jobSimulation.company_video_intro
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
                                    </Group>
                                </Stack>
                            </Box>
                        </Tabs.Panel>

                        <Tabs.Panel value="messages">
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
                                                            handleSeletectTask(
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
                                            <Group justify="space-between">
                                                <Text size="20px" fw={700}>
                                                    Nhiệm vụ{" "}
                                                    {
                                                        tasks[
                                                            seletectedTasks - 1
                                                        ].task_number
                                                    }
                                                    .
                                                    {
                                                        tasks[
                                                            seletectedTasks - 1
                                                        ].task_name
                                                    }
                                                </Text>

                                                <Pagination
                                                    total={
                                                        Number(
                                                            tasks[
                                                                seletectedTasks -
                                                                    1
                                                            ]
                                                                .number_of_requirement
                                                        ) + 1
                                                    }
                                                    value={pageNumber}
                                                    onChange={
                                                        (value) =>
                                                            handleChangeTaskRequirement(
                                                                tasks[
                                                                    seletectedTasks -
                                                                        1
                                                                ].task_id,
                                                                value
                                                            )
                                                        // setPageNumber(value)
                                                    }
                                                />
                                            </Group>
                                            <Divider my="sm" />

                                            {pageNumber == 1 ? (
                                                <>
                                                    <Group gap={4}>
                                                        <IconClockHour1 size="16px" />
                                                        <Text size="16px">
                                                            {
                                                                tasks[
                                                                    seletectedTasks -
                                                                        1
                                                                ]
                                                                    .task_time_spaced
                                                            }
                                                        </Text>
                                                    </Group>

                                                    <Group gap={4}>
                                                        <IconBadge size="16px" />
                                                        <Text size="16px">
                                                            {
                                                                tasks[
                                                                    seletectedTasks -
                                                                        1
                                                                ].task_level
                                                            }
                                                        </Text>
                                                    </Group>

                                                    <Box
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    >
                                                        <ReadMore
                                                            text={
                                                                tasks[
                                                                    seletectedTasks -
                                                                        1
                                                                ].task_des
                                                            }
                                                        ></ReadMore>
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
                                                            <Text
                                                                size="18px"
                                                                fw={700}
                                                            >
                                                                Bạn sẽ học được
                                                                gì ?
                                                            </Text>
                                                        </Group>
                                                        <TypographyStylesProvider>
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: tasks[
                                                                        seletectedTasks -
                                                                            1
                                                                    ]
                                                                        .task_what_learn,
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
                                                            <Text
                                                                size="18px"
                                                                fw={700}
                                                            >
                                                                Bạn sẽ làm được
                                                                gì ?
                                                            </Text>
                                                        </Group>
                                                        <TypographyStylesProvider>
                                                            <div
                                                                dangerouslySetInnerHTML={{
                                                                    __html: tasks[
                                                                        seletectedTasks -
                                                                            1
                                                                    ]
                                                                        .task_what_do,
                                                                }}
                                                            />
                                                        </TypographyStylesProvider>
                                                    </Box>

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
                                            ) : loading ? (
                                                <Center
                                                    style={{
                                                        background:
                                                            "rgba(0, 0, 0, 0.5)",
                                                    }}
                                                    h={400}
                                                >
                                                    <Loading />
                                                </Center>
                                            ) : (
                                                <Requirement
                                                    requirement={requirement}
                                                />
                                            )}
                                        </Stack>
                                    )}
                                </ScrollArea>
                            </Group>
                        </Tabs.Panel>
                    </Tabs>
                </Box>
            ) : (
                <JobSimulation />
            )}
        </>
    );
};
