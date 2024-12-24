const messages = require("../models/messages");

const getIndex = (req, res) => {
  res.render("new", {
    messages: messages,
  });
};

module.exports = getIndex;
