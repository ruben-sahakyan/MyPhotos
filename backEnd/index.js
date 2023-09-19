import express from "express";
import cors from "cors";
// import dotenv from "dotenv";


/*  Controllers  */
import { 
    signInControllers,
    signUpControllers,
    sendEmailControllers, 
} from "./controllers/userControllers.js";


const app = express();
app.use(express.json());
app.use(cors({credentials: true, origin: process.env.localhost}));

/* routes  */
app.post('/signin', signInControllers);
app.post('/signup', signUpControllers);
app.post('/sendemail', sendEmailControllers);


app.listen(5000, () => {
    console.log('Server is Run')
});