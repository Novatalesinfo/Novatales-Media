import React, { useEffect, useState } from 'react';
import '../../css/servisesCss/branding.css'
import '../../css/servisesCss/sevices-mediaquery.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
// Import your images here
import brandingImage from '../../images/BRANDING STRATEGY & PLANNING.svg';
import tabImage from '../../images/branding strategy & planning tab.svg';
import webImage from '../../images/BRANDING WEB IMAGE.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from 'react-bootstrap';
export default function BrandingStrategy() {

  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
  const toggleAccRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };

  const faq = [{
    q: "How to start building a branding strategy?",
    a: "Begin with brand audits, market research, and customer profiling.",
  },
  {
    q: "What’s the difference between short-term and long-term branding strategies?",
    a: "Short-term focuses on quick visibility; long-term ensures sustainable brand equity.",
  },
  {
    q: "Why should startups invest in branding early?",
    a: "Early branding creates credibility and makes scaling smoother when entering bigger markets.",
  },
  {
    q: "How often should businesses revisit their branding strategy?",
    a: "At least once a year, or whenever major market or customer changes occur.",
  },
  {
    q: "What’s the cost of not having a branding strategy?",
    a: "It leads to weak differentiation, low recall, and wasted marketing efforts.",
  },
  {
    q: "How does Novatales Media ensure strategies work globally?",
    a: "By blending universal brand principles with region-specific adaptations.",
  },

  {
    q: "Can a branding strategy directly impact ROI?",
    a: "Yes, clear strategies improve customer loyalty, reduce acquisition costs, and increase profitability.",
  },
  ]
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
        <title>Brand Marketing and Strategy | NovaTales Branding Agency</title>
        <meta
          name="description"
          content="Elevate your brand with our expert branding services. We design impactful marketing strategies for a distinctive brand identity and drive business growth."
        />
        <meta name="keywords"
          content="brand marketing strategy,branding agency,branding company,marketing and branding firm,best branding agencies,brand strategy consultant,creative branding agency." />
      </Helmet>
      <div className='branding'>
        <div className="service-heading">
          <img src={brandingImage} width="100%" alt="brand marketing strategy" className="lap" />
          <img src={tabImage} alt="brand marketing strategy" className="tab" width="100%" />
        </div>
        <div className="content-heading">
          <div className="container">
            <h3 className="content-sub-heading ">
              <FontAwesomeIcon icon={faQuoteLeft} className="fa-icon" />
              Simply put, your Brand is how the Universe perceives you
              <FontAwesomeIcon icon={faQuoteRight} className="fa-icon" />
            </h3>
            <p className="content-lines">
              Branding strategy has to do with{' '}
              <span className="purple">Who You Are </span>(The present), what you
              want to <span className="purple"> Achieve </span>(The future), and
              what your <span className="purple">Core Values</span> are (Ongoing
              and All-encompassing).
            </p>
          </div>
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para mt-3">
                    <h1 className="content-main-heading mb-3">Branding Strategy & Planning</h1>
                    <p>
                      Often times history reminds us that how the story is told is more important than what actually happened. It is important to tell the story perfectly and tie it all together with a set of deliberate actions and decisions to ensure that the perceptions and experiences that your customers, clients and other stakeholders have of your company are perfectly aligned with your values.
                    </p>
                    <p>
                      At Nova Tales, we build strategies to define brand personalities by understanding your business requirements. We focus on positioning your brand and planning its communication strategy. Our goal is to use strategic design to create engaging experiences and campaigns across different platforms. We craft compelling and consistent messages each step of the way that communicates your brand's core values and benefits to your customers and we enable you to convey this message through various channels and communication platforms.
                    </p>
                    <div className="media">
                      <div className="media-body">
                        <p>
                          Our branding strategy strives to create a unique and memorable identity for the brand, fostering customer loyalty and preference over competitors and in turn creating long-term goodwill and trust for its customers.
                        </p>
                        <p>
                          Together, we can develop a long-term vision for your brand, keeping in mind the evolution it will be required to undergo from time to time. Our well-defined brand strategies will be time-tested and adaptable to changing market conditions and consumer preferences while staying true to the brand’s core identity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={webImage} alt="brand marketing strategy" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Health-faqs">
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
                {/* Left Column */}
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
                            <FontAwesomeIcon icon={faLightbulb} /> {item.q}
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

                {/* Right Column */}
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
                            <FontAwesomeIcon icon={faLightbulb} /> {item.q}
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
        </div>
        <AllServices />
        <ServiceContactForm />
      </div>
    </HelmetProvider>
  );
}
