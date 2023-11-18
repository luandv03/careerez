import {
    Stack,
    Box,
    Image,
    Group,
    Text,
    Button,
    Divider,
    ScrollArea,
    List,
} from "@mantine/core";
import {
    IconTag,
    IconClockHour1,
    IconReceipt2,
    IconBadge,
    IconSchool,
    IconFileCheck,
} from "@tabler/icons-react";
import { ReadMore } from "../ReadMore";

const JOB_DETAIL_INIT = {
    job_simulation_id: 1,
    company_logo:
        "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700277137/careerez/google_logo_labso4.png",
    company_name: "Google",
    company_video_intro: "",
    job_simulation_price: 0,
    job_simulation_name: "Back-End Engineering",
    job_simulation_category: "Software Engineer",
    job_simulation_thumnail:
        "https://cdn.theforage.com/vinternships/companyassets/prBZoAihniNijyD6d/CSN4y3ePwJCyRZTtj/1631126862718/Homepage%20Hero%20%E2%80%93%204%20R1.jpg",
    job_simulation_time_spaced: "3-4 giờ",
    job_simulation_des:
        "A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications. A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications. A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications. A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications. A risk-free way to experience work on the job. Practice your skills with example tasks and build your confidence to ace your applications.",
    job_simulation_why_register:
        "Được học miễn phí, trải nghiệm kiến thức thực tế khi đi làm từ các chuyên từ các công ty hàng đầu về Công nghệ",
};

export const JobSimulation = () => {
    return (
        <Stack>
            <div
                style={{
                    backgroundImage: `url(${JOB_DETAIL_INIT.job_simulation_thumnail})`,
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
                                src={JOB_DETAIL_INIT.company_logo}
                                w={200}
                                h={40}
                                fit="contain"
                            />
                            <Text size="24px" fw={700}>
                                {JOB_DETAIL_INIT.company_name}
                            </Text>
                        </Group>

                        <Text size="28px" fw={700}>
                            {JOB_DETAIL_INIT.job_simulation_name}
                        </Text>

                        <Group gap={4}>
                            <IconTag size="16px" />
                            <Text size="16px">
                                {JOB_DETAIL_INIT.job_simulation_category}
                            </Text>
                        </Group>

                        <Group gap={4}>
                            <IconClockHour1 size="16px" />
                            <Text size="16px">
                                {JOB_DETAIL_INIT.job_simulation_time_spaced}
                            </Text>
                        </Group>

                        <Group gap={4}>
                            <IconReceipt2 size="16px" />
                            <Text size="16px">
                                {JOB_DETAIL_INIT.job_simulation_price > 0
                                    ? JOB_DETAIL_INIT.job_simulation_price
                                    : "Miễn phí"}
                            </Text>
                        </Group>

                        <Button color="rgb(40, 89, 182)">Tham gia ngay</Button>
                    </Stack>
                </Box>
            </div>

            <Box px={50}>
                <Stack>
                    <Text size="20px" fw={700}>
                        Tại sao bạn nên chọn công việc này ?
                    </Text>

                    <Text>{JOB_DETAIL_INIT.job_simulation_why_register}</Text>

                    <Text size="20px" fw={700}>
                        Mô tả công việc
                    </Text>
                    <Stack gap={0}>
                        <Text>
                            <ReadMore
                                text={JOB_DETAIL_INIT.job_simulation_des}
                            ></ReadMore>
                        </Text>
                    </Stack>

                    <Group justify="space-between">
                        <Stack>
                            <Image
                                src={JOB_DETAIL_INIT.company_logo}
                                w={100}
                                h={40}
                                fit="contain"
                            />
                            <Text size="26px" fw={700}>
                                Giới thiệu về công ty{" "}
                                {JOB_DETAIL_INIT.company_name}
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
                                src="https://res.cloudinary.com/codelife/video/upload/v1637805738/intro_l5ul1k.mp4"
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
                                    {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                        <>
                                            <Box
                                                bg="rgb(247, 247, 247)"
                                                p={10}
                                                style={{
                                                    borderRadius: "4px",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <Group>
                                                    <Button
                                                        style={{
                                                            borderRadius:
                                                                "50rem",
                                                        }}
                                                    >
                                                        {item}
                                                    </Button>
                                                    <Text size="20px" fw={500}>
                                                        Nhiệm vụ {item}
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
                                <Stack>
                                    <Text size="20px" fw={700}>
                                        Nhiệm vụ 1. Tìm hiểu cơ bản về giao thức
                                        HTTP và xây dựng server với Nodejs
                                    </Text>

                                    <Group gap={4}>
                                        <IconClockHour1 size="16px" />
                                        <Text size="16px">1-2 giờ</Text>
                                    </Group>

                                    <Group gap={4}>
                                        <IconBadge size="16px" />
                                        <Text size="16px">Trung bình</Text>
                                    </Group>

                                    <Box style={{ width: "100%" }}>
                                        <ReadMore
                                            text={
                                                JOB_DETAIL_INIT.job_simulation_des
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
                                            <Text size="18px" fw={700}>
                                                Bạn sẽ học được gì ?
                                            </Text>
                                        </Group>
                                        <List pl={20}>
                                            <List.Item>
                                                Clone or download repository
                                                from GitHub
                                            </List.Item>
                                            <List.Item>
                                                Install dependencies with yarn
                                            </List.Item>
                                            <List.Item>
                                                To start development server run
                                                npm start command
                                            </List.Item>
                                            <List.Item>
                                                Run tests to make sure your
                                                changes do not break the build
                                            </List.Item>
                                            <List.Item>
                                                Submit a pull request once you
                                                are done
                                            </List.Item>
                                        </List>
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
                                        <List pl={20}>
                                            <List.Item>
                                                Clone or download repository
                                                from GitHub
                                            </List.Item>
                                            <List.Item>
                                                Install dependencies with yarn
                                            </List.Item>
                                            <List.Item>
                                                To start development server run
                                                npm start command
                                            </List.Item>
                                            <List.Item>
                                                Run tests to make sure your
                                                changes do not break the build
                                            </List.Item>
                                            <List.Item>
                                                Submit a pull request once you
                                                are done
                                            </List.Item>
                                        </List>
                                    </Box>
                                </Stack>
                            </ScrollArea>
                        </Group>
                    </Box>
                </Stack>
            </Box>
        </Stack>
    );
};
