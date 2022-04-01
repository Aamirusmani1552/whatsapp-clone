const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   email: {
       type: String,
       required: true,
       unique: true
   } ,
   familyName: {
        type: String,
        required: true
    } ,
    givenName: {
        type: String,
        required: true
    } ,
    googleId: {
        type: String,
        required: true,
        unique: true
    } ,
    imageUrl: {
        type: String,
        required: true
    } ,
    name: {
        type: String,
        required: true
    } 
});

module.exports = mongoose.model('User',userSchema);