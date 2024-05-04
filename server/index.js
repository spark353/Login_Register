import express, {response} from "express"
import cors from "cors"
import dotenv from "dotenv";

import PersonModel from './models/Person.js'
import connectMongoDB from "./connectMongoDB.js";
import bcrypt from "bcrypt"
import jwt, {decode} from "jsonwebtoken"
import cookieParser from "cookie-parser"

dotenv.config({path: "../.env"});

const app = express()
app.use(express.json())
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST'],
    credentials: true
}))
app.use(cookieParser())

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json("The token was not available")
    }else {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.json("Token is wrong")
            next()
        })
    }
}
app.get('/home',verifyUser, (req, res) => {
    return res.json("Success")
})

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    PersonModel.findOne({email: email})
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (err, response) => {
                    if (response) {
                        const token = jwt.sign({email: user.email}, process.env.JWT_SECRET, {
                            expiresIn: "10d"
                        })
                        res.cookie("token", token);
                        res.json("Success")
                    }else {
                        res.json("the password is incorrect")
                    }
                })
            }else{
                res.json("No record existed")
            }
        })
})

app.post('/register', (req, res) => {
    const {fullName, email, password} = req.body;
    bcrypt.hash(password, 10).then(hash => {
        PersonModel.create({fullName, email, password: hash})
            .then(register => res.json(register))
            .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
})
app.listen(3001, () => {
    connectMongoDB();
    console.log("server is running")
})