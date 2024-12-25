const { Router } = require("express");
const { getMessageById } = require("../controllers/getMessageById");

const messageRouter = Router();

messageRouter.get("/", (req, res) => res.redirect("/"));
messageRouter.get("/:messageId", getMessageById);

module.exports = messageRouter;
