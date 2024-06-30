import React from 'react';
import About from '../sections/About';
import ServicesCard from '../sections/ServicesCard';
import PhotoGallery from '../sections/Gallery';
import ContactForm from '../sections/Contact';
import Footer from '../sections/Footer';

import '../App.css';

const AnotherPage = () => {
  return (
    <>
      <About />
      <ServicesCard />
      <PhotoGallery />
      <ContactForm />
      <Footer />

    </>
  );
};

export default AnotherPage;

