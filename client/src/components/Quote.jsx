import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Quote = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [services, setServices] = useState('')
  const [errors, setErrors] = useState({})

  const submitHandler = (e) => {
    e.preventDefault();
    const newQuote = {
      firstName,
      lastName,
      email,
      phone,
      city,
      zipCode,
      services
    }
    axios.post('http://localhost:8000/api/contact', newQuote)
      .then((res) => {
        navigate('/quote')
      })
      .catch((err) => {
        setErrors(err.response.data.errors)
      })
  }

  return (
    <div className='container'>
      <div className='d-flex mt-2'>
        <div className='col'>
          <form className='w-50 mx-auto' onSubmit={submitHandler}>
            <div>
              <label className='form-label'>First Name</label>
              <input
                className='form-control'
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
              />
              {
                errors.firstName ?
                  <p className='text-danger'>{errors.firstName.message}</p> :
                  null
              }
            </div>
            <div>
              <label className='form-label'>Last Name</label>
              <input
                className='form-control'
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
              />
              {
                errors.lastName ?
                  <p className='text-danger'>{errors.lastName.message}</p> :
                  null
              }
            </div>
            <div>
              <label className='form-label'>Email</label>
              <input
                className='form-control'
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              {
                errors.email ?
                  <p className='text-danger'>{errors.email.message}</p> :
                  null
              }
            </div>
            <div>
              <label className='form-label'>Phone</label>
              <input
                className='form-control'
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              {
                errors.phone ?
                  <p className='text-danger'>{errors.phone.message}</p> :
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
              <label className='form-label'>Zip Code</label>
              <input
                className='form-control'
                type="text"
                onChange={(e) => setZipCode(e.target.value)}
                value={zipCode}
              />
              {
                errors.zipCode ?
                  <p className='text-danger'>{errors.zipCode.message}</p> :
                  null
              }
            </div>
            <div>
              <label className='form-label'>What services are you interested in?</label>
              <input
                className='form-control'
                type="text"
                onChange={(e) => setServices(e.target.value)}
                value={services}
              />
              {
                errors.services ?
                  <p className='text-danger'>{errors.services.message}</p> :
                  null
              }
            </div>
            <br />
            <button className='btn btn-success'>Submit</button>
          </form>
        </div>
        <div className='col'>
          <h2>How to Contact Us:</h2>
          <address>
            <a href="mailto:coloradoradonspecialists@gmail.com">coloradoradonspecialists@gmail.com</a><br />
            <hr />
            <a href="tel:+19703196586">(970) 319-6586</a><br />
            <hr />
            Colorado Radon Specialists<br />
            1104 Powell Street<br />
            Fruita, CO 81521<br />
          </address>
        </div>
      </div>
    </div>
  )
}
export default Quote
