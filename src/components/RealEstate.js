import React, { useEffect, useState } from 'react'
import "../css/realestate.css"
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import realestatetopBanner from "../images/portfolio/real_etate_banner.png"
import whatisrealestate from "../images/portfolio/what_home.png"


import online_realestate from "../images/inspection.png"
import social from "../images/social-media-marketing (1).png"
import gads from "../images/google.png"
import data from "../images/web-analysis.png"
import analyst from "../images/web.png"


import { Col, Container, Row } from 'react-bootstrap'
import realestateservice_1 from "../images/portfolio/seo-01.png"
import realestateservice_2 from "../images/portfolio/sale_ads [Converted].png"
import realestateservice_3 from "../images/portfolio/leads.png"
import realestateservice_4 from "../images/portfolio/video_ads.png"
import realestateservice_5 from "../images/portfolio/landing_page.png"
import realestateservice_6 from "../images/portfolio/seocial_media.png"
import realestateservice_7 from "../images/portfolio/email_marketing.png"
import realestateservice_8 from "../images/portfolio/wp_ads.png"
import icons_1 from "../images/diploma.png"
import icons_2 from "../images/customer-acquisition.png"
import icons_3 from "../images/profit.png"
import icons_4 from "../images/time-management.png"
import icons_5 from "../images/impression-rate.png"
import AOS from "aos";
import "aos/dist/aos.css";
import RealEstateBookFrom from './realEstateFrom';
const RealEstate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    AOS.init();
  }, []);
  const faqs = [
    {
      q: "How fast will I see results?",
      a: "SEO takes 3–6 months, but paid ads and social media can start delivering leads in days."
    },
    {
      q: "Do you work with small real estate agencies?",
      a: "Absolutely! We have custom plans for both solo agents and large firms."
    },
    {
      q: "Can you promote luxury or commercial properties?",
      a: "Yes. We craft campaigns specifically for luxury, rental, commercial, or gated communities."
    },
    {
      q: "What platforms do you market on?",
      a: "Google, Facebook, Instagram, YouTube, and real estate portals like 99acres, MagicBricks, etc."
    },
    {
      q: "Do I need a website to get started?",
      a: "No, but having one helps. If needed, we can create a high-converting landing page for you."
    },
    {
      q: "How do you generate real estate leads?",
      a: "We use Google Ads, social media, SEO, and funnels to attract high-intent buyers and sellers."
    },
    {
      q: "Will you manage my social media too?",
      a: "Yes. We can create and post content, manage ads, and even handle DMs and engagement."
    },
    {
      q: "Is this service only for Indian real estate?",
      a: "Nope. We’ve run campaigns for clients in the US, UAE, Canada, and other global markets."
    },
    {
      q: "What’s the pricing structure?",
      a: "We offer monthly packages based on goals—lead gen, branding, or full funnel management."
    },
    {
      q: "Can I track campaign performance?",
      a: "Of course. We provide detailed reports with leads, ad performance, traffic, and conversions."
    }
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
    <div className='d-flex justify-content-center flex-column w-100'>

      {/* Top Banner and heading Section  */}

      <div className='realestate-topBanner'>
        <div className='row d-flex flex-lg-row flex-column-reverse'>

          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <h1 data-aos="fade-up" data-aos-delay="100" className='text-center  realestate-heading'>Next Level  <span style={{
              color: "#fec436"
            }}>Real Estate
            </span> Success with <span style={{
              color: "#fec436"
            }}>Digital Marketing </span> </h1>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img id='realestateImg' loading='eager' src={realestatetopBanner} alt='tobanner' />
          </div>
        </div>
      </div>

      {/* What is Real Estate Digital Marketing  */}

      <div data-aos="fade-up" data-aos-delay="300" className="service-content LogoVisual">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={whatisrealestate} alt="hospital digital marketing" className="img-fluid topBottom" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-para mt-3">
                <div className="health-why-novatales text-center text-lg-start">
                  <h3 >What is <span>Real Estate Digital Marketing?</span></h3>
                </div>
                <p className='healthcareTopPara'>Real Estate Digital Marketing is the use of online strategies to promote, advertise, and sell properties through digital platforms like Google, social media, websites, and email. </p>
                <p className='healthcareTopPara'> It replaces traditional methods (like newspapers and flyers) with more powerful tools — like SEO, paid ads, and content marketing — to attract potential buyers and renters where they spend most of their time: online.</p>
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
          Why Real Estate Needs <span style={{
            color: "#fec436"
          }}>
            Digital Marketing ? </span>
        </h2>
        <div className='row whyneedRealestate' >
          <div className='col-md-4'>
            <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
              backgroundColor: "#f7f7f7",
              margin: "4px",

              borderRadius: "10px",
            }}>
              <div>
                <img src={online_realestate} alt='' />
              </div>
              <div className='ps-3 d-flex justify-content-center align-items-center'>
                <p className='text-left' id='whyNeedRealP'>
                  90%+ of buyers search online before contacting an agent.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
              backgroundColor: "#f7f7f7",
              margin: "4px",
              borderRadius: "10px",
            }}>
              <div>
                <img src={social} alt='' />
              </div>
              <div className='ps-3 d-flex justify-content-center align-items-center'>
                <p className='text-left' id='whyNeedRealP'>
                  Social media drives direct property inquiries and brand trust.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
              backgroundColor: "#f7f7f7",
              margin: "4px",

              borderRadius: "10px",
            }}>
              <div>
                <img src={gads} alt='' />
              </div>
              <div className='ps-3 d-flex justify-content-center align-items-center'>
                <p className='text-left' id='whyNeedRealP'>
                  Google Search & Ads bring local buyers to your listings.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className='row whyneedRealestate2 ' >
          <div className='col-md-4'>
            <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
              backgroundColor: "#f7f7f7",
              margin: "4px",

              borderRadius: "10px",
            }}>
              <div>
                <img src={analyst} alt='' />
              </div>
              <div className='ps-3 d-flex justify-content-center align-items-center'>
                <p className='text-left' id='whyNeedRealP'>
                  Data helps you track what’s working and scale faster.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className=' d-flex justify-content-center align-items-center whyNeedListCards' style={{
              backgroundColor: "#f7f7f7",
              margin: "4px",

              borderRadius: "10px",
            }}>
              <div>
                <img src={data} alt='' />
              </div>
              <div className='ps-3 d-flex justify-content-center align-items-center'>
                <p className='text-left' id='whyNeedRealP'>
                  Traditional marketing is slow—digital is instant and scalable.
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
            <Col lg={4} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
              <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                <img src={realestateservice_1} className="card-img-top" alt="Healthcare social media marketing" style={{
                  backgroundColor: "#FAFAFA"

                }} />
                <div className="card-body">
                  <h4 style={{
                    color: "#fec436"
                  }}>Real Estate SEO</h4>
                  <div className="bottom-underline"></div>
                  <p>Rank on top when buyers search for properties in your city or region.</p>
                  <p>We optimize your site to increase traffic and lead conversions.</p>
                </div>
              </div>
            </Col>
            <Col lg={4} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4 '>
              <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                <img src={realestateservice_2} style={{
                  backgroundColor: "#FAFAFA"
                }} className="card-img-top" alt="healthcare seo services" />
                <div className="card-body">
                  <h4 style={{
                    color: "#fec436"
                  }}>Google Ads (PPC)</h4>
                  <div className="bottom-underline"></div>
                  <p>Instant visibility for your listings and offers with location-targeted campaigns.</p>
                  <p>Our team targets the right keywords to boost your ROI fast.</p>
                </div>
              </div>
            </Col>
            <Col lg={4} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
              <div className="card draggable shadow-sm responsive-height-realestate border-0" style={{
              
              }} >
                <img src={realestateservice_6} className="card-img-top" alt="healthcare content marketing agency" style={{
                  backgroundColor: "#FAFAFA"
                }} />
                <div className="card-body">
                  <h4 style={{
                    color: "#fec436"
                  }}>Social Media Marketing</h4>
                  <div className="bottom-underline"></div>
                  <p>Build trust, show listings, and go viral with Instagram Reels, YouTube, and Facebook Ads.</p>
                  <p>We create content that builds trust and attracts real buyers.</p>
                </div>
              </div>
            </Col>
            <Col lg={4} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
              <div className="card draggable shadow-sm responsive-height-realestate border-0" >
                <img src={realestateservice_5} className="card-img-top" alt="Email Marketing for healthcare" style={{
                  backgroundColor: "#FAFAFA"
                }} />
                <div className="card-body">
                  <h4 style={{
                    color: "#fec436"
                  }}>Landing Pages</h4>
                  <div className="bottom-underline"></div>
                  <p>Custom-built pages designed to convert leads into booked appointments.</p>
                  <p>Each page is mobile-friendly, fast, and focused on action.</p>
                </div>
              </div>
            </Col>
            <Col lg={4} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
              <div className="card draggable shadow-sm responsive-height-realestate border-0" >
                <img src={realestateservice_7} className="card-img-top" alt="reviews for hospitals" style={{
                  backgroundColor: "#FAFAFA"
                }} />
                <div className="card-body">
                  <h4 style={{
                    color: "#fec436"
                  }}>Email Marketing</h4>
                  <div className="bottom-underline"></div>
                  <p>Engage your buyers and investors with timely updates and property launches.</p>
                  <p>We design emails that are simple, clean, and clickable.</p>
                </div>
              </div>
            </Col>
            <Col lg={4} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
              <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                <img src={realestateservice_4} style={{
                  backgroundColor: "#FAFAFA"
                }} className="card-img-top" alt="healthcare web development company" />
                <div className="card-body">
                  <h4 style={{
                    color: "#fec436"
                  }}>Video Marketing</h4>
                  <div className="bottom-underline"></div>
                  <p>Virtual tours, testimonials, and cinematic listings to hook buyers visually.</p>
                  <p>We help you stand out on YouTube and social media reels.</p>
                </div>
              </div>
            </Col>
            <Col lg={4} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
              <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                <img src={realestateservice_8} width="100%" style={{
                  backgroundColor: "#FAFAFA"
                }} className="card-img-top" alt="ppc healthcare" />
                <div className="card-body">
                  <h4 style={{
                    color: "#fec436"
                  }}>WhatsApp Marketing</h4>
                  <div className="bottom-underline"></div>
                  <p>Reach your audience with automated WhatsApp messages.</p>
                  <p>Send property updates, price lists, and instant replies.</p>
                </div>
              </div>
            </Col>
            <Col lg={4} xxl={3} md={6} sm={12} data-aos="fade-up" className='mb-4 xl-p-4'>
              <div class="card draggable shadow-sm responsive-height-realestate border-0" >
                <img src={realestateservice_3} style={{
                  backgroundColor: "#FAFAFA"
                }} className="card-img-top" alt="Video Marketing for healthcare" />
                <div className="card-body">
                  <h4 style={{
                    color: "#fec436"
                  }}>Lead Management</h4>
                  <div className="bottom-underline"></div>
                  <p>Track and manage all your leads in one smart system.</p>
                  <p>Follow up faster and close deals with ease and clarity.</p>
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
                <img src={icons_2} alt='icons' />
              </div>
              <h4>
                More Leads
              </h4>
              <p>
                Attract serious buyers and sellers through data-driven ads and landing pages.
              </p>
            </div>
          </div>
          <div className='col-lg-6' data-aos="fade-up">
            <div className='realEstatebenefitspoints'>
              <div>
                <img src={icons_5} alt='icons' />
              </div>
              <h4>
                Better Visibility
              </h4>
              <p>
                Show up everywhere—Google, Instagram, YouTube—with smart SEO + paid reach.
              </p>
            </div>
          </div>
          <div className='col-lg-6 mt-3 mb-3' data-aos="fade-up">
            <div className='realEstatebenefitspoints'>
              <div>
                <img src={icons_4} alt='icons' />
              </div>
              <h4>
                Faster Closings
              </h4>
              <p>
                Turn leads into deals quicker using automation, email flows, and follow-up tools.
              </p>
            </div>
          </div>
          <div className='col-lg-6 mt-3 mb-3' data-aos="fade-up">
            <div className='realEstatebenefitspoints'>
              <div>
                <img src={icons_1} alt='icons' />
              </div>
              <h4>
                Stronger Branding
              </h4>
              <p>
                Build a trusted brand with consistent visuals, messaging, and digital presence.
              </p>
            </div>
          </div>
          <div className='col-lg-6' data-aos="fade-up">
            <div className='realEstatebenefitspoints'>
              <div>
                <img src={icons_3} alt='icons' />
              </div>
              <h4>
                Higher ROI
              </h4>
              <p>
                Maximize every rupee you spend with smart targeting and performance tracking.
              </p>
            </div>
          </div>
          <div className='col-lg-6' data-aos="fade-up">
            <div className='realEstatebenefitspoints'>
              <div>
                <img src={icons_1} alt='icons' />
              </div>
              <h4>
                More Leads
              </h4>
              <p>
                Attract serious buyers and sellers through data-driven ads and landing pages.
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
                {faqs.slice(5, 10).map((item, index) => (
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
    </div>


  )
}

export default RealEstate
