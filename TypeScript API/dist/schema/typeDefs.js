"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typeDefs = (0, apollo_server_express_1.gql) `
    input UserByIdArgs{
        _id:ID
    }
    type User{
        _id: String
        first_name: String
        lastName: String
        email: String
        password:String
    }
    type Query{
        users:[User]
        userById(_id:ID):User
    }
`;
exports.default = typeDefs;
//# sourceMappingURL=typeDefs.js.map