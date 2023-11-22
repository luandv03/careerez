import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";

export const ScrollCountUp = ({
    number,
    suffix,
    decimal,
    decimals,
}: {
    number: number;
    suffix?: string;
    decimal?: string;
    decimals?: number;
}) => {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
        >
            {counterOn && (
                <CountUp
                    start={0.001}
                    end={number}
                    duration={2.5}
                    suffix={suffix}
                    decimal={decimal}
                    decimals={decimals}
                >
                    {({ countUpRef }) => (
                        <div>
                            <h1>
                                <span ref={countUpRef} />
                            </h1>
                        </div>
                    )}
                </CountUp>
            )}
        </ScrollTrigger>
    );
};
