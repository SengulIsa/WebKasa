import React, { useState, useEffect } from 'react';

const OrderedProducts = ({ names, prices }) => {
  return (
    <div>
      {prices.map((price, index) => (
        <div key={index}>
          <p>{index + 1}. price: {price}</p>
        </div>
      ))}
    </div>
  );
};

export default OrderedProducts;
