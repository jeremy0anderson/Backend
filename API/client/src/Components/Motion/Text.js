import * as React from "react";
import { motion } from "framer-motion";
import "./Text.css";

const Wrapper = (props) => {
    return <span style={{}} className="word-wrapper">{props.children}</span>;
};

const tagMap = {
    p: "p",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
};

const AnimatedText = (props) => {
    const item = {
        hidden: {
            y: "200%",
            color: "#000",
            rotate: 0,
            transition: {
                type:'spring', bounce:0.4,
                ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35 }
        },
        visible: {
            y: 0,
            rotate:-360,
            color: props.color,
            transition: {
                type:'spring', bounce:props.bounce, bounceDamping:0, bounceStiffness:0,
                ease: [0, 0.37, 0.715, 1], duration: props.duration }
        }
    };

    const splitWords = props.text.split(" ");

    const words = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    words.map((word) => {
        return word.push("\u00A0");
    });

    // let fontSize;
    // switch(props.type){
    //     case "h1":fontSize=70; break;
    //     case "h2":fontSize=50; break;
    //     case "h3":fontSize=44; break;
    //     case "h4":fontSize=35; break;
    //     case "h5":fontSize=25; break;
    //     case "h6":fontSize=18; break;
    //     case "p":fontSize=12; break;
    //     default: fontSize=12; break;
    // }
    return (
   // <span className={"motion-text"} style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
        <props.element {...props} style={props.style}>
            {words.map((word, index) => {
                return (
                    <Wrapper key={word+index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block"
                                    }}
                                    key={index}>
                                    <props.element span={true}
                                          style={{ display: "inline-block"}}
                                          variants={item}>
                                            {element}
                                    </props.element>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </props.element>
   // </span>
    );
};

function MotionText(props) {
    const container = {
        hidden: {

        },
        visible:(stagger)=> {
            return {
                transition: {
                    staggerChildren:stagger,
                    type: 'spring', bounce: 0.2, duration: 0.5, delayChildren: props.delay
                }
            }
        }
    };
    return (
        <motion.div
            initial="hidden"
            whileInView={"visible"}
            variants={container}
            custom={props.custom}
            style={{display: 'flex', justifyContent: 'center', width:"100%"}}
        >
                <AnimatedText {...props} element={props.element} bounce={props.bounce} color={props.color} duration={props.duration} text={props.text}/>
        </motion.div>
    );
}

export default MotionText;