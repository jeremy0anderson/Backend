const User = require("../models/User");
const {sign, verify} = require('jsonwebtoken');
require('dotenv').config();
const resolvers = {
    Query:{
        async users(){return await User.find({})},
        async user(_,args, context){let user = await User.findOne({_id:args._id}); if (user) return user; return null},
        async verifyUser(_,args,context,info){return context}
    },
    Mutation:{
        async register(_,args,context,info){
            let toCreate = {...args};
            try {
                let user = await User.create(toCreate);
            } catch(e){
                console.log(e);
                return e.message;
            }
            let payload = {
                ...user._id,
                ...user.email,
                ...user.firstName
            }
            const token = await sign({data: payload}, process.env.JWT_SECRET, {expiresIn:process.env.JWT_EXP});
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
                return token;
            }
        }
    }
}
module.exports=resolvers;