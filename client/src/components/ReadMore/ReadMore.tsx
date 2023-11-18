import { useState } from "react";

import styles from "./ReadMore.module.css";

export const ReadMore = ({ text }: { text: string }) => {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <p className={styles.text}>
            {isReadMore ? text.slice(0, 300) : text}
            <span
                onClick={toggleReadMore}
                className={styles.readOrHide}
                style={{ color: "gray", textDecoration: "underline" }}
            >
                {text.length > 300 && (isReadMore ? "...Xem thêm" : " Ẩn bớt")}
            </span>
        </p>
    );
};
