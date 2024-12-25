const asyncHandler = require("express-async-handler");
const messages = require("../models/messages");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await messages.getMessageById(Number(messageId));

  if (!message) throw new CustomNotFoundError("User Not Found");

  res.send(
    `Message text: ${message.text}, 
    Message author: ${message.user}, 
    Message time: ${message.added}`
  );
});

module.exports = { getMessageById };
