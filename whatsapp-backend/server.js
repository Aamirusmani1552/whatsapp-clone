const express = require('express')
const app = express();
const router = require('./routes/router.js')
const connectDb = require('./db/connection.js');
const cors = require('cors');
const mongoose = require('mongoose')
const Pusher = require("pusher")
require('dotenv').config()
require("express-async-errors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/',router)

  const pusher = new Pusher({
    appId: "1370279",
    key: "818e85e690a5d264c447",
    secret: "7a98d91cb57a3d47b3fd",
    cluster: "ap2",
    useTLS: true
  });
  

const db = mongoose.connection;

db.once("open", () => {
    console.log("DB connected");
  
    const msgCollection = db.collection("messages");
    const changeStream = msgCollection.watch();
  
    changeStream.on("change", (change) => {
  
      if (change.operationType === "insert") {
        const messageContent = change.fullDocument;
        pusher.trigger("message", "inserted", {
            message: messageContent.message,
            senderId: messageContent.senderId,
            conversationId: messageContent.conversationId,
            createdAt: messageContent.createdAt
          });
      } else {
        console.log("Error triggering Pusher");
      }
    });
})

const PORT = process.env.PORT || 8000;

const start = async ()=>{
    try {
        await connectDb(process.env.MONGO_URI).then(()=>{console.log('db is connected')}).catch(err=>console.log(err));
        
        app.listen(PORT,(err)=>{
            console.log('server is listening on port: ',PORT);
        });
    } catch (error) {
        console.log(error)
    }
}

start();