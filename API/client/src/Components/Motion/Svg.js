import React from 'react';
import {motion} from 'framer-motion';




function Svg(){
   const draw = {
      hidden: {
         opacity:1,
         pathLength: 0,
      },
      visible:{
         opacity:1,
         pathLength:0.5,
         transition:{duration: 2}
      }
   }
   return(
      <motion.svg
         animate={"visible"}
         initial={"hidden"}
         // variants={draw}
         strokeWidth={1}
         fill={"none"}
         stroke={"#000"}
         viewBox={"0 0 180 180"}
         height={180}
         width={180}>
         <motion.circle
            cx={90}
            cy={90}
            r={85}
            variants={draw}
            />
         
      </motion.svg>
   )
}