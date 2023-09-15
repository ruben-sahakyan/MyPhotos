import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 12,
    },
    lastName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 20,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 20,
    },
},
{
    timestamps: true,
}
);


export default mongoose.model("User", UserSchema)