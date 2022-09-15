import React, {Component} from 'react';
import {Spacer,Button, Text, Input, Textarea} from '@nextui-org/react';
import {init, send} from '@emailjs/browser';
import {TailSpin} from "react-loader-spinner";
import {motion} from 'framer-motion';
import * as I from "@mui/icons-material";
import MotionText from "../../Motion/Text";
import {Text as MText} from '../../Text/Text';

init(process.env.REACT_APP_PUBLIC_KEY);

class Contact extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            name: "",
            email:"",
            subject:"",
            message:"",
            resMessage:'',
            emailError:false,
            nameError:false,
            messageError:false,
            subjectError:false,
            replay:true,
            window: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
        this.handleSubjectChange = this.handleSubjectChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameBlur = this.handleNameBlur.bind(this);
        this.handleEmailBlur = this.handleEmailBlur.bind(this);
        this.handleSubjectBlur = this.handleSubjectBlur.bind(this);
        this.handleMessageBlur = this.handleMessageBlur.bind(this);
        this.handleResize=this.handleResize.bind(this);
    }

    //lifecycle
    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
        
    }
    componentDidUpdate(prevProps, prevState) {
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }

    //event handlers
    handleResize(){
        this.setState({
            ...this.state,
            window:{
                width: window.innerWidth,
                height: window.innerHeight
            }
        })
    }
    handleNameBlur(e){
        this.setState({
            ...this.state,
            nameError:!this.state.name.length
        })
    }
    handleEmailBlur(e){
        //eslint-disable-next-line
        const rx = /^([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|\[[\t -Z^-~]*])$/;
        if (rx.test(e.target.value)){
             return  this.setState({
                    ...this.state,
                    emailError: false
                })
            }
        if (rx.test(e.target.value) === false ){
         return this.setState({
                 ...this.state,
                 emailError: true
             })
         }
        if (rx.test(e.target.value) === false || e.target.value.length === 0){
            return this.setState({
                ...this.state,
                emailError: true,
                emailErrorMessage: ""
            })
        }
    }
    handleSubjectBlur(e){
        this.setState({
            ...this.state,
            subjectError:!e.target.value.length
        })
    }
    handleMessageBlur(e){
        this.setState({
            ...this.state,
            messageError:!e.target.value.length
        })
    }
    handleNameChange(e){
        this.setState({
            ...this.state,
            name:e.target.value,
            nameError:false
        })
    }
    handleEmailChange(e){
        this.setState({
            ...this.state,
            email:e.target.value,
            emailError:false
        })
    }
    handleSubjectChange(e){
        this.setState({
            ...this.state,
            subject:e.target.value,
            subjectError:false
        })
    }
    handleMessageChange(e){
        this.setState({
            ...this.state,
            message:e.target.value,
            messageError: false
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.setState({
            ...this.state,
            loading: true,
        })
        send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, {
            ...this.name,
            ...this.email,
            ...this.subject,
            ...this.message
        }, process.env.REACT_APP_PUBLIC_KEY).then((res)=>{
            if (res.status === 200 && res.text === "OK"){
                this.setState({
                    ...this.state,
                    loading: false,
                    resMessage: "Message Sent!"
                });
                setTimeout(()=>{
                    this.setState({
                        ...this.state,
                        name: "",
                        email:"",
                        subject:"",
                        message:"",
                        resMessage: ""
                    });
                },1500);
            }
        })
    }


    //render
    render() {
        return (
            <motion.div
               id={"#Contact-form-main"}
                style={{zIndex:998, display: 'flex', width: "100%", flexDirection:'column', alignItems:'center'}}>
                {/*<motion.div*/}
                {/*   style={{display: 'flex',position: 'relative', width: "100%", justifyContent: 'center', alignItems: 'center'}}>*/}
                {/*    <MotionText color={"rgb(0,0,0)"} textItems={[{type: "h4", text: "Send me a message"}]} visible={true} bounce={0} custom={0.014} duration={0.3}/>*/}
                {/*</motion.div>*/}
                <motion.div
                    style={{
                        width: '100%',
                        maxWidth: 800,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: "center",
                        alignContent: "center"}}>
                    <motion.div
                        style={{
                            maxWidth: 800,
                            width: "100%",
                            position: "relative",
                            overflow: "visible",
                            padding: 20,
                            display: 'flex',
                            // gridTemplate: "auto auto / auto",
                            justifyContent:'center',
                            alignItems: 'center',
                            margin:5}}>
                        <motion.form
                            style={{width: '100%', display: 'flex', flexDirection: "column"}}
                            id={"Contact-form"}
                            onSubmit={this.handleSubmit}>
                            <motion.div
                                  id={"contact-fields"}
                                  style={{
                                        width: "auto",
                                        padding: 2,
                                        overflow:'hidden',
                                        display:'flex',
                                        justifyContent: "center",
                                }}>
                                <Spacer y={1} className={"spacer"}/>
                                <Input
                                    className={"contact-input"}
                                    bordered
                                    label={"Name"}
                                    color={this.state.nameError?"error":"warning"}
                                    onChange={this.handleNameChange}
                                    helperText={this.state.nameError?"Name required":" "}
                                    onBlur={this.handleNameBlur}
                                    required={true}
                                    value={this.state.name}
                                    helperColor={"error"}
                                    contentLeft={<I.Person/>}/>
                                <Spacer y={1} className={"spacer"}/>
                                <Input
                                    className={"contact-input"}
                                    bordered
                                    type={"email"}
                                    required={true}
                                    onBlur={this.handleEmailBlur}
                                    color={this.state.emailError?"error":"warning"}
                                    onChange={this.handleEmailChange}
                                    helperText={this.state.emailError?"Enter a valid email":" "}
                                    value={this.state.email}
                                    helperColor={"error"}
                                    label={"Email"}
                                    contentClickable={true}
                                    enterKeyHint={"next"}
                                    contentLeft={<I.Email/>}/>
                                <Spacer y={1} className={"spacer"}/>
                                <Input
                                      className={"contact-input"}
                                      bordered
                                      required={true}
                                      onBlur={this.handleSubjectBlur}
                                      color={this.state.subjectError?"error":"warning"}
                                      onChange={this.handleSubjectChange}
                                      label={"Subject"}
                                      value={this.state.subject}
                                      helperText={this.state.subjectError?"Subject required":" "}
                                      contentLeft={<I.Subject/>}
                                      helperColor={"error"}/>
                                <Spacer x={1} y={1}/>
                            </motion.div>
                            <Spacer x={0} y={1}/>
                            <motion.div
                                style={{display:'flex', justifyContent: "center", width: "100%"}}>
                                <Spacer className={"textarea-spacer"} x={1} y={0}/>
                                <motion.div style={{display: 'flex', flexDirection: "column",width: "100%", padding:2}}>
                                
                                <Textarea
                                    bordered
                                    onChange={this.handleMessageChange}
                                    required={true}
                                    onBlur={this.handleMessageBlur}
                                    style={{fontFamily: "sans-serif", width: "100%"}}
                                    minRows={4}
                                    value={this.state.message}
                                    label={"Message"}
                                    helperText={this.state.messageError?"Message required":" "}
                                    helperColor={"error"}
                                    color={this.state.messageError?"error":"warning"}/>
                                </motion.div>
                                <Spacer className={"textarea-spacer"} x={1} y={0}/>
                            </motion.div>
                            <Text css={{color: "green", margin: 5}}>{this.state.resMessage}</Text>
                            <Spacer x={0} y={.5}/>
                            <motion.div
                                style={{
                                    display:'flex',
                                    justifyContent: "center",
                                    width: "100%",
                                }}>
                                <Spacer className={"textarea-spacer-column"} x={0} y={1}/>
                                <Spacer className={"textarea-spacer"} x={1} y={1}/>
                                <Button
                                    rounded
                                    color={"warning"}
                                    disabled={this.state.emailError || this.state.nameError || this.state.messageError || this.state.subjectError}
                                    style={{width: "100%",marginTop:15}} type={"submit"}>
                                    {this.state.loading? <TailSpin color="#00BFFF" height={30} width={30} visible={this.state?.loading}/>: "Send"}
                                </Button>
                                <Spacer className={"textarea-spacer"} x={1} y={1}/>
                                
                            </motion.div>
                        </motion.form>
                    </motion.div>
                </motion.div>
            </motion.div>
        );
    }
}


export default Contact;
export function ContactPage(){
    const TRef = React.forwardRef((props, ref)=>{
        return <Text ref={ref} {...props}/>
    });
    const Div = motion.div;
    return (
       <motion.div style={{height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
           <motion.div style={{display: 'flex', flexDirection: 'column',  position: 'absolute', top: 80}}>
               <MotionText
                  h1
                  color={"#f1f1f1"}
                  text={"Contact"}
                  element={motion(TRef)}
                  bounce={0.1}
                  custom={0.035}
                  duration={0.5}/>
               <MotionText
                  h4
                  color={"#eaeaea"}
                  custom={0.034}
                  element={motion(TRef)}
                  text={"Send me an email"}
                  bounce={0.2}
                  duration={0.4}/>
           </motion.div>
           <motion.div
                style={{width: "100%",position: "absolute", top: "30vh"}}
                id={"contact-page-contact"}>
            <Contact/>
           </motion.div>
       </motion.div>
    )
}