import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Contact from './views/Contact'
import Portfolio from './views/Portfolio'
import Reviews from './views/Reviews'
import AddReview from './views/AddReview'

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
        <Route path='/create/review' element={<AddReview/>}/>
      </Routes>
    </>
  )
}

export default App
