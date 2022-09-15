import * as React from "react";
import {Route, Routes} from "react-router-dom";
// import {default as C} from './Components';
// import {Projects} from "./Components/Pages/Projects/Projects";
// import {Navigation, Nav} from 'ja-ui-react';
import MotionText from "./Components/Motion/Text";
import {Octokit} from "octokit";
// import {Link} from 'react-router-dom';
// import cert from './assets/images/coding-bootcamp-full-stack-developer-certificate.1.webp';
// import {useEffect} from "react";
import {motion} from "framer-motion";
import Home from './Components/Pages/Home/Home';
import Navbar from './Components/Navigation/Navbar';
import {ContactPage} from "./Components/Pages/Contact/Contact";
import About from './Components/Pages/About/About';
import Register from "./Components/User/Register";
import Login from "./Components/User/Login";
import {Text} from './Components/Text/Text';
const octokit = new Octokit(process.env.REACT_APP_GH_ACCESS_TOKEN);
    octokit.request('GET /users/jeremy0anderson/repos').then(({data})=> {
        localStorage.setItem('gh-data', JSON.stringify(data));
    });
    const AboutPage= (props)=>{
          return(
                <motion.div
                      initial={{y: "-100%", opacity: 0}}
                      transition={{duration: 0.6}}
                      whileInView={{y: 0, opacity: 1}}
                      id="Landing-about" style={{position: 'relative', top: 60, marginTop: 5, minWidth:390, height: "100vh"}}>
                      <motion.div
                         style={{position: 'relative', x: 0,  opacity: 1, width: "auto", borderBottom: "1px solid black"}}>
                            <MotionText color={"rgb(225,225,225)"} textItems={[{type: "h2", text: "About"}]} visible={true} bounce={0.4} custom={0.002} duration={0.4}/>
                      </motion.div>
                      <About/>
                </motion.div>
          )
    }
    
    
    
class App extends React.Component{
      constructor(props) {
            super(props);
            this.state={
                  
            }
      }
      render(){
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
               }];
            return(
                  <div style={{width: "auto"}}>
                              {/*<Navigation anchor={"top"} items={items}  menuBackground={'rgb(40,40,40)'} background={'rgb(20, 20, 20)'}>*/}
                              
                              {/*</Navigation>*/}
                        <Navbar items={items}/>
                        
                        <Routes>
                              <Route path={"/"} element={<Home/>}/>
                              <Route path={"/about"} element={<AboutPage/>}/>
                              <Route path={"/contact"} element={<ContactPage/>}/>
                              <Route path={"/register"} element={<Register/>}/>
                              <Route path={"/login"} elemnt={<Login/>}/>
                        </Routes>
                  </div>
            )
      }      
}
export default App;


