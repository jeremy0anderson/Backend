import {motion} from 'framer-motion';
import React from 'react';

function FToggle(props){
   const lineVariants={
      closed:(line)=>{
         switch(line){
            case 0:return {x1:20,y1:0,x2:20,y2:30};
            case 2: return {x1:15,y1:35,x2:55,y2:35};
            default: return {};
         }
         
      },
      open:(line)=>{
         switch(line){
            case 0:return {x1:15,y1:15,x2:45,y2:45};
            case 2: return {x1:15,y1:45,x2:45,y2:15};
            default:return {};
         }
         
      }
   }
   return(
      <motion.svg
         // transition={{duration: 0.5, type: 'spring', bounce: 0.1}}
         stroke={"rgba(238,238,238,0.91)"}
         viewBox={"0 0 45 45"}
         strokeWidth={5}
         strokeLinecap={"round"}
         height={45}
         width={45}>
         <motion.line
            custom={0}
            animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
         <motion.line
            custom={2}
            animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
      </motion.svg>
   )
}
export {FToggle}
function Toggle(props){
   const lineVariants={
      closed:(line)=>{
         switch(line){
            case 0: return {x1:0,y1:5,x2:25,y2:5};
            case 1: return {x1:0,y1:12.5,x2:25,y2:12.5};
            case 2: return {x1:0,y1:20,x2:25,y2:20};
            default:return{};
         }
         
      },
      open:(line)=>{
         switch(line){
            case 0:return {x1:5,y1:5,x2:20,y2:20};
            case 1: return {x1:-5,y1:12.5,x2:-5,y2:12.5};
            case 2: return {x1:5,y1:20,x2:20,y2:5};
            default:return{};
         }
         
      }
   }
   return(
      <motion.svg
         stroke={"rgba(238,238,238,0.91)"}
         viewBox={"0 0 25 25"}
         strokeLinecap={"round"}
         strokeWidth={2}
         height={25}
         width={25}>
         <motion.line
            custom={0}
            animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
         <motion.line
            custom={1}
            animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
         <motion.line
            custom={2}
            animate={props.open?"open":"closed"}
            initial={"closed"}
            variants={lineVariants}/>
      </motion.svg>
   )
}
export default Toggle;