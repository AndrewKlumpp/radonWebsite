import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const QuoteThanks = (props) => {
  return (
    <div>
      <Header title={'Thank You!'} />
      <div className='container'>
        <h2>Thank you for submitting your quote request!</h2>
        <p>We will get back to you shortly.</p>
        <Link className='btn btn-primary m-2 col' to={'/'}>Go Home</Link>
      </div>
    </div>
  )
}
export default QuoteThanks;
