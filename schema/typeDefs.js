const {gql} =require("apollo-server-express");
const typeDefs = gql`
    input Register{
        firstName:String
        lastName:String
        email:String!
        password:String
    }
    input ProductInput{
        title:String!
        price:Int!
        description:String!
    }
    type Product{
        title:String!
        price:Int!
        description:String
    }
    input UpdateInput{
        firstName:String
        lastName:String
        email:String
        password:String
    }
    type UpdatedUser{
        token: String
        updatedUser:User
    }
    type User{
        _id:ID
        firstName:String
        lastName:String
        email:String
    }
    type VerifiedUser{
        _id: ID!
        token: String!
    }
    type Query{
        users:[User]
        user(_id:ID):User
        verifyUser:User
    }
    type Mutation{
        register(firstName:String lastName:String email:String! password:String!):VerifiedUser
        login(email:String!,password:String!):VerifiedUser
        editUser(firstName:String lastName:String email:String password:String):UpdatedUser
    }
`
module.exports=typeDefs;