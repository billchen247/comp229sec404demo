import { Link, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe/AboutMe'
import HomePage from './pages/HomePage'
import './App.css'

function App() {
  return (
    <>
      <nav className="top-nav">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
