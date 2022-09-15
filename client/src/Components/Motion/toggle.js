import {motion, MotionConfig} from 'framer-motion';
import React from 'react';

function FToggle(props){
   const lineVariants={
      closed:(line)=>{
         switch(line){
            case 0:return {
               x1:5,y1:10,x2:35,y2:10,
               rotate:0,
               transition:{
                  duration: 0.3, type: 'spring',
               }
            };
            case 2: return {
               x1:5,y1:30,x2:35,y2:30,
               rotate:0,
               transition:{
                  duration: 0.3, type: 'spring',
               }
            };
            default: return {};
         }
         
      },
      open:(line)=>{
         switch(line){
            case 2:return {
               x1:7.5,y1:7.5,x2:32.5,y2:32.5,
               rotate: 0,
               transition:{
                  duration: 0.3, type: 'spring',
               }
            };
            case 0: return {
               x1:32.5,y1:7.5,x2:7.5,y2:32.5,
               rotate: 0,
               transition:{
                  duration: 0.3, type: 'spring',
               }
            };
            default:return {};
         }
         
      }
   }
   return(
      <motion.svg
         animate={{rotate:props.open?-270:0}}
         transition={{duration: 0.5, type: 'spring', bounce: 0.1}}
         stroke={"rgba(238,238,238,0.91)"}
         viewBox={"0 0 40 40"}
         strokeWidth={4}
         strokeLinecap={"round"}
         height={40}
         width={40}
         // style={{position: 'absolute', bottom: 0,right: 0,}}
      >
         <MotionConfig transition={{duration: 0.4}}>
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
         </MotionConfig>
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