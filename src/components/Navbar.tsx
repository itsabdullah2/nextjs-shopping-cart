import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-sky-500">
      <Link href="/">Shoppy</Link>
      <ul className="flex items-center gap-4 text-white">
        <li>
          <Link href="/products-page">Products</Link>
        </li>
        <li>
          <Link href="/cart-page">Cart</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
