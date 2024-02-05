import mongoose from "mongoose";

const UserSchema =new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },

    followers: [],
    following: []
},
    { timestamps: true }
)

const UserModel = mongoose.model('user',UserSchema);

export default UserModel