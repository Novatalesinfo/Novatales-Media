import React, { useEffect, useState } from 'react'
import "../css/realestate.css"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import real_estate from "../images/portfolio/real_1.png"
import online_realestate from "../images/casestudies/NEXT GEN-01.png"
import social from "../images/casestudies/SEO 01-01.png"
import gads from "../images/casestudies/brand voice.png"
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
  // const realEstateServices = [
  //   {
  //     id: 1,
  //     title: "Social Media-Marketing",
  //     description: "Engage buyers and investors while promoting property listings online.",
  //     image: realestateservice_6,
  //   },
  //   {
  //     id: 2,
  //     title: "SEO and SEM",
  //     description: "Improve search visibility and reach buyers actively looking for properties.",
  //     image: realestateservice_1,
  //   },
  //   {
  //     id: 3,
  //     title: "Content-Marketing",
  //     description: "Share valuable property updates to capture buyer interest effectively.",
  //     image: realestateservice_8,
  //   },
  //   {
  //     id: 4,
  //     title: "Email-Marketing",
  //     description: "Send personalized messages to potential buyers and sellers consistently.",
  //     image: realestateservice_7,
  //   },
  //   {
  //     id: 5,
  //     title: "Reputation-Management",
  //     description: "Track reviews and maintain a strong, credible brand image.",
  //     image: realestateservice_3,
  //   },
  //   {
  //     id: 6,
  //     title: "Website-Development",
  //     description: "Design fast, user-friendly websites that highlight your properties.",
  //     image: realestateservice_5,
  //   },
  //   {
  //     id: 7,
  //     title: "Paid-Advertising (PPC)",
  //     description: "Reach the right buyers at the right time to boost ROI.",
  //     image: realestateservice_2,
  //   },
  //   {
  //     id: 8,
  //     title: "Video-Marketing",
  //     description: "Showcase properties and client experiences with engaging videos.",
  //     image: realestateservice_4,
  //   },
  // ];
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
                  <img src={gads} alt='advertising for real estate' className='w-16' style={{
                    width: "80px"
                  }} />
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


        {/* Services for real estate */}

        {/* <div className="health-Digital-Marketing">
          <Container>
            <div data-aos="fade-up" className="health-why-novatales">
              <h2 className='text-center' style={{
                textAlign: "center !important",
                marginBottom: "60px",
                color: "#52377b"
              }}>NovaTales Expert Digital Marketing Services for Real Estate</h2>
            </div>
          </Container>
          <div className='real-estate-serive-card-parent d-flex justify-content-center align-content-center w-100'>


            <Row className='real-estate-content'>
              {
                realEstateServices.map((item, index) => <Col key={index * item.id} className='realestate-card-wrapper mb-4' data-aos="fade-up">
                  <div className="realestate-service-card">
                    <div className="realestate-card-image-container">
                      <img src={item.image} className="realestate-card-image" alt="search engine optimization for real estate" />
                    </div>
                    <div className="realestate-card-content">
                      <h4 className="realestate-service-title" > {
                        item.title.split("-")[0]
                      }
                        <br />{
                          item.title.split("-")[1]
                        }</h4>
                      <div className="realestate-title-underline"></div>
                      <p className='realestate-card-description'>{item.description}</p>
                    </div>
                  </div>
                </Col>)
              }
            </Row>
          </div>
        </div> */}
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-lg-5 pt-lg-5 d-flex justify-content-center align-items-center flex-column">
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
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
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
              <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 mt-xl-5 pt-xl-5 d-flex justify-content-center align-items-center flex-column">
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


                {faqs.slice(0, 5).map((item, index) => (
                  <div className="accordion " key={index}>
                    <div
                      className={`accordion__item ${activeIndexLeft === index
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
                        <div className="accordion__content fw-normal">{item.a}</div>
                      )}
                    </div>
                  </div>
                ))}
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
