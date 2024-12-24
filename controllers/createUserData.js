const { text } = require("express");
const messages = require("../models/messages");

const createUserData = (req, res) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  });

  res.redirect("/");
};

module.exports = createUserData;
