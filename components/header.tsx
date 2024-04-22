import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
const MongoliansvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg';
const AmericansvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_the_U.S..svg';
const Header = () => {
  const router = useRouter();
  const [flag, setFlag] = useState(MongoliansvgUrl);

  const toggleFlag = () => {
    setFlag(flag === MongoliansvgUrl ? AmericansvgUrl : MongoliansvgUrl);
  };

  return (
    <header className="bg-blue-500 text-white py-1 px-6 flex items-center justify-between">
      <div className="flex items-center justify-center flex-grow">
        <Image src="/images/MIU.png" alt="Logo" width={40} height={30} />
      </div>
      <div className="flex items-center">
        <Image src={flag} width={40} height={30} alt="Flag" className="ml-2 z-10" onClick={toggleFlag} />
      </div>
    </header>
  );
};

export default Header;