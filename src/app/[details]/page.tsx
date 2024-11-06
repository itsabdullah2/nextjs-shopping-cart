'use client';

import { ProductDetails } from '@/components';
import { usePathname, useSearchParams } from 'next/navigation';

const DetailsPage = () => {
  const pathname = usePathname();
  const id = pathname.split('/')[1];

  return (
    <div className="flex-1 mt-20 max-w-[1440px] mx-auto px-5 xl:px-10">
      <ProductDetails productId={`${id}`} />
    </div>
  );
};
export default DetailsPage;
