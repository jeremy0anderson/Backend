import React, {Component, useRef, useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import pfp from "../../../assets/images/pfp.webp";
// import cert from '../../../assets/images/coding-bootcamp-full-stack-developer-certificate.1.webp';
import {motion, useScroll, useTransform} from 'framer-motion';
import {default as MotionText} from "../../Motion/Text";
import * as I from 'react-icons/io5';
import {ContactPage} from "../Contact/Contact";
import {Bio} from "../About/About";
import Skills, {skillsArr} from "../About/Skills";
import {Text, Tooltip} from "@nextui-org/react";

const draw = {
   hidden: { pathLength: 0, opacity: 0},
   visible: (i) => {
      const delay = .2+ i;
      return {
         pathLength: 1,
         opacity: 1,
         transition: {
            pathLength: { delay, type: "spring", duration: 1.2, bounce: 0},
            opacity: { delay, duration: 0.1 }
         }
      };
   }
};
function DividerLine(props){
   const [state, setState] = useState({
      width: window.innerWidth,
      height: window.innerHeight
   })
   
   useEffect(()=>{
      window.addEventListener('resize', (e)=>{
         setState({
            width: e.target.innerWidth,
            height: e.target.innerHeight
         })
      })
      return  window.removeEventListener('resize', (e)=>{
         setState({
            width: e.target.innerWidth,
            height: e.target.innerHeight
         })
      })
      
   },[])

   return(
      <motion.svg
         width={state.width}
         height={5}
         viewBox={`0 ${state.height*props.top} ${state.width} 5`}
         initial="hidden"
         strokeWidth="4px"
         whileInView="visible"
         stroke={"#e3e3e3"}
         viewport={{amount:0, once:false}}
         style={{position: 'absolute', top: `calc(${props.top}00vh + 5px)`, left: 0, margin: 0,}}
      >
         <motion.line
            x1={0}
            y1={"calc(100vh + 4px)"}
            x2={"100vw"}
            y2={"calc(100vh + 4px)"}
            stroke={"#e5e5e5"}
            variants={draw}
            custom={0}
         />
      </motion.svg>
   )
}

const Div = motion.div;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
           visible: true,
           aboutSection:false,
           contactSection: false,
        }
        this.AboutRef = React.createRef();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {
    }
    componentWillUnmount() {}
    render() {
          const AvatarRef = React.forwardRef((props, ref)=>{
                return <img ref={ref} src={props.src} alt={props.alt} {...props}/>
          }), Avatar = motion(AvatarRef, {forwardMotionProps:false});
          return(
             <Div style={{width:"100vw", height: "100%"}}>
                <Div
                   onViewportLeave={()=>this.setState({...this.state,visible:false})}
                   onViewportEnter={()=>this.setState({...this.state,visible:true})}
                   id={"SelfSection"}
                   style={{width: "100vw", height: "100%"}}>
                  
                         {/* background: "linear-gradient(112deg, hsla(215, 90%, 10%,0.8) -120%, hsla(280, 100%, 40%, 0.9) 120%)"}}>*/}
                   <Div
                     initial={{y: "-100%",}}
                     animate={{y: 0, transition:{duration:0.5, bounce: 0.2, type:'spring'}}}
                     style={{display: 'flex', flexDirection: 'column', width: "100vw", height: "50vvh", position: 'relative' }}>
                      <Avatar
                         transition={{duration: 0.5}}
                         whileTap={{scale:1, borderRadius: "40%", transition: {duration: 0.2}}}
                         whileHover={{scale:1.1, borderRadius: "40%", transition:{duration: 0.2}}}
                         style={{
                            boxShadow: "0 2px 7px -1px black",
                            left: "calc(50% - 90px)",
                            position: 'relative',
                            borderRadius: "35%",
                            zIndex:998,
                         }}
                         width={180} height={180}
                         src={pfp}
                         alt={"avatar"}/>
                         
                      <Div
                         whileInView={{opacity:1}}
                         style={{
                            width: "100%",
                            height: 200,
                            top: "calc(50vh - 200px)",
                            x:0,
                            margin:0,
                            display: 'inline-flex',
                            justifyContent: 'center',
                            position: 'relative',
                            alignContent: "center",
                            alignItems: 'center'}}
                         transition={{duration:0.3}}
                         initial={{opacity:0}}>
                         <MotionText color={"#f1f1f1"} textItems={[
                            {
                               type: "h3",
                               text: "Hi, I'm Jeremy.",
                               style:{marginBottom:20}
                            },
                            {
                               type: "h5",
                               text: "Full stack Web Developer | SLC, UT",
                            }
                         ]} visible={this.state.visible} bounce={0.1} custom={0.025} duration={0.4}/>
                      </Div>
                      <Div whileInView={{
                           opacity:[1, 1, 1],
                            y:[0, 20, 0]
                         }} transition={{
                            duration:0.9,
                            ease: "easeInOut",
                            times: [0, 0.5, 1],
                            repeat: Infinity,
                            repeatDelay:0
                         }} style={{opacity: 0, left: "calc(50vw - 25px)",position: 'absolute',top: "75vh", width: 50, margin:5, padding:0}}>
                         <I.IoChevronDownOutline size={"50px"}/>
                      </Div>
                   </Div>
                </Div>
                <DividerLine top={1}/>
                <Div
                   onViewportLeave={()=>{this.setState({...this.state,aboutSection:false})}}
                   onViewportEnter={()=>{this.setState({...this.state,aboutSection:true})}}
                   id={"About-section"}
                   ref={this.AboutRef}
                   transition={{duration: 0.4}}
                   initial={{ width: "100vw", position: "relative", height: 'auto'}}
                   style={{display: 'flex', flexDirection: "column", justifyContent: 'center'}}>
                   {/*// background: "linear-gradient(90deg, hsla(12, 90%, 50%, 0.9) -20%, hsla(45, 90%, 50%, 0.9) 120%)"}}>*/}
                   <Div
                      viewport={{amount:0, once:true}}
                      layoutScroll={true}
                      layout
                      initial={{y:0}}
                      whileInView={{y:0}}
                      transition={{duration: 0.6}}
                      style={{position: 'relative', top: 0,height: "auto", display: 'flex',  flexDirection: "column",justifyContent: 'center', alignItems: 'center'}}
                   >
                      <MotionText color={"#e7e7e7"} textItems={[
                         {
                            type: "h4",
                            text: "About / Skills",
                            style: {
                                  margin: "40px 0"
                            }
                         },
                      ]} visible={this.state.aboutSection} bounce={0} custom={0.035} duration={0.3}/>
                         <Bio/>
                      <Skills skillSet={skillsArr}/>
                      
                   </Div>
                </Div>
                <DividerLine top={2}/>
                <Div
                   layout
                   id={"Contact-section"}
                   viewport={{amount:0.01, once:true}}
                   whileInView={{x:0, y: -50}}
                   transition={{duration: 0.4}}
                   initial={{ width: "100vw", position: "relative", top: 0}}
                   style={{display: 'flex', flexDirection: "column",height: "auto", justifyContent: 'center', overflow:'visible', marginBottom: 80}}>
                      {/*// background: "linear-gradient(90deg, hsla(12, 90%, 50%, 0.9) -20%, hsla(45, 90%, 50%, 0.9) 120%)"}}>*/}
                  <ContactPage/>
                </Div>
             </Div>
          )
    }
}

