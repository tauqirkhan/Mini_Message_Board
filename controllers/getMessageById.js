const asyncHandler = require("express-async-handler");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../db/queries");

const getMessageById = asyncHandler(async (req, res) => {
  const { messageId } = req.params;

  const message = await db.getMessageById(Number(messageId));

  if (!message) throw new CustomNotFoundError("User Not Found");

  res.send(
    `Message text: ${message.text}, 
    Message author: ${message.username}, 
    Message time: ${message.added}`
  );
});

module.exports = { getMessageById };
