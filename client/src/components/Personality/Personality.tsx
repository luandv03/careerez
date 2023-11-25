import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import styles from "./Personality.module.css";

export const Personality = () => {
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
                    src="https://static.wixstatic.com/media/11062b_c3bf9d55edca43e0a7866bcf01a9416b~mv2.jpg/v1/fill/w_1895,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_c3bf9d55edca43e0a7866bcf01a9416b~mv2.jpg"
                    alt="Avatar Personality Test"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Bài kiểm tra tính cách</h1>
                </div>
            </motion.div>

            <div className={styles.about}>
                <div className={styles.aboutContent}>
                    <div className={styles.aboutContentText}>
                        <p>
                            Bài kiểm tra tính cách MBTI (Myers-Briggs Type
                            Indicator) và Hollands Code (Holland Codes) cung cấp
                            cho các bạn những định hướng đầu tiên. Các bài test
                            giúp bạn xây dựng sự nhận thức mạnh mẽ về bản thân,
                            từ đó tìm kiếm nhóm ngành phù hợp. Điều này giúp bạn
                            tối ưu hóa khả năng cá nhân và tạo ra sự hài lòng và
                            thành công trong sự nghiệp của mình.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.mbtiTest}>
                <div className={styles.mbtiTestContent}>
                    <div className={styles.mbtiTestContentText}>
                        <div>
                            <h1>Bài kiểm tra MBTI</h1>
                            <p>
                                MBTI giúp bạn hiểu rõ hơn về các khía cạnh cốt
                                lõi của tính cách cá nhân, bao gồm cách tương
                                tác với thế giới, quá trình thu thập thông tin,
                                đưa ra quyết định và phát triển năng lực cá
                                nhân.
                            </p>

                            <div className={styles.mbtiTestContentTextBtn}>
                                <button>
                                    <Link to="/mbti_test">
                                        <span>Làm bài kiểm tra</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mbtiTestContentImg}>
                        <img
                            src="https://static.wixstatic.com/media/11062b_daf45dcf200744ac89f81cf314c19abd~mv2.jpeg/v1/fill/w_737,h_1125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_daf45dcf200744ac89f81cf314c19abd~mv2.jpeg"
                            alt="MBTI test"
                        />
                    </div>
                </div>
            </div>

            <div className={styles.hollandTest}>
                <div className={styles.mbtiTestContent}>
                    <div className={styles.mbtiTestContentText}>
                        <div>
                            <h1>Bài kiểm tra Holland Codes</h1>
                            <p>
                                Hệ thống Hollands Code (RIASEC) để đánh giá sở
                                thích và kỹ năng cá nhân trong sáu lĩnh vực
                                chính: Realistic (Hiện thực), Investigative
                                (Nghiên cứu), Artistic (Nghệ thuật), Social (Xã
                                hội), Enterprising (Kinh doanh), và Conventional
                                (Truyền thống). Khi bạn biết mình thuộc nhóm nào
                                trong Hollands Code, bạn có thể dễ dàng tìm kiếm
                                các ngành nghề tương thích và môi trường làm
                                việc phù hợp với sở thích và kỹ năng của mình.
                            </p>

                            <div className={styles.mbtiTestContentTextBtn}>
                                <button>
                                    <Link to="/holland_test">
                                        <span>Làm bài kiểm tra</span>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mbtiTestContentImg}>
                        <img
                            src="https://thptchuyensonla.edu.vn/wp-content/uploads/2020/06/trac-nghiem-huong-nghiep-mat-ma-holland-wallpaper.png"
                            alt="MBTI test"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
