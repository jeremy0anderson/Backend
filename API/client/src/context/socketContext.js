import {io} from 'socket.io-client';
import React from 'react';


const socket = io('https://jeremyjs-server.herokuapp.com/',{
   transports: ['websocket', 'polliing'],
});
socket.on("connect", ()=>{
   console.log(socket.id);
})

const SocketContext = React.createContext(socket);

export {SocketContext, socket};