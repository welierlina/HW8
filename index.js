var express = require("express")
var app =  express()
var pool = require("./queries.js")

var things = require('./things.js')

app.use('/', things)

pool.connect((err, res) => {
    console.log(err);
    console.log('connected');
})

app.listen(3000)