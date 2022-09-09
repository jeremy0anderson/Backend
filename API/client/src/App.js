import React from 'react';
import {motion} from 'framer-motion';
import {Routes, Route} from 'react-router-dom';
import Login from "./components/User/Login";
import Register from "./components/User/Register";
import {Link} from 'react-router-dom';
import Navigation from './components/Nav/Nav';
import {SocketContext, socket} from "./context/socketContext";


class Socket extends React.Component{
   constructor(props) {
      super(props);
      this.state={
      
      }
   }
   
   render(){
      return(
         <SocketContext.Consumer>
            {socket => {
               console.log(socket);
            }}
         </SocketContext.Consumer>
      )
   }
   
}

function App() {
  return (
    <motion.div className={"App"}>
      <Navigation/>
      
      <Routes>
        <Route path={"/login"} element={<Login/>}/>
         <Route path={"/register"} element={<Register/>}/>
      </Routes>
      
    </motion.div>
  );
}

export default App;
