const { Router } = require("express");
const getIndex = require("../controllers/getIndex");

const indexRouter = Router();

indexRouter.get("/", getIndex);
indexRouter.get("/new", (req, res) => res.send("/new route"));

module.exports = indexRouter;
