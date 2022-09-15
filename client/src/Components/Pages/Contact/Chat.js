import React from 'react';
import {io} from 'socket.io-client'
import {motion} from 'framer-motion';
// const socket = io("http://localhost:4000",{
//    transports: ['websocket', 'polling']
// });
//
//
// socket.on('connect', ()=>{
//    console.log(socket.id);
// })


// const SocketProvider = React.createContext(socket);
const socket = io('http://localhost:8080',{
   extraHeaders: {
      authorization:`Bearer ${localStorage.getItem('token')}`
   }
   
})
class Chat extends React.Component{
   constructor(props) {
      super(props);
      this.state={}
   }
   shouldComponentUpdate(nextProps, nextState) {
      return this.state!==nextState || this.props!==nextProps;
   }
   componentDidMount() {
      socket.on('connect', ()=>{
         console.log(socket.id);
      })
   }
   componentDidUpdate(prevProps, prevState) {}
   componentWillUnmount() {
      socket.off('connect');
   }
   
   
   render(){
      return(
         <motion.div>
            {socket.id}
         </motion.div>
      )
   }
   
}
export default Chat;
