import express from 'express';
import {ApolloServer, gql} from "apollo-server-express";
import mongoose from "mongoose";
import {typeDefs,resolvers} from './schema';
import cors from 'cors';
import {createServer} from 'http';

const app = express();

const httpServer = createServer(app);
const startServer = async() => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({req})=>{
            return req;
        }
    });
    await server.start();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cors());
    server.applyMiddleware({app, cors:{
        origin: ['http://localhost:3000', 'http://localhost:4000', 'https://studio.apollogrpahql.com', 'https://portfolio.jeremyjs.dev']
        }});
    await new Promise((resolve:any)  => httpServer.listen(process.env.PORT || 4000, resolve));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ts_test_db");
mongoose.connection.once('open', async()=>{
    await startServer();
})