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
app.use(cors());

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
Routes(app);

app.listen(port, () => {
  console.log('Server started at ' + port);
});
