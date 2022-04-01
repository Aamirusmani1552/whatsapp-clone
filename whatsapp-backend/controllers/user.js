const User = require('../Schema/userSchema.js');
const {StatusCodes} = require('http-status-codes');
const conversation = require('../Schema/conversation.js');
const Message = require('../Schema/message.js');
const addUser = async(req,res)=>{
    let {email, googleId} = req.body
    let exist = await User.find({email: email, googleId: googleId});
    if(exist.length > 0){
        return res.status(200).json({success: true, msg: 'user already exist'});
    }
    let user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({success: true, user});
}

const getAllUsers = async(req,res)=>{
    let users = await User.find({});
    if(users.length < 0){
        return res.status(200).json({success: true, msg: 'no users available'})
    }
    res.status(200).json({success: true, users});
}

const newConversation = async(req,res)=>{
    let {senderId,recieverId} = req.body;
    let exist = await conversation.findOne({member: {$all: [senderId, recieverId]}});

    if(!senderId || !recieverId){
        return res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'please provide both id',conversationId: null});
    }
    if(exist){
        return res.status(StatusCodes.OK).json({success: true, msg: 'conversation already exist',users: exist})
    }

    const newCon = await conversation.create({member: [senderId,recieverId]});
    res.status(200).json({success: true, msg: 'conversation created',users: newCon});
}


const createMessage = async(req,res)=>{
    let {senderId, message, conversationId} = req.body;
    if(!senderId,!message,!conversationId){
        res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'please proivde the complete information'})
    }
    let newMsg = await Message.create({senderId,message,conversationId});
    res.status(StatusCodes.CREATED).json({success: true, msg:"message created", newMsg});
}

const getAllMessages = async(req,res)=>{
    let id = req.query.id;
    console.log(id);
    if(!id){
        return res.status(StatusCodes.BAD_REQUEST).json({success: false, msg: 'please provide id'});
    }
    let messages = await Message.find({conversationId: id});
    res.status(StatusCodes.OK).json({success: true, allMessage: messages})
}

const deleteAllMessages = async(req,res)=>{
    let message  = await Message.deleteMany({});
    res.status(200).json({msg: 'message deleted'});
}

module.exports = {
    addUser,
    getAllUsers,
    newConversation,
    createMessage,
    getAllMessages,
    deleteAllMessages
}