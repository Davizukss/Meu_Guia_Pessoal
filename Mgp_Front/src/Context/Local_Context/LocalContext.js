import React, { createContext, useState } from 'react';

export const LocalContext = createContext();

export const LocalProvider = ({ children }) => {
  const [localData, setLocalData] = useState([]);

  return (
    <LocalContext.Provider value={{ localData, setLocalData }}>
      {children}
    </LocalContext.Provider>
  );
};
