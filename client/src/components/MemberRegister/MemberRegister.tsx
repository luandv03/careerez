import {
    Box,
    Center,
    Grid,
    Stack,
    Text,
    List,
    Button,
    Overlay,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

import classes from "./MemberRegister.module.css";
import { createWindow } from "../../helpers/createWindow";
import { BASE_URL_API } from "../../configs/server.config";

export const MemberRegister = () => {
    const navigate = useNavigate();

    const handleRegsiterService = (amount: number, orderId: string) => {
        // check login
        if (!JSON.parse(localStorage.getItem("isAuthenticated") as string)) {
            navigate("/signin");
            return;
        }

        createWindow(
            `${BASE_URL_API}/payment/momo?amount=${amount}&order_id=${orderId}`,
            "_self",
            800,
            800
        );
    };

    return (
        <Stack p={50}>
            <Center>
                <Text fw={700} size="30px">
                    ĐĂNG KÍ THÀNH VIÊN
                </Text>
            </Center>
            <Center>
                <Text fw={500} size="20px" align="center">
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
                                            1.000/Tháng
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
                                                1000,
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
                                            2.000/Tháng
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
                                            handleRegsiterService(3000, "2023B")
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
                                            3.000/Tháng
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
                                            handleRegsiterService(1000, "2023C")
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
