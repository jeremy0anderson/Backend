import {forwardRef} from "react";
import * as M from '@mui/material';
import {motion,useTransform, useMotionValue} from 'framer-motion';
import {IconButton, Button as MButton} from '@mui/material';
import {Person} from "@mui/icons-material";


const ContainerRef = forwardRef((props, ref)=>{
    return (<div ref={ref} {...props}/>)
}), Container = motion(ContainerRef);
const ButtonRef = forwardRef((props, ref)=>{
    return (<MButton ref={ref} {...props}/>)
}), Button = motion(ButtonRef);
const CardRef = forwardRef((props, ref)=>{
    return (<M.Card ref={ref} {...props}/>)
}), Card = motion(CardRef);
const IconRef = forwardRef((props, ref)=>{
    return (<IconButton ref={ref} {...props}/>)
}), Icon = motion(IconRef);

export {Container, Button, Card, Icon}


export const MyComponent = () => {
    const x = useMotionValue(0)
    const background = useTransform(
        x,
        [-100, 0, 100],
        ["#cc093d", "#7700ff", "rgb(83,8,174)"]
    )

    return (
        <motion.div style={{ background }}>
            <motion.div
                drag="x"
                dragConstraints={{ left: "100%", right: "100%" }}
                style={{ x, display: 'flex', justifyContent: 'center', alignItems: "center", alignContent: "center" }}
            >
                <motion.button x={x}>
                    <Person/>
                </motion.button>
            </motion.div>
        </motion.div>
    )
}
export function InputSVG(){
    return(
        <motion.svg
            width={800}
            height={600}
            viewBox={"0 0 800 600"}>
                <motion.path
                    d={"M 650 200 A 50 50 0 1 1 650 350 L 150 350 A 50 50 360 1 0 150 500 "}
                    stroke={"#000000"}
                    strokeWidth={3}/>
        </motion.svg>

    )
}
