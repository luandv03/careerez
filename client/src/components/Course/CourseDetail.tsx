import { IconClockFilled, IconArticle, IconX } from "@tabler/icons-react";
import { useState } from "react";

import { Dropdown } from "../Dropdown";
import styles from "./CourseDetail.module.css";

export const CourseDetail = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleTonggleModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentLeft}>
                    <div>
                        <h1>Node & ExpressJS</h1>
                        <span>
                            Học Back-end với Node & ExpressJS framework, hiểu
                            các khái niệm khi làm Back-end và xây dựng RESTful
                            API cho trang web.
                        </span>
                    </div>

                    <div className={styles.course}>
                        <h3>Nội dung khóa học</h3>

                        <div className={styles.courseHeader}>
                            <ul>
                                <li>
                                    <strong>3</strong> chương
                                </li>
                                <li>
                                    <strong>36</strong> bài học
                                </li>
                                <li>
                                    <strong>Thời lượng</strong> 12 giờ 30 phút
                                </li>
                            </ul>
                        </div>

                        <ul>
                            <Dropdown />
                        </ul>
                    </div>
                </div>
                <div className={styles.contentRight}>
                    <div>
                        <div>
                            <div
                                className={styles.imgPreview}
                                onClick={() => handleTonggleModal()}
                            >
                                <div
                                    className={styles.bg}
                                    style={{
                                        backgroundImage:
                                            'url("https://files.fullstack.edu.vn/f8-prod/courses/6.png")',
                                    }}
                                ></div>
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="circle-play"
                                    className={`${styles.svgInlinefa} fa-circle-play ${styles.icon}`}
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"
                                    ></path>
                                </svg>
                                <p>Xem giới thiệu khóa học</p>
                            </div>
                        </div>

                        <div className={styles.containerRightBottom}>
                            <div className={styles.contentRightAction}>
                                <div>
                                    <h3>Miễn phí</h3>
                                </div>

                                <button>Đăng ký học</button>
                            </div>

                            <div className={styles.contentRightIntro}>
                                <div className={styles.contentRightIntroList}>
                                    <div>
                                        <IconArticle />
                                        <p>
                                            Tổng số <strong>36</strong> bài học
                                        </p>
                                    </div>
                                    <div>
                                        <IconClockFilled />
                                        <p>
                                            Thời lượng{" "}
                                            <strong>12 giờ 08 phút</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={styles.containerOverlay}
                style={{ display: openModal ? "block" : "none" }}
                onClick={() => handleTonggleModal()}
            ></div>

            <div
                className={styles.videoIntro}
                style={{ display: openModal ? "flex" : "none" }}
            >
                <div className={styles.videoIntroContent}>
                    <div className={styles.videoIntroHeader}>
                        <div className={styles.videoIntroHeaderUp}>
                            <p>Giới thiệu khóa học</p>
                            <span
                                onClick={() => handleTonggleModal()}
                                style={{ cursor: "pointer" }}
                            >
                                <IconX />
                            </span>
                        </div>
                        <div>
                            <h3>Node & ExpressJS</h3>
                        </div>
                    </div>

                    <div className={styles.videoIntroIframe}>
                        <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};
