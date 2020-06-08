
'use strict';

const express = require('express');
const fs = require('fs');

const app = express();

const port = 3002;

let rawdata = fs.readFileSync('baseCakes.json');
let cakes = JSON.parse(rawdata);
console.log(cakes);

app.get('/', (req, res) => {
    res.send(cakes);
});
app.get('/cake/:id', (req, res) => {
    res.send(cakes [req.params.id]);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
