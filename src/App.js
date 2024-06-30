import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './sections/Header';
import About from './sections/About';
import ContactForm from './sections/Contact';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicePage from './pages/ServicePage';
import TestimonialSlider from './sections/TestimonialSlider';
import PhotoGallery from './sections/Gallery';
import ServicesCard from './sections/ServicesCard'

import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import SimpleSlider from './sections/Slider';
import './App.css'
import Footer from './sections/Footer';



function App() {
  return (
    
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  </Router>
);
}

const HomePage = () => (
<>
  <SimpleSlider />
  <About />
  <ServicesCard />
  <PhotoGallery />
  <TestimonialSlider />
  <ContactForm />
  <Footer />
</>
);



export default App;
