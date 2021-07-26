// init express
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set the view engine to handlebar
const exphbs = require("express-handlebars");
const path = require("path");
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// mongoose connect
const database = require("./config/database");
database.connect();

// route
const route = require("./routes");
route(app);

// setup public folder
app.use(express.static("./public"));

// listen
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
