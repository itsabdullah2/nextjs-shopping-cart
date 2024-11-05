import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

const liStyles =
  'text-second hover:text-white font-medium text-lg duration-200';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-5 px-5 xl:px-10 bg-primary">
      <Link href="/" className="text-white text-2xl font-bold">
        Shoppy
      </Link>
      <ul className="hidden md:flex items-center gap-5">
        <li className={`${liStyles}`}>
          <Link href="/">Products</Link>
        </li>
        <li className={`${liStyles}`}>
          <Link href="/cart">Cart</Link>
        </li>
      </ul>
      <button className="text-second hover:text-white block md:hidden">
        <IoMenu size={30} />
      </button>
    </nav>
  );
};

export default Navbar;
