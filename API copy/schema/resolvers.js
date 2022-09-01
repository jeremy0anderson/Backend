const User = require("../models/User");
const {sign, verify} = require('jsonwebtoken');
const Product = require('../models/Products');
require('dotenv').config();
const resolvers = {
    Query:{
        async products(){return await Product.find({})},
        async users(){return await User.find({})},
        async user(_,args, context){let user = await User.findOne({_id:args._id}); if (user) return user; return null},
        async verifyUser(_,args,context,info){return context}
    },
    Mutation:{
        async listProduct(_,args,context,info){
            let product = await Product.create({...args.details});
            return product;
        },
        async register(_,args,context,info){
            let toCreate = {...args};
                let user = await User.create(toCreate);
            let payload = {
                email: user.email,
                _id: user._id,
            }
            const token = await sign({payload}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXP});
            return token;
        },
        async login(_,args,context,info){
            let user = await User.findOne({email: args.email});
            let token;
            if (user){
                let valid = await user.validatePassword(args.password);
                if (valid){
                    let payload = {
                        email: user.email,
                        _id: user._id
                    }
                    return token = await sign({payload}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXP});
                }
                console.log(user);
                return token;
            }
        }
    }
}
module.exports=resolvers;