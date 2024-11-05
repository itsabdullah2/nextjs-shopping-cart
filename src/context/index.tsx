'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { listOfProducts, ProductsType } from '@/data';

interface AppStateContextType {
  click: boolean;
  setClick: React.Dispatch<React.SetStateAction<boolean>>;
  products: ProductsType[];
  isLoading: boolean;
  cart: ProductsType[];
  handleAddToCart: (product: ProductsType) => void;
}

const AppStateContext = createContext<AppStateContextType | null>(null);

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [cart, setCart] = useState<ProductsType[]>([]);
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 6000 + 500)
      );
      setProducts(listOfProducts);
      setIsLoading(false);
    };
    getData();
  }, []);

  const handleAddToCart = (product: ProductsType): void => {
    setCart((prev) => [...prev, product]);
  };

  const values: AppStateContextType = {
    click,
    setClick,
    products,
    isLoading,
    handleAddToCart,
    cart,
  };

  return (
    <AppStateContext.Provider value={values}>
      {children}
    </AppStateContext.Provider>
  );
};
export const useAppState = () => useContext(AppStateContext);
