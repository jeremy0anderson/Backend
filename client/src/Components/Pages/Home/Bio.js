import React, {useState} from "@types/react";
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {Spacer, Text} from "@nextui-org/react";
import {IoChevronDown, IoLogoGithub, IoLogoLinkedin, IoMail} from "react-icons/io5";

export const Bio = (props)=>{
   const Lref= React.forwardRef((props, ref)=>{
      return <Link to={props.to} {...props} ref={ref}/>
   }), MLink = motion(Lref);
   const [open, setOpen] = useState(false);
   
   function expand(){
      setOpen(!open);
   }
   return(
      <motion.div
         style={{ position: "relative", width: "80%", display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
         <motion.div
            animate={{height: open?"auto":0}}
            initial={{height: 0}}
            style={{overflow:'hidden'}}>
            <Text><span style={{margin: 0, padding: 0,position: 'relative',fontSize: 20, fontWeight: "bold"}}>F</span>ollowing the completion of my undergraduate in Sociology from the University of Utah, I found myself still searching for something that I genuinely loved doing.</Text>
            <Spacer y={0.5}/>
            <Text>I love sociology, but I didn't find much fulfillment in practicing it, so after a long search I decided to pursue coding - specifically web development.</Text>
            <Spacer y={0.5}/>
            <Text>I've always enjoyed coding whether it's a small DOM manipulation, or a script that would make workflows online (i.e. posting the same products for sale on multiple eCommerce platforms) easier and less time consuming, or even installing custom software on a phone.</Text>
            <Spacer y={0.5}/>
            <Text>I decided to go back to the University of Utah for a fullstack developer bootcamp. Throughout the bootcamp I ultimately discovered that I absolutely love back end web development.</Text>
            <Text>I primarily practice back end web development -- it makes sense to me -- and while I'm proficient in HTML, CSS, Handlebars, EJS, and other templating languages, React.js is one front end framework that I has taken my ability to code full stack web applications to the next level.</Text>
            <Text>Coding is just one skill that I bring to the table. I have strong interpersonal, conflict resolution, management, communication, and organizational skills. I am a self-starter who is passionate, extremely driven, and strives to produce things that I have pride in.</Text>
            <Text>I am currently open for employment and can be reached by the following: </Text>
         </motion.div>
         
         <motion.button
            style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            onClick={expand}>
            <Text>{open? "Hide Bio":"Show Bio"}</Text>
            <motion.span
               animate={{rotate:open?180:0}}
               initial={{rotate:0}}>
               
               <IoChevronDown/>
            </motion.span>
         </motion.button>
      </motion.div>
   
   
   )
}