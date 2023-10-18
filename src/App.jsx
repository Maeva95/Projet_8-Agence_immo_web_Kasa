/* eslint-disable react-hooks/exhaustive-deps */
import '../style.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer'
import Header from './components/Header'
import ErrorElement from './components/ErrorElement'
import Apartment from './pages/Apartment'
import { Navigate } from 'react-router-dom'
//import ApartmentList from './data/logement'

export default function App() {
  document.title = 'Kasa - Agence immobilière web'

  //const homePage = <Route path='/'/> /// A REVERIFIER
  //const errorPage = !ApartmentList.id || !homePage

  //useEffect(() => {
  //  if (errorPage) {
  //    navigate('/404')
  //  } 
  //}, [errorPage])
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route 
            path='/:id'
            element={<Apartment />}
            errorElement={<ErrorElement />}
          />
          <Route path='/about' element={<About />}
          />
          <Route path='*' element={<Navigate to='ErrorElement'/>}
          />
        </Routes>
        </main>
      <Footer />
    </>
  )
}

