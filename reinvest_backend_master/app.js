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
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));


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


  var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    credentials:true // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }
app.use(express.json());
app.use(cors(corsOptions));


Routes(app);

app.listen(port, () => {
  console.log('Server started at ' + port);
});
