import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [stars, setStars] = useState('')
  const [review, setReview] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:8000/api/review/${id}`)
      .then((res) => {
        console.log(res)
        setName(res.data.name)
        setCity(res.data.city)
        setStars(res.data.stars)
        setReview(res.data.review)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedReview = {
      name,
      city,
      stars,
      review
    }
    axios.put(`http://localhost:8000/api/review/${id}`, updatedReview)
      .then((res) => {
        navigate(`/reviews`)
      })
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  }

  const deleteHandler = () => {
    axios.delete(`http://localhost:8000/api/review/${id}`)
    .then((res) => {
      navigate('/reviews')
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <div>
      <Header title={'Update Review'} />
      <form className='w-50 mx-auto' onSubmit={submitHandler}>
        <div>
          <label className='form-label'>Name</label>
          <input
            className='form-control'
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          {
            errors.name ?
            <p className='text-danger'>{errors.name.message}</p> :
            null
          }
        </div>
        <div>
          <label className='form-label'>City</label>
          <input
            className='form-control'
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
          {
            errors.city ?
            <p className='text-danger'>{errors.city.message}</p> :
            null
          }
        </div>
        <div>
          <label className='form-label'>Stars</label>
          <input
            className='form-control'
            type="number"
            onChange={(e) => setStars(e.target.value)}
            value={stars}
          />
          {
            errors.stars ?
            <p className='text-danger'>{errors.stars.message}</p> :
            null
          }
        </div>
        <div>
          <label className='form-label'>Review</label>
          <input
            className='form-control'
            type="text"
            onChange={(e) => setReview(e.target.value)}
            value={review}
          />
          {
            errors.review ?
            <p className='text-danger'>{errors.review.message}</p> :
            null
          }
        </div>
        <br />
        <button className='btn btn-success'>Submit</button>
        <Link className='btn btn-primary m-2 col' to={'/reviews'}>Go Back</Link>
        <button onClick={deleteHandler} className='btn btn-danger delete-button'>Delete Review</button>
      </form>
    </div>
  )
}
export default Edit
