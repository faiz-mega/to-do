const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));

const itemFood = [];
const workFood = [];

app.get("/", (req, res) => {

  const day = date.getDate();
  

  res.render("index", {getDate: day, itemData: itemFood });
});

app.post("/", (req,res) => {

    const item = req.body.addFood;

    if(req.body.list === "Work"){
      workFood.push(item);
      res.redirect("/work");
    } else{
      itemFood.push(item);
      res.redirect("/");
    };

})

app.get("/work", (req,res) => {

  const day = "Work";

  res.render("index", {getDate: day, itemData: workFood });
})

app.listen(process.env.PORT || port, () => {
  console.log("Server is running on port " + port);
});
