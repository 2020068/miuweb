import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex items-center justify-between">
      <div className="flex items-center justify-end">
        <Image src="/images/MIU.png" alt="Logo" width={40} height={30} />
        <h1 className="text-2xl font-bold pl-5">Mongolia International University</h1>
      </div>
        <div className="flex items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4" onClick={navigateToAbout}>
            About Us
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/')}>
            Home
          </button>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Mongolia International University. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;