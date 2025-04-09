import React from 'react';
// Import images
import packagingDesignLarge from '../../images/PACKAGING DESIGN & PRODUCTION 6.svg';
import packagingDesignTab from '../../images/packaging design & production tab.svg';
import packagingDesignMobile from '../../images/package design & production m.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet  from 'react-helmet' to set the HTML head metadata
export default function PackageDesign() {
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Premium Branding and Packaging Design Agency For Brands</title>
        <meta
          name="description"
          content="NovaTales is a creative branding and packaging design agency. We provide designs for products that play a crucial role to boost sales and customer satisfaction."
        />
             <meta name="keywords"
        content="packaging design agency,creative packaging design,brand and packaging design,best packaging design,logo and packaging design companies,branding and packaging design agency."/>
      </Helmet>
      <div className="service-heading">
        <img src={packagingDesignLarge} width="100%" alt="packaging design agency" className="lap" />
        <img src={packagingDesignTab} alt="packaging design agency" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h1 className="content-main-heading mb-3">Package Design & Production</h1>
                  <p className="mt-3">
                    Packaging is one of the most fundamental activities when it comes to a product launch. Since packaging is the first moment of truth, it needs to be as effective as possible. At Nova Tales, our skilled team of designers ensures that they make an attractive product packaging design that sparks interest, provides relevant information, and starts a conversation. We strongly believe that packaging is crucial for brand identity as it creates the first connection between customers and the company and becomes a key part of brand recognition.
                  </p>
                  <p>We do innovative packaging design that has the potential to increase your brand value and boost sales. We ensure that our packaging combines form with function to create a thrilling experience for its users. packaging helps in creating an emotional connection between the brand and customer. It not only leaves a good impression on its user, but also effectively communicates important information about the product at a glance. </p>
                  <div className="media">
                    <div className="media-body">
                      <p>As a creative design agency, our packaging designs make a strong impact on store shelves and social media and makes customers naturally interested in the product. Whether it is creating a brand new packaging look or updating existing packaging, we got you covered.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={packagingDesignMobile} alt="creative packaging design" className="img-fluid topBottom" />
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
