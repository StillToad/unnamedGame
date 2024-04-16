import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    discordId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    }
})

const User = mongoose.model('User', UserSchema)

export default User;