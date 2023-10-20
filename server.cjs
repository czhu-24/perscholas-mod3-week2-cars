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

const middleware = (req, res, next) => {
    next();
}

app.use(cors({
    origin: "*"
}))

app.use(morgan('dev'));

app.use(middleware);

app.use(express.static(path.join(__dirname, "dist")));

app.use(express.json()); 

// routes

app.get('/cars/:carModel', async(req, res) => {
    // LET'S PRETEND I NAMED THE CAR NAME AS CAR MODEL
    const search = req.params.carModel;
    const foundCar = await Car.findOne({model: search});
    if(!foundCar){
        res.status(404).send("No car found");
    }else{
        res.send(foundCar);
    }

})

app.get('/cars', async (req, res) => {
    const dbCars = await Car.find();
    res.send(dbCars);
})

app.post('/cars', async (req, res) => {
    const newCar = await Car.create(req.body);
    res.status(201).send(newCar);
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
