import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import Menu from '@/components/menu'; 
import styles from '@/pages/visit.module.css';
import Footer from '@/components/footer';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'; // Import GoogleMap and LoadScript components from @react-google-maps/api

const VisitorPage: React.FC = () => {
  const mapCenter = { lat: 47.91482657901934, lng: 106.9731089094383 }; // Define the map center coordinates
  return (
    <div className={styles.container}>
       <div className={styles.miulogo}>
          <Link href="/">

              <Image src="/images/MIU.png" alt="MIU Logo" width={50} height={100} />
          </Link>
        </div>
      <div className={styles.menu}> <Menu/> </div>
      <div className={styles.visit_photo}> </div>
      <div className={styles.google_map}> </div>
      <div className={styles.map}>
        <Link href="https://www.google.com/maps/place/Mongolia+International+University/@47.9146792,106.9711992,17z/data=!3m1!4b1!4m6!3m5!1s0x5d96919485d76a77:0xc3c65e3fb66fde11!8m2!3d47.9146756!4d106.9737741!16s%2Fm%2F02x0l38?entry=ttu" target="_blank">
        
          <Image src= '/images/map.png'  alt="Map Logo" width={100} height={100} />
  
        </Link>
      </div>

         {/* Main Content */}
   
         <div className= {styles.visit_comment}>
        <p>VISIT</p>
      </div>


           {/* Google Map */}
     <div className={styles.google_map}>
     
          <LoadScript
            googleMapsApiKey="AIzaSyDpxO3C-vyVGkFjK8Bvc8PfenC09dvzYIE"
            language="en"
          >
            <GoogleMap
              mapContainerStyle={{ height: '100%', width: '50%' }}
              center={{ lat: 47.91485497895525, lng: 106.97356077908525 }}
              zoom={15}
            >
              {/* Add Marker component */}
              <Marker position={{ lat: 47.91485497895525, lng: 106.97356077908525 }} title="Mongolia International University" />
            </GoogleMap>
          </LoadScript>
          
        </div>

      <div className={styles.footer}> <Footer/> </div>
    </div>
  );
};

export default VisitorPage;