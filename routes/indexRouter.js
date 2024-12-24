const { Router } = require("express");
const getIndex = require("../controllers/getIndex");
const getNewMessage = require("../controllers/getNewMessage");

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getNewMessage);

module.exports = indexRouter;
