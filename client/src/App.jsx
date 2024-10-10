import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Contact from './views/Contact'
import Portfolio from './views/Portfolio'
import Reviews from './views/Reviews'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/reviews' element={<Reviews/>}/>
      </Routes>
    </>
  )
}

export default App
