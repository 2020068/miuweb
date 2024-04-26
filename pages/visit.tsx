import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Menu from '@/components/menu';
import styles from '@/pages/visit.module.css';
import Footer from '@/components/footer';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Header from '@/components/header';

const VisitorPage: React.FC = () => {
  const mapCenter = { lat: 47.91482657901934, lng: 106.9731089094383 };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formError, setFormError] = useState('');

  const handleSubmit = () => {
    const { name, email, phone, message } = formData;
    if (!name || !email || !phone || !message) {
      setFormError('Please fill in all fields');
      return;
    } else {
      setFormError('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className= {styles.plan}>
          <p>PLAN YOUR VISIT TO MIU</p>
          <a>See all the things MIU has to offer</a>
        </div>

      <div className={styles.menu}><Menu /></div>
      <div className={styles.visit_photo}></div>

      <div className={styles.map}>
        <Link href="https://www.google.com/maps/place/Mongolia+International+University/@47.9146792,106.9711992,17z/data=!3m1!4b1!4m6!3m5!1s0x5d96919485d76a77:0xc3c65e3fb66fde11!8m2!3d47.9146756!4d106.9737741!16s%2Fm%2F02x0l38?entry=ttu" target="_blank">
          <p>SeeMoreDetail</p>
        </Link>
      </div>



      <div className={styles.contactUs}>
        <h2>Contact Us</h2>
        {formError && <p className={`${styles.errorMessage} ${styles.errorPosition}`}>{formError}</p>}
        <div className={styles.inputContainer}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="phone">Phone Number:</label>
          <input type="tel" id="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" value={formData.message} onChange={handleChange}></textarea>
        </div>

        <button className={styles.customButton} onClick={handleSubmit}>Submit</button>
      </div>




      <div className= {styles.location}>
      <div className={styles.google_map}>
     
     <LoadScript
       googleMapsApiKey="AIzaSyDpxO3C-vyVGkFjK8Bvc8PfenC09dvzYIE"
       language="en"
     >
       <GoogleMap
         mapContainerStyle={{ height: '700px', width: '600px' }}
         center={{ lat: 47.91485497895525, lng: 106.97356077908525 }}
         zoom={15}
       >
         {/* Add Marker component */}
         <Marker position={{ lat: 47.91485497895525, lng: 106.97356077908525 }} title="Mongolia International University" />
       </GoogleMap>
     </LoadScript>
   </div>
   <div className={styles.text}>
        <a>Getting Here</a>
        <br />
        <p>There are many ways to get to The Bronx Charter School for Children, 
        <br />which is located in the Mott Haven neighborhood of the South Bronx. 
        <br />Our elementary school (grades K-5) is located at 388 Willis Avenue 
        <br />(at the corner of 144th Street). Our middle school (grades 6-7) is located 
        <br />at 423 East 138th Street.</p>
        <br />

        <a> Student Transportation Options </a>
        <br />
        <p>New families receive information in the spring and summer about 
        <br />transportation options,which include student Metrocards or 
        <br />free yellow bus service for those who meet eligibility requirements.</p>
        
        <br />
        <a>Public Transportation</a>
        <br />
        <p>For those taking public transportation, The Bronx Charter School is
        <br />within walking distance of many subway lines, including the 6 
        <br />(3rd Avenue/138th Street) and the 2/5 (3rd Avenue/149th Street).
        <br />The Bx15 bus passes directly in front of the elementary school.</p>
        
        <br />
        <a>By Car</a>
        <p>The school is also accessible by car off the 3rd Avenue/Willis 
        <br />Avenue Bridge or the East 138th Street/Madison Avenue Bridge. 
        <br />Street parking and parking lots are available in the area.</p>
        </div>
      </div>


           {/* Google Map */}
  

      <div className={styles.footer}> <Footer/> </div>
    </div>
  );
};

export default VisitorPage;