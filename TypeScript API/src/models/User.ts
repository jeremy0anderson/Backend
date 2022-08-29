import bcrypt from 'bcrypt';
import mongoose, {model, Schema} from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next:()=>void) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

userSchema.methods.validatePassword = async function(password:string){
    return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
export default User;