import CountUp from "react-countup";

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
    return (
        <CountUp
            start={0.001}
            end={number}
            duration={2.5}
            suffix={suffix}
            decimal={decimal}
            decimals={decimals}
            enableScrollSpy
        >
            {({ countUpRef }) => (
                <div>
                    <h1>
                        <span ref={countUpRef} />
                    </h1>
                </div>
            )}
        </CountUp>
    );
};
