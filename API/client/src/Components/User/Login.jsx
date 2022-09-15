import {useMutation, gql} from '@apollo/client';
import {motion, useInView} from 'framer-motion';
import {Input, Spacer, Text, Container, Button, NextUIProvider, createTheme} from '@nextui-org/react';
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Text as MText} from '../Text/Text';
import * as Io from 'react-icons/io5';
import "./user.css"
const loginMutation = gql`
    mutation Mutation($email: String!, $password: String!) {
        login(email: $email, password: $password){
            _id
            token
        }
    }
`

function Login(){
    const nav = useNavigate();
    const [state, setState] = useState({
        email: '',
        password:'',
    })
    const [login] = useMutation(loginMutation);
    const handleSubmit = async(e) => {
        e.preventDefault();
        await login({
            variables:{
                email: state.email,
                password:state.password
            },
            onCompleted: ({login})=>{
                localStorage.setItem('token', login.token);
                localStorage.setItem('userId', login._id);
                nav('/user/'+login._id);
            },
            onError:(e)=>{
                console.log(e);
            }
        })
    }
    const ref = React.useRef(null);
    const inView = useInView(ref, {once:false})
    return(
       <motion.div
          transition={{duration: 0.6, type:'spring', bounce: 0.2}}
          animate={{x: 0}}
          initial={{x:"-100%"}}
          style={{padding: 25,height: "100%",position: 'absolute',width: "100%", display: 'flex', justifyContent: 'center', alignItems: "center", top: "calc(50vh - 100px)"}}>
           <Container
              style={{justifySelf: "center",alignSelf: 'center',position: 'absolute',display: 'flex', alignItems: 'center', justifyContent: 'center'}}
              xs>
               <motion.form
                  onSubmit={handleSubmit}
                  id={"register-form"}
                  style={{width: "100%",display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                   <motion.div
                      ref={ref}
                      style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}
                      transition={{delay: 0.2, duration: 0.5, type: "spring", bounce: 0.2}}
                      animate={{y:0}}
                      initial={{y: 0}}>
                       <MText text={"Sign In"} visible={true} element={motion.h2} speed={0.06}/>
                   </motion.div>
                   <Spacer x={0} y={1.75}/>
                   <Input
                      contentRight={<Io.IoMailOutline/>}
                      css={{width: "90%"}}
                      color={"warning"}
                      onChange={(e)=>setState({...state,email:e.target.value})}
                      label={"Email"}
                      placeholder={"email@example.com"}
                      aria-label={"email"}
                      bordered/>
                   <Spacer x={0} y={1.75}/>
                   <Input.Password
                      visibleIcon={<Io.IoEyeOffOutline/>}
                      hideToggle={false}
                      hiddenIcon={<Io.IoEyeOutline/>}
                      css={{width: "90%"}}
                      color={"warning"}
                      onChange={(e)=>setState({...state, password: e.target.value})}
                      label={"Password"}
                      aria-label={"password"}
                      bordered/>
                   <Spacer x={0} y={1.75}/>
                   <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: "90%"}}>
                       <Button
                          type={"submit"}
                          css={{
                              background: "$warning"
                          }}>
                           Sign In
                       </Button>
                       <Button
                          onPress={()=> {
                              nav('/register')
                          }}
                          ghost
                          color={"warning"}
                          css={{
                              marginInline:25,
                          }}
                          auto>
                           Sign Up
                       </Button>
                   </div>
               </motion.form>
           </Container>
       </motion.div>
    )
}
export default Login;