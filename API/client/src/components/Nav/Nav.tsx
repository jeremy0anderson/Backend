import * as React from 'react';
import {Link} from 'react-router-dom';
import {motion} from "framer-motion";
import {NavProps, NavState} from "../interface";
import * as IO from 'react-icons/io5';

const Box = motion.div;
let right={right: 0};
let left = {left: 0};
class Nav extends React.Component<NavProps, NavState>{
    constructor(props:NavProps) {
        super(props);
        this.state={
            open:false
        }
        this.toggle=this.toggle.bind(this);
    }

    shouldComponentUpdate(nextProps: Readonly<NavProps>, nextState: Readonly<NavState>): boolean {
        return this.props!==nextProps || this.state!==nextState;
    }
    componentDidMount() {}
    componentDidUpdate(prevProp: Readonly<NavProps>, prevState: Readonly<NavState>) {
       let props =  prevProp; let state = prevState;
    }
    componentWillUnmount() {

    }
    toggle=()=>{
        this.setState({
            open:!this.state.open
        })
    }
    ToggleIcon=(props:any)=>{
        let right={right: 10};
        let left = {left: 10};
        return (
        <motion.button
            id={"Sidebar-toggle"}
            whileTap={{scale: 0.93}}
            whileHover={{scale:1.07}}
            onClick={props.onToggle}
            style={{
                zIndex: 1000, justifyContent: 'center', alignItems: 'center', alignContent: 'center',
                position: "absolute",...props.anchor==="right"?right:left,
                background: "none", borderStyle: "none", cursor: "pointer",height: 50, width: 50}}>
            <IO.IoGrid style={{color: "white"}} size={30}/>
        </motion.button>
        )
    }
    render(){
        const sideVariants = {
            closed:{
                opacity:0,
                x:this.props.anchor==="right"?"-150%":0,
                transition:{
                    duration: 0.4, type: 'spring', bounce: 0.2
                }
            },
            open:{
                opacity: 1,
                x:this.props.anchor==="right"?"calc(100% - 250px)":0,
                transition:{
                    duration: 0.4, type: 'spring', bounce: 0.2
                }
            }
        }
        const navVariants= {
            closed: {
                width: "100vw",
                transition: {
                    duration: 0.4, type: 'spring', bounce: 0.2

                }
            },
            open: {
                width: "calc(100vw - 250px)",
                ...this.props.anchor==="right"?right:left,
                transition: {
                    duration: 0.4, type: 'spring', bounce: 0.2

                }
            }
        }
        return(
            <div>
                <Box
                    animate={this.state.open||this.props.open?"open":"closed"}
                    initial={"closed"}
                    variants={navVariants}
                    style={{
                        position: "absolute",
                        width: "100%", height:70, background: this.props.background || "lightslategray"}}
                    id={"Navbar"}>
                    <Box
                        style={{display: 'flex', width: "100%", height: "100%", margin:0, alignItems: "center", }}
                        id={"Toolbar"}>
                        <this.ToggleIcon anchor={this.props.anchor} onToggle={this.props.onToggle?this.props.onToggle:this.toggle}/>
                            {this.props.children}
                    </Box>
                </Box>
                <Box
                    animate={this.state.open||this.props.open?"open":"closed"}
                    initial={"closed"}
                    variants={sideVariants}
                    style={{
                        position: "absolute",...this.props.anchor==="right"?left:right,
                        width: 250, height: "100vh",
                        background: this.props.sidebarBackground || 'lightgray'
                    }}
                    id={"Sidebar"}>
                    
                    
                </Box>
            </div>
        )
    }
}
export default Nav;