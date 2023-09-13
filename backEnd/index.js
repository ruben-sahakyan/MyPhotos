import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// import MongoDB schema.
import user from "./models/user";



dotenv.config();

const app = express();

app.use(express.json());
app.use(cors({credentials: true, origin: process.env.localhost}));



app.get('/', (req, res) => {
    res.send('Hello World')
});

app.post('/signup', (req, res) => {
    const {firstName, lastName, email, gender, password} = req.body;
    console.log(req.body);
    res.json(true)
});

app.post('/signin', (req, res) => {
    console.log(req.body);
    res.json(true);
});



app.listen(5000, () => {
    console.log('Server is Run')
});