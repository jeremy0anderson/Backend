import { motion } from "framer-motion"
import * as React from "react";



const Text = ({ text, visible, ...props }) => {
   const letters = Array.from(text)
   
   const container = {
      hidden: {
         opacity: 0,
         transition: {
            staggerChildren:props.speed,
            type:"spring",
         }
      },
      visible: {
            opacity: 1,
               transition: {
                  staggerChildren:props.speed,
                  type:"spring",
            }
      }
   }
   
   const item = {
      hidden: {
         y: "200%",
         color: props.color,
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
            type:'spring', bounce:props.bounce | 0.9, damping:props.damping | 15,
            ease: [0, 0.37, 0.715, 1], duration: props.duration | 0.4}
      }
   }
   const PRef = React.forwardRef((props, ref)=>{
      return (<Text span ref={ref} {...props}/>);
   }), P = motion(PRef);
   
   return (
      <props.element
         color={props.color}
         css={props.css || {}}
         style={{
            justifyContent: 'center', alignItems: "center",
            display: "inline-flex",
            flexWrap:"none",
            overflow: "hidden",
            ...props.style}}
         variants={container}
         initial="hidden"
         animate={visible ? "visible" : "hidden"}
         {...props}>
            {letters.map((letter, index) => (
               <props.element span={true} key={index} variants={item}>
                  {letter === " " ? "\u00A0" : letter}
               </props.element>
         ))}
         </props.element>
   )
}

export {Text}
