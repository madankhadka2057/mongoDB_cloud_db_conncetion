const mongoose=require('mongoose')
const user2Schema=new mongoose.Schema({
    name : String,
    email:String,
    phone:Number,
    password:String,
})
module.exports =mongoose.model("User2",user2Schema)