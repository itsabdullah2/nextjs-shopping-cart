'use client';

import { useAppState } from '@/context';
import Image from 'next/image';

const CartItem = () => {
  const { cart } = useAppState() || {};

  return (
    <div className="flex-1 grid grid-cols-1 gap-4">
      {/* Render product items if cart exists and has items */}
      {cart && cart.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-slate-100 rounded-md overflow-hidden h-fit"
          >
            <Image
              src={item.imgUrl}
              alt={item.title}
              width={200}
              height={200}
            />
            <div>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No Product Added</p>
      )}
    </div>
  );
};

export default CartItem;
