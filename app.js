const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const errorController = require("./controllers/404");
const shopRoutes = require("./routes/shop");
const adminRoutes = require("./routes/admin");

// TODO: Creating app
const app = express();

// Setting View Engine EJS
app.set("view engine", "ejs");
app.set("views", "views");

// Parsing Requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Static Files
app.use(express.static(path.join(__dirname, "public")));

// Using  Routes
app.use(shopRoutes);
app.use(adminRoutes);

// 404 Error Page
app.use(errorController.get404Error);
app.listen(3000);
