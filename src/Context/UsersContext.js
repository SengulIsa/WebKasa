import React,{ createContext, useContext, useState } from 'react';
import axios from 'axios';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [usercode, setUsercode] = useState('');
  const [version, setVersion] = useState('');
  const [caseIp, setCaseIp] = useState('');
  const [caseNumber, setCaseNumber] = useState(0);

  const fetchCaseInfo = async ()=>{
    await axios.get('http://localhost:3002/caseInfo')
    .then(result2=>{
     setVersion(result2.data[0].versn);
     setCaseIp(result2.data[0].CaseIp);
     setCaseNumber(result2.data[0].caseNumber);

    })
}

  const contextValue = {
    usercode,
    setUsercode,
    version,
    setVersion,
    caseIp,
    setCaseIp,
    caseNumber,
    setCaseNumber,
    fetchCaseInfo
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};