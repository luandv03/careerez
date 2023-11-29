import {
    Box,
    Center,
    Grid,
    Stack,
    Text,
    List,
    Button,
    Overlay,
    Modal,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IconCircleCheck } from "@tabler/icons-react";

import classes from "./MemberRegister.module.css";
import { createWindow } from "../../helpers/createWindow";
import { BASE_URL_API } from "../../configs/server.config";
import { Loading } from "../Loading";
import { ModalPackService } from "../ModalPackService";
import { jobSimulationService } from "../../services/job_simulation.service";

export const MemberRegister = () => {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [opened, { open, close }] = useDisclosure(false);
    const [openedJob, { open: openJob, close: closeJob }] =
        useDisclosure(false);
    const [userBuyServicePackId, setUserBuyServicePackId] = useState(0);

    const handleRegsiterService = async (
        servicePackId: number,
        amount: number,
        orderId: string
    ) => {
        // check login

        if (!JSON.parse(localStorage.getItem("isAuthenticated") as string)) {
            navigate("/signin");
            return;
        }

        if (amount == 0) {
            setVisible(true);

            const res = await jobSimulationService.registerPackService(
                servicePackId
            );

            if (res.statusCode === 200) {
                setUserBuyServicePackId(
                    res.data.user_buy_service_pack.user_buy_service_pack_id
                );
            }

            setTimeout(() => {
                setVisible(false);
                open();

                setTimeout(() => {
                    close();

                    setTimeout(() => {
                        openJob();
                    }, 500);
                }, 500);
            }, 500);
        } else {
            setVisible(true);
            orderId += Date.now();
            // amount = amount / 100;

            let timer: ReturnType<typeof setTimeout> | null = null;

            // remove user_buy_service_pack_id cũ
            localStorage.removeItem("user_buy_service_pack_id");

            const windowPayment = createWindow(
                `${BASE_URL_API}/payment/momo?amount=${amount}&order_id=${orderId}&service_pack_id=${servicePackId}`,
                "_blank",
                800,
                800
            );

            if (windowPayment) {
                timer = setInterval(async () => {
                    if (windowPayment.closed) {
                        const user_buy_service_pack_id = JSON.parse(
                            localStorage.getItem(
                                "user_buy_service_pack_id"
                            ) as string
                        );

                        if (user_buy_service_pack_id) {
                            setUserBuyServicePackId(user_buy_service_pack_id);

                            setTimeout(() => {
                                setVisible(false);
                                open();

                                setTimeout(() => {
                                    close();

                                    setTimeout(() => {
                                        openJob();
                                    }, 500);
                                }, 500);
                            }, 500);
                        }
                        setVisible(false);

                        if (timer) clearInterval(timer);
                    }
                }, 500);
            }
        }
    };

    return (
        <Stack p={50}>
            <ModalPackService
                openedJob={openedJob}
                closeJob={closeJob}
                userBuyServicePackId={userBuyServicePackId}
            />
            {/* <Button onClick={openJob}>Mo modal</Button> */}
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
            <Center>
                <Text fw={700} size="30px">
                    ĐĂNG KÍ THÀNH VIÊN
                </Text>
            </Center>
            <Center>
                <Text fw={500} size="20px" style={{ textAlign: "center" }}>
                    Đăng kí thành viên là cách tốt nhất để bạn trải nghiệm toàn
                    bộ nền tảng của chúng tôi và nhận được nhiều ưu đãi độc
                    quyền. Hãy cùng CareerEZ hướng đến sự phát triển cá nhân và
                    nghề nghiệp tốt hơn.
                </Text>
            </Center>

            <Center>
                <Grid style={{ width: "100%" }} gutter="xl" p={50}>
                    <Grid.Col span={4} h={600}>
                        <Box
                            h={500}
                            style={{
                                width: "100%",
                                borderRadius: "17px",
                            }}
                            p={20}
                            className={classes.packageService}
                        >
                            <Stack
                                justify="space-between"
                                style={{ height: "100%", width: "100%" }}
                            >
                                <Stack style={{ width: "100%" }}>
                                    <Center>
                                        <Text fw={700} size="20px">
                                            GÓI CƠ BẢN
                                        </Text>
                                    </Center>
                                    <Center>
                                        <Text
                                            fw={700}
                                            size="20px"
                                            color="rgb(255,222,89)"
                                        >
                                            Miễn phí
                                        </Text>
                                    </Center>
                                    <List>
                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Chọn 1 nhóm ngành
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Chọn 1 công ty theo đúng nhóm
                                                ngành đó
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Được tham gia các nhiệm vụ cơ
                                                bản
                                            </Text>
                                        </List.Item>
                                    </List>
                                </Stack>

                                <Center>
                                    <Button
                                        w={200}
                                        className={classes.btnRegister}
                                        onClick={() =>
                                            handleRegsiterService(
                                                1,
                                                0,
                                                "2023A1"
                                            )
                                        }
                                    >
                                        <Text>Đăng ký</Text>
                                    </Button>
                                </Center>
                            </Stack>
                        </Box>
                    </Grid.Col>

                    <Grid.Col span={4} h={600}>
                        <Box
                            h={500}
                            style={{
                                width: "100%",
                                borderRadius: "17px",
                            }}
                            p={20}
                            className={classes.packageService}
                        >
                            <Stack
                                justify="space-between"
                                style={{ height: "100%", width: "100%" }}
                            >
                                <Stack style={{ width: "100%" }}>
                                    <Center>
                                        <Text fw={700} size="20px">
                                            GÓI NÂNG CAO
                                        </Text>
                                    </Center>
                                    <Center>
                                        <Text
                                            fw={700}
                                            size="20px"
                                            color="rgb(255,222,89)"
                                        >
                                            999K
                                        </Text>
                                    </Center>
                                    <List>
                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Chọn 1 nhóm ngành
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Chọn 2 công ty theo đúng nhóm
                                                ngành đó
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Được tham gia toàn bộ các nhiệm
                                                vụ với sự hướng dẫn của mentor
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Được giấy chứng nhận khi hoàn
                                                thành các nhiệm vụ
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Được tham gia miễn phí các
                                                workshop của chuyên gia hàng
                                                tháng
                                            </Text>
                                        </List.Item>
                                    </List>
                                </Stack>

                                <Center>
                                    <Button
                                        w={200}
                                        className={classes.btnRegister}
                                        onClick={() =>
                                            handleRegsiterService(
                                                2,
                                                999000,
                                                "2023A2"
                                            )
                                        }
                                    >
                                        <Text>Đăng ký</Text>
                                    </Button>
                                </Center>
                            </Stack>
                        </Box>
                    </Grid.Col>

                    <Grid.Col span={4} h={600}>
                        <Box
                            h={500}
                            style={{
                                width: "100%",
                                borderRadius: "17px",
                            }}
                            className={classes.packageService}
                            p={20}
                        >
                            <Stack
                                justify="space-between"
                                style={{ height: "100%", width: "100%" }}
                            >
                                <Stack style={{ width: "100%" }}>
                                    <Center>
                                        <Text fw={700} size="20px">
                                            GÓI ĐẶC BIỆT
                                        </Text>
                                    </Center>
                                    <Center>
                                        <Text
                                            fw={700}
                                            size="20px"
                                            color="rgb(255,222,89)"
                                        >
                                            3.000K
                                        </Text>
                                    </Center>
                                    <List>
                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Chọn 2 nhóm ngành
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Chọn 2 công ty theo đúng nhóm
                                                ngành đó
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Được tham gia toàn bộ các nhiệm
                                                vụ với sự hướng dẫn 1:1 của
                                                mentor
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Được nhận thư giới thiệu từ
                                                chuyên gia của công ty khi hoàn
                                                thành
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Được giấy chứng nhận khi hoàn
                                                thành các nhiệm vụ
                                            </Text>
                                        </List.Item>

                                        <List.Item>
                                            <Text fw={500} size="18px">
                                                Được tham gia miễn phí các
                                                workshop của chuyên gia hàng
                                                tháng
                                            </Text>
                                        </List.Item>
                                    </List>
                                </Stack>

                                <Center>
                                    <Button
                                        w={200}
                                        className={classes.btnRegister}
                                        onClick={() =>
                                            handleRegsiterService(
                                                3,
                                                3000000,
                                                "2023A3"
                                            )
                                        }
                                    >
                                        <Text>Đăng ký</Text>
                                    </Button>
                                </Center>
                            </Stack>
                        </Box>
                    </Grid.Col>
                </Grid>
            </Center>
        </Stack>
    );
};
