'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { useAppState } from '@/context';
import { ProductsType } from '@/data';

interface Props {
  productId: string;
  product: ProductsType;
}

const AddToCartBtn = ({ productId, product }: Props) => {
  const { cart, handleRemoveFromCart, handleAddToCart } = useAppState() || {};
  const [isAdding, setIsAdding] = useState<boolean>(false); // Use state for loading indicator

  const handleClick = async () => {
    if (cart && handleRemoveFromCart && handleAddToCart) {
      setIsAdding(true); // Show loading indicator

      try {
        const isInCart = cart.some(
          (item: ProductsType) => item.id === productId
        );
        if (isInCart) {
          handleRemoveFromCart(productId);
        } else {
          handleAddToCart(product);
        }
      } catch (error) {
        console.error('Error adding/removing item to cart:', error);
        // Handle error gracefully (e.g., display error message to user)
      } finally {
        setTimeout(() => setIsAdding(false), 1000); // Hide loading indicator after 1 second
      }
    }
  };

  const buttonText = cart?.some((item: ProductsType) => item.id === productId)
    ? 'Remove from cart'
    : 'Add to cart';

  return (
    <Button
      className="bg-primary hover:bg-slate-800 duration-200"
      onClick={handleClick}
      disabled={isAdding} // Disable button while adding/removing
    >
      {isAdding ? (
        // Display loading indicator while adding/removing
        <span className="loader"></span> // Customize loading text
      ) : (
        buttonText
      )}
    </Button>
  );
};

export default AddToCartBtn;
