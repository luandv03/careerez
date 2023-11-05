import { IconHash, IconClockCheck } from "@tabler/icons-react";
import { useState, useEffect } from "react";

import { courseService } from "../../services/course.service";
import styles from "./CareerExperience.module.css";

export const CareerExperience = () => {
    const [category, setCategory] = useState("");
    const [major, setMajor] = useState("");

    const handleGetAllCategories = async () => {
        const res = await courseService.getAllCategories();

        console.log(res);
    };

    useEffect(() => {
        handleGetAllCategories();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img
                    src="https://static.wixstatic.com/media/11062b_2d80a3e84c064ae6aa91e4e58652474d~mv2.jpg/v1/fill/w_1895,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_2d80a3e84c064ae6aa91e4e58652474d~mv2.jpg"
                    alt="Avatar Career Experience"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Trải nghiệm nghề nghiệp</h1>
                </div>
            </div>
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
                    <div className={styles.footerHeader}>
                        <h2 className={styles.footerTitle}>
                            Discover the right job simulation for you
                        </h2>
                        <p className={styles.footerText}>
                            Each simulation is free and you can complete it in
                            your own time.
                        </p>
                    </div>

                    <div className={styles.footerOption}>
                        <div className={styles.footerOptionItem}>
                            <label htmlFor="pet-select">Lĩnh vực:</label>
                            <br />

                            <select
                                name="pets"
                                id="pet-select"
                                onChange={(e) => console.log(e.target.value)}
                            >
                                <option value="dog">Công nghệ thông tin</option>
                                <option value="cat">Kinh doanh</option>
                                <option value="hamster">Tài chính</option>
                                <option value="parrot">Giáo dục</option>
                                <option value="spider">Y tế</option>
                                <option value="goldfish">Kỹ thuật</option>
                            </select>
                        </div>
                        <div className={styles.footerOptionItem}>
                            <label htmlFor="pet-select">Chuyên ngành:</label>
                            <br />
                            <select name="pets" id="pet-select">
                                <option value="dog">Backend Engineer</option>
                                <option value="cat">Mobile Engineer</option>
                                <option value="hamster">Data Engineer</option>
                                <option value="parrot">Data science</option>
                                <option value="spider">Embedded</option>
                                <option value="goldfish">Web Developer</option>
                            </select>
                        </div>
                    </div>

                    <div className={styles.footerCourse}>
                        <div className={styles.footerCourseList}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
                                <div className={styles.footerCourseItem}>
                                    <div
                                        className={
                                            styles.footerCourseItemAvatar
                                        }
                                    >
                                        <img
                                            src="https://cdn.theforage.com/vinternships/companyassets/ifobHAoMjQs9s6bKS/5XsFFJu2oCLdmYJW2/1693127848727/tata_bg_optimised.jpeg"
                                            alt="Java backend"
                                        />
                                    </div>

                                    <div
                                        className={styles.footerCourseItemName}
                                    >
                                        <span>Java Backend Tutorial</span>
                                    </div>

                                    <div
                                        className={
                                            styles.footerCourseItemDescription
                                        }
                                    >
                                        <span>
                                            Khoa học dữ liệu gồm ba phần chính:
                                            tạo và quản trị dữ liệu, phân tích
                                            dữ liệu, và áp dụng kết quả phân
                                            tích thành những hành động có giá
                                            trị. Việc phân tích và sử dụng dữ
                                            liệu dựa vào ba nguồn tri thức: toán
                                            học (thống kê toán học -
                                            Mathematical Statistics), công nghệ
                                            thông tin (máy học - Machine
                                            Learning) và tri thức của lĩnh vực
                                            ứng dụng cụ thể.
                                        </span>
                                    </div>

                                    <div
                                        className={styles.footerCourseItemMajor}
                                    >
                                        <IconHash />
                                        <span>data</span>
                                    </div>

                                    <div
                                        className={styles.footerCourseItemTime}
                                    >
                                        <IconClockCheck />
                                        <span>3-4 hours</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
