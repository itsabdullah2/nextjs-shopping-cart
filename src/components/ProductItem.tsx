'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AddToCartBtn } from './';
import { useAppState } from '@/context';

const ProductItem = () => {
  const { isLoading, products } = useAppState() || {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-8">
      {isLoading && <p>Loading....</p>}
      {!isLoading &&
        products &&
        products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-100 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={product.imgUrl}
              alt={product.title}
              width={'300'}
              height={'300'}
              className="w-full bg-contain h-[300px]"
            />
            <div className="p-4 flex flex-col gap-2 md:gap-3 lg:gap-5">
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-primary capitalize text-xl leading-[150%]">
                    {product.title}
                  </h2>
                  <p className="text-primary leading-[150%] text-[18px] xl:text-2xl font-semibold">
                    ${product.price}
                  </p>
                </div>
                <p className="text-second font-base leading-[150%] text-[14px] xl:text-[17px]">
                  {product.supDescription}
                </p>
                <div></div>
              </div>
              <div className="flex items-center justify-between">
                <AddToCartBtn productId={product.id} product={product} />
                <Link
                  href={`/${product.id}`}
                  className="bg-primary hover:bg-slate-800 duration-200 text-white h-9 px-4 py-2 rounded-md text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductItem;
