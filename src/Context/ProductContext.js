import React,{ createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [ProductCode, setProductCode] = useState('');
  const [ProductPrice,setProductPrice]= useState(null);
  const [OldPrice,setOldPrice] = useState(null);


  const contextValue = {
    ProductCode,
    setProductCode,
    ProductPrice,
    setProductPrice,
    OldPrice,
    setOldPrice
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductCode = () => {
  return useContext(ProductContext);
};
