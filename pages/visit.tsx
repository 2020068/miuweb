import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import Menu from '@/components/menu'; 
import styles from '@/pages/visit.module.css';
import Footer from '@/components/footer';
import { GoogleMap, LoadScript } from '@react-google-maps/api'; // Import GoogleMap and LoadScript components from @react-google-maps/api

const VisitorPage: React.FC = () => {
  return (
    <div className="visitor-container">
      <div className={styles.menu}> <Menu/> </div>
      <div className={styles.visit_photo}> </div>
      <div className="visitor-content">
        <p>This is the visitor page content. Feel free to explore!</p>
        
        <div className={styles.miulogo}>
          <Link href="/"> {/* Use Link component to navigate to homepage */}
            <p>
              <Image src="/images/MIU.png" alt="MIU Logo" width={50} height={100} />
            </p>
          </Link>
        </div>
        
      </div>

      <h1 className="visitor-heading">Welcome, Visitor!</h1>
      <p>This is the visitor page content. Feel free to explore!</p>

      <div className="p-8 ">
        <p className="text-lg text-gray-700 mb-4">This is the content of the homepage.</p>
      </div>

           {/* Google Map */}
     <div style={{ height: '400px', width: '100%',}}>
          <LoadScript
            googleMapsApiKey="AIzaSyDpxO3C-vyVGkFjK8Bvc8PfenC09dvzYIE"
            language="en"
          >
            <GoogleMap
              mapContainerStyle={{ height: '100%', width: '100%' }}
              center={{ lat: 47.91482657901934, lng: 106.9731089094383 }}
              zoom={13}
            />
            
          </LoadScript>
        </div>

      






      <div className={styles.menu}> <Footer/> </div>
    </div>
  );
};

export default VisitorPage;
