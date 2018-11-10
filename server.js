const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/nodeapi');

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(3001);

