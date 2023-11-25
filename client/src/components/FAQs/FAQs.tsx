import { Flex, Stack } from "@mantine/core";
import { motion } from "framer-motion";

import styles from "./FAQs.module.css";
import { DropdownText } from "./DropdownText";

const FAQS_INIT = [
    {
        question_id: 1,
        question_text: "CareerEZ là gì ",
        answer_text:
            "CareerEZ là một nền tảng trực tuyến dành riêng cho sự hướng dẫn và phát triển nghề nghiệp cho học sinh trung học. Chúng tôi cung cấp tài liệu và công cụ giúp bạn khám phá, lập kế hoạch và đạt được mục tiêu nghề nghiệp trong tương lai.",
    },
    {
        question_id: 2,
        question_text:
            "CareerEZ có thể giúp tôi chọn đúng con đường nghề nghiệp không?",
        answer_text:
            "CareerEZ cung cấp các tính năng khác nhau, bao gồm các bài đánh giá về nghề nghiệp, thông tin về ngành công nghiệp và cơ hội thực tế thú vị, giúp bạn đưa ra quyết định thông minh về nghề nghiệp trong tương lai.",
    },
    {
        question_id: 3,
        question_text: "CareerEZ có phí không?",
        answer_text:
            "Vâng, CareerEZ cung cấp truy cập miễn phí vào các tính năng và tài liệu cơ bản của nền tảng. Tuy nhiên, có thể có các dịch vụ hoặc nội dung cao cấp có sẵn với mức phí.",
    },
    {
        question_id: 4,
        question_text:
            "Tôi có thể tìm kiếm cơ hội thực tập trên CareerEZ không?",
        answer_text:
            "Tất nhiên! CareerEZ cung cấp cơ hội tham gia vào các chương trình thực tập trực tuyến, cho phép bạn có cơ hội tích luỹ kinh nghiệm thực tế trong lĩnh vực bạn quan tâm khi vẫn còn ở trung học.",
    },
    {
        question_id: 5,
        question_text: "Làm thế nào để tôi bắt đầu với CareerEZ?",
        answer_text:
            "Để bắt đầu, đơn giản hãy tạo tài khoản trên nền tảng của chúng tôi và khám phá các tài liệu và công cụ đa dạng mà chúng tôi cung cấp.",
    },
    {
        question_id: 6,
        question_text:
            "CareerEZ có phù hợp cho sinh viên đại học và người mới tốt nghiệp không?",
        answer_text:
            "Mặc dù CareerEZ chủ yếu tập trung vào học sinh trung học, nhưng một số tài liệu và thông tin của chúng tôi cũng có thể hữu ích cho sinh viên đại học và người mới tốt nghiệp.",
    },
    {
        question_id: 7,
        question_text:
            "Liệu chúng tôi có cộng đồng hoặc diễn đàn để học sinh kết nối và chia sẻ kinh nghiệm không?",
        answer_text:
            "Vâng, CareerEZ thúc đẩy việc xây dựng một cộng đồng trực tuyến hỗ trợ, nơi những học sinh thành công có thể chia sẻ kinh nghiệm, lời khuyên và thông tin với những người đang trên hành trình nghề nghiệp tương tự.",
    },
    {
        question_id: 8,
        question_text:
            "Dữ liệu cá nhân của tôi có an toàn trên CareerEZ không?",
        answer_text:
            "CareerEZ chú trọng đến quyền riêng tư và bảo mật dữ liệu. Chúng tôi áp dụng các biện pháp nghiêm ngặt để bảo vệ thông tin cá nhân của bạn và đảm bảo một trải nghiệm an toàn cho người dùng.",
    },
    {
        question_id: 9,
        question_text:
            "Làm thế nào để tôi liên hệ với CareerEZ để được hỗ trợ hoặc đặt câu hỏi thêm?",
        answer_text:
            "Bạn có thể liên hệ với đội ngũ hỗ trợ của chúng tôi thông qua thông tin liên hệ được cung cấp trên trang web của chúng tôi hoặc bạn có thể sử dụng hệ thống tin nhắn trong nền tảng của chúng tôi để được hỗ trợ.",
    },
];

export const FAQs = () => {
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
                    src="https://static.wixstatic.com/media/0b340f_a5c250a81aed4d7fa68e005cff2132c8~mv2_d_3840_1960_s_2.jpg/v1/fill/w_1895,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_a5c250a81aed4d7fa68e005cff2132c8~mv2_d_3840_1960_s_2.jpg"
                    alt="Avatar Career Experience"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Câu hỏi thường gặp</h1>
                </div>
            </motion.div>

            <Flex style={{ width: "100%" }} px={140}>
                <Stack>
                    {FAQS_INIT.map((item) => (
                        <DropdownText faq={item} />
                    ))}
                </Stack>
            </Flex>
        </div>
    );
};
