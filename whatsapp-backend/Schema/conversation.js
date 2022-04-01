const mongoose = require('mongoose');

let conversationSchema = mongoose.Schema({
    member: {
        type: Array,
        required: true,
    },
})

module.exports = mongoose.model('conversation',conversationSchema);