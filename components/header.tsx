import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  return (
    <header className="bg-blue-500 text-white py-1 px-6 flex items-center">
      <Image src="/images/MIU.png" alt="Logo" width={40} height={30} />
      <h1 className="text-2xl pl-5">Mongolia International University</h1>
      {/* You can add more header elements here */}
    </header>
  );
};

export default Header;
