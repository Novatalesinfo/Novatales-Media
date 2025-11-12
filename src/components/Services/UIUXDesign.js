import React, { useEffect, useState } from 'react';
import serviceImage1 from '../../images/Ui ux design 6.svg';
import serviceImage2 from '../../images/UI UX design tab.svg';
import designIcon from '../../images/design & development icon N.png';
import ideationIcon from '../../images/Ideation icon M.png';
import serviceImage3 from '../../images/UI  UX Design M.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Col, Container, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UIUXDesign() {

  // const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  // const [activeIndexRight, setActiveIndexRight] = useState(null);
  // const toggleAccLeft = (index) => {
  //   setActiveIndexLeft(activeIndexLeft === index ? null : index);
  // };
  // const toggleAccRight = (index) => {
  //   setActiveIndexRight(activeIndexRight === index ? null : index);
  // };

  // const faq = [ {
  //   q: "Will UI/UX design impact my business?",
  //   a: "Yes, UI/UX design has a major impact on your business. A good design enhances user satisfaction, engagement, and conversion rates — directly boosting ROI.",
  // },
  // {
  //   q: "Can I see wireframes or prototypes before final development?",
  //   a: "Absolutely yes. We always share wireframes and interactive prototypes for your review and approval before moving to final development.",
  // },
  // {
  //   q: "What design tools do you use?",
  //   a: "We primarily use Figma, Adobe XD, and other design tools for creating prototypes, wireframes, and seamless team collaboration.",
  // },
  
  // {
  //   q: "I need user-friendly designs. Will Novatales provide them?",
  //   a: "Yes, we prioritize user-friendliness through usability testing, feedback loops, and compliance with accessibility standards to ensure effortless user experiences.",
  // },
  // {
  //   q: "How do you optimize designs for faster loading?",
  //   a: "We use lightweight components, optimized assets, and clean coding practices to ensure smooth performance and faster loading speeds.",
  // },
  // {
  //   q: "I want to redesign my existing website. Can Novatales help?",
  //   a: "Yes, we can revamp your website by enhancing usability, aesthetics, and user flow while preserving your brand’s core identity and functionality.",
  // },
  // {
  //   q: "Do you ensure consistency across cross-platform?",
  //   a: "Yes, we maintain visual and functional consistency across all devices by designing adaptive, responsive layouts that deliver cohesive brand experiences everywhere.",
  // },
  // {
  //   q: "Why choose NovaTales for UI/UX design?",
  //   a: "We combine user-centric design thinking, creative innovation, and technical precision — delivering designs perfectly aligned with your audience and business goals.",
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
        <title>Best UI/UX Design Agency for Exceptional User Experience</title>
        <meta
          name="description"
          content="Novatales specializes in UI/UX development services with smart web designs that elevate user satisfaction, improve navigation and engagement across platforms."
        />
        <meta name="keywords"
          content="Best UI UX Design Agency, UIUX Development Services, UI UX App Development, UI UX Design and Development Services, UI and UX Company" />
      </Helmet>
      <div className='ui-ux'>
        <div className="service-heading">
          <img src={serviceImage1} width="100%" alt="UIUX Development Services" className="lap" />
          <img src={serviceImage2} alt="UIUX Development Services" className="tab" width="100%" />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para">
                    <h1>UI/UX Design</h1>
                    <p>
                      Building a thorough UI / UX Design ensures that websites don’t just look good but are easy and enjoyable to use. At Nova Tales, we build UI/UX designs that search engines like to show at the top of their results pages with content relevant to the search terms your potential customers are using.
                    </p>
                    <p>
                      We understand how to improve your website user experience and how it will influence customer decisions. We are also aware of the technology tools such as Vue JS, NEXT JS and React JS that help keep a website relevant on all devices and search engines. Whether you need a brand new website, an update to your existing website or a complete redesign, we can help, quickly and efficiently.
                    </p>
                    <div className="media">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                          <div className="media-image">
                            <img src={designIcon} alt="Design and development icon" width="100%" />
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                          <div className="media-body">
                            <h4>Design & Development</h4>
                            <p>
                              Our main focus will be on developing a visually appealing layout that not only captures your attention but is intuitive, allows access to content and easy to navigate. We build prototypes and test the flow and functionality of the design. We take feedback from real users from first interaction to final completion of tasks and refine the designs. UI / UX design is essential to create a memorable user experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                          <div className="media-image">
                            <img src={ideationIcon} alt="Ideation and brainstorming icon" width="100%" />
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                          <div className="media-body">
                            <h4>Ideation</h4>
                            <p>
                              In our ideation process of designing a website we start by talking to our clients to understand who they are and what they want. Then, we come up with unique ideas that match their brand and connect with their audience. Our goal is to make websites that look good, work well, and truly represent our clients online.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={serviceImage3} alt="UI UX App Development" className="img-fluid topBottom" />
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
      </div>
    </HelmetProvider>
  );
}
