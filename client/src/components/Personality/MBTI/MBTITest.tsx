import { useState, useEffect } from "react";
import { IconArrowRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

import styles from "./MBTITEST.module.css";
import { testService } from "../../../services/test.service";

interface Question {
    question_id: number;
    question_name: string;
}

interface Answer {
    question_id: number;
    answer: number;
}

export const MBTITest = () => {
    const [listQuestion, setListQuestion] = useState<Question[] | []>([]);
    const [listAnswer, setListAnswer] = useState<Answer[] | []>([]);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();

    const handleGetListQuestion = async () => {
        const res = await testService.getPersonalTest(page, 6);
        window.scrollTo(0, 0);

        if (res.statusCode === 200) {
            setListQuestion(res.data);
        }
    };

    const handleClickScroll = (className: string) => {
        const element = document.querySelector(`.${className}`);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSelectAnswer = (
        question_id: number,
        answer: number,
        element: string
    ) => {
        setListAnswer((prev: Answer[] | []) => {
            const list = prev.filter(
                (item) => item.question_id === question_id
            );

            if (!list.length) {
                return [...prev, { question_id, answer }];
            } else {
                const arr = listAnswer.map((item) =>
                    item.question_id == question_id
                        ? {
                              question_id,
                              answer,
                          }
                        : item
                );

                return arr;
            }
        });

        handleClickScroll(element);
    };

    const handleNextPage = () => {
        if (listAnswer.length < page * 6) {
            alert("Please fill up");
            return;
        }

        setPage((prev) => prev + 1);
    };

    const handleSubmitTest = async () => {
        const res = await testService.getPersonalityAnswer(listAnswer);

        if (res.statusCode === 200) {
            navigate("/istp-personality", { state: res.data });
        }
    };

    useEffect(() => {
        handleGetListQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Trắc Nghiệm MBTI Miễn Phí</h1>
                <p>Chọn câu trả lời giống với bạn nhất</p>
                <div className={styles.progress}>
                    <div>{Math.round((listAnswer.length / 60) * 100)}%</div>
                    <div className={styles.progressBar}>
                        <div
                            className={styles.progressBarFilter}
                            style={{
                                width: `${Math.round(
                                    (listAnswer.length / 60) * 100
                                )}%`,
                            }}
                        ></div>
                    </div>
                </div>

                {listQuestion.length > 0 &&
                    listQuestion.map((question: Question) => (
                        <div
                            className={`${styles.question} section-${question.question_id}`}
                            key={question.question_id}
                        >
                            <div>
                                <h1>{question.question_name}</h1>
                            </div>

                            <div className={styles.answer}>
                                <span className={styles.agreeText}>Đồng ý</span>
                                <div className={styles.answerBox}>
                                    <ul className={styles.answerList}>
                                        {[3, 2, 1, 0, -1, -2, -3].map(
                                            (answer) => (
                                                <li
                                                    className={
                                                        styles.answerItem
                                                    }
                                                >
                                                    <input
                                                        key={
                                                            question.question_id
                                                        }
                                                        type="radio"
                                                        onChange={(e) => {
                                                            handleSelectAnswer(
                                                                question.question_id,
                                                                Number(
                                                                    e.target
                                                                        .value
                                                                ),
                                                                `section-${
                                                                    question.question_id +
                                                                    1
                                                                }`
                                                            );
                                                        }}
                                                        checked={
                                                            listAnswer.filter(
                                                                (item) =>
                                                                    item.question_id ===
                                                                    question.question_id
                                                            ).length > 0 &&
                                                            listAnswer.filter(
                                                                (item) =>
                                                                    item.question_id ===
                                                                    question.question_id
                                                            )[0].answer ===
                                                                answer
                                                        }
                                                        value={answer}
                                                    />
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                                <span className={styles.disagreeText}>
                                    Không đồng ý
                                </span>
                            </div>
                        </div>
                    ))}

                <div className={styles.btnNext}>
                    {page < 10 ? (
                        <button
                            onClick={() => {
                                handleNextPage();
                            }}
                        >
                            <span>Tiếp tục</span>

                            <IconArrowRight />
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                handleSubmitTest();
                            }}
                        >
                            <span>Hoàn tất</span>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};
