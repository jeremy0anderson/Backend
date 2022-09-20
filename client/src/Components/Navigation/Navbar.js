import React from "react";
import {Text} from "@nextui-org/react";
import {Text as MText} from '../Text/Text';
import {motion, MotionConfig} from 'framer-motion';
import {CgMenu} from "react-icons/cg";
import {Link} from "react-router-dom";
import Toggle from "../Motion/toggle";
import "./nav.css"
import MotionText from "../Motion/Text";
// class Drawer extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state= {
//             open: false
//         }
//     }
//     componentDidMount() {}
//     shouldComponentUpdate(nextProps, nextState, nextContext) {return this.props!==nextProps || this.state!==nextState || this.context!==nextContext;}
//     componentDidUpdate(prevProps, prevState, snapshot) {
//
//     }
//     componentWillUnmount() {}
//
//     toggle(){
//         this.setState({
//             ...this.state,
//             open: !this.state.open
//         })
//     }
//     render(){
//         return(
//               <motion.div
//                     style={{
//                         backdropFilter: "blur(3px)",
//                         display: 'flex', alignItems: 'center', position: "fixed!important", left: 0,height: 60, width: "100vw"}}
//                     id={"Navbar"}>
//                   <motion.div
//                         id={"Toolbar"}
//                         style={{background: 'transparent', display: 'flex', alignItems: 'center',width: "100vw", height: 60}}>
//
//                   </motion.div>
//               </motion.div>
//         )
//     }
//
// }


