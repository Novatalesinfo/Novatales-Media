import React, { useEffect, useState } from "react";
import "../css/healthcare.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Faqs from "./faq";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutHeroImage from '../images/portfolio/healthcare_banner_l.jpg';
import case_study_mobile_banner from '../images/portfolio/healthcare_banner_m.jpg';
import hospital_image_1 from '../images/portfolio/healthcare_about.png';
import '../css/Home.css';
import icon1 from '../images/icon 1.png';
// import icon2 from '../images/portfolio/customize_1-01.png';
// import icon2 from '../images/portfolio/bgi_bulb_y.png';
import icon2 from '../images/portfolio/custmized-01 (1)-01.png';

import icon3 from '../images/portfolio/donation_1-01.png';
import icon4 from '../images/icon 4.png';
import bannerImage from "../images/casestudies/Healthcare page Header-01.png"
import BookForm from './bookForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ServicesCards from './ServicesCards';
export default function HealthCare() {
  const [faq, setFaq] = useState([]);
  const [activeIndexLeft, setActiveIndexLeft] = useState(0);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
 
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFaq(Faqs);
  }, []);
  return (
    <div style={{
      marginBottom:"80px"
    }}>
      <HelmetProvider>
        <Helmet>
          <title>
            NovaTales - Hospital Digital Marketing Agency for Healthcare
          </title>
          <meta
            name="description"
            content="NovaTales specializes in hospital digital marketing, helping hospitals and doctors. We offer expert doctor digital marketing solutions to attract more patients."
          />
        </Helmet>
         {/* Top Banner of the page  */}
            <div className="about-hero">
                <img src={aboutHeroImage} width="100%" alt="healthcare digital marketing agency" className="lap" />
                <img src={case_study_mobile_banner} alt="healthcare digital marketing agency" className="tab" width="100%" />
            </div>
        <div className="service-content LogoVisual pt-4 pb-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" className="service-para mt-3">
                  <div className="health-why-novatales text-center text-lg-start">
                    <h3
                      className="fw-bold pb-3"
                      style={{
                        lineHeight: "40px",
                        padding: "0px 12px",
                        color: "#52377b",
                      }}
                    >
                      Boost Your Hospital's Growth with Hospital Digital
                      Marketing
                    </h3>
                  </div>
                  <div className="healthcareTopPara">
                    Is your hospital struggling to reach potential patients? In
                    today's digital era, establishing a strong online presence
                    is crucial. Hospital digital marketing helps healthcare
                    providers to enhance their visibility, attract more
                    patients, and build trust.
                  </div>
                  <div className="healthcareTopPara">
                    With the increasing competition in the healthcare industry,
                    relying solely on traditional marketing isn’t enough. Our
                    digital marketing agency for healthcare specializes in
                    boosting hospital and clinic visibility using cutting-edge
                    online strategies.
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img
                      src={hospital_image_1}
                      alt="hospital digital marketing"
                      className="img-fluid topBottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookForm />
        <div className="whyStrategies">
          <div className="whyStrategiesHeading">
            <h2>
              Why Choose NovaTales for Your Healthcare Marketing Strategies?
            </h2>
          </div>
          <div className="whyStrategiesContent">
            <Row>
              <Col
                xl={3}
                md={6}
                sm={12}
                data-aos="fade-up"
              >
                <div className="icon-1 text-left px-2 ">
                  <div>
                    <img
                      src={icon1}
                      alt="healthcare marketing expertise"
                    />
                  </div>
                  <div className="heading">
                    <p className="title text-left">Industry Expertise</p>
                  </div>
                  <div className="content">
                    <p className="text-left">
                      We have years of experience in doctor digital marketing
                      and hospital branding
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12} data-aos="fade-up" >
                <div className="icon-1 text-left  px-2">
                  <div>
                    <img src={icon2} alt="digital solutions in healthcare" />
                  </div>
                  <div className="heading">
                    <p className="title text-left">
                      Customized Solutions
                    </p>
                  </div>
                  <div className="content  text-left">
                    <p className="text-left">
                      Our strategies are tailored to suit your hospital’s needs.
                    </p>
                  </div>
                </div>
              </Col>
              <Col
                xl={3}
                md={6}
                sm={12}
                data-aos="fade-up"
              >
                <div className="icon-1 text-left  px-2">
                  <div>
                    <img src={icon3} alt="healthcare marketing budget" />
                  </div>
                  <div className="heading">
                    <p className="title text-left">
                      Budget-Friendly Approach
                    </p>
                  </div>
                  <div className="content">
                    <p className="text-left">
                      Digital marketing is more cost-effective than traditional
                      advertising.
                    </p>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12} data-aos="fade-up" >
                <div className="icon-1 mx-md-3 text-left px-2 ">
                  <div>
                    <img
                      src={icon4}
                      alt="reputation management for healthcare"
                    
                    />
                  </div>
                  <div className="heading">
                    <p className="title text-left">Reputation Management</p>
                  </div>
                  <div className="content">
                    <p className="text-left">
                      We ensure positive online visibility and help manage
                      patient feedback
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <ServicesCards/>
        <div className="Health-faqs">
          <Container>
            <div className="health-faqs-heading">
              <h2
                className="text-center"
                style={{
                  color: "#52377b",
                  fontWeight:"bold"
                }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div
              className="faq-accordion"
              style={{
                paddingTop: "40px",
              }}
            >
              {/* Left Column */}
              <div className="faq_container" data-aos="fade-up">
                {faq.slice(0, 5).map((item, index) => (
                  <div className="accordion " key={index}>
                    <div
                      className={`accordion__item ${
                        activeIndexLeft === index
                          ? "accordion__item--active"
                          : ""
                      }`}
                      onClick={() => toggleAccLeft(index)}
                    >
                      <button className="accordion__btn real-estate-faq">
                        <span className="accordion__caption fw-medium">
                           
                          {item.q}
                        </span>
                        <span className="accordion__icon">
                          <FontAwesomeIcon icon={faPlus} />
                        </span>
                      </button>
                      {activeIndexLeft === index && (
                        <div className="accordion__content fw-normal">
                          {item.a}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="conclusion mb-5 pb-3">
              <div className="concl-heading">
                <div></div>
              </div>
              <p>
                Partner with NovaTales, the leading digital marketing agency for
                healthcare, to elevate your hospital’s digital presence. Let’s
                build a strong community, improve patient experiences, and take
                your hospital to new heights!
              </p>
              <p>Contact us today to get started!</p>
            </div>
          </Container>
        </div>
        <BookForm />
      </HelmetProvider>
    </div>
  );
}
