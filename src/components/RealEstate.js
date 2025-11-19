import React, { useEffect, useState } from 'react'
import "../css/realestate.css"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import real_estate from "../images/portfolio/real_1.png"
import online_realestate from "../images/casestudies/NEXT GEN-01.png"
import social from "../images/casestudies/SEO 01-01.png"
import gads from "../images/casestudies/brand_voice.png"
import data from "../images/casestudies/Creative Storytelling-01.png"
import analyst from "../images/casestudies/Advanced Analytics-01.png"
import aboutHeroImage from '../images/portfolio/realestate_l.jpg';
import banner_mob from '../images/portfolio/realestate_m.png';
import { Container } from 'react-bootstrap'
import serviceCardimg_1 from "../images/portfolio/icons/smi.png"
import serviceCardimg_2 from "../images/portfolio/icons/seosmm.png"
import serviceCardimg_3 from "../images/portfolio/icons/content.png"
import serviceCardimg_4 from "../images/portfolio/icons/webDev.png"
import serviceCardimg_5 from "../images/portfolio/icons/vdoicon.png"
import serviceCardimg_6 from "../images/portfolio/icons/email.png"
import serviceCardimg_7 from "../images/portfolio/icons/ppc.png"
import serviceCardimg_8 from "../images/portfolio/icons/reputaion.png"
import AOS from "aos";
import "aos/dist/aos.css";
import RealEstateBookFrom from './realEstateFrom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const RealEstate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init();
  }, []);
  const faqs = [
    {
      q: "Is Digital Marketing really helpful for my Real Estate sales?",
      a: "Yes, it helps you attract the targeted buyers and build an online presence."
    },
    {
      q: "Will I be able to find more leads with Digital Marketing?",
      a: "Definitely yes. We use the strategies that target the buyers in real time who are actively searching online."
    },
    {
      q: "Will Digital Marketing help me boost my brand reputation?",
      a: "Absolutely, at NovaTales, we follow various strategies that help in increasing your online presence and build trust that automatically boosts your brand’s reputation."
    },
    {
      q: "Can I manage Digital Marketing on my own?",
      a: "If you wish to see results, then you need technical specialists like NovaTales who are experienced in the field."
    },
    {
      q: "Is it possible to get immediate results from Digital Marketing?",
      a: "It is not possible to see immediate results, as lead generation and building awareness take time."
    },
    {
      q: "Will digital marketing improve the online reputation of real estate?",
      a: "At NovaTales, we have an expert team that consistently looks at the reviews and works towards creating a better influence."
    },
    {
      q: "Will my business appear as a top result with GEO?",
      a: "At Novatales, we improve the chances of your business getting featured on the GEO search results, which requires certain criteria to be fulfilled."
    }, {
      q: "Is Marketing Automation essential in Real Estate?",
      a: "Yes, there is a need because it saves a lot of time in addressing the follow-up questions and increases the lead conversion."
    },
    {
      q: "How do Virtual tours help sell properties?",
      a: "It lets the buyers explore the properties remotely, which increases engagement."
    },
    {
      q: "Is AI really helpful in real estate digital marketing?",
      a: "Yes, AI tools are extremely helpful as they ensure smart targeting with higher-quality leads by identifying genuine buyers, optimizing ads, and making real-time property recommendations."
    },

  ];
  const [activeIndexLeft, setActiveIndexLeft] = useState(0);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Best Real Estate Digital Marketing Agency | NovaTales</title>
        <meta
          name="description"
          content="NovaTales is a leading real estate digital marketing agency helping builders and property agents increase sales through SEO, ads, and smart lead generation."
        />
      </Helmet>
      <div className='d-flex justify-content-center flex-column w-100' style={{
        paddingBottom: "40px"
      }}>

        {/* Top Banner and heading Section  */}

        <div className="about-hero">
          <img src={aboutHeroImage} width="100%" alt="healthcare digital marketing agency" className="lap" />
          <img src={banner_mob} alt="healthcare digital marketing agency" className="tab" width="100%" />
        </div>

        {/* What is Real Estate Digital Marketing  */}

        <div data-aos="fade-up" data-aos-delay="300" className="service-content LogoVisual pt-4 pb-4">
          <div className="container">
            <div className="row flex-lg-row-reverse  align-items-center">

              <div className="col-lg-6">
                <div className="service-para mt-3 ps-xl-5">
                  <div className="health-why-novatales text-center realestate-paraheading text-lg-start mt-4 mt-lg-0" style={{
                    padding: "0px 12px"
                  }}>
                    <h3 className='fw-bold pb-3' style={{
                      color: "#52377b"
                    }}>Elevate Your Real Estate Business with Smart Digital Marketing</h3>
                  </div>
                  <div className='healthcareTopPara'>Say goodbye to traditional ads that burn budgets with minimal results. Today’s top real estate professionals are turning to digital platforms to connect directly with serious buyers. At NovaTales, we help your brand grow through creative campaigns, SEO strategies, compelling content and AI-driven solutions that put your listings in front of the right audience.</div>
                  <div className='healthcareTopPara'>Our AI-powered tools do more than automate, they match your properties with qualified buyers, optimize campaigns for maximum ROI and ensure every inquiry is addressed instantly through intelligent chatbots. With Generative Engine Optimization (GEO), your listings get the visibility they deserve across emerging AI search platforms, reaching both local and global audiences. Combine AI and GEO, and your real estate business becomes smarter, faster and more profitable future-ready for the next era of property marketing.</div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-between">
                <div className="service-image  pe-4">
                  <div className="info-img position-relative d-flex justify-content-start align-items-center">
                    <img src={real_estate} width="100%" alt="digital marketing and real estate" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Appointment Form */}
        <RealEstateBookFrom />

        {/* Why Real Estate Needs Digital Marketing */}


        <div data-aos="fade-up" data-aos-delay="100" className="health-why-novatales text-center d-flex justify-content-center flex-column align-items-center">
          <h2 className=' px-3' style={{
            color: "#52377b"
          }}>
            Why Choose NovaTales for your
            Real Estate Marketing?
          </h2>
          <div className='row whyneedRealestate' >
            <div className='col-lg-4'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "rgba(36, 73, 168, 0.03)",
                margin: "4px",

                borderRadius: "10px",
              }}>
                <div>
                  <img src={online_realestate} alt='real estate digital agency' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#52377b", fontSize: "20px", fontWeight: "bold"
                  }}>Next-Gen Technology</span>
                  <p className='text-left' id='whyNeedRealP'>
                    AI connects your properties instantly with the right buyers.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "rgba(36, 73, 168, 0.03)",
                margin: "4px",
                borderRadius: "10px",
              }}>
                <div>
                  <img src={social} alt='real estate seo company' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#52377b", fontSize: "20px", fontWeight: "bold"
                  }}>Local Market Mastery</span>
                  <p className='text-left' id='whyNeedRealP'>
                    SEO ensures your listings appear when buyers search locally.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "rgba(36, 73, 168, 0.03)",
                margin: "4px",

                borderRadius: "10px",
              }}>
                <div>
                  <img src={gads} alt='advertising for real estate' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#52377b", fontSize: "20px", fontWeight: "bold"
                  }}>Boost Brand Voice</span>
                  <p className='text-left' id='whyNeedRealP'>
                    Personalized campaigns build trust and recognition for your b
                    rand.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row whyneedRealestate2 mt-md-4 ' >
            <div className='col-lg-5'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "rgba(36, 73, 168, 0.03)",
                margin: "4px",

                borderRadius: "10px",
              }}>
                <div>
                  <img src={analyst} alt='digital agency for real estate' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#52377b", fontSize: "20px", fontWeight: "bold"
                  }}>Advanced Analytics</span>
                  <p className='text-left' id='whyNeedRealP'>
                    Advanced analytics guide smarter marketing decisions every time.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "rgba(36, 73, 168, 0.03)",
                margin: "4px",

                borderRadius: "10px",
              }}>
                <div>
                  <img src={data} alt='online marketing real estate' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#52377b", fontSize: "20px", fontWeight: "bold"
                  }}>Creative Storytelling</span>
                  <p className='text-left' id='whyNeedRealP'>
                    Visuals and narratives highlight your property’s true value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-get">
          <div className="wrapper">
            <div data-aos="fade-up" className="health-why-novatales">
              <h2
                className="text-center"
                style={{
                  textAlign: "center",
                  color: "#52377b",
                  marginTop: "80px",
                  marginBottom: "20px"
                }}
              >
                NovaTales Expert Digital Marketing Services <br /> for Real Estate
              </h2>
            </div>

            <div className="get-list row">
              {/* -------- COLUMN 1 -------- */}
              <div data-aos="fade-up" className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                <div className="get-list__item">
                  <div className="get-list__heading">
                    <div className="get-list__icon">
                      <img src={serviceCardimg_1} alt="" loading="lazy" />
                    </div>
                    <div className="get-list__title">Social Media Marketing</div>
                  </div>
                  <div className="get-list__text">

                    Improve search visibility and reach buyers actively looking for properties.
                  </div>
                </div>
                <div className="get-list__item extraTop">
                  <div className="get-list__heading">
                    <div className="get-list__icon">
                      <img src={serviceCardimg_2} alt="" loading="lazy" />
                    </div>
                    <div className="get-list__title">SEO and SEM</div>
                  </div>
                  <div className="get-list__text">
                    Improve search visibility and reach buyers actively looking for properties.
                  </div>
                </div>
              </div>

              {/* -------- COLUMN 2 -------- */}
              <div data-aos="fade-up" className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-lg-5 pt-lg-5 d-flex justify-content-center align-items-center flex-column">
                <div className="get-list__item">
                  <div className="get-list__heading">
                    <div className="get-list__icon">
                      <img src={serviceCardimg_3} alt="" loading="lazy" />
                    </div>
                    <div className="get-list__title">Content Marketing</div>
                  </div>
                  <div className="get-list__text">

                    Share valuable property updates to capture buyer interest effectively.
                  </div>
                </div>

                <div className="get-list__item extraTop">
                  <div className="get-list__heading">
                    <div className="get-list__icon">
                      <img src={serviceCardimg_6} alt="" loading="lazy" />
                    </div>
                    <div className="get-list__title">Email Marketing</div>
                  </div>
                  <div className="get-list__text">
                    Send personalized messages to potential buyers and sellers consistently.
                  </div>
                </div>
              </div>

              {/* -------- COLUMN 3 -------- */}
              <div data-aos="fade-up" className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                <div className="get-list__item">
                  <div className="get-list__heading">
                    <div className="get-list__icon">
                      <img src={serviceCardimg_8} alt="" loading="lazy" />
                    </div>
                    <div className="get-list__title">Reputation Management</div>
                  </div>
                  <div className="get-list__text">
                    Track reviews and maintain a strong, credible brand image.
                  </div>
                </div>

                <div className="get-list__item extraTop">
                  <div className="get-list__heading">
                    <div className="get-list__icon">
                      <img src={serviceCardimg_7} alt="" loading="lazy" />
                    </div>
                    <div className="get-list__title">Paid Advertising (PPC)</div>
                  </div>
                  <div className="get-list__text">
                    Reach the right buyers at the right time to boost ROI.
                  </div>
                </div>
              </div>

              {/* -------- COLUMN 4 -------- */}
              <div data-aos="fade-up" className="col-xl-3 col-lg-12 col-md-6 col-sm-12 mt-xl-5 pt-xl-5 d-flex justify-content-center align-items-center flex-column">
                <div className='row d-flex justify-content-center align-items-center flex-column flex-lg-row'>
                  <div className='col-xl-12 col-lg-6'>
                    <div className="get-list__item">
                      <div className="get-list__heading">
                        <div className="get-list__icon">
                          <img src={serviceCardimg_4} alt="" loading="lazy" />
                        </div>
                        <div className="get-list__title">Website Development</div>
                      </div>
                      <div className="get-list__text">
                        Design fast, user-friendly websites that highlight your properties.
                      </div>
                    </div>
                  </div>
                  <div className='col-xl-12 col-lg-6'>
                    <div className="get-list__item extraTop">
                      <div className="get-list__heading">
                        <div className="get-list__icon">
                          <img src={serviceCardimg_5} alt="" loading="lazy" />
                        </div>
                        <div className="get-list__title">Video Marketing</div>
                      </div>
                      <div className="get-list__text">
                        Showcase properties and client experiences with engaging videos.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FAQs */}
        <div className="Health-faqs">
          <Container>
            <div data-aos="fade-up" className="health-why-novatales">
              <h2 className='text-center' style={{
                textAlign: "center !important",
                marginBottom: "40px",
                marginTop: "40px",
                color: "#52377b"
              }}>Frequently Asked  Questions </h2>
            </div>
            <div className="faq-accordion">

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
                        Why should builders partner with NovaTales Media for real estate marketing?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 1 && (
                      <div className="accordion__content fw-normal">
                        NovaTales Media specializes in real estate digital marketing with proven strategies designed for Hyderabad’s competitive property market. We combine lead generation funnels, hyper-local targeting, project branding, and conversion-focused campaigns to deliver high-quality buyer, investor, and NRI leads. With deep industry experience, we ensure faster sales cycles and a strong online presence for your project.
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
                        Can NovaTales Media generate NRI leads for real estate projects?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 2 && (
                      <div className="accordion__content fw-normal">
                        Yes. NovaTales runs highly targeted Meta and Google campaigns across the GCC, USA, UK, Australia, and other NRI hotspots. We use interest-based targeting, custom audiences, and optimized landing pages to attract qualified NRI buyers who are actively exploring investment opportunities in India.
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
                        What services does NovaTales Media provide for real estate developers?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 3 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>We offer end-to-end real estate marketing solutions, including:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}> Google Search, Display & Performance Max campaigns </li>
                          <li style={{ listStyleType: "disc" }}> Meta lead generation ads</li>
                          <li style={{ listStyleType: "disc" }}> NRI lead generation</li>
                          <li style={{ listStyleType: "disc" }}> SEO for project websites </li>
                          <li style={{ listStyleType: "disc" }}> Landing page development</li>
                          <li style={{ listStyleType: "disc" }}> Social media management & creative design</li>
                          <li style={{ listStyleType: "disc" }}> Project branding & launch campaigns</li>
                          <li style={{ listStyleType: "disc" }}> CRM setup and automated lead nurturing </li>
                          <li style={{ listStyleType: "disc" }}> Video ads & walkthrough reels</li>
                        </ul>
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
                        How long does it take to see results from real estate digital marketing?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 4 && (
                      <div className="accordion__content fw-normal">
                        With well-optimized campaigns, you can start receiving leads within 7–10 days. SEO and brand-building activities take longer—typically 2 to 3 months for measurable improvements. The overall timeline depends on your project type, competition, budget, and the marketing channels used.
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
                        How can NovaTales help generate more qualified leads?
                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 5 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>We use a multi-step strategy focused on quality over quantity:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}> Targeting audiences based on behavior, geolocation, and purchase intent </li>
                          <li style={{ listStyleType: "disc" }}> Creating compelling ads and landing pages</li>
                          <li style={{ listStyleType: "disc" }}> Running A/B testing for better conversions</li>
                          <li style={{ listStyleType: "disc" }}> Reducing lead leakage through quick CRM automations </li>
                          <li style={{ listStyleType: "disc" }}> Driving high-intent traffic through Google Search Ads</li>
                        </ul>
                        <p style={{ padding: "0" }} className='py-1'>This ensures your sales team receives leads that are more interested, relevant, and ready to engage.</p>

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
                        How can NovaTales enhance my project's website visibility?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 6 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>Our SEO specialists optimize your project website so it ranks for high-intent keywords like “2BHK flats in Hyderabad” or “gated community in location.” We improve on-page SEO, technical SEO, local SEO, Google Business Profile visibility, and content marketing to drive organic traffic that converts into enquiries.</p>
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
                        How can I track the success of my campaigns?
                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 7 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>You get complete transparency. NovaTales provides:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}> Monthly performance reports</li>
                          <li style={{ listStyleType: "disc" }}> Lead dashboards</li>
                          <li style={{ listStyleType: "disc" }}> Google Analytics & Ads reports</li>
                          <li style={{ listStyleType: "disc" }}> Meta performance insights</li>
                          <li style={{ listStyleType: "disc" }}> Call tracking & lead quality analysis </li>
                        </ul>
                        <p style={{ padding: "0" }} className='py-1'> You’ll always know how many leads were generated, their quality, cost per lead, and ROI.</p>
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
                        Can NovaTales help with project branding and launch strategies?
                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 8 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>Yes. We handle the entire branding pipeline, including:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}> Project naming & brand identity</li>
                          <li style={{ listStyleType: "disc" }}> Brochures, hoardings, and creative design</li>
                          <li style={{ listStyleType: "disc" }}> Launch campaigns for digital & offline</li>
                          <li style={{ listStyleType: "disc" }}> Teaser and reveal campaigns</li>
                          <li style={{ listStyleType: "disc" }}> 360° digital promotion across all platforms </li>
                        </ul>
                        <p style={{ padding: "0" }} className='py-1'> This ensures your project makes a strong impact right from the launch stage.</p>
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
                        Why should I hire a real estate digital marketing agency?

                      </span>
                      <span className="accordion__icon">
                        <FontAwesomeIcon icon={faPlus} />
                      </span>
                    </button>
                    {activeIndexLeft === 9 && (
                      <div className="accordion__content fw-normal">
                        <p style={{ padding: "0" }} className='py-1'>Real estate is highly competitive and requires specialized marketing expertise. A dedicated real estate agency like NovaTales:</p>
                        <ul className='mt-0 flex flex-column gap-2' >
                          <li style={{ listStyleType: "disc" }}> Understands buyer psychology</li>
                          <li style={{ listStyleType: "disc" }}> Knows how to generate high-intent leads</li>
                          <li style={{ listStyleType: "disc" }}> Uses data-driven strategies</li>
                          <li style={{ listStyleType: "disc" }}> Builds consistent branding</li>
                          <li style={{ listStyleType: "disc" }}> Helps your sales team close faster </li>

                        </ul>
                        <p style={{ padding: "0", margin: "0" }}>
                           Instead of trial and error, you get proven systems that deliver measurable results.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="conclusion mb-5">
            </div>
          </Container>
        </div>
        {/* Book Appointment Form */}
        <RealEstateBookFrom />
        <div className='w-100 mb-5'>
        </div>
      </div></HelmetProvider>


  )
}

export default RealEstate
