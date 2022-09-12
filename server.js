const fs = require('fs')
const express = require('express');
const { url } = require('inspector');
const app = express()
const PORT = 3400;
app.use(express.static('public'))

app.get("/", (req, res) => res.send('/index.html'));



app.get('/*', (req, res) => res.send('/static/error.html'));

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

