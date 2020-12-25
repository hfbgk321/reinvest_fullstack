const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
import { Routes } from "./Routers/Router";
import cors from "cors";
import path from 'path';
require("dotenv").config(); // secret file

const port = process.env.PORT;
const uri = process.env.ATLAS_URI;

const app = express();
var cookies = require("cookie-parser");

app.use('/',express.static(__dirname));

app.use(cookies());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected ... ");
  })
  .catch((err) => {
    console.log("Error " + err);
  });



app.use(express.json());
app.use(cors());
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});
Routes(app);

app.listen(port, () => {
  console.log('Server started at ' + port);
});
