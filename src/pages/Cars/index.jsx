import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cars = () => {

  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/server/cars"
    }).then(res => {
      console.log(res);
      setCars(res.data);
    })

  }, [])
  return (
    <div>
      <h2>All cars</h2>
      {cars.map(car => <div key={JSON.stringify(car)}>{car.model}</div>)}
    </div>
  )
}

export default Cars