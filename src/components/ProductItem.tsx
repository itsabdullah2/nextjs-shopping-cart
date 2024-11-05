'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAppState } from '@/context';

const ProductItem = () => {
  const { isLoading, products, handleAddToCart } = useAppState() || {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-4 mt-8">
      {isLoading && <p>Loading....</p>}
      {!isLoading &&
        products &&
        products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-100 rounded-lg overflow-hidden"
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
                <h2 className="font-semibold text-primary capitalize text-xl leading-[150%]">
                  {product.title}
                </h2>
                <p className="text-second font-medium leading-[150%] text-[16px] xl:text-[18px]">
                  {product.desc}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Button
                  className="bg-primary hover:bg-slate-800 duration-200"
                  onClick={() => handleAddToCart && handleAddToCart(product)}
                >
                  Add To Cart
                </Button>
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
