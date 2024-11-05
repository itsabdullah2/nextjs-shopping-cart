'use client';

import Loading from '@/app/loading';
import React, { Suspense } from 'react';
import { Navbar, Footer } from '@/components';

interface Props {
  children: React.ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex flex-col h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default CommonLayout;
