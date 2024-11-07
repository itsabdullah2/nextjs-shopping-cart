import CartItem from '@/components/CartItem';
import Checkout from '@/components/Checkout';

const CartPage = () => {
  return (
    <div className="flex-1 px-5 xl:px-10 mt-10 flex flex-col lg:flex-row gap-5">
      <CartItem />
      <Checkout />
    </div>
  );
};

export default CartPage;
