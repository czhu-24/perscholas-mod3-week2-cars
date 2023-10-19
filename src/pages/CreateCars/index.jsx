import axios from 'axios';
import React, { useState } from 'react'

const CreateCars = () => {

  const [error, setError] = useState("");
  const [carData, setCarData] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "/server/cars"
    }).then((res) => {
      try {
        console.log(res);
      } catch (error) {
        setError(error);
      }
    })
  }



  return (
    <div>
      <h1>Create a new car!</h1>
      <form onSubmit={handleForm}>
        <label htmlFor="make">Make:</label><input type="text" onChange={(e) => setCarData([...carData, e.target.value])} value={carData.make} name="make" id="make" /><br />
        <label htmlFor="model">Model:</label><input type="text" name="model" id="model" /><br />
        <label htmlFor="color">Year:</label><input type="number" name="year" id="year" /><br />
        <label htmlFor="color">Color:</label><input type="text" name="color" id="color" /><br />
        <button type="submit">Create Car</button>
      </form>
    </div>
  )
}

export default CreateCars