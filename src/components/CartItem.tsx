'use client';

import { Button } from '@/components/ui/button';
import { useAppState } from '@/context';
import Image from 'next/image';
import { FaDeleteLeft } from 'react-icons/fa6';

const CartItem = () => {
  const { cart, handleIncrease, handleDecrease, handleRemoveFromCart } =
    useAppState() || {};

  return (
    <div className="flex-1 flex flex-col gap-4">
      {/* Render product items if cart exists and has items */}
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 even:bg-slate-200 bg-slate-100 rounded-md overflow-hidden h-fit relative"
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={200}
              height={200}
            />
            <div className="p-4 flex justify-between w-full">
              <div>
                <h2 className="text-[16px] xl:text-[18px] font-semibold text-primary capitalize mb-0">
                  {item.title}
                </h2>
                <p className="text-second font-medium text-[17px]">
                  {item.supDescription}
                </p>
                <p className="text-primary leading-[150%] text-[18px] xl:text-2xl font-semibold mt-3">
                  ${item.price}
                </p>
              </div>
              <div className="self-end flex items-center gap-2 justify-center">
                <Button
                  className="text-xl font-semibold bg-primary"
                  onClick={() => handleIncrease && handleIncrease(item.id)}
                >
                  +
                </Button>
                <span className="bg-slate-800 py-1 px-3 rounded-md text-white shadow">
                  {item.quantity}
                </span>
                <Button
                  className="text-xl font-semibold bg-primary"
                  onClick={() => handleDecrease && handleDecrease(item.id)}
                >
                  -
                </Button>
              </div>
            </div>
            <button
              className="py-2 px-4 bg-slate-200 border border-slate-300 hover:border-primary duration-300 absolute top-3 right-3 text-second hover:text-primary rounded-md"
              onClick={() =>
                handleRemoveFromCart && handleRemoveFromCart(item.id)
              }
            >
              <FaDeleteLeft size={25} />
            </button>
          </div>
        ))
      ) : (
        <p className="text-2xl text-primary font-semibold">No Product Added</p>
      )}
    </div>
  );
};

export default CartItem;
