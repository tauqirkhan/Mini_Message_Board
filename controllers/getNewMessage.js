const messages = require("../models/messages");

const getNewMessage = (req, res) => {
  res.render("new", {
    messages: messages,
  });
};

module.exports = getNewMessage;
