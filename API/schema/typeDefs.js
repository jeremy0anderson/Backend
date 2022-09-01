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
        updateConfirmed:Boolean
        updatedUser:User
    }
    type User{
        _id:ID
        firstName:String
        lastName:String
        email:String
    }
    type Query{
        products:[Product]
        users:[User]
        user:User
        verifyUser:User
    }
    type Mutation{
        listProduct(details:ProductInput):Product
        register(firstName:String lastName:String email:String! password:String!):String
        login(email:String!,password:String!):String
        editUser(update:UpdateInput):UpdatedUser
    }
`
module.exports=typeDefs;