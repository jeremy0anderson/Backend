import * as React from 'react';
import logo from './logo.svg';
import './components/Nav/nav.css';
import {Nav} from "./components";
import {motion} from "framer-motion";
import {Link as RLink, Routes, Route} from 'react-router-dom';
import {ForwardedRef} from "react";
import {Login} from "./components/Auth";
import {Button} from "@nextui-org/react";


const Menu =(props:any)=> {
    const LRef = React.forwardRef((props:any, ref:ForwardedRef<any>)=>{
        return <RLink ref={ref} to={props.to} {...props}/>
    }), Link = motion(LRef);
    return (
        <motion.ul
            id={"Navbar-menu"}
            transition={{duration: 0.5, staggerChildren: 0.09}}
            style={{display: 'flex',
                justifyContent: 'center', alignItems: 'center',
                listStyleType:"none",color: 'white', margin:"5px 10px 5px 10px", padding:0, overflow: "hidden"}}>
            {props.items.map((item:string, index:number)=>{
                return (
                    <motion.li
                        whileTap={{scale:0.97}}
                        whileHover={{scale:1.07}}
                        key={index+item}
                        style={{position: "relative", marginInline: 18, top:"-100%"}}
                        animate={{top: 0}}>
                        <Link
                            style={{textDecoration: "none", color: "white"}}
                            to={item === "Home"?"/":item.replaceAll(" ", "").toLowerCase()}>
                            {item}
                        </Link>
                    </motion.li>
                )
            })}
        </motion.ul>
    )
}

function App() {
  return (
    <div className="App">
        <Nav background={"#000"} anchor={"right"}>
            <div style={{margin:0, padding:0, display: 'flex', justifyContent:'center', alignItems:'center'}}>
                <Menu items={["Home", "Sign In"]}/>
            </div>
        </Nav>
        <div style={{display: 'flex', position: "absolute", top: 80}}>

        </div>
        <Routes>
            <Route path={"/"} element={<div/>}/>
            <Route path={"/signin"} element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
