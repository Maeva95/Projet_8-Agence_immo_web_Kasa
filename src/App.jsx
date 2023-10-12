import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Header from './components/Header'
import ErrorElement from './components/ErrorElement'
import Apartment from './pages/Apartment'
import { useEffect } from 'react'

export default function App() {

  useEffect(() => {
    document.title = 'Kasa - location appartement'
  }, [])
  
  return (
    <>
      <div className='App'>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route 
            path='/:id'
            element={<Apartment />}
            errorElement={<ErrorElement />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/404' element={<ErrorElement />}/>
        </Routes>
      <Footer />
      </div>
    </>
  )
}

