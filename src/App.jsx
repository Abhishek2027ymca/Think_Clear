import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home'
import Footer from './components/layout/Footer/Footer'
import About from './pages/About'
import Policies from './pages/Policies'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import ScrollToTop from './components/ScrollToTop'
import LogoLoader from './components/LogoLoader'
import ScrollTopButton from './components/ScrollTopButton'

function App() {
  return (
    <Router>
      <LogoLoader>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/policies' element={<Policies />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollTopButton />
      </LogoLoader>
    </Router>
  )
}

export default App