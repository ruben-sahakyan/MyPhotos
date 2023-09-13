import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    gender: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    avatar: {type: String, require: false}
},
{
    timeseries: true,
}
);

export default mongoose.model("User", UserSchema);