import { useLocation } from "react-router-dom";

import styles from "./MBTIResult.module.css";

export const MBTIResult = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {data ? (
                    <>
                        <div>Tính cách của bạn là</div>
                        <h2>{data.personality_name}</h2>
                        <p>{data.personality_key}</p>
                        <div className={styles.avatar}>
                            <img
                                src="https://res.cloudinary.com/dlbpgaw8k/image/upload/v1699524793/careerez/INTJ_e8s1ek.png"
                                alt=""
                            />
                        </div>
                        <span>{data.personality_des}</span>
                    </>
                ) : (
                    <div>Không có dữ liệu</div>
                )}
            </div>
        </div>
    );
};
