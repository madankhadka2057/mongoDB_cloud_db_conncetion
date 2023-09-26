const express = require('express')
const app = express();
const mongoose=require('mongoose')
const User=require('./models/userModel');//!importing the model for data like name,email 
const User2=require('./models/userModel2');
dbUrl="mongodb+srv://madankhadka2057:madankhadka@madan.ad13avb.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(dbUrl).then(()=>{
    console.log("Connected Successfully")
}).catch(()=>{
    console.log("Connection failed")
})

// passwork: Gum9RnSLnIf2Kj9P

// insert data in db collections
async function insert() {
    try {
        //insert data in collection User 
        const data=await User.create({
            name: 'madan',
            email: 'madan2057@gmail.com'
        });
        console.log('Data inserted successfully in User1.');
        return data;
    } catch (error) {
        console.error('Error inserting data:', error);
        return null;
    }
}
 const insertData=async()=>{ // !you can run without(const) decleration 
    await User2.create({
        name: 'madan',
        email: 'madan@gmail.com',
        phone:9867365986,
        password:"madan@2057"
    });
    console.log('Data inserted successfully in User2.');
}
insert()
insertData()
// app.get("/",async (req,res)=>{
//     const insertedData= await insert()
//     if(insertedData){
//         res.send(insertedData);
//     }else{
//         res.status(500).send("No data inserted")
//     }
// })



/*resham sir code
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});*/


//!mine try 
// API routes
// const itemsRouter = require("./routes/items");
// app.use("/items", itemsRouter);

// const { MongoClient } = require('mongodb');
// const url = 'mongodb://localhost:27017';
// const dbName = 'mongo_db';
// const client = new MongoClient(url);
// async function main() {
//     client.connect((err) => {
//         if (err) {
//             console.error('Error connecting to MongoDB:', err);
//             return;
//         }
//         console.log('Connected to MongoDB');
//         client.close();
//     });
// }
// main().catch(console.error)
app.listen(3000, () => {
  console.log("Server is running on port");
});
