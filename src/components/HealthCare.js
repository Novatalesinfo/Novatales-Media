import React, { useEffect, useState } from 'react'
import '../css/healthcare.css'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Faqs from "./faq";
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
// import healthbanner from "../images/novatales_healthbanner.jpg"
import logoVisualMImage from '../images/logo & visual elements m.png';
import VerifiedIcon from '@mui/icons-material/Verified';
import healthcareservice_1 from "../images/healthcareService_1.jpg"
import icon1 from '../images/icon 1.png';
import BookForm from './bookForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function HealthCare() {
  const [faq, setFaq] = useState([]);
  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
  const toggleAccRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setFaq(Faqs);

  }, []);
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>NovaTales - Hospital Digital Marketing Agency for Healthcare</title>
          <meta
            name="description"
            content="Novatales specializes in hospital digital marketing, helping hospitals and doctors. We offer expert doctor digital marketing solutions to attract more patients."
          />
        </Helmet>
        <div className='landing-health-care'>
          {/* <div>
        </div>
        <div>
          <h2>Transform Your Hospital with<br></br> <span style={{
            color: "#fec436"
          }}>
            Digital Marketing Services
          </span> </h2>
          <Link to="/contactus">
            <button>Connect With Us</button>
          </Link>
        </div> */}
        </div>
        <div className="service-content LogoVisual">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
               
                  <div className="service-para mt-3">
                    <div className="health-why-novatales text-center text-lg-start">
                      <h3>Boost Your <span>Hospital's Growth</span> with  <span>Hospital Digital Marketing</span></h3>
                    </div>
                    <p className='healthcareTopPara'>Is your hospital struggling to reach potential patients? In today's digital era, establishing a strong online presence is crucial. Hospital digital marketing helps healthcare providers to enhance their visibility, attract more patients, and build trust.</p>
                    <p className='healthcareTopPara'>With the increasing competition in the healthcare industry, relying solely on traditional marketing isn’t enough. Our digital marketing agency for healthcare specializes in boosting hospital and clinic visibility using cutting-edge online strategies.</p>
                  </div>
                
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={logoVisualMImage} alt="logo design company" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookForm />
        <div className="health-care-why-choose">
          <Container>
            <div className="health-why-novatales" style={{
              textAlign: "center !important"
            }}>
              <h3 className='text-center' style={{
                textAlign: "center !important",
                marginBottom: "80px",
              }}>Why Choose <span>NovaTales</span> for Your Healthcare <span>Marketing Strategies?</span></h3>
            </div>
            <Row className='justify-content-center my-5 '>
              <Col lg={3} md={6} sm={12} className='my-md-5 my-4' >
                <div className='icon-1 text-center '>
                  <div>
                    <img src={icon1} alt="icon" width="90px" />
                  </div>
                  <div className="heading">
                    <p className="title text-center">Industry Expertise</p>
                  </div>
                  <div className="content">
                    <p className='text-center'>We have years of experience in doctor digital marketing and hospital branding</p>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className='my-md-5' >
                <div className='icon-1 text-center mx-md-4'>
                  <div>
                    <img src={icon1} alt="icon" width="90px" />
                  </div>
                  <div className="heading">
                    <p className="title  text-center">Customized Solutions</p>
                  </div>
                  <div className="content  text-center">
                    <p className='text-center'>Our strategies are tailored to suit your hospital’s needs.</p>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className='my-md-5 my-4'>
                <div className='icon-1 text-center'>
                  <div>
                    <img src={icon1} alt="icon" width="90px" />
                  </div>
                  <div className="heading">
                    <p className="title text-center">Budget-Friendly Approach</p>
                  </div>
                  <div className="content">
                    <p className='text-center'>Digital marketing is more cost-effective than traditional advertising.</p>
                  </div>
                </div>
              </Col>
              <Col lg={3} md={6} sm={12} className='my-md-5'>
                <div className='icon-1 mx-md-3 text-center'>
                  <div>
                    <img src={icon1} alt="icon" width="90px" />
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
          </Container>
        </div>
        <div className="health-Digital-Marketing">
          <Container>
            <div className="health-why-novatales">
              <h3 className='text-center' style={{
                textAlign: "center !important",
                marginBottom: "80px",
              }}><span>NovaTales </span> Expert Digital Marketing Services for <span> Healthcare and Clinics</span> </h3>
            </div>
          </Container>
          <Container fluid>
            <Row className='health-Digital-Marketing-content xl-p-4' >
              <Col lg={4} xxl={3} md={6} sm={12} className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height border-0" >
                  <img src={healthcareservice_1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Social Media Marketing</h4>
                    <div className="bottom-underline"></div>
                    <p>Engage with potential patients on Facebook, Instagram, and LinkedIn.</p>
                    <p>Build a strong online presence for your hospital.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} xxl={3} md={6} sm={12} className='mb-4 xl-p-4 '>
                <div class="card draggable shadow-sm responsive-height border-0" >
                  <img src={healthcareservice_1} style={{
                  }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>SEO and SEM</h4>
                    <div className="bottom-underline"></div>
                    <p>Optimize your hospital’s website to rank higher on Google.</p>
                    <p>Implement effective hospital digital marketing strategies for better visibility</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} xxl={3} md={6} sm={12} className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height border-0" >
                  <img src={healthcareservice_1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Content Marketing</h4>
                    <div className="bottom-underline"></div>
                    <p>Provide valuable healthcare content to educate and attract patients.</p>
                    <p>Establish your hospital as a trusted authority.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} xxl={3} md={6} sm={12} className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height border-0" >
                  <img src={healthcareservice_1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Email Marketing</h4>
                    <div className="bottom-underline"></div>
                    <p>Personalized communication with patients</p>
                    <p>Increase patient retention through informative email campaigns</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} xxl={3} md={6} sm={12} className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height border-0" >
                  <img src={healthcareservice_1} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Reputation Management</h4>
                    <div className="bottom-underline"></div>
                    <p>Monitor and manage online reviews.</p>
                    <p>Enhance your hospital’s credibility.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} xxl={3} md={6} sm={12} className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height border-0" >
                  <img src={healthcareservice_1} style={{

                  }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Website Development & Optimization</h4>
                    <div className="bottom-underline"></div>
                    <p>Improve user experience with a professionally designed website.</p>
                    <p>Ensure mobile-friendly and fast-loading pages.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} xxl={3} md={6} sm={12} className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height border-0" >
                  <img src={healthcareservice_1} style={{

                  }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Paid Advertising (PPC)</h4>
                    <div className="bottom-underline"></div>
                    <p>Generate instant visibility through targeted ads.</p>
                    <p>Optimize ad campaigns for maximum ROI.</p>
                  </div>
                </div>
              </Col>
              <Col lg={4} xxl={3} md={6} sm={12} className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height border-0" >
                  <img src={healthcareservice_1} style={{

                  }} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Video Marketing</h4>
                    <div className="bottom-underline"></div>
                    <p>Increase engagement with informative hospital-related videos.</p>
                    <p>Highlight patient testimonials and success stories.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <BookForm />
        <div className="service-content LogoVisual mb-5 pb-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={logoVisualMImage} alt="logo design company" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div>
                  <div className="service-para mt-3">
                    {/* <h1 className="content-main-heading mb-3">Logo & Visual Elements</h1> */}
                    <div className="health-why-novatales text-center text-lg-start">
                      <h3><span>Benefits</span> of Hospital Digital Marketing</h3>
                    </div>
                    <div className='row'>
                      <div className='col-1'> <VerifiedIcon fontSize='60px' sx={{
                        color: "#fec436", fontSize: "30px"
                      }} />
                      </div>
                      <div className='col-11'>
                        <p style={{
                          width: "auto"
                        }}> <span style={{
                          fontSize: "18px", fontWeight: "bold", color: "#2d1f44", wordSpacing: "0px"
                        }}>Brand Awareness :</span> <span style={{
                          fontSize: "16px", fontWeight: "400"
                        }} > Strengthen your hospital’s reputation and trust.</span></p>
                      </div>
                    </div>
                    <div className='row'>

                      <div className='col-1'> <VerifiedIcon fontSize='60px' sx={{
                        color: "#fec436", fontSize: "30px"
                      }} />
                      </div>
                      <div className='col-11'>
                        <p style={{
                          width: "auto"
                        }}> <span style={{
                          fontSize: "18px", fontWeight: "bold", color: "#2d1f44", wordSpacing: "0px"
                        }}>Increased Online Presence :</span> <span style={{
                          fontSize: "16px", fontWeight: "400"
                        }} >Patients can find your hospital easily.</span></p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-1'> <VerifiedIcon fontSize='60px' sx={{
                        color: "#fec436", fontSize: "30px"
                      }} />
                      </div>
                      <div className='col-11'>
                        <p style={{
                          width: "auto"
                        }}> <span style={{
                          fontSize: "18px", fontWeight: "bold", color: "#2d1f44", wordSpacing: "0px"
                        }}>Higher Patient Footfall :</span> <span style={{
                          fontSize: "16px", fontWeight: "400"
                        }} >Attract more local and international patients.</span></p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-1'> <VerifiedIcon fontSize='60px' sx={{
                        color: "#fec436", fontSize: "30px"
                      }} />
                      </div>
                      <div className='col-11'>
                        <p style={{
                          width: "auto"
                        }}> <span style={{
                          fontSize: "18px", fontWeight: "bold", color: "#2d1f44", wordSpacing: "0px"
                        }}>Better Patient Engagement:</span> <span style={{
                          fontSize: "16px", fontWeight: "400"
                        }} >Provide seamless communication and support.</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Health-faqs">
          <Container>
            <div className="health-faqs-heading">
              <h3 className='text-center'> <span style={{
            color: "#fec436"
          }}>Frequently</span> Asked  Questions</h3>
            </div>
            <div className="faq-accordion">
              <Row>
                {/* Left Column */}
                <Col lg={6}>
                  {faq.slice(0, 6).map((item, index) => (
                    <div className="accordion" data-aos="fade-up" key={index}>
                      <div
                        className={`accordion__item ${activeIndexLeft === index
                          ? "accordion__item--active"
                          : ""
                          }`}
                        onClick={() => toggleAccLeft(index)}
                      >
                        <button className="accordion__btn">
                          <span className="accordion__caption">
                            <FontAwesomeIcon icon={faLightbulb} />
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
                {/* Right Column */}
                <Col lg={6}>
                  {faq.slice(6, 12).map((item, index) => (
                    <div className="accordion" data-aos="fade-up" key={index}>
                      <div
                        className={`accordion__item ${activeIndexRight === index
                          ? "accordion__item--active"
                          : ""
                          }`}
                        onClick={() => toggleAccRight(index)}
                      >
                        <button className="accordion__btn">
                          <span className="accordion__caption">
                            <FontAwesomeIcon icon={faLightbulb} />
                            {item.q}
                          </span>
                          <span className="accordion__icon">
                            <FontAwesomeIcon icon={faPlus} />
                          </span>
                        </button>
                        {activeIndexRight === index && (
                          <div className="accordion__content">{item.a}.</div>
                        )}
                      </div>
                    </div>
                  ))}
                </Col>
              </Row>
            </div>
            <div className="conclusion mb-5">
              <div className="concl-heading">
                <div></div>
              </div>
              <p>
                Partner with NovaTales, the leading digital marketing agency for healthcare, to elevate your hospital’s digital presence. Let’s build a strong community, improve patient experiences, and take your hospital to new heights!
              </p>
              <p>
                Contact us today to get started!
              </p>
            </div>
          </Container>
        </div>
        <BookForm />
      </HelmetProvider>
    </>
  )
}
