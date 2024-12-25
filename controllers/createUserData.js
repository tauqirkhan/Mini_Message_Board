const { messages } = require("../models/messages");

const createUserData = (req, res) => {
  messages.push({
    id: messages[messages.length - 1].id + 1,
    text: req.body.messageText,
    user: req.body.authorName,
    added: new Date(),
  });

  res.redirect("/");
};

module.exports = createUserData;
