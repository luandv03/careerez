import { IconCaretRight, IconPlus, IconMinus } from "@tabler/icons-react";
import { useState } from "react";

import styles from "./Dropdown.module.css";

export const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false);

    const handleTonggleDropdown = () => {
        setDropdown(!dropdown);
    };

    return (
        <div className={styles.container}>
            <div
                className={styles.header}
                onClick={() => handleTonggleDropdown()}
            >
                <div className={styles.headerLeft}>
                    <span>{!dropdown ? <IconPlus /> : <IconMinus />}</span>
                    <p style={{ fontWeight: 500 }}>1. Mở đầu</p>
                </div>
                <span>8 bài học</span>
            </div>

            <div
                className={styles.body}
                style={{ display: dropdown ? "block" : "none" }}
            >
                <ul className={styles.courseList}>
                    <li className={styles.courseItem}>
                        <div className={styles.courseItemLeft}>
                            <IconCaretRight />
                            <span className={styles.courseItemName}>
                                1. Gioi thieu chung ve khoa hoc
                            </span>
                        </div>

                        <div className={styles.courseItemTime}>
                            <span>08:09</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
