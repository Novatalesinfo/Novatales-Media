import React, { useEffect } from 'react';
import mobileAppLap from '../../images/MOBILE APP DEVELOPMENT 6.svg';
import mobileAppTab from '../../images/Mobile app development tab.svg';
import mobileAppImage from '../../images/Mobile App Development M.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function MobileApp() {
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  // Scroll to top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Mobile App Development Service | React Native, Flutter, Angular, Node JS</title>
        <meta
          name="description"
          content="NovaTales is a leading mobile app development company offering innovative solutions for iOS and Android with high performance apps to meet the business needs,best app development agencies."
        />
        <meta name="keywords"
          content="Mobile App Development Service, Mobile App Development Company, Android App Development Company, Mobile Application Development Agency, Mobile Application Design and Development" />
      </Helmet>
      <div className="service-heading">
        <img src={mobileAppLap} width="100%" alt=" Mobile App Development Company" className="lap" />
        <img src={mobileAppTab} alt=" Mobile App Development Company" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h1>Mobile App Development</h1>
                  <p className="mt-3">
                    Mobile App development plays a vital role for businesses, shaping the way to connect with audience in an increasingly mobile-centric world. Nova Tales Mobile App services develop branded mobile apps which allow businesses to establish a direct and personalized connection with their audience. We ensure that strong brand-consumer relationship is fostered by providing push notifications, personalized offers, and delivering targeted content, messages, and promotions to users.
                  </p>
                  <p>
                    Nova Tales leverages a variety of technologies to ensure the creation of high-quality, user-friendly applications, we specialize in technologies such as Iconic, React native and Flutter for iOS apps and Android applications, enabling us to build apps that run seamlessly on multiple platforms, saving time and resources for clients.
                  </p>
                  <p>
                    Our developers are skilled in technologies like Node.js, Mongo DB, Python and Golang ensuring robust server-side logic and efficient communication between the app and server. Security is a top priority and we implement encryption and secure authentication with Amazon web services and Google Cloud to safeguard user data. We also integrate analytics tools like Google Analytics and Firebase Analytics to provide clients with insights into user behavior and enhance app performance continually.
                  </p>
                  <p>
                    Nova Tales deployment process is streamlined through collaboration with platforms such as the App Store and Google Play Store. Our comprehensive approach to mobile app development, encompassing the latest technologies and best practices, positions Nova Tales as a reliable partner for businesses.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={mobileAppImage} alt="Mobile App Development Service" className="img-fluid topBottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllServices />
      <ServiceContactForm />
    </HelmetProvider>
  );
}
