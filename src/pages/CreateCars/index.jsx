import axios from 'axios';
import React, { useState } from 'react'

const CreateCars = () => {

  const [error, setError] = useState("");
  const [carData, setCarData] = useState({
    model: "", 
    make: "", 
    year: 0, 
    color: ""
  });

  const handleForm = (e) => {
    e.preventDefault();

    if(!carData.model || !carData.make || !carData.year){
      setError('404');
      return;
    }
    axios({
      method: "POST",
      url: "/server/cars",
      data: carData
    }).then((res) => {
      setCarData({
        model: "", 
        make: "", 
        year: 0, 
        color: ""
      });
      setError("");
    })
  }



  return (
    <div>
      <h1>Create a new car!</h1>
      {error && <div>{error}</div>}
      <form onSubmit={handleForm}>
        <label htmlFor="make">Make:</label><input type="text" onChange={(e) => setCarData({...carData, make: e.target.value})} value={carData.make} name="make" id="make" /><br />
        <label htmlFor="model">Model:</label><input type="text" onChange={(e) => setCarData({...carData, model: e.target.value})} name="model" id="model" /><br />
        <label htmlFor="color">Year:</label><input type="number" onChange={(e) => setCarData({...carData, year: e.target.value})} name="year" id="year" /><br />
        <label htmlFor="color">Color:</label><input type="text" onChange={(e) => setCarData({...carData, color: e.target.value})} name="color" id="color" /><br />
        <button type="submit">Create Car</button>
      </form>
    </div>
  )
}

export default CreateCars