import React, { useEffect, useState } from 'react'
import PhotoshootBannerLaptop from '../../images/Photoshoots header.jpg';
import PhotoshootBannerTab from '../../images/photoshoots tab.jpg';
import photoshootsImage from '../../images/Photoshoots M.png';
import '../../css/studio.css'; // Make sure you import your CSS file
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Col, Container, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Photoshoot() {
  // const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  // const [activeIndexRight, setActiveIndexRight] = useState(null);
  // const toggleAccLeft = (index) => {
  //   setActiveIndexLeft(activeIndexLeft === index ? null : index);
  // };
  // const toggleAccRight = (index) => {
  //   setActiveIndexRight(activeIndexRight === index ? null : index);
  // };

  // const faq = [{
  //   q: "What kinds of photoshoots does NovaTales specialize in?",
  //   a: "We offer professional photoshoots for every need — including corporate portraits, fashion shoots, product photography, business events, and customized shoots for e-commerce platforms.",
  // },
  // {
  //   q: "I’m concerned about the confidentiality and privacy of my photos. How would NovaTales take care of it?",
  //   a: "We take client privacy seriously — all photo data is securely stored with restricted access, ensuring complete confidentiality and peace of mind.",
  // },
 
  // {
  //   q: "How long will a photoshoot session last?",
  //   a: "Depending on the theme and requirements, a session typically lasts between 1 to 4 hours. Our focus always remains on delivering top-quality visuals.",
  // },
  // {
  //   q: "What if the weather is bad on my scheduled outdoor shoot?",
  //   a: "If the weather doesn’t cooperate, NovaTales will promptly reschedule the shoot or offer an alternative indoor setup to ensure your project stays on track.",
  // },
  // {
  //   q: "What if I’m not satisfied with the photos? Do you offer a re-shooting option?",
  //   a: "Yes. After every session, we review the photos together. If you're not fully satisfied, we’ll arrange a convenient date for a re-shoot to meet your expectations.",
  // },
  
  //  {
  //   q: "Do NovaTales offer outdoor photoshoots?",
  //   a: "Absolutely. We’re highly flexible and can conduct shoots at any location of your choice, depending on your project’s requirements and creative direction.",
  // },
  // ]
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Initialize AOS library
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HelmetProvider >
      <div>
        <Helmet>
          <title>NovaTales - Best Professional Product Photography Services</title>
          <meta
            name="description"
            content="Showcase your products with our professional photoshoot services. NovaTales deliver high-quality images with precise detailing to enhance your brand’s appeal."
          />
          <meta name="keywords"
            content="professional photo shoot,product photography services,product photoshoot,professional product photography,business photoshoot,ecommerce product photography services." />
        </Helmet>
      </div>
      <div>
        <div className="service-heading">
          <img src={PhotoshootBannerLaptop} width="100%" alt="professional_photo shoot" className="lap" />
          <img src={PhotoshootBannerTab} alt="professional_photo shoot" className="tab" width="100%" />
        </div>
        <div className="photoshoots" id="photoshoots">
          <div className="container">
            <div className="section-title">
              <div data-aos="fade-up" data-aos-delay="0">
                <h1>PHOTOSHOOTS</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="photo-content" data-aos="fade-right" data-aos-delay="0">
                  <p>We pride ourselves on creating customized pictures that perfectly fit your brand and its objectives. From concept to execution we have the people, tools, the locations including our own exclusive studio and the process to supercharge your initiatives. We think out of the box to create unique solutions for every business need. Our photoshoots service delivers high-quality, visually stunning pictures that showcase your brand's values, products, and services. We work closely with you to understand your objectives and bring your vision to life.</p>
                  <p>NovaTales Photoshoot service for various business needs such as visual content for webpages, photoshoots for Ad campaigns including search ads, displays ads, and social media ads, photoshoots for brochures, flyers and other marketing materials. We strategize, plan and execute every element of the photoshoot to be consistent with your Brand personality and fit into your overall Brand strategy. </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="photo-image">
                  <img src={photoshootsImage} alt="product photography services" className="photoshoot" />
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
      </div>
    </HelmetProvider>
  )
}
