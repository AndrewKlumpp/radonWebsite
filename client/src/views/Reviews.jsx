import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import DisplayReviews from '../components/DisplayReviews';

const Reviews = (props) => {
  return (
    <div>
      <Header title={'Reviews'} />
      <DisplayReviews />
    </div>
  )
}
export default Reviews;
