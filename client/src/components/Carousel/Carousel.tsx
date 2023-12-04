import { useEffect, useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import "./Carousel.css";

export const Carousel = ({
    data,
}: {
    data: { feedback: string; feedback_creator: string }[];
}) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };

    useEffect(() => {
        const timer = setTimeout(
            () =>
                setSlide((prevIndex) =>
                    prevIndex === data.length - 1 ? 0 : prevIndex + 1
                ),
            2000
        );

        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slide]);

    return (
        <div className="carousel">
            <IconChevronLeft onClick={prevSlide} className="arrow arrow-left" />
            {data.map((item, idx: number) => {
                return (
                    <div
                        key={idx}
                        className={
                            slide === idx ? "slide" : "slide slide-hidden"
                        }
                    >
                        <div className="slide-content">
                            <span>{item.feedback}</span>
                            <p>{item.feedback_creator}</p>
                        </div>
                    </div>
                );
            })}
            <IconChevronRight
                onClick={nextSlide}
                className="arrow arrow-right"
            />
            <span className="indicators">
                {data.map((_: unknown, idx: number) => {
                    return (
                        <button
                            key={idx}
                            className={
                                slide === idx
                                    ? "indicator"
                                    : "indicator indicator-inactive"
                            }
                            onClick={() => setSlide(idx)}
                        ></button>
                    );
                })}
            </span>
        </div>
    );
};
