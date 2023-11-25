import { useGoogleLogin } from "@react-oauth/google";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
    TextInput,
    PasswordInput,
    Paper,
    Group,
    Button,
    Divider,
    Checkbox,
    Anchor,
    Stack,
    Center,
} from "@mantine/core";

import styles from "./Signin.module.css";
import { authService } from "../../services/auth.service";
import { AuthContext } from "../../providers/AuthProvider";

export const Signin = () => {
    const [type, toggle] = useToggle(["login", "register"]);
    const form = useForm({
        initialValues: {
            email: "",
            name: "",
            password: "",
            terms: true,
        },

        validate: {
            email: (val: string) =>
                /^\S+@\S+$/.test(val) ? null : "Invalid email",
            password: (val: string) =>
                val.length <= 8 ? "Mật khẩu phải có tối thiểu 6 ký tự" : null,
        },
    });
    const { setProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            // const res = await axios.post(
            //     "http://localhost:5000/api/v1/auth/google",
            //     { token: credentialResponse.access_token }
            // );
            const res = await authService.loginWithGoogle(
                credentialResponse.access_token
            );

            if (res.statusCode === 200) {
                localStorage.setItem("access_token", res.data.access_token);
                localStorage.setItem("refresh_token", res.data.refresh_token);

                const response = await authService.getProfile();
                setProfile(response.data);
                localStorage.setItem("isAuthenticated", "true");
                navigate("/");
            }
        },
        flow: "implicit",
    });

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Center>
                    <h1>Đăng nhập</h1>
                </Center>
                <Center>
                    {" "}
                    <div className={styles.google}>
                        <button onClick={() => login()}>
                            <div>
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="18px"
                                    stroke-width="0"
                                    viewBox="0 0 18 18"
                                    width="18px"
                                    aria-hidden="true"
                                    role="img"
                                    focusable="false"
                                    aria-label="Google"
                                >
                                    <g fill="none" fill-rule="evenodd">
                                        <path
                                            d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z"
                                            fill="#EA4335"
                                        ></path>
                                        <path
                                            d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z"
                                            fill="#4285F4"
                                        ></path>
                                        <path
                                            d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z"
                                            fill="#FBBC05"
                                        ></path>
                                        <path
                                            d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z"
                                            fill="#34A853"
                                        ></path>
                                        <path d="M0 0h18v18H0V0z"></path>
                                    </g>
                                </svg>
                            </div>
                            <p>Đăng nhập với Google</p>
                        </button>
                    </div>
                </Center>

                <Center>
                    <Paper radius="md" p="xl">
                        <Divider
                            label="Hoặc tiếp tục với email"
                            labelPosition="center"
                            my="lg"
                        />

                        <form onSubmit={form.onSubmit(() => {})}>
                            <Stack>
                                {type === "register" && (
                                    <TextInput
                                        label="Tên người dùng"
                                        placeholder="Nguyễn Văn A"
                                        value={form.values.name}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                "name",
                                                event.currentTarget.value
                                            )
                                        }
                                        radius="md"
                                    />
                                )}

                                <TextInput
                                    required
                                    label="Email"
                                    placeholder="hello@career.com"
                                    value={form.values.email}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            "email",
                                            event.currentTarget.value
                                        )
                                    }
                                    error={form.errors.email && "Invalid email"}
                                    radius="md"
                                />

                                <PasswordInput
                                    required
                                    label="Mật khẩu"
                                    placeholder="abcd@123"
                                    value={form.values.password}
                                    onChange={(event) =>
                                        form.setFieldValue(
                                            "password",
                                            event.currentTarget.value
                                        )
                                    }
                                    error={
                                        form.errors.password &&
                                        "Mật khẩu phải có tối thiểu 6 ký tự"
                                    }
                                    radius="md"
                                />

                                {type === "register" && (
                                    <Checkbox
                                        label="Tôi chấp nhận các điều khoản và điều kiện"
                                        checked={form.values.terms}
                                        onChange={(event) =>
                                            form.setFieldValue(
                                                "terms",
                                                event.currentTarget.checked
                                            )
                                        }
                                    />
                                )}
                            </Stack>

                            <Group justify="space-between" mt="xl">
                                <Anchor
                                    component="button"
                                    type="button"
                                    c="dimmed"
                                    onClick={() => toggle()}
                                    size="xs"
                                >
                                    {type === "register"
                                        ? "Bạn đã có tài khoản? Đăng nhập"
                                        : "Bạn đã có tài khoản chưa? Đăng ký"}
                                </Anchor>
                                <Button type="submit" radius="xl">
                                    {upperFirst(
                                        type === "register"
                                            ? "Đăng ký"
                                            : "Đăng nhập"
                                    )}
                                </Button>
                            </Group>
                        </form>
                    </Paper>
                </Center>
            </div>
        </div>
    );
};
