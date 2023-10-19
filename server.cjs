/* eslint-disable no-undef */

const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

// models here

// lets us use env files
require('dotenv').config();

// middleware

app.use(morgan('dev'));

app.use(express.json()); 

app.use(cors({
    origin: "*"
}))

// routes

app.get('/cars', async (req, res) => {
    const dbCars = await Cars.find();
    res.send(dbCars);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
