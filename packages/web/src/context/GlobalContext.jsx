import React, { createContext, useContext } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const meterId = "123456";
  const avatar = "/robot.png";
  const products = [
    { id: 1, name: "Product 1", image: "/shop/product1.png" },
    { id: 2, name: "Product 2", image: "/shop/product2.png" },
    { id: 3, name: "Product 3", image: "/shop/product3.png" },
    { id: 4, name: "Product 4", image: "/shop/product4.png" },
  ];

  return (
    <GlobalContext.Provider
      value={{
        meterId,
        avatar,
        products,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
