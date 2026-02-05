import React, { useEffect, useState } from "react";
import "../css/healthcare.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutHeroImage from '../images/casestudies/health_ban_l.jpg';
import case_study_mobile_banner from '../images/portfolio/healthcare_banner_m.jpg';
import hospital_image_1 from '../images/casestudies/health_about.png';
import '../css/Home.css';
import icon1 from '../images/icon 1.png';
import icon2 from '../images/portfolio/custmized-01 (1)-01.png';
import icon3 from '../images/portfolio/donation_1-01.png';
import icon4 from '../images/icon 4.png';
import BookForm from './bookForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ServicesCards from './ServicesCards';
export default function HealthCare() {
  const [activeIndexLeft, setActiveIndexLeft] = useState(0);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div style={{
      marginBottom: "80px"
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
              <div data-aos="fade-up" className="col-lg-6 d-flex justify-content-center align-items-center">

                <img
                  src={hospital_image_1}
                  alt="hospital digital marketing"
                  className=" topBottom"
                />
              </div>
            </div>
          </div>
        </div>
        <BookForm />
        <div className="whyStrategies">
          <div data-aos="fade-up" className="health-why-novatales">
            <h2
              className="text-center"
              style={{
                textAlign: "center",
                color: "#52377b",
                marginTop: "40px",
                marginBottom: "20px"
              }}
            >  Why Choose NovaTales for Your Healthcare Marketing Strategies?
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
                    <img src={icon2} alt="digital solutions in healthcare" width="60px" />
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
                    <img src={icon3} alt="healthcare marketing budget" width="60px" />
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
        <ServicesCards />
        <div className="Health-faqs">
          <Container>
            <div className="health-faqs-heading">
              <h2
                className="text-center"
                style={{
                  color: "#52377b",
                  fontWeight: "bold"
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
              <div className='faq_container' data-aos="fade-up">
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 1
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(1)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        Why should hospitals choose NovaTales Media for digital marketing?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 1 && (
                      <div className="accordion__content fw-normal">
                        NovaTales specializes in healthcare digital marketing, offering strategies that increase patient inquiries, build strong online credibility, and enhance your hospital’s visibility. We combine SEO, paid ads, content marketing, and reputation management to help doctors and hospitals attract the right audience and grow consistently
                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 2
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(2)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        What digital marketing services does NovaTales provide for hospitals and clinics?
                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 2 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>We offer complete 360° healthcare marketing solutions, including:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}>Google Search Ads for patient acquisition</li>
                          <li style={{ listStyleType: "disc" }}>Meta lead campaigns</li>
                          <li style={{ listStyleType: "disc" }}>Hospital website design & maintenance</li>
                          <li style={{ listStyleType: "disc" }}>SEO & local SEO (Google Maps ranking)</li>
                          <li style={{ listStyleType: "disc" }}>Doctor-centric content creation (reels, blogs, FAQs)</li>
                          <li style={{ listStyleType: "disc" }}>Online reputation management</li>
                          <li style={{ listStyleType: "disc" }}>Patient education content</li>
                          <li style={{ listStyleType: "disc" }}>Social media management</li>
                          <li style={{ listStyleType: "disc" }}>Branding & creatives</li>
                          <li style={{ listStyleType: "disc" }}>Google Search, Display & Performance Max campaigns</li>

                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 3
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(3)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        How long does it take to see results from hospital digital marketing?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 3 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>Paid campaigns like Google Ads and Meta Ads generate inquiries within 3–7 days.
                          SEO, content marketing, and Google Business Profile optimization take 1–3 months to show measurable improvements in rankings, website traffic, and patient flow.</p>

                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 4
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(4)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        Can NovaTales help hospitals increase patient appointments?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 4 && (
                      <div className="accordion__content fw-normal">
                        Yes. We create targeted campaigns to drive high-intent patient enquiries for specific departments such as IVF, gynecology, orthopedics, general surgery, dermatology, and more. Our strategy focuses on reaching the right audience, improving conversion rate, and ensuring consistent appointment flow.
                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 5
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(5)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        How does NovaTales handle digital marketing for multiple departments or specialties?
                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 5 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>We design specialty-focused campaigns for each department with dedicated keywords, landing pages, and creatives. Whether it’s cardiology, fertility, pediatrics, or physiotherapy, each specialty gets a tailored approach to attract relevant patients.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 6
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(6)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        Can NovaTales manage Google Business Profile (GBP) for our hospital?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 6 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>Absolutely. We optimize your GBP with:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}> Weekly posts</li>
                          <li style={{ listStyleType: "disc" }}> High-quality images</li>
                          <li style={{ listStyleType: "disc" }}> Keyword-focused descriptions</li>
                          <li style={{ listStyleType: "disc" }}> Review management</li>
                          <li style={{ listStyleType: "disc" }}> CNAP consistency </li>
                        </ul>    <p style={{ padding: "0" }} className='py-1'>This improves your local visibility and helps patients find your hospital easily on Maps and Search.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 7
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(7)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        Can NovaTales help hospitals manage reviews and online reputation?
                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 7 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>Yes. We implement review-building strategies, monitor all patient feedback, respond to reviews, and ensure your hospital maintains positive online credibility. This is essential for patient trust and ranking improvement.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 8
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(8)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        How can I track the performance of my hospital’s online campaigns?
                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 8 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>You receive detailed monthly and weekly reports, including:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}> Leads generated</li>
                          <li style={{ listStyleType: "disc" }}> Cost per lead</li>
                          <li style={{ listStyleType: "disc" }}> Appointment tracking</li>
                          <li style={{ listStyleType: "disc" }}> Google & Meta analytics</li>
                          <li style={{ listStyleType: "disc" }}> SEO improvements</li>
                        </ul>
                        <p style={{ padding: "0" }} className='py-1'> We maintain full transparency so you always know how your marketing budget is performing.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 9
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(9)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        Does NovaTales follow healthcare advertising guidelines and ethics?
                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 9 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>Yes. We strictly follow healthcare advertising rules, maintain patient confidentiality, avoid misleading claims, and create educational, ethical content that builds trust and credibility.</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="accordion " >
                  <div
                    className={`accordion__item ${activeIndexLeft === 10
                      ? "accordion__item--active"
                      : ""
                      }`}
                    onClick={() => toggleAccLeft(10)}
                  >
                    <button className="accordion__btn real-estate-faq">
                      <span className="accordion__caption fw-medium">
                        Can NovaTales help with hospital branding and video content?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 10 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>Yes. We specialize in creating:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}> Doctor introduction videos</li>
                          <li style={{ listStyleType: "disc" }}> Treatment explainer reels</li>
                          <li style={{ listStyleType: "disc" }}> Patient education content</li>
                          <li style={{ listStyleType: "disc" }}> Hospital walkthrough videos</li>
                          <li style={{ listStyleType: "disc" }}> Branding creatives and social media posts</li>
                        </ul>    <p style={{ padding: "0" }} className='py-1'>This strengthens your hospital brand and improves engagement across platforms.</p>
                      </div>
                    )}
                  </div>
                </div>
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
