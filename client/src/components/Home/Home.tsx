import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { ScrollAnimation } from "../ScrollAnimation";
import styles from "./Home.module.css";
import { Carousel } from "../Carousel/Carousel";
import { ScrollCountUp } from "../ScrollCountUp";

const slides = [
    {
        feedback:
            '"CareerEZ đã hỗ trợ gia đình rất thiết thực trong việc định hình ngành nghề cho các con, đặc biệt là với nhóm ngành về Công nghệ."',
        feedback_creator: "Nguyễn Kim Yến, Phụ huynh",
    },
    {
        feedback:
            '"Nhờ CareerEZ, em đã được thực tập tại công ty mơ ước. Các anh chị cố vẫn đã cho em rất nhiều thông tin hữu ích xuyên suốt quá trình."',
        feedback_creator: "Trương Phương Anh, Học sinh",
    },
    {
        feedback:
            '"CareerEZ là website đầu tiên tại Việt Nam về thực tập trực tuyến. Đây là cơ hội quý báu cho các bạn học sinh nâng cao tính tự học và nhận thức về tương lai."',
        feedback_creator:
            "Nguyễn Văn Toàn, Giám đốc kinh doanh Công ty Fialda Technology",
    },
];

const companyList = [
    {
        company_id: 1,
        company_logo_url:
            "https://static.wixstatic.com/media/c86370_7b84dad102c444b0a022ba57a8bb1c97~mv2.png/v1/fill/w_285,h_39,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png",
    },
    {
        company_id: 2,
        company_logo_url:
            "https://static.wixstatic.com/media/c86370_598cf96ac86f4843b3982b8e74462fb9~mv2.png/v1/fill/w_218,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c86370_598cf96ac86f4843b3982b8e74462fb9~mv2.png",
    },
    {
        company_id: 3,
        company_logo_url:
            "https://static.wixstatic.com/media/c86370_44272441cea94bbfbbb26c1bc9a6b906~mv2.png/v1/fill/w_284,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png",
    },
    {
        company_id: 4,
        company_logo_url:
            "https://static.wixstatic.com/media/c86370_1d3154300a1148ea9a4625bce5e1d5c1~mv2.jpg/v1/fill/w_315,h_174,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c86370_1d3154300a1148ea9a4625bce5e1d5c1~mv2.jpg",
    },
    {
        company_id: 5,
        company_logo_url:
            "https://static.wixstatic.com/media/c86370_d307ef6ffbbe48f78c59ebc601f6443c~mv2.png/v1/fill/w_305,h_305,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png",
    },
    {
        company_id: 6,
        company_logo_url:
            "https://static.wixstatic.com/media/c86370_78ff926473a44d319d18d3431979721f~mv2.png/v1/fill/w_218,h_125,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image.png",
    },
];

