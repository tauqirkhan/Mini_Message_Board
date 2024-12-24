const messages = require("../models/messages");

const getIndex = (req, res) => {
  res.render("messages", {
    messages: messages,
  });
};

module.exports = getIndex;
