import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from './components/layout/Footer/Footer'
import About from './pages/About'
import Policies from './pages/Policies'
import Courses from './pages/Courses'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/policies' element={<Policies />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App