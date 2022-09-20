import React, {Component, useCallback} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {motion} from 'framer-motion';
import Navbar from "./Components/Navigation/Navbar";
import Home from "./Components/Pages/Home/_Home";
import {ContactPage} from "./Components/Pages/Contact/Contact";
import Register from "./Components/User/Register";
import MotionText from "./Components/Motion/Text";
import About from "./Components/Pages/About/About";
import Login from "./Components/User/Login";
import User from "./Components/User/User";
import {FToggle} from "./Components/Motion/toggle";
import {Text as NText} from '@nextui-org/react';
import Chat from "./Components/Pages/Contact/Chat";
import {loadFull} from 'tsparticles';
import {default as Particles} from "react-tsparticles";
import {Text} from "./Components/Text/Text";
import Projects from "./Components/Pages/Projects/Projects";
import chewy from './assets/images/chewy2.png';
import logo from './assets/images/pfp.webp';
import * as I from 'react-icons/io5';
import {Navbar as NBar} from 'motion-ui-react';
import {ParticleSingleImage} from "./Components/Motion/particle-image";
import Art from './Components/Pages/Art';
// import {Navbar as NBar} from 'ja-ui-components/src/Navbar';
const TextRef=React.forwardRef((props, ref)=>{
   return(<NText
      ref={ref}
      {...props}/>)
})
const LRef = React.forwardRef((props, ref)=>{
   return <Link to={props.to} ref={ref} {...props}/>
}), MLink = motion(LRef);

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    render() {
        const AboutPage= (props)=>{
            return(
               <motion.div
                  initial={{y: "100%", opacity: 0}}
                  transition={{duration: 0.6}}
                  animate={{y: 0, opacity: 1}}
                  id="Landing-about" style={{position: 'relative', marginTop:80, minWidth:390, height: "calc(100vh - 80px)"}}>
                   <motion.div
                      className={"centered"}
                      style={{top: 20, position: 'relative'}}>
                      <MotionText
                         h1
                         color={"#f1f1f1"}
                         text={"Skills & About"}
                         element={motion(TextRef)}
                         bounce={0.1}
                         custom={0.035}
                         duration={0.5}/>
                   </motion.div>
                     <div style={{position: 'absolute'}}>
                     </div>
                   <About/>
               </motion.div>
            )
        }
        const selectedColor="hsla(10, 100%, 45%, 0.8)";
        const items = [
            {
                text: "Home",
                to: "/",
                  selectedColor,
                  linkElement: 'link'
            },{
                text:"About",
                to: "/about",
                    selectedColor,
                    linkElement: "link"
            }, {
                text: "Contact",
                to: "/contact",
                    selectedColor,
                    linkElement: "link"
            }, {
               text: "Demos",
               to: "/demos",
                    selectedColor,
                    linkElement: 'link'
           }];
       
        return (
            <motion.div>
               
               <Navbar items={items}/>
               <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/about"} element={<AboutPage/>}/>
                  <Route path={"/contact"} element={<ContactPage/>}/>
                  <Route path={"/register"} element={<Register/>}/>
                  <Route path={"/demos"} element={<Projects/>}/>
                  <Route path={"/login"} element={<Login/>}/>
                  <Route path={"/chewy"} element={<div className={"ParticleContainer"}><ParticleSingleImage src={chewy}/></div>}/>
                  <Route path={"/posts"} element={<div/>}/>
                  <Route path={"/user/:id"} element={<User/>}/>
                  <Route path={"/chat"} element={<Chat/>}/>
                  <Route path={"/skankhill"} element={<Art/>}/>
               </Routes>
            </motion.div>
        );
    }
}

App.propTypes = {};

export default App;
class FAB extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false
        }
        this.toggle=this.toggle.bind(this);
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {}
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {}
    toggle(){
        this.setState({
            ...this.state,
            open:!this.state.open
        });
    }
    render() {
       const items =[
          {
             text: "Home",
             icon:I.IoHomeOutline,
             to: "/"
          },
          {
             text: "Bio",
             icon: I.IoPersonCircleOutline,
             to: "/bio"
          },
          {
             text: "Chat",
             icon: I.IoMailOutline,
             to: "/chat"
          }
       ];
       
        return (
           <motion.div
              className={"background-blur"}
              style={{
                  overflow: 'hidden',
                  background: `linear-gradient(112deg, hsla(50, 80%, 32%, 0.3) -40%, hsla(10, 80%, 49%, 0.5) 100%)`,
                  zIndex:10000, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 10}}
              animate={{
                 borderRadius: this.state.open? 20:10,
                width: this.state.open?"calc(100vw - 60px)":55,
                height: this.state.open?105:55,
                 maxWidth: 500,
              }}
              transition={{duration: 0.5, type:'spring', bounce: 0.1}}
              initial={{width: 55, height: 55, borderRadius: 10, maxWidth: 500}}>
                <>
                   <motion.button
                      whileTap={{scale:0.7}}
                      transition={{duration:0.5, type: 'spring', bounce: 0.1}}
                      onClick={this.toggle}
                      className={"centered-column"}
                      animate={{right: this.state.open?5:0, bottom: this.state.open?45:0}}
                      style={{
                         scale:0.8,
                         cursor: 'pointer',
                         borderRadius: 10,
                         position: 'absolute',
                         right: 0, bottom:0,
                         width: 55, height: 55,}}>
                      <FToggle open={this.state.open}/>
                   </motion.button>
                </>
              <motion.ul
                 transition={{duration: 0.5, type: 'spring', bounce: 0.1}}
                 animate={{
                    y: this.state.open?0:100,
                    left: this.state.open?20:-200,
                    height: this.state.open?"auto":0
              }}
                 style={{
                    overflow: 'hidden',
                    margin:0,
                    left: -200,
                    padding:0,
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    position: 'absolute',
              }}>
              {items.map((item, index)=>{
                 return(
                    <MLink
                       onClick={()=>this.setState({
                          open:!this.state.open
                       })}
                       to={item.to}
                       animate={{opacity: this.state.open?1:0}}
                       style={{textDecoration: 'none', color: 'white',overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin:"0 20px",}}
                       key={item.to+index}>
                       <item.icon
                          key={index}
                          size={35}/>
                       <NText
                          key={item.text+index}>
                           {item.text}
                       </NText>
                    </MLink>
                 )
              })}
              </motion.ul>
           </motion.div>
        );
    }
}


export {FAB}

