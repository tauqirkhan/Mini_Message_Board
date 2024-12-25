const { Router } = require("express");
const { getMessageById } = require("../controllers/getMessageById");

const messageRouter = Router();

messageRouter.get("/", (req, res) => res.redirect("/"));
messageRouter.get("/:messageId", getMessageById);

messageRouter.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

module.exports = messageRouter;
