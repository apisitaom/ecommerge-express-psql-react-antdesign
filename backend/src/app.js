const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 4000

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use((req, res, next) => {
    console.log(`server on path ${req.ip} ${req.method} ${req.path}`);
    next();
});

app.get(`/`, (req, res) => {
    res.json({ info : `Get start on port : ${port}`});
});

app.listen(port, () => {
    console.log(`server run on port ${port}`);
})