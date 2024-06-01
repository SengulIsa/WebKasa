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
  const [showProductKeybrd,setShowProductKeybrd] = useState(null);

  
  const contextValue = {
    ProductCode, setProductCode,
    ProductPrice,setProductPrice,
    ProductName,setProductName,
    IsEmpty, setIsEmpty,
    Amounts, setAmounts,
    totalValue,setTotalValue,
    IsEntryClicked,setIsEntryClicked,
    selectedProductIndex, setSelectedProductIndex,
    IsSelected,setIsSelected,
    showProductKeybrd,setShowProductKeybrd
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
