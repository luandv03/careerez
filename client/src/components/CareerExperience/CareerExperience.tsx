import { IconHash, IconClockCheck } from "@tabler/icons-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { courseService } from "../../services/course.service";
import styles from "./CareerExperience.module.css";

interface Major {
    major_id: number;
    major_name: string;
}

interface Category {
    category_id: number;
    category_name: string;
    majors: Major[];
}

interface ICourseItem {
    course_id: number;
    course_name: string;
    course_des: string;
    major_id: number;
    author_id: number;
    course_avatar_url: string;
    is_public: boolean;
    createdAt: string;
    updatedAt: string;
    username: string;
}

const COURSE_INIT = [
    {
        course_id: 1,
        course_name: "Backend Nodejs Tutorial",
        course_des:
            "Why learn Node.js in 2020? Master the fundamentals of Node in 7 easy steps, then build a fullstack web app and deploy it to a cloud server.",
        major_id: 5,
        author_id: 2,
        course_avatar_url:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        is_public: true,
        createdAt: "2023-11-02T08:46:04.020Z",
        updatedAt: "2023-11-02T08:46:04.020Z",
        username: "Văn Luận Đinh",
    },
    {
        course_id: 2,
        course_name: "ReactJS Tutorial",
        course_des:
            "Why learn Reactjs in 2020? Master the fundamentals of Node in 7 easy steps, then build a fullstack web app and deploy it to a cloud server.",
        major_id: 5,
        author_id: 2,
        course_avatar_url:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        is_public: true,
        createdAt: "2023-11-06T13:26:56.719Z",
        updatedAt: "2023-11-06T13:26:56.719Z",
        username: "Văn Luận Đinh",
    },
    {
        course_id: 3,
        course_name: "ReactJS Tutorial",
        course_des:
            "Why learn Reactjs in 2020? Master the fundamentals of Node in 7 easy steps, then build a fullstack web app and deploy it to a cloud server.",
        major_id: 5,
        author_id: 2,
        course_avatar_url:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        is_public: true,
        createdAt: "2023-11-06T13:26:57.675Z",
        updatedAt: "2023-11-06T13:26:57.675Z",
        username: "Văn Luận Đinh",
    },
    {
        course_id: 4,
        course_name: "ReactJS Tutorial",
        course_des:
            "Why learn Reactjs in 2020? Master the fundamentals of Node in 7 easy steps, then build a fullstack web app and deploy it to a cloud server.",
        major_id: 5,
        author_id: 2,
        course_avatar_url:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        is_public: true,
        createdAt: "2023-11-06T13:26:58.490Z",
        updatedAt: "2023-11-06T13:26:58.490Z",
        username: "Văn Luận Đinh",
    },
    {
        course_id: 5,
        course_name: "ReactJS Tutorial",
        course_des:
            "Why learn Reactjs in 2020? Master the fundamentals of Node in 7 easy steps, then build a fullstack web app and deploy it to a cloud server.",
        major_id: 5,
        author_id: 2,
        course_avatar_url:
            "https://res.cloudinary.com/dlbpgaw8k/image/upload/v1698914711/nodejs_backend_bon7ye.png",
        is_public: true,
        createdAt: "2023-11-06T13:26:59.225Z",
        updatedAt: "2023-11-06T13:26:59.225Z",
        username: "Văn Luận Đinh",
    },
];