Home.propTypes = {};

export default Home;

// const AvatarRef = React.forwardRef((props, ref)=>{
//     return <img src={props.src} alt={props.alt} ref={ref} {...props}/>
// }), Avatar = motion(AvatarRef);
//
// const Circle = (props) =>{
//     const draw = {
//         hidden: { pathLength: 0, opacity: 0 },
//         visible: (i) => {
//             const delay = 0.3 + i * 0.5;
//             return {
//                 pathLength: 1.01,
//                 opacity: 1,
//                 transition: {
//                     pathLength: { delay, type: "spring", duration: 2.5},
//                     opacity: { delay, duration: 0.1 }
//                 }
//             };
//         }
//     };
//     return(
//           <motion.svg
//                 width="180"
//                 height="180"
//                 viewBox="0 0 180 180"
//                 initial="hidden"
//                 animate={props.visible? "visible":"hidden"}
//                 style={{position:'absolute', zIndex: 1001,left: "calc(50% - 90px)", top: -10, borderRadius: "50%"}}
//           >
//
//               <motion.circle
//                     cx="90"
//                     cy="90"
//                     r="90"
//                     fill={"none"}
//                     strokeWidth={15}
//                     stroke="#f55a30"
//                     variants={draw}
//                     custom={0}
//               />
//           </motion.svg>
//     )
// }
//
// const Me =()=>(
//       <motion.div id={"Me"}
//                   style={{
//                       top:0,
//                       borderRadius: "50%",
//                       position: 'absolute',
//                       height: "50vh", width: "100vw",
//                       display: 'flex', alignItems: "center", alignContent: "center", justifyContent: 'center'
//                   }}>
//
//           <Avatar id={"Avatar"}
//                   whileTap={{scale:1.1,  borderRadius: "50%"}}
//                   whileHover={{scale: 1.2, borderRadius: "50%"}}
//                   transition={{duration: 0.2}}
//                   style={{zIndex:2001,position: 'absolute',top: "25%", margin:0,left: "15%", borderRadius: "12%", boxShadow: "2px 2px 18px 2px rgba(15, 15, 15, 0.8)"}}
//                   src={pfp} alt={"avatar"}/>
//           <div style={{position: "relative", height:"100%", width: "100%",background: "linear-gradient(112deg, hsla(239, 100%, 40%) -120%, hsla(269, 100%, 60%) 120%"}}>
//               <motion.div
//                     style={{width: "auto", display: 'inline-flex', justifyContent: 'center',position: 'relative', alignItems: 'center'}}
//                     transition={{duration:0.4}}
//                     initial={{opacity:0}}
//                     animate={{opacity:1}}>
//                   <MotionText color={"#fff"} textItems={[
//                       {
//                           type: "h3",
//                           text: "Hi,",
//                           style: {width: 70, height:70}
//                       },
//                       {
//                           type: "h3",
//                           text: "I'm Jeremy,",
//                       },
//                       {
//                           type: "h6",
//                           text: "Fullstack Web Developer | SLC, UT",
//                       }
//                   ]} visible={true} bounce={0.1} custom={0.045} duration={0.4}/>
//               </motion.div>
//           </div>
//       </motion.div>
// )
// function Landing(props){
//     const [state, setState] = React.useState({
//         visible:true
//     })
//     return(
//           <div   id={"Landing"} style={{alignContent: "center",display: 'flex', flexDirection: "column",justifyContent:'center', minWidth:390, width: "fit-content"}}>
//               <div
//                     style={{
//                         position: "relative",
//                         height: "100vh",
//                         justifyContent: "center", alignItems:'center',width: "100%",display: 'flex', flexDirection: "column"}}>
//                   <div
//                         style={{display: 'flex',alignItems: "center", justifyContent:"center"}}>
//                       <Me/>
//                   </div>
//                   {/*<motion.img*/}
//                   {/*    drag*/}
//                   {/*    dragMomentum={false}*/}
//                   {/*    animate={{opacity:1}}*/}
//                   {/*    initial={{opacity:0}}*/}
//                   {/*    transition={{duration: 0.5, type: 'spring', bounce: 0.4}}*/}
//                   {/*    whileDrag={{scale:1.7, zIndex:20011, boxShadow: "2px 2px 9px 0 lightgray", borderRadius: "0 50% 50% 50%"}}*/}
//                   {/*    src={cert} alt={"certification"} width={120} height={120} style={{scale: 1, y:0, x:0, zIndex:1000, position: 'absolute',top: 0,right:0}}/>*/}
//
//               </div>
//               <motion.div
//                     initial={{x: "-100%", opacity: 0}}
//                     transition={{duration: 0.6}}
//                     whileInView={{x: 0, opacity: 1}}
//                     id="Landing-about" style={{marginTop: 5, minWidth:390, height: "100%"}}>
//                   <motion.div
//                         style={{position: 'relative', x: 0,  opacity: 1, width: "auto", borderBottom: "1px solid black"}}>
//                       <MotionText color={"rgb(5,5,5)"} textItems={[{type: "h2", text: "About"}]} visible={true} bounce={0.4} custom={0.002} duration={0.4}/>
//                   </motion.div>
//                   <About/>
//               </motion.div>
//               <motion.div
//                     initial={{x: "-100%", opacity: 0}}
//                     transition={{duration: 0.6}}
//                     whileInView={{x: 0, opacity: 1}}
//                     id={"Landing-contact"} style={{marginTop: 15, minWidth: 390, height: "100%"}}>
//                   <motion.div
//                         style={{position: 'relative', left: 0, width: "auto",  borderBottom: "1px solid black"}}>
//                   </motion.div>
//                   <Contact/>
//               </motion.div>
//           </div>
//     )
//
// }
//
// export default Landing;