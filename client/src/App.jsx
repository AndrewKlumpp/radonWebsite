import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Contact from './views/Contact'
import Portfolio from './views/Portfolio'
import Reviews from './views/Reviews'
import AddReview from './views/AddReview'
import Edit from './views/Edit'
import QuoteThanks from './views/QuoteThanks'
import Quotes from './views/Quotes'
import Details from './views/Details'

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
        <Route path='/:id/edit' element={<Edit/>}/>
        <Route path='/quote' element={<QuoteThanks/>}/>
        <Route path='/quotes' element={<Quotes/>}/>
        <Route path='/:id/details' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
