import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from './components/layout/Footer/Footer'
import About from './pages/About'
import Policies from './pages/Policies'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/policies' element={<Policies />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App