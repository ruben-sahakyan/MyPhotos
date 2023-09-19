import User from "../models/user.js"
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(() => {console.log('Connect is db successful')}).catch(e => {console.log(e)});


export async function signInControllers(req, res) {
    const {email, password} = req.body;
    const checkUser = await User.findOne({email, password});
    if(checkUser) {
        res.json(checkUser);
    } else {
        res.json(false)
    }
};

export async function signUpControllers(req, res) {
    const {firstName, lastName, email, gender, password} = req.body;
    try {
        const newUser = await User.create({
            firstName,
            lastName,
            email,
            gender,
            password
        });
        res.status(201).json({message: newUser, status: 201});
    } catch (error) {
        res.status(400).json({message: error, status: 400});
    }
};


export async function sendEmailControllers(req, res) {
    const {email} = req.body;
    try {
        const checkUserEmail = await User.findOne({email});
        res.status(200).json({message: checkUserEmail.email, status: 200});
    } catch (error) {
        res.status(400).json({message: error, status: 400})
    }
};


// export async function usersControllers(req, res) {
//     try {
//         const allUsers = await User.find();
//         res.status(200).json(allUsers)
//     } catch (error) {
//         res.status(400).json({message: error, status: 400})        
//     }
// }

















