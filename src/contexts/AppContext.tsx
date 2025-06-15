import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Product } from '../data/products';

export interface CartItem extends Product {
  quantity: number;
}

export interface Customer {
  nome: string;
  endereco: string;
  cep: string;
  cidade: string;
  bairro: string;
  estado: string;
  telefone: string;
}

interface AppContextType {
  cart: CartItem[];
  customer: Customer | null;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  saveCustomer: (customer: Customer) => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [customer, setCustomer] = useState<Customer | null>(null);

  const addToCart = useCallback((product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  const saveCustomer = useCallback((customerData: Customer) => {
    setCustomer(customerData);
  }, []);

  const getCartTotal = useCallback(() => {
    return cart.reduce((total, item) => total + (item.valorComDesconto * item.quantity), 0);
  }, [cart]);

  const getCartItemsCount = useCallback(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  return (
    <AppContext.Provider value={{
      cart,
      customer,
      addToCart,
      removeFromCart,
      clearCart,
      saveCustomer,
      getCartTotal,
      getCartItemsCount
    }}>
      {children}
    </AppContext.Provider>
  );
};