import React, { useState } from 'react';
// Import images
import packagingDesignLarge from '../../images/PACKAGING DESIGN & PRODUCTION 6.svg';
import packagingDesignTab from '../../images/packaging design & production tab.svg';
import packagingDesignMobile from '../../images/package design & production m.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Col, Container, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import Helmet  from 'react-helmet' to set the HTML head metadata
export default function PackageDesign() {
  // const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  // const [activeIndexRight, setActiveIndexRight] = useState(null);
  // const toggleAccLeft = (index) => {
  //   setActiveIndexLeft(activeIndexLeft === index ? null : index);
  // };
  // const toggleAccRight = (index) => {
  //   setActiveIndexRight(activeIndexRight === index ? null : index);
  // };
  // const faq = [{
  //   q: "How does packaging affect brand perception?",
  //   a: "It’s often the first physical interaction customers have with your brand.",
  // },
  // {
  //   q: "How does packaging design influence buying decisions?",
  //   a: "Colors, typography, and layout subconsciously impact perception, making consumers more likely to choose your product over competitors.",
  // },
  //  {
  //   q: "How often should brands update their packaging design?",
  //   a: "We recommend refreshing designs every few years or when customer trends and market positioning shift.",
  // },
  
  // {
  //   q: "Why is packaging design so important for a brand?",
  //   a: "Packaging design is the first touchpoint customers have with your product—it communicates quality, trust, and brand personality instantly.",
  // },
  //   {
  //   q: "Can packaging influence online sales?",
  //   a: "Yes, visually appealing packaging boosts unboxing experiences and social sharing.",
  // },
  // {
  //   q: "Can packaging design improve e-commerce sales?",
  //   a: "Absolutely—unique and attractive designs enhance unboxing experiences, driving repeat purchases and social sharing.",
  // },
  // {
  //   q: "Can great packaging design increase customer loyalty?",
  //   a: "Yes, memorable packaging creates positive associations, making customers more likely to repurchase and recommend your brand.",
  // },
  // {
  //   q: "How do you balance creativity with functionality in packaging design?",
  //   a: "We ensure designs are visually appealing while staying practical for storage, handling, and customer usability.",
  // },
  // {
  //   q: "What industries benefit most from creative packaging?",
  //   a: "FMCG, cosmetics, luxury goods, and e-commerce brands.",
  // },
  
 
  // ]
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
          content="packaging design agency,creative packaging design,brand and packaging design,best packaging design,logo and packaging design companies,branding and packaging design agency." />
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
      {/* <div className="Health-faqs">
        <Container>
          <div className="health-faqs-heading">
            <h2 className='text-center' style={{
                textAlign: "center !important",
                marginBottom: "40px",
                marginTop: "40px",
                color: "#52377b"
              }}>Frequently Asked  Questions </h2>
          </div>
          <div className="faq-accordion" style={{
            paddingTop: "30px"
          }}>
            <Row>
          
              <Col lg={6}>
                {faq.slice(0, Math.ceil(faq.length / 2)).map((item, index) => (
                  <div className="accordion" data-aos="fade-up" key={index}>
                    <div
                      className={`accordion__item ${activeIndexLeft === index ? "accordion__item--active" : ""
                        }`}
                      onClick={() => toggleAccLeft(index)}
                    >
                      <button className="accordion__btn">
                        <span className="accordion__caption">
                            {item.q}
                        </span>
                        <span className="accordion__icon">
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                      </button>
                      {activeIndexLeft === index && (
                        <div className="accordion__content">{item.a}</div>
                      )}
                    </div>
                  </div>
                ))}
              </Col>

            
              <Col lg={6}>
                {faq.slice(Math.ceil(faq.length / 2)).map((item, index) => (
                  <div className="accordion" data-aos="fade-up" key={index}>
                    <div
                      className={`accordion__item ${activeIndexRight === index ? "accordion__item--active" : ""
                        }`}
                      onClick={() => toggleAccRight(index)}
                    >
                      <button className="accordion__btn">
                        <span className="accordion__caption">
                            {item.q}
                        </span>
                        <span className="accordion__icon">
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                      </button>
                      {activeIndexRight === index && (
                        <div className="accordion__content">{item.a}</div>
                      )}
                    </div>
                  </div>
                ))}
              </Col>
            </Row>
          </div>

        </Container>
      </div> */}
      <AllServices />
      <ServiceContactForm />
    </HelmetProvider>
  );
}
