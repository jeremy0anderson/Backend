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

class Chat extends React.Component{
   constructor(props) {
      super(props);
      this.state={}
   }
   shouldComponentUpdate(nextProps, nextState) {
      return this.state!==nextState || this.props!==nextProps;
   }
   componentDidMount() {
      // socket.on('connect', ()=>{
      //    console.log(socket.id);
      // })
   }
   componentDidUpdate(prevProps, prevState) {}
   componentWillUnmount() {
      // socket.off('connect');
   }
   
   
   render(){
      return(
         <div/>
         // <SocketProvider.Consumer>
         //    {socket => {
         //       return (
         //          <motion.div className={"centered-column"}
         //                      style={{position: 'absolute', top: 80}}>
         //             {socket.id}
         //          </motion.div>
         //       )
         //    }}
         //
         // </SocketProvider.Consumer>
      )
   }
   
}
export default Chat;
