import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const NavBar = () => {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link style={{ color: router.pathname === '/' ? 'red' : 'blue' }} className='Name' href='/'>
        Home
      </Link>
      <Link style={{ color: router.pathname === '/about' ? 'red' : 'blue' }} href='/about'>
        About
      </Link>
    </nav>
  );
};

export default NavBar;
