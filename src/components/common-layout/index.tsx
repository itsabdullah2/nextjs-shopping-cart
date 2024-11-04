'use client';

import Loading from '@/app/loading';
import React, { Suspense } from 'react';

interface Props {
  children: React.ReactNode;
}

const CommonLayout = ({ children }: Props) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};

export default CommonLayout;
