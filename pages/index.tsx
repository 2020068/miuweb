import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'; // Import next/image

const HomePage = () => {
  const router = useRouter();

  const navigateToAbout = () => {
    router.push('/about');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-1 px-6 flex items-center justify-between">
        {/* Display the image using next/image */}
        <Image src="/images/MIU.png" alt="Logo" width={40} height={30} />

        <h1 className="text-4xl font-bold">Mongolia International University</h1>
      </header>

      {/* Main Content */}
      <div className="p-8">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={navigateToAbout}
        >
          Go to About Us
        </button>
      </div>
    </div>
  );
};

export default HomePage;
