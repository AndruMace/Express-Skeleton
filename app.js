// require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

//
// Don't forget to run 'npm install'
//
app.use('/', require('./routes/mainroutes'));


const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`Server Started on PORT ${PORT}`));