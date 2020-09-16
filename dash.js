var express = require("express");
var app = express();

app.set('view engine', 'ejs');
// let d1 = '2020-06-30_12:33:45'
// let d2 = '123,456'
// let d3 = '312'
// let d4 = '2141'
// let d5 = '342454'
// let d6 = '86'
// let d7 = '98798'
// let d8 = 'abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890'

let d1 = '2020-06-30_12:33:45'
let d2 = '123,456'
let d3 = '312'
let d4 = '214901'
let d5 = '342454'
let d6 = '86'
let d7 = '98798'
let d8 = 'abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890'

app.get('/', function(req, res){
    var data = {d1,d2,d3,d4,d5,d6,d7,d8}
  res.render('profile', {data: data})
})

app.listen(3000, console.log("rbas dashboard listening at port 3000"));
