import styles from "./Personality.module.css";

export const Personality = () => {
    return (
        <div className={styles.container}>
            <div className={styles.avatar}>
                <img
                    src="https://static.wixstatic.com/media/11062b_c3bf9d55edca43e0a7866bcf01a9416b~mv2.jpg/v1/fill/w_1895,h_738,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_c3bf9d55edca43e0a7866bcf01a9416b~mv2.jpg"
                    alt="Avatar Personality Test"
                    loading="lazy"
                />
                <div className={styles.title}>
                    <h1>Bài kiểm tra tính cách</h1>
                </div>
            </div>

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
        </div>
    );
};
