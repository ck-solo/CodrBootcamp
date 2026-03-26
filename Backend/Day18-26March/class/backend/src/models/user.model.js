import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        sparse:true
    },
    email: {
        type: String,
        unique: true,
        sparse:true
    },
    fullname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: function () {
            return !this.googleId; // Password is required if googleId is not present
        }
    },
    googleId: {
        type: String,
    }
})

userSchema.index({ googleId: 1 }, { sparse: true, unique: true })

const userModel = mongoose.model("user", userSchema)

export default userModel;