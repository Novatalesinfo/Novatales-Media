import React, { useEffect } from 'react';
import OurServices from './OurServices';
import ContactForm from './ContactForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import YourAims from './YourAims';
import Clients from './Clients';
import MainPage from './MainPage';
const Home = () => {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);

    // Scroll to the element with the ID in the URL hash
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  // Render the components for the home page
  return (
    <HelmetProvider  >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>NovaTales - Best Digital Marketing and Branding Agency</title>
        <meta
          name="description"
          content="Transform your digital presence with NovaTales digital marketing company with expertise in logo design, Web development, social media content, video production."
        />
        <meta
          name="keywords"
          content="digital marketing agency, best digital marketing company, social media content creation, social media marketing agency, web development services."
        />
      </Helmet>
      <MainPage />
      <YourAims />
      <div id="our-services">
        <OurServices />
      </div>
     <div id='Our-Clients'>
     <Clients />
     </div>
      <ContactForm />
    </HelmetProvider>
  );
};

export default Home;
