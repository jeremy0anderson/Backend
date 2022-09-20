import React from 'react';
import {io} from 'socket.io-client'
import {motion} from 'framer-motion';
import {Button, Input} from "@nextui-org/react";
// const socket = io("http://localhost:4000",{
//    transports: ['websocket', 'polling']
// });
//
//
// socket.on('connect', ()=>{
//    console.log(socket.id);
// })
let uri = "http://localhost:8080"

// const SocketProvider = React.createContext(socket);
const socket = io(
      // 'https://backend-mufac3i3ra-uc.a.run.app'
      uri,{
   autoConnect:false,
   extraHeaders: {
      authorization:`Bearer ${localStorage.getItem('token')}`
   }
   
})
class Chat extends React.Component{
   constructor(props) {
      super(props);
      this.state={
         user:"",
         code: "",
         users: []
      }
   }
   shouldComponentUpdate(nextProps, nextState) {
      return this.state!==nextState || this.props!==nextProps;
   }
   componentDidMount() {
      socket.on('connect', ()=>{
         console.log(socket.id);
         socket.emit('user', {...this.state});
   
      })
      socket.on('user', (newUser)=>{
         this.setState({
            ...this.state,
            users: this.state.users.push(newUser)
         })
      })
   }
   componentDidUpdate(prevProps, prevState) {
      console.log(this.state.user);
   }
   componentWillUnmount() {
      socket.off('connect');
   }
   
   
   render(){
      return(
         <motion.div style={{ height: '100vh', position: 'absolute', width: 300, display: 'flex', alignItems: 'center', left: 'calc(50vw - 150px)',justifyContent: 'center'}}>
               <motion.form onSubmit={async (e)=>{
                  e.preventDefault();
                  await socket.connect();
               }}>
                  <Input bordered
                         label={"Enter your name or email address"}
                        color={'warning'} onChange={(e)=>{this.setState({
                     ...this.state,
                     user: e.target.value
                  })}}/>
                  <Input
                        label={"Enter your own code for people to join or enter one that was given to you"}
                        bordered color={"warning"} onChange={(e)=>{
                     this.setState({
                        ...this.state,
                        code: e.target.value
                     })
                  }}
            css={{display: "absolute", marginBottom: 30}}/>
            <Button type={"submit"} bordered
              >
               Connect
            </Button>
               </motion.form>
         </motion.div>
      )
   }
   
}
export default Chat;
