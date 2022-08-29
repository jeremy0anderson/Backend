"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const mongoose_1 = __importDefault(require("mongoose"));
const schema_1 = require("./schema");
const cors_1 = __importDefault(require("cors"));
const http_1 = require("http");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.typeDefs,
        resolvers: schema_1.resolvers,
        context: ({ req }) => {
            return req;
        }
    });
    yield server.start();
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use((0, cors_1.default)());
    server.applyMiddleware({ app, cors: {
            origin: ['http://localhost:3000', 'http://localhost:4000', 'https://studio.apollogrpahql.com', 'https://portfolio.jeremyjs.dev']
        } });
    yield new Promise((resolve) => httpServer.listen(process.env.PORT || 4000, resolve));
});
mongoose_1.default.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/ts_test_db");
mongoose_1.default.connection.once('open', () => __awaiter(void 0, void 0, void 0, function* () {
    yield startServer();
}));
//# sourceMappingURL=index.js.map