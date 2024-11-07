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
  handleRemoveFromCart: (id: string) => void;
  handleIncrease: (id: string) => void;
  handleDecrease: (id: string) => void;
  isNavOpen: boolean;
  handleNavbar: () => void;
}

export const AppStateContext = createContext<AppStateContextType | null>(null);

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
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      await new Promise((resolve) =>
        setTimeout(resolve, Math.random() * 4000 + 500)
      );
      setProducts(listOfProducts);
      setIsLoading(false);
    };
    getData();
  }, []);

  const handleAddToCart = (product: ProductsType): void => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleNavbar = (): void => {
    setIsNavOpen((prev) => !prev);
  };

  const handleIncrease = (id: string): void => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDecrease = (id: string): void => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            if (item.quantity <= 1) {
              return null;
              // handleRemoveFromCart(id);
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        })
        .filter((item): item is ProductsType => item !== null)
    );
  };

  const values: AppStateContextType = {
    click,
    setClick,
    products,
    isLoading,
    handleAddToCart,
    cart,
    handleRemoveFromCart,
    handleIncrease,
    handleDecrease,
    isNavOpen,
    handleNavbar,
  };

  return (
    <AppStateContext.Provider value={values}>
      {children}
    </AppStateContext.Provider>
  );
};
export const useAppState = () => useContext(AppStateContext);
