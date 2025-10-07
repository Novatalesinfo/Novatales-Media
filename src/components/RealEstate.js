import React, { useEffect, useState } from 'react'
import "../css/realestate.css"
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import realestatetopBanner from "../images/casestudies/Property -01.png"
import whatisrealestate from "../images/casestudies/what_home_2.png"
import online_realestate from "../images/inspection.png"
import social from "../images/casestudies/Seo-01.png"
import gads from "../images/casestudies/Brand voice-01.png"
import data from "../images/casestudies/story-telling.png"
import analyst from "../images/casestudies/web-01.png"
import { Col, Container, Row } from 'react-bootstrap'
import realestateservice_1 from "../images/casestudies/Home SEO-01.png"
import realestateservice_2 from "../images/casestudies/Sale_ads-01.png"
import realestateservice_3 from "../images/casestudies/Leads-01.png"
import realestateservice_4 from "../images/casestudies/Video_ads-01.png"
import realestateservice_5 from "../images/casestudies/Realestate_web-01.png"
import realestateservice_6 from "../images/casestudies/find_home-01.png"
import realestateservice_7 from "../images/casestudies/email-01.png"
import realestateservice_8 from "../images/casestudies/Content Marketing-01.png"
import icons_1 from "../images/diploma.png"
import icons_2 from "../images/customer-acquisition.png"
import icons_3 from "../images/profit.png"
import icons_4 from "../images/time-management.png"
import icons_6 from "../images/casestudies/conversion-01.png"
import icons_5 from "../images/impression-rate.png"
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

  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
  const toggleAccRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
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
      <div className='d-flex justify-content-center flex-column w-100'>

        {/* Top Banner and heading Section  */}

        <div className='realestate-topBanner'>
          <div className='row d-flex flex-lg-row flex-column-reverse'>

            <div className='col-lg-7 d-flex justify-content-center align-items-center'>
              <h1 id="topHeading" data-aos="fade-up" data-aos-delay="100" className='text-center'>Take your <span style={{
                color: "#fec436"
              }}>Real Estate Business
              </span> to New Heights with <span style={{
                color: "#fec436"
              }}>Digital Marketing </span>


              </h1>
            </div>
            <div className='col-lg-5 d-flex justify-content-center align-items-center'>
              <img id='realestateImg' loading='eager' src={realestatetopBanner} alt='best digital marketing agency for real estate' />
            </div>
          </div>
        </div>

        {/* What is Real Estate Digital Marketing  */}

        <div data-aos="fade-up" data-aos-delay="300" className="service-content LogoVisual">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image mt-5">
                  <div className="info-img position-relative d-flex justify-content-center align-items-center mt-5">
                    <img src={whatisrealestate} width="100%" alt="digital marketing and real estate" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="service-para mt-3">
                  <div className="health-why-novatales text-center realestate-paraheading text-lg-start">
                    <h3>Upgrade your Real Estate game with  <span>Digital Marketing</span></h3>
                  </div>
                  <p className='healthcareTopPara'>Today’s real estate leaders are leveraging powerful digital platforms to connect with genuine clients. At NovaTales, we help you grow dynamically with creative strategies, SEO, engaging content, and advanced AI, elevating your brand’s presence. </p>
                  <p className='healthcareTopPara'>At NovaTales, we integrate AI to match your listings with qualified buyers, optimize campaigns, and enhance engagement. Our AI-driven tools personalize the buyer’s journey, while chatbots handle inquiries in real time. With our exclusive Generative Engine Optimization (GEO) service, your listings gain visibility across emerging AI-powered search platforms. GEO ensures your properties appear exactly where buyers are searching, boosting both local and global reach. Together, AI and GEO make your real estate business future-ready, efficient, and highly profitable.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Book Appointment Form */}
        <RealEstateBookFrom />

        {/* Why Real Estate Needs Digital Marketing */}


        <div data-aos="fade-up" data-aos-delay="100" className="service-content LogoVisual text-center d-flex justify-content-center flex-column align-items-center pt-5 mt-5">
          <h2>
            Why Choose NovaTales for your <span style={{
              color: "#fec436"
            }}>
              Real Estate Marketing? </span>
          </h2>
          <div className='row whyneedRealestate' >
            <div className='col-lg-4'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "#f7f7f7",
                margin: "4px",

                borderRadius: "10px",
              }}>
                <div>
                  <img src={online_realestate} alt='real estate digital agency' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#fec436", fontSize: "20px", fontWeight: "bold"
                  }}>Next-Gen Technology</span>
                  <p className='text-left' id='whyNeedRealP'>
                    We use AI to match properties with buyers in real-time.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "#f7f7f7",
                margin: "4px",
                borderRadius: "10px",
              }}>
                <div>
                  <img src={social} alt='real estate seo company' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#fec436", fontSize: "20px", fontWeight: "bold"
                  }}>Local Market Mastery</span>
                  <p className='text-left' id='whyNeedRealP'>
                    Our SEO strategies display properties to potential buyers when they search.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "#f7f7f7",
                margin: "4px",

                borderRadius: "10px",
              }}>
                <div>
                  <img src={gads} alt='advertising for real estate' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#fec436", fontSize: "20px", fontWeight: "bold"
                  }}>Boost Brand Voice</span>
                  <p className='text-left' id='whyNeedRealP'>
                    Personalized campaigns with a unique narrative, helping build client trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row whyneedRealestate2 ' >
            <div className='col-lg-5'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "#f7f7f7",
                margin: "4px",

                borderRadius: "10px",
              }}>
                <div>
                  <img src={analyst} alt='digital agency for real estate' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#fec436", fontSize: "20px", fontWeight: "bold"
                  }}>Advanced Analytics</span>
                  <p className='text-left' id='whyNeedRealP'>
                    We drive smarter decisions with advanced analytics.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-5'>
              <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
                backgroundColor: "#f7f7f7",
                margin: "4px",

                borderRadius: "10px",
              }}>
                <div>
                  <img src={data} alt='online marketing real estate' />
                </div>
                <div className='ps-3 d-flex justify-content-center gap-0 flex-column align-items-center'>
                  <span style={{
                    color: "#fec436", fontSize: "20px", fontWeight: "bold"
                  }}>Creative Storytelling</span>
                  <p className='text-left' id='whyNeedRealP'>
                    Appealing & emotional visuals highlighting your property's true value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Services for real estate */}

        <div className="health-Digital-Marketing">
          <Container>
            <div data-aos="fade-up" className="health-why-novatales">
              <h3 className='text-center' style={{
                textAlign: "center !important",
                marginBottom: "80px",
              }}><span>NovaTales </span> Expert Digital Marketing Services for <span> Real Estate</span> </h3>
            </div>
          </Container>
          <Container fluid>
            <Row className='health-Digital-Marketing-content p-xl-4' >
              <Col lg={6} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                  <img src={realestateservice_1} className="card-img-top" alt="search engine optimization for real estate" style={{
                    backgroundColor: "#FAFAFA"

                  }} />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>SEO and SEM</h4>
                    <div className="bottom-underline"></div>
                    <p>Enhance your property’s visibility with SEO strategies</p>
                    <p>Position your brand with SEM campaigns among active buyers.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4 '>
                <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                  <img src={realestateservice_2} style={{
                    backgroundColor: "#FAFAFA"
                  }} className="card-img-top" alt="real estate ppc advertising" />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Paid Advertising (PPC)</h4>
                    <div className="bottom-underline"></div>
                    <p>Reach the right buyers at the right time.</p>
                    <p>Optimized campaigns for maximum ROI.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
                <div className="card draggable shadow-sm responsive-height-realestate border-0" style={{

                }} >
                  <img src={realestateservice_6} className="card-img-top" alt="best real estate social media marketing companies" style={{
                    backgroundColor: "#FAFAFA"
                  }} />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Social Media Marketing</h4>
                    <div className="bottom-underline"></div>
                    <p>Actively engage with potential buyers and investors on social platforms.</p>
                    <p>Show property listings and build a strong digital presence for your real estate brand.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
                <div className="card draggable shadow-sm responsive-height-realestate border-0" >
                  <img src={realestateservice_5} className="card-img-top" alt="best real estate web design companies" style={{
                    backgroundColor: "#FAFAFA"
                  }} />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Website Development</h4>
                    <div className="bottom-underline"></div>
                    <p>Create visually appealing websites showcasing properties effectively.</p>
                    <p>Ensure fast-loading with seamless browsing.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
                <div className="card draggable shadow-sm responsive-height-realestate border-0" >
                  <img src={realestateservice_7} className="card-img-top" alt="best email marketing service for real estate" style={{
                    backgroundColor: "#FAFAFA"
                  }} />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Email Marketing</h4>
                    <div className="bottom-underline"></div>
                    <p>Targeted communication with potential buyers and sellers.</p>
                    <p>Increase the leads by providing personalized updates and market insights.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                  <img src={realestateservice_4} style={{
                    backgroundColor: "#FAFAFA"
                  }} className="card-img-top" alt="video marketing for real estate" />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Video Marketing</h4>
                    <div className="bottom-underline"></div>
                    <p>Build trust by showcasing a satisfied buyer experience.</p>
                    <p>Share engaging virtual tours.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                  <img src={realestateservice_8} width="100%" style={{
                    backgroundColor: "#FAFAFA"
                  }} className="card-img-top" alt="content marketing for real estate" />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Content Marketing</h4>
                    <div className="bottom-underline"></div>
                    <p>Engage potential buyers with insightful information about your property.</p>
                    <p>Establish a reliable real estate brand in the market.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
                <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                  <img src={realestateservice_3} style={{
                    backgroundColor: "#FAFAFA"
                  }} className="card-img-top" alt="reputation management for real estate" />
                  <div className="card-body">
                    <h4 style={{
                      color: "#fec436"
                    }}>Reputation Management</h4>
                    <div className="bottom-underline"></div>
                    <p>Keep an active eye on property reviews and client feedback.</p>
                    <p>Create a strong, trustworthy, and credible image of your real estate brand in the market.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>


        {/* Book Appointment Form */}
        <RealEstateBookFrom />
        {/* Top Benefits for Real Estate digital marketing */}

        <div className='d-flex flex-column justify-content-center align-items-center  pt-5 mb-5'>
          <Container>
            <div data-aos="fade-up" className="health-why-novatales">
              <h3 className='text-center' style={{
                textAlign: "center !important",
                marginBottom: "60px",
              }}><span>NovaTales </span> Expert Digital Marketing Top Benefits for <span> Real Estate</span> </h3>
            </div>
          </Container>
          <div className='row realEstateBenefits p-3 '>
            <div className='col-lg-6' data-aos="fade-up">
              <div className='realEstatebenefitspoints'>
                <div>
                  <img src={icons_2} alt='internet marketing for real estate' />
                </div>
                <h4>
                  Expanded Reach
                </h4>
                <p>
                  Instantly connect with buyers and sellers globally.
                </p>
              </div>
            </div>
            <div className='col-lg-6' data-aos="fade-up">
              <div className='realEstatebenefitspoints'>
                <div>
                  <img src={icons_5} alt='geographical targeting for real estate' />
                </div>
                <h4>
                  GEO Visibility
                </h4>
                <p>
                  Get featured by top AI search engines and build trust.
                </p>
              </div>
            </div>
            <div className='col-lg-6 mt-3 mb-3' data-aos="fade-up">
              <div className='realEstatebenefitspoints'>
                <div>
                  <img src={icons_4} alt='digital marketing agency for real estate' />
                </div>
                <h4>
                  24/7 Lead Generation
                </h4>
                <p>
                  Attract clients with automated platforms.
                </p>
              </div>
            </div>
            <div className='col-lg-6 mt-3 mb-3' data-aos="fade-up">
              <div className='realEstatebenefitspoints'>
                <div>
                  < img src={icons_3} alt='real estate marketing agency' />
                </div>
                <h4>
                  Real-Time Insights
                </h4>
                <p>Grow faster by adapting to clients’ feedback.
                </p>
              </div>
            </div>
            <div className='col-lg-6' data-aos="fade-up">
              <div className='realEstatebenefitspoints'>
                <div>
                  <img src={icons_6} alt='real estate social media agency' />
                </div>
                <h4>
                  Boost Conversion
                </h4>
                <p>
                  Reach the right audiences based on their location, interest, and intent.

                </p>
              </div>
            </div>
            <div className='col-lg-6' data-aos="fade-up">
              <div className='realEstatebenefitspoints'>
                <div>
                  <img src={icons_1} alt='top real estate social media marketing companies' />
                </div>
                <h4>
                  Brand Authority
                </h4>
                <p>
                  Become a trusted real estate leader with a strong digital footprint.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* FAQs */}

        <div className="Health-faqs">
          <Container>

            <div data-aos="fade-up" className="health-why-novatales">
              <h3 className='text-center' style={{
                textAlign: "center !important",
                marginBottom: "80px",
              }}><span>Frequently </span> Asked  Questions </h3>
            </div>

            <div className="faq-accordion">
              <Row>
                {/* Left Column */}
                <Col lg={6}>
                  {faqs.slice(0, 5).map((item, index) => (
                    <div className="accordion " data-aos="fade-up" key={index}>
                      <div
                        className={`accordion__item ${activeIndexLeft === index
                          ? "accordion__item--active"
                          : ""
                          }`}
                        onClick={() => toggleAccLeft(index)}
                      >
                        <button className="accordion__btn real-estate-faq">
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
                  {faqs.slice(5, 10).map((item, index) => (
                    <div className="accordion " data-aos="fade-up" key={index}>
                      <div
                        className={`accordion__item ${activeIndexRight === index
                          ? "accordion__item--active"
                          : ""
                          }`}
                        onClick={() => toggleAccRight(index)}
                      >
                        <button className="accordion__btn real-estate-faq" >
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
                In today’s digital-first world, real estate success isn’t just about properties — it’s about visibility, strategy, and trust. Whether you’re a solo agent or a growing agency, digital marketing gives you the tools to attract quality leads, close deals faster, and build a lasting brand. Don't just list properties — build a presence that sells. Let's make your real estate brand unmissable.
              </p>
              <p>
                Contact us today to get started!
              </p>
            </div>
          </Container>
        </div>

        {/* Book Appointment Form */}
        <RealEstateBookFrom />
      </div></HelmetProvider>


  )
}

export default RealEstate
