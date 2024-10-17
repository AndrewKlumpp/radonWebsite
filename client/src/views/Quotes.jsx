import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Quotes = () => {
  const [quotes, setQuotes] = useState([])
  useEffect(() => {
    axios.get('http://localhost:8000/api/contact')
      .then((res) => {
        console.log(res)
        setQuotes(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <Header title={'Submitted Quotes'} />
      <div className='container'>
        <table className='table table-striped table-dark border mt-3'>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Zip</th>
              <th>Services Requested</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {
              quotes.map((quote) => (
                <tr key={quote._id}>
                  <td>{quote.firstName}</td>
                  <td>{quote.lastName}</td>
                  <td>{quote.email}</td>
                  <td>{quote.phone}</td>
                  <td>{quote.city}</td>
                  <td>{quote.zipCode}</td>
                  <td>{quote.services}</td>
                  <td><Link className='name btn btn-info' to={`/${quote._id}/details`}>Details</Link></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Quotes;
