'use client';

import CartItem from '@/components/CartItem';
import Checkout from '@/components/Checkout';
import { useAppState } from '@/context';

const CartPage = () => {
  const { cart } = useAppState() || {};
  console.log(cart);

  return (
    <div className="flex-1 px-5 xl:px-10 mt-10 flex flex-col md:flex-row gap-5">
      <CartItem />
      <Checkout />
    </div>
  );
};

export default CartPage;
