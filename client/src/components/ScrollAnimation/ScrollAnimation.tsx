import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactElement, useEffect } from "react";

// initial={{ opacity: 0, scale: 0.5 }}
// animate={{ opacity: 1, scale: 1 }}
// transition={{
//     duration: 0.8,
//     delay: 0.5,
//     ease: [0, 0.71, 0.2, 1.01],
// }}

const boxVariant = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.8, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] },
    },
    hidden: { opacity: 0, scale: 0 },
};

export const ScrollAnimation = ({
    children,
    style,
}: {
    children: ReactElement;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    style?: any;
}) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div
            ref={ref}
            variants={boxVariant}
            animate={control}
            initial={"hidden"}
            style={style}
        >
            {children}
        </motion.div>
    );
};
