'use client';

import { useAppState } from '@/context';
import { listOfProducts } from '@/data';

const ProductDetails = ({ productId }: { productId: string }) => {
  const product = listOfProducts.find((product) => product.id === productId);

  if (!product) return <h1>Product Not Found</h1>;

  return <h1>{product.title}</h1>;
};
export default ProductDetails;
