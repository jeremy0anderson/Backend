import React, {Component, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
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
import {Text} from "./Components/Text/Text";
import {Projects} from "./Components/Pages/Projects/Projects";
import logo from './assets/images/logo192.png'
const TextRef=React.forwardRef((props, ref)=>{
   return(<NText
      ref={ref}
      {...props}/>)
})




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
                   <About/>
               </motion.div>
            )
        }
        const items = [
            {
                text: "Home",
                to: "/",
            },{
                text:"About",
                to: "/about"
            }, {
                text: "Contact",
                to: "/contact"
            }, {
               text: "Projects",
              to: "/projects"
           }
            
            ];
        return (
            <motion.div>
               <Navbar items={items}/>
               {/*<div style={{position: "fixed", bottom: 30, right: 30, zIndex: 10000,}}>*/}
               {/*     <FAB/>*/}
               {/*</div>*/}
               <Routes>
                  <Route path={"/"} element={<Home/>}/>
                  <Route path={"/about"} element={<AboutPage/>}/>
                  <Route path={"/contact"} element={<ContactPage/>}/>
                  <Route path={"/register"} element={<Register/>}/>
                  <Route path={"/projects"} element={<Projects/>}/>
                  <Route path={"/login"} element={<Login/>}/>
                  <Route path={"/posts"} element={<div/>}/>
                  <Route path={"/user/:id"} element={<User/>}/>
                  <Route path={"/chat"} element={<Chat/>}/>
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
        return (
           <motion.div
              className={"background-blur"}
              layout
              style={{
                  background: `linear-gradient(112deg, hsla(50, 80%, 32%, 0.3) -40%, hsla(10, 80%, 49%, 0.5) 100%)`,
                  zIndex:10000, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50}}
              animate={{
                height: this.state.open?"calc(100vw - 60px)":70,
                width: this.state.open?"calc(100vw - 60px)":70
              }}
              transition={{duration: 0.4, type:'spring', bounce: 0.1}}
              initial={{width: 70, height: 70,}}>
                <motion.button
                   layout
                   onContextMenu={(e)=>{
                      e.preventDefault();
                      console.log(e);
                   }}
                   onClick={this.toggle}
                   className={"centered-column"}
                   style={{
                       position: 'absolute',
                       right: 0, top:this.state.open?0:0,
                       width: 70, maxHeight: 70,}}>
                    <FToggle open={this.state.open}/>
                </motion.button>
           </motion.div>
        );
    }
}


export {FAB}

