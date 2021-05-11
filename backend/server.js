import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json()) //same as bodyparser, just that now it's been included in express

app.use("/api/v1/restaurants", restaurants)
//for all other routes that might not exist
app.use("*",(req,res)=>res.status(404).json({error:"Doesn't Exist, at atlas25's server"}))

//to use this as a module, to seperate our server code from our database code
export default app