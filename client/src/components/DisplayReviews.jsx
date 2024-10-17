import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DisplayReviews = (props) => {
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/review')
      .then((res) => {
        console.log(res)
        setReviews(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div className='container'>
      <table className='table table-striped table-dark border mt-3'>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Stars</th>
            <th>Review</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            reviews.map((review) => (
              <tr key={review._id}>
                <td>{review.name}</td>
                <td>{review.city}</td>
                <td>{review.stars}</td>
                <td>{review.review}</td>
                <td><Link className='btn btn-success' to={`/${review._id}/edit`}>Edit</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <Link className='btn btn-success m-2' to={`/create/review`}>Add a Review</Link>
    </div>
  )
}
export default DisplayReviews;
