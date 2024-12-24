const { Router } = require("express");
const getIndex = require("../controllers/getIndex");
const getForm = require("../controllers/getForm");
const createUserData = require("../controllers/createUserData");
const express = require("express");

const indexRouter = Router();

indexRouter.use(express.urlencoded({ extended: true }));

indexRouter.get("/", getIndex);
indexRouter.get("/new", getForm);

indexRouter.post("/new", createUserData);

module.exports = indexRouter;
