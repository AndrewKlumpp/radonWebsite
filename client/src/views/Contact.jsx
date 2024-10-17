import React, { useState } from 'react';
import Header from '../components/Header';
import Quote from '../components/Quote';

const Contact = (props) => {
  return (
    <div>
      <Header title={'Get a Quote'} />
      <Quote />
    </div>
  )
}
export default Contact;
