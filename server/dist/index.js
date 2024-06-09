import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from '../database/db.js';
import Router from '../routes/route.js';
dotenv.config();
var app = express();
app.use(cors());
app.use(bodyParser.json({
  extended: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use('/', Router);
var PORT = 8000;
var username = process.env.DB_USERNAME;
var password = process.env.DB_PASSWORD;
Connection(username, password);
app.listen(PORT, function () {
  return console.log("Server is running successfully on PORT ".concat(PORT));
});