import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import AuthRoute from "./Routes/AuthRoute.js"


// Router


const app = express()

//serch images for public
app.use(express.static('public'))
app.use('/images',express.static("images"))
// Middeleware
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

dotenv.config()

const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_DB)
.then(()=>{app.listen(PORT,()=>{
    console.log(`port connect at ${process.env.PORT}`);
})})
.catch((err)=>{
    console.log(err.message);
})

//differant routes

app.use('/auth',AuthRoute)
