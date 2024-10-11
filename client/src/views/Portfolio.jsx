import React, { useState } from 'react';
import Header from '../components/Header';
import PortfolioLayout from '../components/PortfolioLayout';

const Portfolio = (props) => {
  return (
    <div>
      <Header title={'Portfolio'} />
      <PortfolioLayout />
    </div>
  )
}
export default Portfolio;
