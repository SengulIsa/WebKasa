import React,{ createContext, useContext, useState } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children }) => {
    const [isPaymentSlipOpen, setIsPaymentSlipOpen] = useState(false);
    const [isDocumentFinishDisabled,setIsDocumentfinishDisabled]=useState(true);
    const [paymentCount, setPaymentCount] = useState(0);
    const [receivedMoney, setReceivedMoney] = useState(0);
    const [change, setChange] = useState(0.00);
    const [paymentType,setPaymentType]= useState([]);

  const contextValue = {
   isPaymentSlipOpen,setIsPaymentSlipOpen,
   paymentCount, setPaymentCount,
   receivedMoney, setReceivedMoney,
   change, setChange,
   paymentType,setPaymentType,
   isDocumentFinishDisabled,setIsDocumentfinishDisabled
  }
  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentInfo = () => {
  return useContext(PaymentContext);
};
