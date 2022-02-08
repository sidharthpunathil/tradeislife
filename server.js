var express = require("express");
var app = express();
var path = require("path");
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// app.use(express.static("public"));

app.get("/", function (req, res) {
    // let rno = Math.floor(Math.random() * 11);
    let rno = Math.floor(Math.random() * 11);
    console.log(rno);
    res.render("pages/index", { rno: rno });
});

app.get("/donate", function (req, res) {
    res.render("pages/donate");
});

app.listen(8080);
console.log("Server is listening on port 8080");
