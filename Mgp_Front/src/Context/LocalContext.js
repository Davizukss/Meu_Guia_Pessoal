import React, { createContext, useState } from 'react';


export const LocalContext = createContext();


export const LocalProvider = ({ children }) => {
  const [localData, setLocalData] = useState([]);


  const clearLocalData = () => {
    console.log('clearLocalData foi chamado');
    setLocalData([]);
  };

  return (
    <LocalContext.Provider value={{ localData, setLocalData, clearLocalData }}>
      {children}
    </LocalContext.Provider>
  );
};
