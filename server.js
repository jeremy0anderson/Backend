require('dotenv').config();
const express = require('express'),
    app = express(),
    cors = require('cors'),
   {Server} = require('socket.io');



const {ApolloServer} = require('apollo-server-express'),
    httpServer = require('http').createServer(app),
    path = require('path'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    SessionStore = require('connect-mongodb-session')(session),
    io = new Server(httpServer, {
        cors: {
            origin: "*"
        }
        
    });
const sessionConfig = session({
    secret:process.env.SESSION_SECRET,
    name: "sid",
    cookie:{
        maxAge:6000*60*24,
        secure:process.env.NODE_ENV==="production"
    },
    resave:false,
    saveUninitialized:false,
    store:new SessionStore({
        uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/test_local_db',
        collection: "sessions"
    })
});
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);


const {authMiddleware} = require("./utils/auth");
const jwt = require("jsonwebtoken");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));
app.use(sessionConfig);
io.use(wrap(sessionConfig))

const startApolloServer = async (typeDefs, resolvers) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        cache: "bounded",
        csrfPrevention:true,
        introspection:true,
        context: authMiddleware
    });
    await server.start();
    // Middleware
  
    server.applyMiddleware({app, cors: {origin: ['*','http://localhost:3000', 'https://studio.apollographql.com', 'https://jeremyjs-api-server-eue9a.ondigitalocean.app', 'https://portfolio.jeremyjs.dev']}});

    await new Promise(resolve => {
        httpServer.listen(8080, resolve);
        console.log("listening on port: 8080");
    })
}

io.on('connection', (socket)=>{
    console.log(socket.id);
    const token = socket.handshake.headers.authorization.split(' ')[1];
    const req = socket.request;
    try {
        const data= jwt.verify(token, process.env.JWT_SECRET, {maxAge: process.env.JWT_EXP})
        req.session.user = data.payload;
        socket.userId = data.payload._id;
    } catch {
        console.log('Invalid token');
    }
    socket.on('disconnect', (reason)=>{
        console.log(reason);
        socket.removeAllListeners();
    })
});
app.set('io', io);


//serve index from react app on all routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
});

//connect to database and then start the apollo server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test_local_db');
mongoose.connection.once('open', async () => {
    const {typeDefs} = require('./schema');
    const {resolvers} = require('./schema');
    await startApolloServer(typeDefs, resolvers);
})