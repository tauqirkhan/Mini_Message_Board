const { Router } = require("express");
const getIndex = require("../controllers/getIndex");
const getForm = require("../controllers/getForm");

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", getForm);

module.exports = indexRouter;
