const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();

//Build file path
let filePath = path.join(__dirname, "public");

//Routes
app.get("/", (req, res) => res.sendFile(path.join(filePath, "index.html")));
app.get("/about.html", (req, res) => res.sendFile(path.join(filePath, "about.html")));
app.get("/contact-me.html", (req, res) => res.sendFile(path.join(filePath, "contact-me.html")));

//404
app.get("*", (req, res) => res.sendFile(path.join(filePath, "404.html")));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
