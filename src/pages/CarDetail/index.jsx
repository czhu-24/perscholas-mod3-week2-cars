import axios from 'axios';
import React, { useEffect, useState } from 'react'

const CarDetail = () => {

  const pathname = window.location.pathname;

  const pathParts = pathname.split('/');

  const modelSearch = pathParts[pathParts.length - 1];

  const [car, setCar] = useState({
    model: "",
    make: "",
    year: 0,
    color: ""
  });

  useEffect(() => {
    axios({
      method: "GET",
      url: `/server/cars/${modelSearch}`
    }).then((res) => {
      setCar({
        model: res.data.model,
        make: res.data.make,
        year: res.data.year,
        color: res.data.color
      })
    })
  }, []);

  return (
    <div>
      <h1>Car Detail</h1>
      <div>Model: {car.model}</div>
      <div>Make: {car.make}</div>
      <div>Year: {car.year}</div>
      <div>Color: {car.color}</div>
    </div>
  )
}

export default CarDetail