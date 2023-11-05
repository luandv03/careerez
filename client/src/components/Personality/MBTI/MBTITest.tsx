import styles from "./MBTITEST.module.css";

export const MBTITest = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Trắc Nghiệm MBTI Miễn Phí </h1>
                <p>Chọn câu trả lời giống với bạn nhất</p>
                <div className={styles.progress}>
                    <div>0%</div>
                </div>

                <div className={styles.question}>
                    <div>
                        <h1>
                            Bạn thích trò chuyện đến mức không bao giờ từ bỏ cơ
                            hội trò chuyện với những người bạn không biết
                        </h1>
                    </div>

                    <div className={styles.answer}>
                        <span className={styles.agreeText}>Đồng ý</span>
                        <div className={styles.answerBox}>
                            <ul className={styles.answerList}>
                                <li className={styles.answerItem}>
                                    <input type="radio" />
                                </li>
                                <li className={styles.answerItem}>
                                    <input type="radio" />
                                </li>
                                <li className={styles.answerItem}>
                                    <input type="radio" />
                                </li>
                                <li className={styles.answerItem}>
                                    <input type="radio" />
                                </li>
                                <li className={styles.answerItem}>
                                    <input type="radio" />
                                </li>
                                <li className={styles.answerItem}>
                                    <input type="radio" />
                                </li>
                                <li className={styles.answerItem}>
                                    <input type="radio" />
                                </li>
                            </ul>
                        </div>
                        <span className={styles.disagreeText}>
                            Không đồng ý
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
