import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ReviewForm = (props) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [city, setCity] = useState('')
  const [stars, setStars] = useState('')
  const [review, setReview] = useState('')
  const [errors, setErrors] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    const newReview = {
      name,
      city,
      stars,
      review
    }
    axios.post('http://localhost:8000/api/review', newReview)
      .then((res) => {
        navigate('/reviews')
      })
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  }

  return (
    <div>
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
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}
export default ReviewForm
