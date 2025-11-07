import React, { useEffect, useState } from 'react';
// Import your images here
import brandPositioningImage from '../../images/brand postioning.svg';
import tabImage from '../../images/brand postioning tab.svg';
import positioningMImage from '../../images/brand postioning M.png';
import AllServices from '../AllServices';
import ServiceContactForm from './ServiceContactForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Container, Row } from 'react-bootstrap';

export default function BrandPositioning() {
  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
  const toggleAccRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };
  const faq = [{
    q: "What does brand positioning really mean?",
    a: "Brand positioning defines the unique space your brand occupies in the customer’s mind compared to competitors.",
  },
  {
    q: "Why is brand positioning important for business growth?",
    a: "Clear positioning helps customers instantly understand your value and builds long-term loyalty.",
  },
  {
    q: "How does Novatales approach brand positioning?",
    a: "We analyze competitors, audience behavior, and brand strengths to design a differentiated market position.",
  },
  {
    q: "How is brand positioning different from branding?",
    a: "Branding is your identity, while positioning is how that identity stands out against competitors.",
  },
  {
    q: "What happens if a brand has no clear positioning?",
    a: "Without positioning, brands blend in, leading to weak recall and lost opportunities.",
  },
  {
    q: "How can businesses measure the success of brand positioning?",
    a: "Success is tracked through customer recall, loyalty, perception studies, and market share growth.",
  },
  {
    q: "Can brand positioning change over time?",
    a: "Yes, brands must adapt positioning when markets, customer needs, or industry trends evolve.",
  },
  {
    q: "How does storytelling enhance brand positioning?",
    a: "Storytelling creates emotional connections that make your positioning more relatable and memorable.",
  },

  ]
  // Scroll to the top of the page when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Expert Brand Positioning Strategy Solutions | NovaTales</title>
        <meta
          name="description"
          content="Transform your business with our brand positioning strategy. We help you refine your unique value to make your mark and stand out in the competitive market."
        />
        <meta name="keywords"
          content="brand positioning strategy,brand positioning in marketing,branding and marketing companies,brand building strategies,design and branding strategy,branding and brand positioning,branding and positioning strategy." />
      </Helmet>
      <div className="service-heading mb-3">
        <img src={brandPositioningImage} width="100%" alt="brand positioning strategy" className="lap" />
        <img src={tabImage} alt="brand positioning strategy" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h1>Brand Positioning</h1>
                  <p className="mt-3">In this world of clutter, it is difficult to stand out. Even more so in the online space where attention span of the consumer is minimum and competition among providers is huge. This is where your brand personality enters and steals the show.
                  </p>
                  <p>Understanding what makes a brand unique, what makes its product or service stand out, and capitalizing on these strengths is essential for any business. With our in-depth analysis and research skills we thoroughly gauge your industry, your peers, your target customer behaviors, the current market conditions and future sentiments to create a complete picture of the environment.  </p>
                  <div className="media">
                    <div className="media-body">
                      <p>Using the latest business intelligence tools and data driven analysis, we uniquely position your brand to stand out from competitors. Our branding services create a memorable narrative that distinctly positions your brand, ignites your client engagement and creates long term benefits of good will and trust for your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={positioningMImage} alt="brand positioning strategy" className="img-fluid topBottom" />
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
            paddingTop: "50px"
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
    </HelmetProvider>
  );
}
