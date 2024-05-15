import React,{ createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [ProductCode, setProductCode] = useState('');
  const [ProductPrice,setProductPrice]= useState([]);
  const [ProductName, setProductName] = useState([]);
  const [IsEmpty, setIsEmpty] = useState(true);
  const  [Amounts,setAmounts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  
  const contextValue = {
    ProductCode,
    setProductCode,
    ProductPrice,
    setProductPrice,
    ProductName,
    setProductName,
    IsEmpty,
    setIsEmpty,
    Amounts,
    setAmounts,
    totalValue,
    setTotalValue
  }
  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductCode = () => {
  return useContext(ProductContext);
};