export const Home = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div>
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
                        src="https://static.wixstatic.com/media/c86370_52f60e8d43f7458f99994cdb1a7c5bdb~mv2.jpg/v1/fill/w_1200,h_582,al_c,q_85,enc_auto/c86370_52f60e8d43f7458f99994cdb1a7c5bdb~mv2.jpg"
                        alt="Home Avatar"
                    />

                    <div className={styles.slogan}>
                        <div>
                            <div className={styles.sloganText}>
                                <p>Cùng CareerEZ</p>
                                <p>Thực hiện ước mơ, Vươn tới tương lai</p>
                            </div>

                            <div className={styles.sloganButton}>
                                <div className={styles.sloganButtonBox}>
                                    <button>Tham gia ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className={styles.company}>
                    <div className={styles.companyList}>
                        {companyList.map((company) => (
                            <div
                                className={styles.companyItem}
                                key={company.company_id}
                            >
                                <img
                                    src={company.company_logo_url}
                                    alt={company.company_id.toString()}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.advertisementHeader}>
                    <div className={styles.advertisementHeaderContent}>
                        <div
                            className={
                                styles.advertisementHeaderContentCareerExperience
                            }
                        >
                            <div
                                className={
                                    styles.advertisementHeaderContentCareerExperienceImg
                                }
                            >
                                <img
                                    src="https://static.wixstatic.com/media/c86370_45b1422109154e529370ca63ce8eba8b~mv2.jpg/v1/fill/w_318,h_600,al_c,q_80,enc_auto/c86370_45b1422109154e529370ca63ce8eba8b~mv2.jpg"
                                    alt=""
                                />
                            </div>

                            <div
                                className={
                                    styles.advertisementHeaderContentCareerExperienceText
                                }
                            >
                                <ScrollAnimation
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        padding: "40px",
                                        backgroundColor: "#fff",
                                        borderTop: "4px solid rgb(40, 89, 182)",
                                        borderBottom:
                                            "4px solid rgb(40, 89, 182)",
                                    }}
                                >
                                    <div>
                                        <h2>Trải nghiệm ngành nghề</h2>
                                        <p>
                                            Thông qua quá trình trải nghiệm nghề
                                            nghiệp, các bạn học sinh sẽ được
                                            nâng cao nhân thức về ngành nghề,
                                            gặp gỡ và nhận được sự hỗ trợ từ các
                                            chuyên gia trong lĩnh vực đó. Các
                                            bài tập case-study và kĩ năng liên
                                            quan cũng cũng là một phần của khóa
                                            học để giúp các bạn có cái nhìn kĩ
                                            càng nhất cho định hướng của bản
                                            thân.
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate("/career_experience")
                                            }
                                        >
                                            Tìm hiểu thêm
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div
                            className={
                                styles.advertisementHeaderContentOnlineInternship
                            }
                        >
                            <div
                                className={
                                    styles.advertisementHeaderContentOnlineInternshipImg
                                }
                            >
                                <img
                                    src="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_944,h_1259,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
                                    alt=""
                                />
                            </div>

                            <div
                                className={
                                    styles.advertisementHeaderContentOnlineInternshipText
                                }
                            >
                                <ScrollAnimation
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        padding: "40px",
                                        backgroundColor: "#fff",
                                        borderTop: "4px solid rgb(40, 89, 182)",
                                        borderBottom:
                                            "4px solid rgb(40, 89, 182)",
                                    }}
                                >
                                    <div>
                                        <h2>Thực tập trực tuyến</h2>
                                        <p>
                                            Mô hình thực tập dành cho tất cả các
                                            bạn học sinh với đề bài được cố vấn
                                            từ chính các doanh nghiệp tại Việt
                                            Nam và trên Thế giới. Hoàn thành
                                            khóa thực tập, các bạn sẽ nhận được
                                            chứng chỉ và có cơ hội được trở
                                            thành nhân sự của công ty trong
                                            tương lai
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate("/internship_online")
                                            }
                                        >
                                            Tìm hiểu thêm
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.advertisementFooter}>
                    <div className={styles.advertisementFooterContent}>
                        <div
                            className={
                                styles.advertisementFooterContentCareerExperience
                            }
                        >
                            <div
                                className={
                                    styles.advertisementFooterContentCareerExperienceImg
                                }
                            >
                                <img
                                    src="https://static.wixstatic.com/media/11062b_b3f495144eb24c70927866019c2b5644~mv2.jpg/v1/fill/w_941,h_1059,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_b3f495144eb24c70927866019c2b5644~mv2.jpg"
                                    alt=""
                                />
                            </div>

                            <div
                                className={
                                    styles.advertisementFooterContentCareerExperienceText
                                }
                            >
                                <ScrollAnimation
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        padding: "40px",
                                        backgroundColor: "#fff",
                                        borderTop: "4px solid rgb(40, 89, 182)",
                                        borderBottom:
                                            "4px solid rgb(40, 89, 182)",
                                    }}
                                >
                                    <div>
                                        <h2>Bài kiểm tra tính cách</h2>
                                        <p>
                                            Bài kiểm tra sẽ giúp bạn tìm kiếm
                                            ngành nghề phù hợp trong tương lai
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate("/personality_test")
                                            }
                                        >
                                            Tìm hiểu thêm
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div
                            className={
                                styles.advertisementFooterContentOnlineInternship
                            }
                        >
                            <div
                                className={
                                    styles.advertisementFooterContentOnlineInternshipImg
                                }
                            >
                                <img
                                    src="https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_669,h_1059,al_tr,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg"
                                    alt=""
                                />
                            </div>

                            <div
                                className={
                                    styles.advertisementFooterContentOnlineInternshipText
                                }
                            >
                                <ScrollAnimation
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        padding: "40px",
                                        backgroundColor: "#fff",
                                        borderTop: "4px solid rgb(40, 89, 182)",
                                        borderBottom:
                                            "4px solid rgb(40, 89, 182)",
                                    }}
                                >
                                    <div>
                                        <h2>Tham gia CareerEZ</h2>
                                        <p>
                                            Tham gia cùng CareerEZ để hiện thực
                                            hóa ước mơ, theo đuổi công việc phù
                                            hợp và thành công!
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate("/member_register")
                                            }
                                        >
                                            Tìm hiểu thêm
                                        </button>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.achievement}>
                    <div className={styles.achievementContent}>
                        <h1 className={styles.achievementTitle}>
                            Những con số ấn tượng
                        </h1>
                        <div className={styles.achievementList}>
                            <div className={styles.achievementItem}>
                                <ScrollCountUp
                                    number={10}
                                    decimal="."
                                    decimals={3}
                                    suffix="+"
                                />
                                <div
                                    className={styles.achievementItemDivide}
                                ></div>
                                <h2>Lượng người dùng</h2>
                            </div>
                            <div className={styles.achievementItem}>
                                <ScrollCountUp number={50} suffix="+" />
                                <div
                                    className={styles.achievementItemDivide}
                                ></div>
                                <h2>Cơ hội thực tập</h2>
                            </div>
                            <div className={styles.achievementItem}>
                                <ScrollCountUp number={50} suffix="+" />
                                <div
                                    className={styles.achievementItemDivide}
                                ></div>
                                <h2>Khóa học</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.feedback}>
                    <div className={styles.feedbackContent}>
                        <h4>Cảm nhận về CareerEZ</h4>

                        <div className={styles.feedbackContentSlide}>
                            <div className={styles.feedbackContentSlideList}>
                                <Carousel data={slides} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
