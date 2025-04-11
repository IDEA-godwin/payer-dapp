'use client'

import React, { createContext, PropsWithChildren, useContext } from "react";

const GlobalContext = createContext<any>({});

export type Product = {
  id: number,
  name: string,
  image: string
}

export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const meterId = "123456";
  const avatar = "images/robot.png";
  const products: Array<Product> = [
    { id: 1, name: "Product 1", image: "/images/shop/product1.png" },
    { id: 2, name: "Product 2", image: "/images/shop/product2.png" },
    { id: 3, name: "Product 3", image: "/images/shop/product3.png" },
    { id: 4, name: "Product 4", image: "/images/shop/product4.png" },
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
