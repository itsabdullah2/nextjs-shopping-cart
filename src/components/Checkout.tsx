'use client';

import { useAppState } from '@/context';

const Checkout = () => {
  const { cart } = useAppState() || {};

  const price =
    cart?.reduce((acc, item) => acc + Number(item.price) * item.quantity, 0) ||
    0;

  const shipping = 0;
  const totalPrice = price + shipping;

  return (
    <div className="w-96 h-fit bg-primary rounded-2xl p-5">
      <h3 className="text-white leading-[150%] font-semibold text-xl border-b border-slate-500 pb-2">
        Checkout
      </h3>
      <div className="flex flex-col gap-4 pb-5 border-b border-slate-500 mt-10">
        <div className="flex items-center justify-between">
          <p className="text-slate-200 font-medium text-[14px]">Subtotal</p>
          <h4 className="text-white font-semibold text-xl">${price}</h4>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-slate-200 font-medium text-[16x]">Shipping</p>
          <h4 className="text-white font-semibold text-xl">Free</h4>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <p className="text-slate-200 font-medium text-[16px]">Total</p>
        <h2 className="text-white font-bold text-2xl">${totalPrice}</h2>
      </div>
    </div>
  );
};
export default Checkout;
