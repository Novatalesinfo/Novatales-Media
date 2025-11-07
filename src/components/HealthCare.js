import React, { useEffect, useState } from "react";
import "../css/healthcare.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Faqs from "./faq";
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import hospital_image_1 from '../images/casestudies/boost_hospital.png';
// import healthcareservice_1 from "../images/casestudies/Social Media Marketing-01.png"
// import healthcareservice_2 from "../images/casestudies/SEO and SEM-01.png"
// import healthcareservice_3 from "../images/casestudies/Content Marketing-01 (3).png"
// import healthcareservice_4 from "../images/casestudies/Email Marketing-01.png"
// import healthcareservice_5 from "../images/casestudies/Reputation Management-01.png"
// import healthcareservice_6 from "../images/casestudies/Website Development-01.png"
// import healthcareservice_7 from "../images/casestudies/Paid Advertising (PPC)-01.png"
// import healthcareservice_8 from "../images/casestudies/Video Marketing-01.png"

// import digitalIcon from '../images/digital marketing icon-01.png';
// import videoProductionIcon from '../images/video production icon-01.png';
// import webAppIcon from '../images/web &app DVP icon-01.png';
// import seoIcon from '../images/seo icon-01.png';
// import smmIcon from '../images/social media M icon-01.png';
// import contentMarketingIcon from '../images/content marketing icon-01.png';
// import ECommerceIcon from '../images/e commerce icon-01.png';
// import paidAdvertisingIcon from '../images/paid advertising icon-01.png';

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

  // const healthServices = [
  //   {
  //     id: 1,
  //     title: "Social Media-Marketing",
  //     description: "Engage with potential patients on Facebook, Instagram, and LinkedIn.",
  //     image: smmIcon,
  //   },
  //   {
  //     id: 2,
  //     title: "SEO and SEM",
  //     description: "Optimize your hospital’s website to rank higher on Google.",
  //     image: seoIcon,
  //   },
  //   {
  //     id: 3,
  //     title: "Content-Marketing",
  //     description: "Provide valuable healthcare content to educate and attract patients.",
  //     image: contentMarketingIcon,
  //   },
  //   {
  //     id: 4,
  //     title: "Email-Marketing",
  //     description: "Increase patient retention through informative email campaigns",
  //     image: ECommerceIcon,
  //   },
  //   {
  //     id: 5,
  //     title: "Reputation-Management",

  //     description: "Monitor and manage online reviews.Enhance your hospital’s credibility.",
  //     image: digitalIcon,
  //   },
  //   {
  //     id: 6,
  //     title: "Website-Development",
  //     description: "Improve user experience with a professionally designed website.",
  //     image: webAppIcon,
  //   },
  //   {
  //     id: 7,
  //     title: "Paid-Advertising (PPC)",
  //     description: "Generate instant visibility through targeted ads. Optimize ad campaigns for maximum ROI.",
  //     image: paidAdvertisingIcon,
  //   },
  //   {
  //     id: 8,
  //     title: "Video-Marketing",
  //     description: "Increase engagement with informative hospital-related videos.",
  //     image: videoProductionIcon,
  //   },
  // ];
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
        <div className="landing-health-care">
          <div
            className="row
           d-flex flex-column-reverse flex-lg-row"
          >
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img
                id="healthpagebanner"
                src={bannerImage}
                alt="healthcare digital marketing agency"
              />
            </div>
            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center align-items-center  text-center">
              <h1 id="topHeading" className="text-center">
                Transform Your Hospital with <br></br>{" "}
                <span
                  style={{
                    color: "#fec436",
                  }}
                >
                  Digital Marketing Services
                </span>{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="topHeading text-center" style={{}}></div>
        <div className="service-content LogoVisual pt-4 pb-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="service-para mt-3">
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
              <div className="col-lg-6 d-flex justify-content-center">
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
        {/* <div className="health-Digital-Marketing">

          <div className="health-why-novatales" style={{
            textAlign: "center !important"
          }}>
            <h2 className='text-center' style={{
              textAlign: "center !important",

              color: "#52377b"
            }}>Why Choose NovaTales for Your Healthcare Marketing Strategies?</h2>
          </div>
          <div className='real-estate-serive-card-parent d-flex justify-content-center align-content-center w-100'>

            <Row className='real-estate-content gap-0'>
              <Col xl={3} md={6} sm={12} data-aos="fade-up" className='my-md-5 my-4 ' >
                <div className='icon-1 text-center px-2 '>
                  <div>
                    <img src={icon1} alt="healthcare marketing expertise" width="90px" />
                  </div>
                  <div className="heading">
                    <p className="title text-center">Industry Expertise</p>
                  </div>
                  <div className="content">
                    <p className='text-center'>We have years of experience in doctor digital marketing and hospital branding</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12} data-aos="fade-up" className='my-md-5' >
                <div className='icon-1 text-center  px-2'>
                  <div>
                    <img src={icon2} alt="digital solutions in healthcare" />
                  </div>
                  <div className="heading">
                    <p className="title text-center mt-1">Customized Solutions</p>
                  </div>
                  <div className="content  text-center">
                    <p className='text-center'>Our strategies are tailored to suit your hospital’s needs.</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12} data-aos="fade-up" className='my-md-5 my-4'>
                <div className='icon-1 text-center mt-2 px-2'>
                  <div>
                    <img src={icon3} alt="healthcare marketing budget" />
                  </div>
                  <div className="heading">
                    <p className="title text-center mt-1">Budget-Friendly Approach</p>
                  </div>
                  <div className="content">
                    <p className='text-center'>Digital marketing is more cost-effective than traditional advertising.</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} md={6} sm={12} data-aos="fade-up" className='my-md-5'>
                <div className='icon-1 mx-md-3 text-center px-2 pt-2'>
                  <div>
                    <img src={icon4} alt="reputation management for healthcare" width="90px" />
                  </div>
                  <div className="heading">
                    <p className="title text-center">Reputation Management</p>
                  </div>
                  <div className="content">
                    <p className='text-center'>We ensure positive online visibility and help manage patient feedback</p>
                  </div>
                </div>
              </Col>
            </Row>

          </div>
        </div> */}
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
                      width="60px"
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
                    <img src={icon2} alt="digital solutions in healthcare" width="60px"/>
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
                    <img src={icon3} alt="healthcare marketing budget" width="60px"/>
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
                    width="60px"
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
        {/* <div className="health-Digital-Marketing">
          <Container>
            <div data-aos="fade-up" className="health-why-novatales">
              <h2
                className="text-center"
                style={{
                  textAlign: "center !important",
                  marginBottom: "80px",
                  color: "#52377b",
                  marginTop: "20px",
                }}
              >
                NovaTales Expert Digital Marketing Services for Healthcare and
                Clinics
              </h2>
            </div>
          </Container>
          <div className="real-estate-serive-card-parent d-flex justify-content-center align-content-center w-100">
            <Row className="real-estate-content">
              {healthServices.map((item, index) => (
                <Col
                  key={index * item.id}
                  className="realestate-card-wrapper mb-4"
                  data-aos="fade-up"
                >
                  <div className="realestate-service-card">
                    <div className="realestate-card-image-container">
                      <img
                        src={item.image}
                        className="realestate-card-image"
                        alt="search engine optimization for real estate"
                      />
                    </div>
                    <div className="realestate-card-content">
                      <h4 className="realestate-service-title">
                        {" "}
                        {item.title.split("-")[0]}
                        <br />
                        {item.title.split("-")[1]}
                      </h4>
                      <div className="realestate-title-underline"></div>
                      <p className="realestate-card-description">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div> */}
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
                          <FontAwesomeIcon icon={faLightbulb} />
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
