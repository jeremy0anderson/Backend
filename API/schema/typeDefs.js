const {gql} =require("apollo-server-express");

const typeDefs = gql`
    input Register{
        firstName:String
        lastName:String
        email:String!
        password:String
    }
    type User{
        _id:ID
        firstName:String
        lastName:String
        email:String
    }
    type Query{
        users:[User]
        user:User
    }
    type Mutation{
        register(firstName:String lastName:String email:String! password:String!):String
        login(email:String!,password:String!):String
    }
`
module.exports=typeDefs;