class Navbar extends React.Component{
      window={
         width: window.innerWidth,
         height: window.innerHeight
      }
    constructor(props) {
        super(props);
        this.state= {
            open:false,
            activeTabID: window.location.pathname==="/"?"HOME":window.location.pathname.split('/')[1].toUpperCase()
        }
        this.toggle=this.toggle.bind(this);
    }
    componentDidMount() {
        window.addEventListener('resize', (e)=>{
           this.window= {
              width: e.target.innerWidth,
              height: e.target.innerHeight
           }
        })
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {return this.props!==nextProps || this.state!==nextState || this.context!==nextContext;}
    componentDidUpdate(prevProps, prevState, snapshot) {
         // document.getElementById(`${this.state.activeTabID}-top`).style.backgroundColor="rgba(229,61,0,0.32)"
    }
    componentWillUnmount() {
        window.removeEventListener('resize', (e)=> {
           this.window= {
              width: e.target.innerWidth,
              height: e.target.innerHeight
           }
        });
    }
    
    toggle(){
        this.setState({
            ...this.state,
            open:!this.state.open
        })
    }
    render(){
        const navbarVariants= {
            closed:  {
                height: 65
            },
            open: {
                height: (this.props.items.length*65) + 65,
            }
        };
        const toolbarVariants={
            closed:  {
                height: 65,
            },
            open: {
                  height: (this.props.items.length * 65) + 65,
            }
        }
        
          const LRef = React.forwardRef((props, ref)=>{
                return <Link to={props.to} {...props} ref={ref}/>
          }), MLink = motion(LRef);
        const TextRef=React.forwardRef((props, ref)=>{
           return(<Text
              ref={ref}
              {...props}/>)
        })
       const T = motion(TextRef);
        const Inner = (props) => {
           return <T span {...props}/>
        }
        return(
              <MotionConfig
                 transition={{type:'spring', bounce: 0.2, duration: 0.5}}>
                  <motion.div
                        custom={this.state}
                        animate={this.state.open?"open":"closed"}
                        initial={"closed"}
                        variants={navbarVariants}
                        style={{
                            boxShadow: '2px 2px 10px -1px rgba(20, 20, 20, 1)',
                            width: '100vw',
                            zIndex: 1002,
                            position: 'fixed',
                            top: 0, left: 0,
                            display: 'flex',
                            borderBottomRightRadius: 0,
                            borderBottomLeftRadius: 0,
                            justifyContent: 'center',
                            alignItems: 'center'}}
                        id={"Navbar-container"}>
                      <motion.div
                            custom={this.state}
                            animate={this.state.open?"open":"closed"}
                            initial={"closed"}
                            variants={toolbarVariants}
                            style={{
                                top: 0,
                                overflow: "hidden",
                                width: "100%",
                                display: 'flex',
                                borderBottomRightRadius: 'inherit',
                                borderBottomLeftRadius: 'inherit',
                                alignItems: 'center',
                                background: `linear-gradient(112deg, hsla(50, 80%, 32%, 0.6) -40%, hsla(10, 80%, 49%, 0.6) 100%)`
                            }}
                            id={"Toolbar"}>
                          <motion.button
                                id={"expand-menu"}
                                whileHover={{scale:1.1}}
                                whileTap={{scale:0.9}}
                                onClick={this.toggle}
                                style={{
                                   cursor:'pointer',
                                    display: 'flex',
                                    alignItems: 'center', justifyContent: 'center',
                                    position: 'absolute',
                                    top: 12.5,
                                    borderRadius:15,
                                      padding:0,
                                    width: 40, height: 40, marginInline: 10}}>
                                    <Toggle open={this.state.open}/>
                                       {/*<CgMenu size={25}/>*/}
                          </motion.button>
                              <motion.ul
                                  id={"nav-horizontal-menu"}
                                  style={{
                                           position: 'absolute',
                                           right: 20,
                                           marginInline: 10,
                                           top:0,
                                           padding: 0,
                                           height: 65,
                                           alignItems: 'center',
                                           justifyContent: 'space-around',
                                           margin: 0,
                                           display: this.state.open?"none":'flex',
                                           listStyleType: "none"}}>
                                     {this.props.items.map((item, index)=>{
                                           return (
                                                 <MLink
                                                      id={item.text.toUpperCase()+'-top'}
                                                      onClick={()=>{
                                                         // e.preventDefault();
                                                         this.setState({
                                                            ...this.state,
                                                            open:false,
                                                            activeTabID: item.text.toUpperCase()
                                                         })
                                                      }}
                                                      whileHover={{scale:1}}
                                                       whileTap={{scale: 1}}
                                                       style={{
                                                          borderRadius:12,
                                                          textDecoration:'none',
                                                          color:'white',
                                                          padding:15,
                                                          background: 'hsla(190, 20%, 50%, 0.0)',
                                                          width: "100%",
                                                          height: "100%",
                                                          display: 'flex',
                                                          // marginInline:15,
                                                          justifyContent: 'center',
                                                          alignItems: 'center'}}
                                                       key={item.text+index}
                                                       to={item.to}>
                                                        {item.text}
                                                 {this.state.activeTabID === item.text.toUpperCase() && (
                                                       <motion.div
                                                             style={{width: "100%", background: "white", height: 2, position: 'absolute', bottom: 2}}
                                                             layoutId={"tabs"}/>
                                                 )}
                                                 </MLink>
                                           )
                                     })}
                              </motion.ul>
                              <motion.ul
                                 animate={{
                                    height:this.state.open?this.props.items.length*65:0,
                                    opacity:this.state.open?1:0
                              }}
                                 transition={{type:'spring', bounce: 0.1, duration: 0.4}}
                                 initial={{opacity:0, top: 65, height: 0}}
                                 id={"nav-vertical-menu"}
                                 style={{
                                    overflow:'hidden',
                                    position: "absolute",
                                    width: "100%",
                                    padding:0,
                                    left:0,
                                    margin:0,
                                    display: 'flex', flexDirection: 'column', justifyContent: "center",alignItems: 'center'
                                 }}>
                                 {this.props.items.map((item, index)=>{
                                    return (
                                       <MLink
                                          id={item.text.toUpperCase()}
                                          onClick={(e)=>{
                                             this.setState({
                                                ...this.state,
                                                open:false,
                                                activeTabID: e.currentTarget.id
                                             })
                                          }}
                                          whileHover={{scale:1.08}}
                                          whileTap={{scale: 0.9}}
                                          style={{
                                             height: 65,
                                             width: "100%",
                                             textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                          key={item.text+index}
                                          to={item.to}>
                                          <Text h5 css={{
                                             padding: 0,
                                             // margin:"0 15px",
                                             color: "$text"
                                          }}>{item.text}</Text>
                                       </MLink>
                                    )
                                 })}
                              </motion.ul>
                              <motion.div
                                 style={{
                                    opacity: this.state.open?0:1,
                                    overflow:"hidden", padding: 0,margin: 0, width: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                                 className={'brand-right'}
                                 id={"Brand"}>
                                 <MText
                                    color={"rgba(255,134,99,0.74)"}
                                    style={{fontWeight: "bolder",
                                       display: 'flex', margin: 0, padding: 0, justifyContent: 'center', alignItems: "center"}}
                                    h5
                                    visible={true}
                                    speed={0.05}
                                    element={motion(TextRef)}
                                    text={this.state.activeTabID}
                                   />
                              </motion.div>
                              {this.props.children}
                      </motion.div>
                  </motion.div>
              </MotionConfig>
        )
    }
}

export default Navbar;