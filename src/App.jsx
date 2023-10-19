import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Cars from './pages/Cars'
import CreateCars from './pages/CreateCars'

function App() {


  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Cars/>}/>
        <Route path="/create" element={<CreateCars/>}/>
      </Routes>
    </>
  )
}

export default App
