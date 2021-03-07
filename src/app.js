//importing express module
const express = require("express");
const app = express();
//importing path module
const path = require("path");
//imporing getValue module
const getValue = require("./util/fetchData");
//getting port value
const port = process.env.PORT || 3000;
//importing hbs
const hbs = require("hbs");
//setting static folder path
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

//setting view path
const viewPath = path.join(__dirname, "../templates/views");
app.set("views", viewPath);
//setting view engine
app.set("view engine", "hbs");
//setting partials path for hbs
const partialsPath = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partialsPath);
//initialize viwercount
let VIWER_COUNT = 0;
//setting path
app.get("", (req, res) => {
  VIWER_COUNT++;
  res.render("index", { VIWER_COUNT });
});
app.get("/help", (req, res) => {
  VIWER_COUNT++;
  res.render("help", { VIWER_COUNT });
});
app.get("/about", (req, res) => {
  VIWER_COUNT++;
  res.render("about", { VIWER_COUNT });
});
//here fetch the weather data
app.get("/weather-data", (req, res) => {
  //send as json
  getValue(req.query.address, (error, data) => {
    //send json data to page
    if (error) {
      // error occured
      return 1;
    }
    res.send(data);
  });
});
app.get("*", (req, res) => {
  res.render("404-error");
});
app.listen(port, () => {
  console.log("Server running on port:" + port);
});
