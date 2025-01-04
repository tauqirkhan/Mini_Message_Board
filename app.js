const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const messageRouter = require("./routes/messageRouter");

const PORT = process.env.PORT || 3000;

const assetPath = path.join(__dirname, "public");
app.use(express.static(assetPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/message", messageRouter);

app.listen(PORT, () => {
  console.log("App is live at ", `http://localhost:${PORT}/`);
});
