import React, { useEffect, useState } from 'react'
import GrennScreenLarge from '../../images/greenscreen header-01 (1).jpg';
import GreenScreenTab from '../../images/green screen for tab-01.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import studioRentalsImage from '../../images/Studio rentals M.png';
import '../../css/servisesCss/GreenScreen.css';
import '../../css/servisesCss/sevices-mediaquery.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GreenScreenVideo from './GreenScreenVideo';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
export default function GreenScreen() {
  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
  const toggleAccRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };

  const faq = [{
    q: "What’s included in your basic green screen rental package?",
    a: "Our green screen studio rental package includes standard lighting, premium camera lenses, a technical support team, a dressing room, and optional advanced equipment for complex shoots.",
  }, {
    q: "What is the standard duration you provide for the Green Screen studio on rent?",
    a: "We typically provide our green screen studio for 4-hour sessions. However, custom time slots can be arranged based on your project requirements.",
  },
  {
    q: "Can I bring my own crew and equipment for the shoot?",
    a: "Yes, absolutely. You’re welcome to bring your own team and equipment. Our in-house experts are also available for support if you need assistance during the shoot.",
  },

  {
    q: "How are the lighting and background noises controlled in the studio?",
    a: "Our studio uses high-quality chroma fabrics, professional-grade lighting, and full soundproofing to ensure a flawless shooting experience and easy post-production editing.",
  },
  {
    q: "How early do I need to book in advance, and what are your cancellation policies?",
    a: "We recommend booking at least one week in advance for confirmed slot availability. We also accommodate last-minute requests when possible. Cancellation terms can be discussed with our team during booking.",
  },
  ]
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
          <title>Green Screen Studio Space Available For Rent | NovaTales</title>
          <meta
            name="description"
            content="Rent our green screen studio in hyderabad for your next project! Perfect for product shoots, corpaorate videos, Talkshows, Interviews and creative shoots."
          />
          <meta name="keywords"
            content="green screen studio for rent, photoshoot space rental, photography studio space for rent, photography studio rental, photoshoot studio for rent,photo studio for rent in hyderabad,rental studio for photography." />
        </Helmet>
      </div>
      <div>
        <div className="service-heading">
          <img src={GrennScreenLarge} width="100%" alt="green screen studio for rent" className="lap" />
          <img src={GreenScreenTab} alt="green screen studio for rent" className="tab" width="100%" />
        </div>
        <div className='Green-screen-video'>
          <div className='container-fluid mt-3'>
            <div className='service-para'>
              <h1 className="content-main-heading  mt-4 fs-3" data-aos="fade-up" data-aos-delay="0">Green screen Rentals</h1>
            </div>
            <GreenScreenVideo />
          </div>
        </div>
        <div className='greenScreenContentSection'>
          <Container>
            <Row>
              <Col lg={6}>
                <div className="service-para mt-3">
                  <h3 className="seo-caption">
                    <FontAwesomeIcon icon={faQuoteLeft} /> Bring Your Vision to Life.
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </h3>
                  {/* <h2 className="content-main-heading  mt-4 fs-3" data-aos="fade-up" data-aos-delay="0">Green screen Rentals</h2> */}
                  <div data-aos="fade-right" data-aos-delay="0">
                    <p className="mt-5" >
                      NovaTales Studio the only limit is your imagination. From the impressive backgrounds to performing a live stream for a TV show, we give you the ability to produce professional and interesting content.
                      Not a green screen expert? No problem!
                    </p>
                    <p>NovaTales believe in the power of creativity and offers the opportunity for businesses to create visually stunning and impactful videos or photos such as Commercial videos, promotional videos, and digital advertisements. By filming in front of the vibrant green backdrop of our exclusive recording studio, our editors replace the background with any other existing backgrounds or computer-generated imagery during the post-production process which allows seamless integration of actors or presenters into dynamic environments.
                      We know that every project is unique. So, if you are in search for a well-equipped shooting space, studio sets designed for various types of shoots and a fine selection of posing aids, well, we have got everything you are looking for and that’s why our rental programs are flexible, with no fixed term. From hourly bookings to full day sessions, our green screen studio is available for rent at an affordable price.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} className='greenScreenImage'>
                <img src={studioRentalsImage} alt="photoshoot space rental" />
              </Col>
            </Row>
          </Container>
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
  )
}
