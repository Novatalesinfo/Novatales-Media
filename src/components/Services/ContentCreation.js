import React, { useEffect, useState } from 'react';
import contentCreating from '../../images/content creating.svg';
import contentCreationTab from '../../images/content creation tab.svg';
import contentCreationWeb from '../../images/CONTENT CREATION WEB IMAGE.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Col, Container, Row } from 'react-bootstrap';
//  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContentCreation() {

  // const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  // const [activeIndexRight, setActiveIndexRight] = useState(null);
  // const toggleAccLeft = (index) => {
  //   setActiveIndexLeft(activeIndexLeft === index ? null : index);
  // };
  // const toggleAccRight = (index) => {
  //   setActiveIndexRight(activeIndexRight === index ? null : index);
  // };

  // const faq = [ {
  //   q: "Is it possible for Novatales to turn a single idea into an entire content campaign?",
  //   a: "Absolutely yes. We have experience in expanding one concept into multiple formats like blogs, videos, infographics, and social posts — building a unified, cross-platform campaign.",
  // },
  // {
  //   q: "Can Novatales create a strategy when my business is brand new?",
  //   a: "Of course yes. We specialize in building powerful content strategies from the ground up, perfectly tailored for brand-new businesses.",
  // },
  // {
  //   q: "Will Novatales help businesses find their unique ‘content voice’?",
  //   a: "Yes. Through brand workshops, tone exercises, and audience persona mapping, we help define a voice that’s authentic, memorable, and impossible to copy.",
  // },
  // {
  //   q: "Can NovaTales generate original storytelling for technical industries?",
  //   a: "Definitely yes. Our creative team specializes in transforming even the most technical topics into engaging, human-centered stories that connect with audiences.",
  // },
  // {
  //   q: "Can Novatales explore other trending content formats like podcasts, short videos, and livestreams apart from blogs and articles?",
  //   a: "Yes. We actively explore and produce modern content formats like podcasts, livestreams, short videos, and interactive guides to keep your brand ahead of the curve.",
  // },
  // {
  //   q: "Can Novatales turn everything into a viral hit?",
  //   a: "No one can guarantee virality, but through smart strategy, creative storytelling, and continuous testing, we maximize reach, shareability, and overall brand presence.",
  // },
  // ]
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Engage and Grow - NovaTales Content Marketing Services</title>
        <meta
          name="description"
          content="Maximize your marketing impact with effective social media content marketing services, ensuring your message reaches and resonates with your target audience."
        />
        <meta name="keywords"
          content="Social Media Content Creation, Digital Marketing Content, Digital Content Creation, Content Marketing Services, Content Creation and Marketing,content marketing in digital marketing,best content marketing agencies." />
      </Helmet>
      <div className="service-heading">
        <img src={contentCreating} width="100%" alt="Social Media Content Creation" className="lap" />
        <img src={contentCreationTab} alt="Social Media Content Creation" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h1>Content Creation and stratagy</h1>
                  <p className="mt-3">
                    The content is a key component of an optimized page. We create content that is highly relevant, effective and engaging. We create content that make a real difference in the success of our client’s business. We drive change by creating unique narratives through articles, blog posts and videos about products and trends to establish our clients as industry leaders. Our focus is to boost revenue by generating content that leads to conversions.
                  </p>
                  <div className="media">
                    <div className="media-body">
                      <p>Our content marketing services include </p>
                      <h4>Text content</h4>
                      <p>
                        We create Long-form content, short-form content and blog posts which are tailored to your specific needs.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h4>Audio</h4>
                      <p>
                        We strategize and create audio podcasts, audio books and sponsored audio content along with striking posts for organic following and engagement.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h4>Video</h4>
                      <p>
                        We create video ads with interesting narratives to increase your following using content that makes audience want to like, comment and share.
                      </p>
                    </div>
                  </div>
                  <p>
                    Content marketing is a smart way of promoting products/services by sharing helpful and SEO-friendly content on different online platforms such as your website or blog, Instagram, Face book, YouTube, Hub Spot and more to encourage customers to take actions that benefit your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={contentCreationWeb} alt="Social Media Content Creation" className="img-fluid topBottom" />
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
}
