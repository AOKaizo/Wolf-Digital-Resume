const fs = require('fs')
const express = require('express')
const app = express()
app.use(express.static('public'))

app.get("/", (req, res) => res.send("Hello World!"));


const PORT = 3400;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

