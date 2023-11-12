import styles from "./OnlineInternShip.module.css";

export const OnlineInternShip = () => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img
                    src="https://static.wixstatic.com/media/657d93c686e44e2d9b543a6e1e42cbca.jpg/v1/fill/w_1895,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/657d93c686e44e2d9b543a6e1e42cbca.jpg"
                    alt="Avatar Career Experience"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Thực tập trực tuyến</h1>
                </div>
            </div>
            <div className={styles.about}>
                <div>
                    <div className={styles.aboutContent}>
                        <div className={styles.aboutContentText}>
                            <p>
                                Chương trình Thực tập trực tuyến xây dựng các kỹ
                                năng thực tế cho các vai trò thực tế, cung cấp
                                cơ hội tiếp cận hàng chục công ty chỉ với 1 cú
                                click chuột. Khám phá nghề nghiệp và chuẩn bị
                                cho sự nghiệp tương lai với các mô phỏng công
                                việc miễn phí được thiết kế bởi các doanh nghiệp
                                hàng đầu Việt Nam. Đây cũng là cơ hội để tiếp
                                cận vòng tuyển dụng của các doanh nghiệp.
                            </p>
                        </div>
                    </div>

                    <div className={styles.aboutProgress}>
                        <div className={styles.aboutProgressContainer}>
                            <div
                                className={
                                    styles.aboutProgressContainerCircleList
                                }
                            >
                                <div
                                    className={
                                        styles.aboutProgressContainerCircleList
                                    }
                                >
                                    <div
                                        className={
                                            styles.aboutProgressContainerCircleBox
                                        }
                                    >
                                        <div
                                            className={
                                                styles.aboutProgressContainerCircleItem
                                            }
                                        >
                                            <button>
                                                <span>1</span>
                                            </button>
                                        </div>

                                        <p>
                                            Đăng ký và cho chúng tôi biết thông
                                            tin về bản thân bạn.
                                        </p>
                                    </div>

                                    <div
                                        className={
                                            styles.aboutProgressContainerCircleBox
                                        }
                                    >
                                        <div
                                            className={
                                                styles.aboutProgressContainerCircleItem
                                            }
                                        >
                                            <button>
                                                <span>2</span>
                                            </button>
                                        </div>

                                        <p>
                                            Lựa chọn ngành bạn muốn thực tập và
                                            hoàn thành các công việc liên quan
                                        </p>
                                    </div>

                                    <div
                                        className={
                                            styles.aboutProgressContainerCircleBox
                                        }
                                    >
                                        <div
                                            className={
                                                styles.aboutProgressContainerCircleItem
                                            }
                                        >
                                            <button>
                                                <span>3</span>
                                            </button>
                                        </div>

                                        <p>
                                            So sánh bài làm của bạn với các câu
                                            trả lời mẫu và nhận chứng chỉ
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* <div className={styles.aboutProgressDivide}></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
