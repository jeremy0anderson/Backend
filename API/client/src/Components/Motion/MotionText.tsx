import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

interface TextProps extends HTMLMotionProps<"div"> {
    motionElement?: any;
    text: string;
    delay?: number;
    visible: boolean;
    duration?: number;
}

const MotionText: FC<TextProps> =
    ({text, visible, ...props}: TextProps) => {
    const letters = Array.from(text);

    const container: Variants = {
        hidden: {
            opacity: 0
        },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: i * props?.delay }
        })
    };

    const item: Variants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200
            }
        }
    };

    return (
        <props.motionElement
            style={{ display: "flex", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            animate={visible ? "visible" : "hidden"}
            {...props}
        >
            {letters.map((letter, index) => (
                <motion.span key={index} variants={item}>
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </props.motionElement>
    );
};

export default MotionText;
