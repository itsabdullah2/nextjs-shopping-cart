import ProductItem from '../components/ProductItem';

export default function Home() {
  return (
    <div className="flex-1 mt-20 max-w-[1440px] mx-auto px-5 xl:px-10">
      <h1 className="text-2xl font-semibold">Products</h1>
      <ProductItem />
    </div>
  );
}
