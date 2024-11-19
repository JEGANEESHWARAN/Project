import React, { createContext, useState, useContext } from 'react';

const TestContext = createContext();

export const TestProvider = ({ children }) => {
  const [tests, setTests] = useState([]);

  const addTest = (test) => {
    setTests((prevTests) => [...prevTests, test]);
  };

  return (
    <TestContext.Provider value={{ tests, addTest }}>
      {children}
    </TestContext.Provider>
  );
};

export const useTest = () => {
  const context = useContext(TestContext);
  if (!context) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
};
