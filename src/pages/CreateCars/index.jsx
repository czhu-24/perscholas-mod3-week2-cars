import React from 'react'

const CreateCars = () => {
  return (
    <div>
      <h1>Create a new car!</h1>
      <form>
        <label htmlFor="make">Make:</label><input type="text" name="make" id="make" /><br/>
        <label htmlFor="model">Model:</label><input type="text" name="model" id="model" /><br/>
        <label htmlFor="color">Year:</label><input type="number" name="year" id="year" /><br/>
        <label htmlFor="color">Color:</label><input type="text" name="color" id="color" /><br/>
        <button type="submit">Create Car</button>
      </form>
    </div>
  )
}

export default CreateCars