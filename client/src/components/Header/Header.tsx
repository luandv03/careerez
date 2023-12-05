import { Link, NavLink } from "react-router-dom";
import {
    IconUserCircle,
    IconCertificate2,
    IconTrash,
    IconArrowsLeftRight,
    IconMenu2,
} from "@tabler/icons-react";
import { Menu, rem, Text, Group, Drawer, Divider, Stack } from "@mantine/core";
import { useContext } from "react";

import styles from "./Header.module.css";
import { AuthContext } from "../../providers/AuthProvider";
import { authService } from "../../services/auth.service";
import { useDisclosure } from "@mantine/hooks";

const listOptionHeaders = [
    {
        id: 1,
        title: "Trang chủ",
        link: "/",
    },
    { id: 2, title: "Về CareerEZ", link: "/about" },
    {
        id: 3,
        title: "Bài kiểm tra tính cách",
        link: "/personality_test",
    },
    {
        id: 4,
        title: "Tổng quan ngành nghề",
        link: "/career_overview",
    },
    {
        id: 5,
        title: "Trải nghiệm ngành nghề",
        link: "/internship_online",
    },
    {
        id: 6,
        title: "Đăng ký thành viên",
        link: "/member_register",
    },
    {
        id: 7,
        title: "FAQs",
        link: "/faqs",
    },
];

