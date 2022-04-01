const express = require("express");
const router = express.Router();
const {addUser, getAllUsers,newConversation ,createMessage, getAllMessages, deleteAllMessages} = require("../controllers/user");

router.route('/api/v1/users/adduser').post(addUser);
router.route('/api/v1/users').get(getAllUsers);

router.route("/api/v1/newConversation").post(newConversation);
router.route("/api/v1/messages/").get(getAllMessages)
router.route("/api/v1/messages/newMessage").post(createMessage)
router.route('/api/v1/deleteAll').get(deleteAllMessages)

module.exports = router;