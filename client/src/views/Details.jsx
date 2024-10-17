import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Details = (props) => {
  const [quote, setQuote] = useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    axios.get(`http://localhost:8000/api/contact/${id}`)
      .then((res) => {
        console.log(res)
        setQuote(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/contact/${id}`)
      .then((res) => {
        navigate('/quotes')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <Header title={`${quote.firstName}'s Details`} />
      <div className='container'>
        <div className='mt-3'>
          <h2>{quote.firstName} {quote.lastName}</h2>
          <p>Email: <a href={`mailto:${quote.email}`}>{quote.email}</a></p>
          <p>Phone: {quote.phone}</p>
          <p>City: {quote.city}</p>
          <p>Zip Code: {quote.zipCode}</p>
          <p>Services wanted: {quote.services}</p>
          <Link className='btn btn-primary m-2 col' to={'/quotes'}>Go Back</Link>
          <button onClick={deleteHandler} className='btn btn-danger m-2'>Delete</button>
        </div>
      </div>
    </div>
  )
}
export default Details
