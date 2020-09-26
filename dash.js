var express = require("express");
var app = express();
const fetch = require("node-fetch");

let d1 = "2020-06-30_12:33:45"; //time
let d2 = 0; //cycle counter
let d3 = 0; // active PS
let d4 = 0; // hash in this cycle
let d5 = 0; // hash in data base
let d6 = 0;
let d7 = 0;
let d8 = "abcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890";
var data = { d1, d2, d3, d4, d5, d6, d7, d8 };

app.listen(3700, () =>
  console.log("dashboard server-1001 listening at localhost(or https):3700")
);
app.use(express.static("dashboard"));
app.use(express.json({ limit: "1mb" }));

var res1 = {};

app.get("/status", async (req, res) => {
  rxjson = req.body;
  console.log(rxjson);
  console.log(data);
  res.json(data);

});

var crypto = require("crypto");
async function intervalFunc() {

  data.d1 = Date.now()
  data.d2++;
  data.d4 = data.d4 +7;
  if (data.d4 > 20) data.d4 = data.d4-20;
  data.d5 = data.d5 + data.d4;
  data.d7 = data.d7 + 3;
  hash_data = "" + data.d5
  data.d8 = crypto
  .createHash("sha256")
  .update(hash_data)
  .digest("hex");
}

setInterval(intervalFunc, 1000);
