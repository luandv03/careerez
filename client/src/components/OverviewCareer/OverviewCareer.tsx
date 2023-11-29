import {
    Button,
    Card,
    Group,
    Text,
    Image,
    Box,
    SimpleGrid,
} from "@mantine/core";
import { motion } from "framer-motion";

import styles from "./OverviewCareer.module.css";

const COURSE_INIT = [
    {
        item_id: 1,
        item_name: "Khoa học dữ liệu và AI",
        item_des: `Khoa học dữ liệu (DS - Data Science): Bằng việc sử dụng và kết hợp những kỹ năng như thống kê, toán học cũng như kỹ năng máy tính để tiến hành đi vào nghiên cứu, phân tích những dữ liệu được thu thập, từ đó, mô phỏng được các tình huống đã hoặc đang xảy ra. 
            Trí tuệ nhân tạo (AI - Artificial Intelligence) được định nghĩa là ngành học thông qua việc sử dụng những thuật toán trên máy tính, kết hợp với kỹ thuật và công nghệ hiện đại liên quan với mục đích tạo ra những sản phẩm có khả năng mô phỏng tư duy, hành động và trí thông minh của con người một cách chân thực nhất. 
            `,
        item_major: "Công nghệ",
        item_avatar:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700848728/Analysing_data_k2ntrr.webp",
    },
    {
        item_id: 2,
        item_name: "Công nghệ phần mềm",
        item_des: `Công nghệ phần mềm là chuyên ngành nghiên cứu về các vấn đề liên quan đến hệ thống kỹ thuật, phần mềm máy tính. Cụ thể, ngành học tập trung nghiên cứu về các hạ tầng phần mềm, cơ sở dữ liệu cũng như sự phát triển của các ứng dụng và hệ thống. Ngành tập trung chủ yếu vào xây dựng các ứng dụng giúp nâng cao hiệu quả hoạt động của doanh nghiệp và chất lượng cuộc sống của con người.`,
        item_major: "Công nghệ",
        item_avatar:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700848808/software-management-system_ugpvyu.webp",
    },
    {
        item_id: 3,
        item_name: "An toàn thông tin",
        item_des: `An ninh mạng là thực tiễn của việc bảo vệ các hệ thống điện tử, mạng lưới, máy tính, thiết bị di động, chương trình và dữ liệu khỏi những cuộc tấn công kỹ thuật số độc hại có chủ đích. An ninh mạng máy tính bao gồm việc kiểm soát truy cập vật lý đến phần cứng, cũng như bảo vệ chống lại tác hại có thể xảy ra qua truy cập mạng máy tính, cơ sở dữ liệu (SQL injection) và việc lợi dụng lỗ hổng phần mềm (code injection).`,
        item_major: "Công nghệ",
        item_avatar:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700848767/Typing_on_a_Computer_mgzeb9.webp",
    },
    {
        item_id: 4,
        item_name: "Nhân sự",
        item_des: `Quản trị nhân lực là những chính sách, hoạt động khai thác, quyết định đến cho việc quản lý có tác động đến cả doanh nghiệp và nhân viên. Bộ phận quản trị nhân lực cần có tầm nhìn lớn để tìm kiếm, khai thác, quản lý về nguồn lực sao cho hợp lý và hiệu quả.
        Đây là chức năng quan trọng và cơ bản trong công tác quản trị bởi con người là lực lượng đem lại giá trị cho công ty hay doanh nghiệp. Việc thu hút, đánh giá, tuyển dụng nhân viên với những vị trí phù hợp sẽ ảnh hưởng trực tiếp đến quá trình phát triển sau này là nhiệm vụ của quản trị nhân lực.
        `,
        item_major: "Công nghệ",
        item_avatar:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700849192/careerez/Business_meeting_jutr4v.webp",
    },
    {
        item_id: 5,
        item_name: "Sales/ Commercial",
        item_des: `Sales được ví như chiếc cầu nối vững chắc, kết nối sản phẩm và người tiêu dùng. Nghề này đòi hỏi khả năng nhanh nhạy trong ứng biến tình huống và chịu được áp lực cao.Nhiệm vụ của họ là tư vấn, giúp khách hàng tìm ra sản phẩm, dịch vụ phù hợp. Mọi thông tin liên quan đến sản phẩm, dịch vụ đều sẽ được nhân viên sale giải đáp. Mục đích mà họ hướng đến là mang lại doanh thu, lợi nhuận về cho công ty.`,
        item_major: "Kinh tế",
        item_avatar:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700849354/careerez/rrrr_aeomsk.webp",
    },
    {
        item_id: 6,
        item_name: "Logistics/ Supply Chain",
        item_des: `Logistics là dịch vụ cung cấp, vận chuyển hàng hóa tối ưu nhất từ nơi sản xuất đến tay người tiêu dùng. Công việc của các công ty Logistics là lên kế hoạch cụ thể, kiểm soát sự di chuyển của hàng hóa hay thông tin về nguyên liệu từ điểm xuất phát đến điểm tiêu thụ theo yêu cầu khách hàng đặt ra. Để cạnh tranh hiệu quả trong ngành này, các công ty phải luôn cải tiến và chú trọng đến yếu tố số lượng, chất lượng, thời gian và giá cả dịch vụ.`,
        item_major: "Kinh tế",
        item_avatar:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700849655/careerez/logistic-la-gi-careerbuilder-1_wmahdj.webp",
    },
    {
        item_id: 7,
        item_name: "Tài chính",
        item_des: `Tài chính là một trong những ngành nghề với nhu cầu rất lớn về lao động trong mọi nền kinh tế và ngày càng được nhiều bạn trẻ lựa chọn theo đuổi. Định nghĩa đơn giản nhất về “tài chính” là một môn học về tiền. Tiền là một công cụ giúp trao đổi hàng hóa và tích trữ tài sản trở nên nhanh chóng và tiện lợi. Cùng với sự phát triển của xã hội, vai trò của đồng tiền càng trở nên quan trọng và ngày càng phức tạp, từ đó “tài chính” mới ra đời. Cụ thể hơn, “tài chính” là một môn khoa học về sự quản lý và điều phối dòng tiền, ngân hàng, các khoản đầu tư, tài sản và vốn. Có nhiều cách phân chia tài chính ra làm các phân ngành nhỏ hơn. Cách đầu tiên là phân tài chính thành các hệ thống tài chính (tài chính doanh nghiệp và tài chính công) và các công cụ tài chính liên quan đến tài sản (assets) và vốn (liability). Theo một góc nhìn khác, tài chính gồm có tài chính công, tài chính doanh nghiệp và tài chính cá nhân.`,
        item_major: "Kinh tế",
        item_avatar:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700849509/careerez/c%C3%B4ng-ngh%E1%BB%87-t%C3%A0i-ch%C3%ADnh-11_kbnguj.png",
    },
    {
        item_id: 8,
        item_name: "Marketing/ Truyền thông",
        item_des: `Marketing qua định nghĩa của GS. Philip Kotler (giáo sư Marketing nổi tiếng nhất thế giới – ‘cha đẻ’ của Marketing hiện đại) cho rằng: “Marketing là quá trình tạo dựng các giá trị từ khách hàng và mối quan hệ thân thiết với khách hàng nhằm mục đích thu về giá trị lợi ích cho doanh nghiệp, tổ chức từ những giá trị đã được tạo ra.”
        Còn thuật ngữ về Truyền thông, truyền là truyền đạt, thông là thông tin. Truyền thông đơn giản là quá trình truyền đạt thông tin, sử dụng ngôn ngữ, chữ viết, hình ảnh, màu sắc nhằm tác động trực tiếp đến tư duy suy nghĩ của đối tượng mà chúng ta muốn hướng đến.
        `,
        item_major: "Kinh tế",
        item_avatar:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1700849192/careerez/Business_meeting_jutr4v.webp",
    },
];

