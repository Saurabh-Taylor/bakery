import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="/" className='lg:ml-16 ml-7' >
      <Image 
        src="/logo4_copy.jpg"
        alt="Logo"
        width={120} 
        height={120}
      />
    </Link>
  );
}

export default Logo;
