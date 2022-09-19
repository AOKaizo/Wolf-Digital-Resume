const fs = require("fs");
const express = require("express");
const { url } = require("inspector");
const app = express();
const path = require("path");
// const html = require('html')
const PORT = 3400;
app.use(express.static("public"));



app.get('*', (req, res) => res.sendFile('/Users/kolbywolf/Coding/JS/Junior/digitalResume/error.html'));

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});