export const OverviewCareer = () => {
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
                    src="https://static.wixstatic.com/media/11062b_2d80a3e84c064ae6aa91e4e58652474d~mv2.jpg/v1/fill/w_1895,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_2d80a3e84c064ae6aa91e4e58652474d~mv2.jpg"
                    alt="Avatar Career Experience"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Tổng quan ngành nghề</h1>
                </div>
            </motion.div>
            <div className={styles.about}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutContentText}>
                        <p>
                            Mang tới cho các bạn học sinh cơ hội gặp gỡ các
                            chuyên gia tài năng trong lĩnh vực họ theo đuổi,
                            lắng nghe những chia sẻ về lộ trình thăng tiến, bộ
                            kĩ năng cứng cần thiết cũng như cập nhật xu thế mới
                            nhất của thị trường
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerContent}>
                    <div className={styles.footerCourse}>
                        <div className={styles.footerCourseList}>
                            <SimpleGrid
                                cols={2}
                                p={20}
                                spacing={50}
                                style={{ width: "100%" }}
                            >
                                {COURSE_INIT.map((item) => (
                                    <Card
                                        shadow="sm"
                                        padding="lg"
                                        radius="md"
                                        withBorder
                                        component="a"
                                        href={`/career_overview/${item.item_id}`}
                                        key={item.item_id}
                                        className={styles.jobHover}
                                    >
                                        <Card.Section
                                            style={{ position: "relative" }}
                                        >
                                            <Image
                                                src={item.item_avatar}
                                                height={300}
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
                                                    display: "flex",
                                                }}
                                                bg="rgb(40, 89, 182)"
                                                p={4}
                                            >
                                                <Text color="#fff">
                                                    {item.item_major}
                                                </Text>
                                            </Box>
                                        </Card.Section>

                                        <Group
                                            justify="space-between"
                                            mt="md"
                                            mb="xs"
                                        >
                                            <Text
                                                fw={700}
                                                size="20px"
                                                color="rgb(40, 89, 182)"
                                            >
                                                {item.item_name}
                                            </Text>
                                        </Group>

                                        <Text
                                            size="sm"
                                            c="dimmed"
                                            lineClamp={6}
                                        >
                                            {item.item_des}
                                        </Text>

                                        <Button
                                            variant="light"
                                            fullWidth
                                            mt="md"
                                            radius="md"
                                        >
                                            Xem chi tiết
                                        </Button>
                                    </Card>
                                ))}
                            </SimpleGrid>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
