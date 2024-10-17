import React, { useState } from 'react';
import Header from '../components/Header';
import ReviewForm from '../components/ReviewForm';
import { Link } from 'react-router-dom';

const AddReview = () => {
  return (
    <div>
      <Header title={'Add a Review'} />
      <ReviewForm />
    </div>
  )
}
export default AddReview;
