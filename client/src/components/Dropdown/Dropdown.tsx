import { IconCaretRight, IconPlus, IconMinus } from "@tabler/icons-react";
import { useState } from "react";

import styles from "./Dropdown.module.css";

interface ILesson {
    lesson_id: number;
    lesson_name: string;
    lesson_number: number;
}

interface IChapter {
    chapter_id: number;
    chapter_name: string;
    chapter_number: number;
    lessons: ILesson[] | [];
}

export const Dropdown = ({ chapter }: { chapter: IChapter }) => {
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
                    <p style={{ fontWeight: 500 }}>
                        {chapter.chapter_number}. {chapter.chapter_name}
                    </p>
                </div>
                <span>8 bài học</span>
            </div>

            <div
                className={styles.body}
                style={{ display: dropdown ? "block" : "none" }}
            >
                <ul className={styles.courseList}>
                    {chapter.lessons.length > 0 &&
                        chapter.lessons.map((lesson: ILesson) => (
                            <li className={styles.courseItem}>
                                <div className={styles.courseItemLeft}>
                                    <IconCaretRight />
                                    <span className={styles.courseItemName}>
                                        {lesson.lesson_number}.{" "}
                                        {lesson.lesson_name}
                                    </span>
                                </div>

                                <div className={styles.courseItemTime}>
                                    <span>08:09</span>
                                </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};
