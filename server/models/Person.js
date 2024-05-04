import mongoose from 'mongoose'

const PersonSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    password: String,
},{timestamps:true})

const PersonModel = mongoose.model("customer", PersonSchema)

export default PersonModel