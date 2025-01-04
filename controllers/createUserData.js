const db = require("../db/queries");

const createUserData = async (req, res) => {
  const currentDate = new Date();
  const formattedDate = currentDate
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");

  await db.insertUserData(
    req.body.messageText,
    req.body.authorName,
    formattedDate
  );

  res.redirect("/");
};

module.exports = createUserData;
