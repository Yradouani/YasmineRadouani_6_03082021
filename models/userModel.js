import mongoose from "mongoose"
import uniqueValidator from "mongoose-unique-validator"

const UserSchema = new mongoose.Schema({
    email : {
        type: String, 
        require: true,
        trim: true,
        unique: true
    },
    password : {
        type: String, 
        require: true,
        trim: true
    }

})
UserSchema.plugin(uniqueValidator);
const User = mongoose.model('User', UserSchema);
export default User;