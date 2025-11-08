import React, { useEffect, useState } from 'react';
import lapImage from '../../images/WEB &UI AND UX N.svg';
import tabImage from '../../images/WEB &UI AND UX TAB.svg';
import serviceImage from '../../images/Web & App Development M.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Col, Container, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WebAppDevelopment = () => {

  // const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  // const [activeIndexRight, setActiveIndexRight] = useState(null);
  // const toggleAccLeft = (index) => {
  //   setActiveIndexLeft(activeIndexLeft === index ? null : index);
  // };
  // const toggleAccRight = (index) => {
  //   setActiveIndexRight(activeIndexRight === index ? null : index);
  // };

  // const faq = [ {
  //   q: "I need my website and apps to be mobile-friendly and responsive. Is it possible?",
  //   a: "Absolutely yes. Our developers specialize in building fully responsive websites and apps that deliver seamless user experiences across all devices.",
  // },{
  //   q: "What technologies do you use for websites and apps?",
  //   a: "We use React, Angular, Node.js, WordPress, Shopify, Swift, Kotlin, and more — selecting the stack that best fits your project’s goals and requirements.",
  // },
  //  {
  //   q: "What makes NovaTales’ website and app development service different from other agencies?",
  //   a: "At NovaTales, we focus on combining advanced technology with intuitive UI/UX and scalable architecture — delivering tailor-made digital solutions that perfectly align with your business goals.",
  // },
 
 
  // {
  //   q: "I need to migrate my existing website or app to a new platform. Is that possible?",
  //   a: "Yes, with NovaTales, seamless migration is possible with minimal downtime and zero data loss. We handle the transition carefully to ensure continuity.",
  // },
  // {
  //   q: "Will you be able to handle bugs or issues post-launch?",
  //   a: "Yes, our support team quickly addresses and resolves any bugs or post-launch technical issues to ensure your product runs smoothly at all times.",
  // },
  //  {
  //   q: "Will my site or app be SEO optimized?",
  //   a: "Yes, at NovaTales we implement SEO best practices including optimized speed, proper metadata, and semantic HTML structures for better search visibility.",
  // },
 
  // ]
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
        <title>Web Development Services | NovaTales Marketing Agency</title>
        <meta
          name="description"
          content="Elevate your online presence with NovaTales website and app development company offering customized solutions using React JS and Node JS for your web needs."
        />
        <meta name="keywords"
          content="Web Development Services, Website and App Development Company, Best Web Development Agencies, Web Development Services, Website Development Company,web development agency,best website development company." />
      </Helmet>
      <div className="service-heading">
        <img src={lapImage} width="100%" alt="Web Development Services" className="lap" />
        <img src={tabImage} alt="Web Development Services" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h2 className="content-main-heading mb-3">Web & App Development</h2>
                  <p className="mt-3">
                    Web development is a combination of skills and technologies to build, deploy and manage the functionality and appearance of websites. At Nova Tales, we focus on creating engaging and user-friendly web applications and employ a wide range of technologies to meet diverse project requirements. Our team is proficient in technologies such as React JS, Vue JS, Next JS, Angular, and Flutter to ensure visually appealing user interfaces and enhance the interactivity and performance of web applications, providing clients with a seamless and modern user experience.
                  </p>
                  <p>
                    We use server-side technologies like Node.js and Python to build the logic and functionality that power web applications. Nova Tales understands the significance of database management in web app development and employs solutions like Mongo DB, Golang, and React Native based on the project requirements. We focus on security throughout the development process, implementing encryption and secure authentication mechanisms to protect user data. Our web applications are compatible across different browsers such as Google Chrome, Firefox, Microsoft Edge, and Safari.
                  </p>
                  <p>
                    In today’s landscape, online businesses are thriving. We create custom solutions for both business-to-business (B2B) and business-to-consumer (B2C) e-commerce applications using the latest technologies. At Nova Tales, we help you connect securely with your customers through our impressive websites. We run thorough tests and ensure quality assurance of your website. We make the content search engine optimized through a detailed checklist. Once the site is ready, we launch it verifying the functionality before it goes live!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={serviceImage} alt="Website and App Development Company" className="img-fluid topBottom" />
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
            paddingTop: "40px"
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
};

export default WebAppDevelopment;
