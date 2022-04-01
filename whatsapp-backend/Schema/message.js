const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
   senderId: {
       type: String,
       required: true
   } ,
   message: {
       type: String,
       required: true
   },
   conversationId: {
       type: String,
       required: true
   }
},
{
    timestamps: true
});

module.exports = mongoose.model('Message',messageSchema);