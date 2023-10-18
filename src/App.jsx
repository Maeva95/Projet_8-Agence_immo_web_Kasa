/* eslint-disable react-hooks/exhaustive-deps */
import './App.module.scss'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Apartment from './pages/Apartment'
import { Navigate } from 'react-router-dom'

export default function App() {
  document.title = 'Kasa - Agence immobilière web'

  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path='/:id'
            element={<Apartment />}
            errorElement={<ErrorPage />}
          />
          <Route path='/about' element={<About />}
          />
          <Route path='*' element={<Navigate to='ErrorPage'/>}
          />
        </Routes>
        </main>
      <Footer />
    </>
  )
}

