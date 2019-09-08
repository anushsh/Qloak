const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
//require('./models/User');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

//app initiailziation
var app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.set({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type'
    })
    next();
})


var userRoutes = require('./routes/all_routes');
app.use('/', userRoutes);

const PORT = 5000;
app.listen(PORT);
