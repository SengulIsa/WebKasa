import React,{ createContext, useContext, useState } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [ProductCode, setProductCode] = useState('');
  const [ProductPrice,setProductPrice]= useState([]);
  const [ProductName, setProductName] = useState([]);
  const [IsEmpty, setIsEmpty] = useState(true);
  const  [Amounts,setAmounts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [IsEntryClicked,setIsEntryClicked] = useState(false);
  const [selectedProductIndex, setSelectedProductIndex] = useState(null);
  const [IsSelected,setIsSelected] = useState(null);
  const [twentyOffDisabled, setTwentyOffDisabled] = useState(false);
  const [tenOffDisabled, setTenOffDisabled] = useState(false);

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
    setTotalValue,
    IsEntryClicked,
    setIsEntryClicked,
    selectedProductIndex,
    setSelectedProductIndex,
    IsSelected,
    setIsSelected,twentyOffDisabled,setTwentyOffDisabled,tenOffDisabled,setTenOffDisabled
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
