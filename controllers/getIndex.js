const db = require("../db/queries");

const getIndex = async (req, res) => {
  const messagesArr = await db.getAllMessages();
  res.render("messages", {
    messages: messagesArr,
  });
};

module.exports = getIndex;
