import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Apartment from './pages/Apartment'
import './App.module.scss'

//import { Navigate } from 'react-router-dom'


// définition des différentes routes
export default function App() {
  document.title = 'Kasa - Agence immobilière web'
  
  return (
    <>
      <Header />
        <Routes>
          <Route 
            path='/' 
            element={<Home />}
            errorElement={<ErrorPage />}
          />
          <Route 
            path='/appartement/:id'
            element={<Apartment />}
            errorElement={<ErrorPage />}
          />
          <Route 
            path='/about' 
            element={<About />}
          />
          <Route 
            path='/*' 
            element={<ErrorPage />}
          />
        </Routes>
      <Footer />
    </>
  )
}

