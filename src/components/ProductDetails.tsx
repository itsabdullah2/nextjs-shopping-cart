import { AddToCartBtn } from './';
import Image from 'next/image';
import { listOfProducts } from '@/data';

const ProductDetails = ({ productId }: { productId: string }) => {
  const product = listOfProducts.find((product) => product.id === productId);

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <Image
        src={product.imgUrl}
        alt={product.title}
        width={500}
        height={500}
        className="bg-cover w-full h-full rounded-xl shadow-xl"
        loading="lazy"
      />
      <div className="flex flex-col">
        <h2 className="text-primary font-semibold mb-2 text-2xl capitalize">
          {product.title}
        </h2>
        <p className="text-second font-medium leading-normal mb-3">
          {product.description}
        </p>
        <span className="w-full md:w-[400px] border-b border-second border-[3px] rounded-full" />
        <h3 className="text-[36px] md:text-[48px] font-bold text-primary mt-4">
          <span className="text-3xl font-medium">Price:</span> ${product.price}
        </h3>
        <div className="mt-3">
          <AddToCartBtn product={product} productId={product.id} />
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
