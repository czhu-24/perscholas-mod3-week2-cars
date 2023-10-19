const express = require('express');
const app = express();
const PORT = 3001;

const path = require('path')
const cors = require('cors')
const morgan = require('morgan')

// models here
const Car = require('./models/Car.cjs')

// lets us use env files
require('dotenv').config();

require('./config/db.cjs'); 

// middleware

app.use(morgan('dev'));

app.use(express.json()); 

app.use(cors({
    origin: "*"
}))

app.use(express.static(path.join(__dirname, "dist")));

// routes



app.get('/cars', async (req, res) => {
    const dbCars = await Car.find();
    res.send(dbCars);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
