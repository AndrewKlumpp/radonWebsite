import React, { useState } from 'react';
import Header from '../components/Header';
import ServicesOffered from '../components/ServicesOffered';

const Services = (props) => {
  return (
    <div>
      <Header title={'Services Offered'} />
      <ServicesOffered/>
    </div>
  )
}
export default Services;
