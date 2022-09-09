const User = require("../models/User");
const {sign, verify} = require('jsonwebtoken');
const Product = require('../models/Products');
require('dotenv').config();
const resolvers = {
    Query:{
        async users(){return await User.find({})},
        async user(_,args, context){let user = await User.findOne({_id:args._id}); if (user) return user; return null},
        async verifyUser(_,args,context,info){
            if (context.user._id){
                return context.user;
            }
            else return;
        }
    },
    Mutation:{
 
        async register(_,args,context,info){
            let toCreate = {...args};
                let user = await User.create(toCreate);
            let payload = {
                email: user.email,
                _id: user._id,
            }
            const token = await sign({payload}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXP});
            return {
                _id: user._id,
                token
            }
        },
        async login(_,args,context,info){
            let user = await User.findOne({email: args.email});
            if (user){
                let valid = await user.validatePassword(args.password);
                if (valid){
                    let payload = {
                        email: user.email,
                        _id: user._id
                    }
                 const token = await sign({payload}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXP});
                }
                return {
                    _id: user._id,
                    token
                };
            }
        },
        async editUser(_,args,context,info){
            if (!context.user) throw new Error("Invalid token. Please sign in to make changes.")
            let update = await User.findOneAndUpdate({_id:context.user._id}, {...args.update}, {
                returnOriginal:false
            }).catch(e=>{
                throw new Error(e);
            });
            return {
                updateConfirmed:true,
                updatedUser: update
            }
        }
    }
}
module.exports=resolvers;