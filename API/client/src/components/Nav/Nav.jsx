import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Navbar} from '@nextui-org/react';
import {Link as RLink} from 'react-router-dom';
import {motion} from 'framer-motion';
import * as I from 'react-icons/io5';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state={
            open: false,
            window: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state!==nextState || this.props!==nextProps;
    }
    componentDidMount() {
        window.addEventListener('resize', ()=>{
            this.setState({
                ...this.state,
                window: {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            });
        })
    }
    componentDidUpdate(prevProps, prevState) {}
    componentWillUnmount() {
        window.removeEventListener('resize', ()=>{
            this.setState({
                ...this.state,
                window: {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            });
        })
    }
    render() {
        const draw = {
            hidden: { pathLength: 0, opacity: 0 },
            visible: (i) => {
                const delay = 1 + i * 0.5;
                return {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
                        opacity: { delay, duration: 0.01 }
                    }
                };
            }
        };
        const container={
            closed:{
                x: -250,
                transition:{
                    duration: 0.3, type:'spring', bounce:0,
                }
            },
            open:{
                x: 0,
                transition:{
                    duration: 0.3, type:'spring', bounce:0,
                }
            }
        }
        const navVariants={
            closed:{
                x:0,
                width: "100vw",
                transition:{
                    duration: 0.3, type:'spring', bounce:0,
                }
            },
            open:{
                x: 250,
                width: "calc(100vw - 250px)",
                transition:{
                    duration: 0.3, type:'spring', bounce:0,
                }
            }
            
        }
        
        
        const LRef = React.forwardRef((props, ref)=>{
            return (<RLink to={props.to} {...props} ref={ref}/>)
        }), Link = motion(LRef);
        return (
           <>
           <motion.div
              style={{zIndex:1000}}
              animate={this.state.open?"open":"closed"}
              initial={"closed"}
              variants={navVariants}
              id={"Navbar"}>
               <motion.div
                    style={{display: 'flex', alignItems: 'center'}}
                    id={"Toolbar"}>
                   <motion.button
                        onClick={()=>{this.setState({...this.state,
                        open: !this.state.open})}}
                        id={"SidebarToggle"}
                        style={{zIndex:1000,display: 'flex', justifyContent:'center', alignItems: "center", height: 40, width: 40}}
                        whileTap={{scale: 0.9}}
                        whileHover={{scale:1.1}}>
                       <I.IoMenuOutline/>
                   </motion.button>
                    <motion.ul
                        style={{marginInline: 20, padding: 0, position: 'absolute', right: 0, display: 'flex', listStyleType: 'none', alignItems: 'center', height: "100%"}}>
                        <Link
                            whileHover={{scale:1.1}}
                            whileTap={{scale:0.9}}
                           to={"/"}>Home</Link>
                    </motion.ul>
               </motion.div>
           </motion.div>
          
           <motion.div
              animate={this.state.open?"open":"closed"}
              initial={"closed"}
              variants={container}
              style={{zIndex:1000,width: 250, height:"100vh", background: "lightgray", position: 'fixed'}}
              id={"Sidebar-panel"}>
               <motion.div id={"Sidebar"}>
                   <motion.ul>
                       <motion.li>
                       
                       </motion.li>
                   </motion.ul>
               </motion.div>
           </motion.div>
           </>
        );
    }
}

Navigation.propTypes = {};

export default Navigation;