export const Header = () => {
    const [opened, { open, close }] = useDisclosure(false);
    const { profile, setProfile } = useContext(AuthContext);

    const handleLogout = async () => {
        // setLoading(true);
        const res = await authService.logout();
        // setLoading(false);
        if (res.statusCode === 200) {
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");

            setProfile({
                user_id: 0,
                email: "",
                username: "",
            });

            localStorage.removeItem("isAuthenticated");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.infor}>
                    <div className={styles.avatar}>
                        <Link to="/">
                            <img
                                src="https://static.wixstatic.com/media/c86370_86d29cfeaed8486ca1621d60382cac78~mv2.png/v1/crop/x_48,y_16,w_435,h_441/fill/w_122,h_123,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c86370_86d29cfeaed8486ca1621d60382cac78~mv2.png"
                                alt="logo_careerez"
                                loading="lazy"
                            />
                        </Link>
                    </div>
                    <div className={styles.name}>
                        <h2>CareerEZ</h2>
                        <p>Your path to success</p>
                    </div>
                </div>
                <div className={`${styles.authentication}`}>
                    {!profile.user_id ? (
                        <>
                            {" "}
                            <div className={styles.signup}>
                                <Link to="/signin">
                                    <button>
                                        <h4>Đăng ký</h4>
                                    </button>
                                </Link>
                            </div>
                            <div className={styles.signin}>
                                <Link to="/signin">
                                    <IconUserCircle size="40px" />
                                </Link>
                            </div>
                        </>
                    ) : (
                        <Menu trigger="hover" openDelay={100} closeDelay={400}>
                            <Menu.Target>
                                <Group gap={0}>
                                    <Text>{profile.username}</Text>
                                    <IconUserCircle size="40px" />
                                </Group>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item
                                    leftSection={
                                        <IconUserCircle
                                            style={{
                                                width: rem(14),
                                                height: rem(14),
                                            }}
                                        />
                                    }
                                >
                                    Thông tin cá nhân
                                </Menu.Item>
                                <Menu.Item
                                    leftSection={
                                        <IconCertificate2
                                            style={{
                                                width: rem(14),
                                                height: rem(14),
                                            }}
                                        />
                                    }
                                >
                                    Hoạt động
                                </Menu.Item>

                                <Menu.Divider />

                                <Menu.Item
                                    leftSection={
                                        <IconArrowsLeftRight
                                            style={{
                                                width: rem(14),
                                                height: rem(14),
                                            }}
                                        />
                                    }
                                >
                                    Chuyển tài khoản
                                </Menu.Item>
                                <Menu.Item
                                    color="red"
                                    leftSection={
                                        <IconTrash
                                            style={{
                                                width: rem(14),
                                                height: rem(14),
                                            }}
                                        />
                                    }
                                    onClick={() => handleLogout()}
                                >
                                    Đăng xuất
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    )}
                </div>

                <div className={`${styles.authenticationMobile}`}>
                    <IconMenu2 onClick={open} size={36} />
                </div>

                <Drawer
                    opened={opened}
                    onClose={close}
                    position="right"
                    style={{ color: "rgb(40, 89, 182)" }}
                >
                    {!profile.user_id ? (
                        <Group justify="center">
                            <div className={styles.signup}>
                                <Link to="/signin">
                                    <button>
                                        <h4>Đăng ký</h4>
                                    </button>
                                </Link>
                            </div>
                            <div className={styles.signin}>
                                <Link to="/signin">
                                    <IconUserCircle size="40px" />
                                </Link>
                            </div>
                        </Group>
                    ) : (
                        <Menu trigger="hover" openDelay={100} closeDelay={400}>
                            <Menu.Target>
                                <Group gap={0} justify="center">
                                    <Text>{profile.username}</Text>
                                    <IconUserCircle size="40px" />
                                </Group>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item
                                    leftSection={
                                        <IconUserCircle
                                            style={{
                                                width: rem(14),
                                                height: rem(14),
                                            }}
                                        />
                                    }
                                >
                                    Thông tin cá nhân
                                </Menu.Item>
                                <Menu.Item
                                    leftSection={
                                        <IconCertificate2
                                            style={{
                                                width: rem(14),
                                                height: rem(14),
                                            }}
                                        />
                                    }
                                >
                                    Hoạt động
                                </Menu.Item>

                                <Menu.Divider />

                                <Menu.Item
                                    leftSection={
                                        <IconArrowsLeftRight
                                            style={{
                                                width: rem(14),
                                                height: rem(14),
                                            }}
                                        />
                                    }
                                >
                                    Chuyển tài khoản
                                </Menu.Item>
                                <Menu.Item
                                    color="red"
                                    leftSection={
                                        <IconTrash
                                            style={{
                                                width: rem(14),
                                                height: rem(14),
                                            }}
                                        />
                                    }
                                    onClick={() => handleLogout()}
                                >
                                    Đăng xuất
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    )}

                    <Divider></Divider>

                    <Stack>
                        {listOptionHeaders.map((item) => (
                            <>
                                <NavLink
                                    to={item.link}
                                    className={({ isActive, isPending }) =>
                                        isPending
                                            ? styles.pending
                                            : isActive
                                            ? styles.active
                                            : ""
                                    }
                                >
                                    <h4>{item.title}</h4>
                                </NavLink>
                                <Divider></Divider>
                            </>
                        ))}
                    </Stack>
                </Drawer>
            </div>
            <div className={styles.footer}>
                <ul className={styles.menu}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? styles.pending
                                    : isActive
                                    ? styles.active
                                    : ""
                            }
                        >
                            <h4>Trang chủ</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? styles.pending
                                    : isActive
                                    ? styles.active
                                    : ""
                            }
                        >
                            <h4>Về CareerEZ</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/personality_test"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? styles.pending
                                    : isActive
                                    ? styles.active
                                    : ""
                            }
                        >
                            <h4>Bài kiểm tra tính cách</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/career_overview"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? styles.pending
                                    : isActive
                                    ? styles.active
                                    : ""
                            }
                        >
                            <h4>Tổng quan ngành nghề</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/internship_online"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? styles.pending
                                    : isActive
                                    ? styles.active
                                    : ""
                            }
                        >
                            <h4>Trải nghiệm ngành nghề</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/member_register"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? styles.pending
                                    : isActive
                                    ? styles.active
                                    : ""
                            }
                        >
                            <h4>Đăng ký thành viên</h4>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/faqs"
                            className={({ isActive, isPending }) =>
                                isPending
                                    ? styles.pending
                                    : isActive
                                    ? styles.active
                                    : ""
                            }
                        >
                            <h4>FAQs</h4>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};
