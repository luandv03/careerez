import { motion } from "framer-motion";
import { Box, List, Stack, Text } from "@mantine/core";

import styles from "./OverviewCareerDetail.module.css";

const CAREER_POSITION = [
    "Nhà khoa học dữ liệu",
    "Nhà phân tích dữ liệu",
    "Kiến trúc sư dữ liệu",
    "Nhà phân tích kinh doanh",
    "Kỹ sư dữ liệu",
    "Quản trị viên cơ sở dữ liệu",
    "Nhà thống kê",
    "Trình quản lý dữ liệu và phân tích",
    "Nhà phát triển Business Intelligence",
    "Kỹ sư trí tuệ nhân tạo",
    "Kỹ sư Machine Learning",
    "Nhà khoa học Robot",
];

const SKILLS = [
    "Tư duy phản biện",
    "Data Visualization",
    "Kỹ năng lập trình",
    "Kỹ năng thống kê",
    "Kỹ năng làm việc với dữ liệu phi cấu trúc",
    "Kỹ năng thuyết trình",
];

export const OverviewCareerDetail = () => {
    return (
        <div className={styles.container}>
            <motion.div
                className={styles.avatar}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
            >
                <img
                    src="https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700848728/Analysing_data_k2ntrr.webp"
                    alt="Avatar Career Experience"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Khoa học dữ liệu và AI</h1>
                </div>
            </motion.div>

            <Box p={50}>
                <Stack gap={10}>
                    <Stack gap={4}>
                        <Text size="20px" fw={700}>
                            Giới thiệu chung
                        </Text>

                        <Stack gap={6}>
                            <Text>
                                Khoa học dữ liệu (DS - Data Science): Bằng việc
                                sử dụng và kết hợp những kỹ năng như thống kê,
                                toán học cũng như kỹ năng máy tính để tiến hành
                                đi vào nghiên cứu, phân tích những dữ liệu được
                                thu thập, từ đó, mô phỏng được các tình huống đã
                                hoặc đang xảy ra.
                            </Text>
                            <Text>
                                Trí tuệ nhân tạo (AI - Artificial Intelligence)
                                được định nghĩa là ngành học thông qua việc sử
                                dụng những thuật toán trên máy tính, kết hợp với
                                kỹ thuật và công nghệ hiện đại liên quan với mục
                                đích tạo ra những sản phẩm có khả năng mô phỏng
                                tư duy, hành động và trí thông minh của con
                                người một cách chân thực nhất.
                            </Text>
                            <Text>
                                2 lĩnh vực khoa học dữ liệu và trí tuệ nhân tạo
                                khi được kết hợp cùng với nhau sẽ giúp hỗ trợ
                                cho hệ thống sản xuất hoạt động hiệu quả hơn,
                                nâng cao năng suất làm việc. Kèm theo đó, nguồn
                                nhân lực cũng cần đáp ứng trình độ kỹ thuật cao,
                                kỹ năng chuyên môn chuyên sâu trong việc thiết
                                kế những công trình cho các hệ thống khai thác,
                                phân tích và xử lý dữ liệu và hệ thống trí tuệ
                                nhân tạo.
                            </Text>
                        </Stack>
                    </Stack>
                    <Stack gap={4}>
                        <Text size="20px" fw={700}>
                            Những con số biết nói
                        </Text>

                        <Stack gap={6}>
                            <Text>
                                Nhu cầu tuyển dụng: <strong>tăng 46%</strong>
                            </Text>
                            <Text>
                                Số hồ sơ đăng kí <strong>tăng 137%</strong>
                            </Text>
                            <Text>
                                Mức lương: <strong>22.000 USD</strong>, tương
                                đương hơn 510 triệu đồng mỗi năm.
                            </Text>
                        </Stack>
                    </Stack>

                    <Stack gap={0}>
                        <Text size="20px" fw={700}>
                            Các vị trí:
                        </Text>

                        <List pl={20}>
                            {CAREER_POSITION.map((item) => (
                                <List.Item>{item}</List.Item>
                            ))}
                        </List>
                    </Stack>

                    <Stack gap={0}>
                        <Text size="20px" fw={700}>
                            Các kĩ năng liên quan:
                        </Text>

                        <List pl={20}>
                            {SKILLS.map((item) => (
                                <List.Item>{item}</List.Item>
                            ))}
                        </List>
                    </Stack>
                </Stack>
            </Box>
        </div>
    );
};
