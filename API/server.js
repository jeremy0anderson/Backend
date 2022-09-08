require('dotenv').config();
const express = require('express'),
    app = express(),
    {json, urlencoded, static} = express,
    cors = require('cors');


const PORT = process.env.PORT || 4000,
    {ApolloServer} = require('apollo-server-express'),
    httpServer = require('http').createServer(app),
    path = require('path'),
    mongoose = require('mongoose'),
    session = require('express-session'),
    SessionStore = require('connect-mongodb-session')(session);
const {authMiddleware} = require("./utils/auth");


const startApolloServer = async (typeDefs, resolvers) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: authMiddleware
    });
    await server.start();
    // Middleware
    app.use(cors());
    app.use(json());
    app.use(urlencoded({extended: true}));
    app.use(static(path.resolve(__dirname, './client', 'build')));
    app.use(session({
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
    }));
    server.applyMiddleware({app, cors: {origin: ['*','http://localhost:3000', 'https://studio.apollographql.com', 'https://jeremyjs-api-server-eue9a.ondigitalocean.app', 'https://jeremyjs.dev']}});

    await new Promise(resolve => {
        httpServer.listen(PORT, resolve);
        console.log("listening on " + PORT);
    })
}

//serve index from react app on all routes
app.get('*', (req, res, next) => {
    if (req.path.includes("graphql")) next();

    res.sendFile(path.resolve(__dirname, './client', 'build', 'index.html'));
})

//connect to database and then start the apollo server
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/test_local_db');
mongoose.connection.once('open', async () => {
    const {typeDefs} = require('./schema');
    const {resolvers} = require('./schema');
    await startApolloServer(typeDefs, resolvers);
})