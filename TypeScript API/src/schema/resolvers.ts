import {default as Models} from '../models';
const {User} = Models;
interface UserByIdArgs{
    _id: string
}
const resolvers={
    Query: {
        async users(_:any, args:object, context:object, info:any){
            return await User.find({});
        },
        async userById(_:any, args:UserByIdArgs, context:object, info:any){
            return await User.findOne({_id:args._id});
        }
    },
    Mutation:{}
}

export default resolvers;