export const CareerExperience = () => {
    const [category, setCategory] = useState<Category[] | []>([]);
    const [major, setMajor] = useState<Major[] | []>([]);
    const [listCourses, setListCourses] = useState<ICourseItem[] | []>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const handleGetAllCategories = async () => {
        const res = await courseService.getAllCategories();

        setCategory(res.data.categories);
        setMajor(res.data.categories[0].majors);
        handleGetCoursesByMajor(res.data.categories[0].majors[0].major_id);
    };

    const handleSelectCategory = (e: { target: { value: string } }) => {
        const selectedCategory = category.filter(
            (item) => item.category_name === e.target.value
        );

        setMajor(selectedCategory[0].majors);

        handleGetCoursesByMajor(selectedCategory[0].majors[0].major_id);
    };

    const handleSelectMajor = async (e: { target: { value: string } }) => {
        const selectedMajor = major.filter(
            (item) => item.major_name == e.target.value
        );

        await handleGetCoursesByMajor(selectedMajor[0].major_id);
    };

    const handleGetCoursesByMajor = async (majorId: number) => {
        setLoading(true);
        const res = await courseService.getListCoursesByMajorId(majorId);
        setLoading(false);

        setListCourses(res.data.courses);

        setListCourses(res.data.courses);
    };

    useEffect(() => {
        handleGetAllCategories();
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                                onChange={handleSelectCategory}
                            >
                                {category.length > 0 &&
                                    category.map((item) => (
                                        <option
                                            key={item.category_id}
                                            value={item.category_name}
                                        >
                                            {item.category_name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                        <div className={styles.footerOptionItem}>
                            <label htmlFor="pet-select">Chuyên ngành:</label>
                            <br />
                            <select
                                name="pets"
                                id="pet-select"
                                onChange={handleSelectMajor}
                            >
                                {major.length > 0 &&
                                    major.map((item) => (
                                        <option
                                            key={item.major_id}
                                            value={item.major_name}
                                        >
                                            {item.major_name}
                                        </option>
                                    ))}
                            </select>
                        </div>
                    </div>

                    <div className={styles.footerCourse}>
                        <div className={styles.footerCourseList}>
                            {loading
                                ? COURSE_INIT.map((item: ICourseItem) => (
                                      <div
                                          className={`${styles.footerCourseItem} ${styles.footerCourseItemInit}`}
                                          key={item.course_id}
                                      >
                                          <div
                                              className={
                                                  styles.footerCourseItemAvatar
                                              }
                                          >
                                              <div
                                                  className={
                                                      styles.footerCourseItemAvatarBox
                                                  }
                                              />
                                          </div>

                                          <div
                                              className={
                                                  styles.footerCourseItemName
                                              }
                                          >
                                              <span>{item.course_name}</span>
                                          </div>

                                          <div
                                              className={
                                                  styles.footerCourseItemDescription
                                              }
                                          >
                                              <span>{item.course_des}</span>
                                          </div>

                                          <div
                                              className={
                                                  styles.footerCourseItemMajor
                                              }
                                          >
                                              <IconHash />
                                              <span>data</span>
                                          </div>

                                          <div
                                              className={
                                                  styles.footerCourseItemTime
                                              }
                                          >
                                              <IconClockCheck />
                                              <span>3-4 hours</span>
                                          </div>
                                      </div>
                                  ))
                                : listCourses.length > 0 &&
                                  listCourses.map((item: ICourseItem) => (
                                      <Link
                                          to={`/course/detail/${item.course_id}`}
                                          className={styles.footerCourseItem}
                                          key={item.course_id}
                                      >
                                          <div
                                              className={
                                                  styles.footerCourseItemAvatar
                                              }
                                          >
                                              <img
                                                  src={item.course_avatar_url}
                                                  alt={item.course_name}
                                              />
                                          </div>

                                          <div
                                              className={
                                                  styles.footerCourseItemName
                                              }
                                          >
                                              <span>{item.course_name}</span>
                                          </div>

                                          <div
                                              className={
                                                  styles.footerCourseItemDescription
                                              }
                                          >
                                              <span>{item.course_des}</span>
                                          </div>

                                          <div
                                              className={
                                                  styles.footerCourseItemMajor
                                              }
                                          >
                                              <IconHash />
                                              <span>data</span>
                                          </div>

                                          <div
                                              className={
                                                  styles.footerCourseItemTime
                                              }
                                          >
                                              <IconClockCheck />
                                              <span>3-4 hours</span>
                                          </div>
                                      </Link>
                                  ))}

                            {/* {COURSE_INIT.map((item: ICourseItem) => (
                                <div
                                    className={`${styles.footerCourseItem} ${styles.footerCourseItemInit}`}
                                    key={item.course_id}
                                >
                                    <div
                                        className={
                                            styles.footerCourseItemAvatar
                                        }
                                    >
                                        <div
                                            className={
                                                styles.footerCourseItemAvatarBox
                                            }
                                        />
                                    </div>

                                    <div
                                        className={styles.footerCourseItemName}
                                    >
                                        <span>{item.course_name}</span>
                                    </div>

                                    <div
                                        className={
                                            styles.footerCourseItemDescription
                                        }
                                    >
                                        <span>{item.course_des}</span>
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
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
