const express = require("express");
const mongoose = require("mongoose"); //odm : object data model orm : object relationl model
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
app.use(express.json()); //transforme le corp de la requete en json

dotenv.config();
app.use(cors());
app.use(express.json());
const categorieRouter = require("./routes/categorie.route.js");
app.use("/api/categories", categorieRouter);
mongoose
  .connect(process.env.db_cloud)
  .then(() => {
    console.log("DataBase Successfully Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("bonjour");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

module.exports = app;
