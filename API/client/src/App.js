import React from 'react';
import {motion} from 'framer-motion';
import {Routes, Route} from 'react-router-dom';
import Login from "./components/User/Login";
import Register from "./components/User/Register";


function App() {
  return (
    <motion.div className={"App"}>
      
      <Routes>
        <Route path={"/login"} element={<Login/>}/>
         <Route path={"/register"} element={<Register/>}/>
      </Routes>
      
    </motion.div>
  );
}

export default App;
