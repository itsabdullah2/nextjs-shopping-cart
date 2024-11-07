'use client';

import Link from 'next/link';
import { IoMenu, IoClose } from 'react-icons/io5';
import { useAppState } from '@/context';

const liStyles =
  'text-second hover:text-white font-medium text-lg duration-200';

const Navbar = () => {
  const { isNavOpen, handleNavbar } = useAppState() || {};

  return (
    <nav className="flex items-center justify-between py-5 px-5 xl:px-10 bg-primary relative z-10">
      <Link href="/" className="text-white text-2xl font-bold">
        Shoppy
      </Link>
      <ul
        className={`flex items-center gap-5 lg:static absolute ${
          isNavOpen ? 'bottom-[-116px]' : 'bottom-full'
        } w-full lg:w-auto left-0 flex-col lg:flex-row bg-[#020617eb] lg:bg-transparent z-[-1] duration-300 p-5 lg:p-0`}
      >
        <li className={`${liStyles}`}>
          <Link href="/" onClick={handleNavbar}>
            Products
          </Link>
        </li>
        <li className={`${liStyles}`}>
          <Link href="/cart" onClick={handleNavbar}>
            Cart
          </Link>
        </li>
      </ul>
      <button
        className="text-second hover:text-white block lg:hidden"
        onClick={handleNavbar}
      >
        {isNavOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
      </button>
    </nav>
  );
};

export default Navbar;
