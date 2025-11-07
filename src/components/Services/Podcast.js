import React, { useEffect, useState } from 'react';
import podcastPlanningProduction6 from '../../images/podcast planning & production6.svg';
import podcastPlanningProductionTab from '../../images/podcast planning & production tab.svg';
import podcastM from '../../images/PODCAST M.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Helmet, HelmetProvider } from 'react-helmet-async';
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from 'react-bootstrap';
export default function Podcast() {
    const [activeIndexLeft, setActiveIndexLeft] = useState(null);
    const [activeIndexRight, setActiveIndexRight] = useState(null);
    const toggleAccLeft = (index) => {
      setActiveIndexLeft(activeIndexLeft === index ? null : index);
    };
    const toggleAccRight = (index) => {
      setActiveIndexRight(activeIndexRight === index ? null : index);
    };
  
    const faq = [ {
    q: "What steps does Novatales take while planning a podcast?",
    a: "We begin with in-depth topic research, followed by concept development, audience research, episode formatting, guest selection, and finally, strategic marketing to ensure reach and impact.",
  },
  {
    q: "Can NovaTales help me with selecting the podcast topics and content ideas?",
    a: "Yes. Our creative team brainstorms trending and relevant topics, prepares episode outlines, and crafts a content strategy tailored to your brand goals.",
  },
  {
    q: "How do you promote podcasts post-launch?",
    a: "We promote each podcast across major platforms like Spotify, YouTube, Instagram, and through email marketing and strategic collaborations for maximum visibility.",
  },
 
  {
    q: "How efficiently do you handle audio editing and the post-production process?",
    a: "At NovaTales, our qualified team handles complete post-production — cleaning audio, removing noise, adding intros/outros with licensed music, and ensuring professional sound quality.",
  },
  {
    q: "Will you ensure consistent audio quality across every episode?",
    a: "Yes, of course. We use standardized setups, professional-grade editing, and strict quality checks to maintain consistent audio across all episodes.",
  },
  
   {
    q: "Does NovaTales provide an option of studio recording or remote recording?",
    a: "Yes, we offer both. We have our own professional studio setup with high-end recording equipment, and we also support remote recording with premium audio quality.",
  },
  {
    q: "How is podcast analytics handled?",
    a: "We provide detailed analytics reports including downloads, listener demographics, engagement trends, and growth tracking for data-driven insights.",
  },
  {
    q: "Why choose NovaTales for podcast planning and production?",
    a: "At NovaTales, we blend creative storytelling, technical expertise, professional equipment, and growth-driven marketing strategies to ensure your podcast’s success.",
  },
    ]
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  // Scroll to top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Podcasting in Digital Marketing: Power Up Your Strategy</title>
        <meta
          name="description"
          content="At Novatales launch your podcast with our expert planning, production, and editing services transforming your ideas into high-quality audio and video content."
        />
             <meta name="keywords"
        content="Podcasting in Digital Marketing, Podcast Editing Services, Best Podcast Platform, Podcast Hosting Services, Video Podcast Editing Services."/>
      </Helmet>
      <div className='podcast'>
        <div className="service-heading">
          <img src={podcastPlanningProduction6} width="100%" alt="Podcasting in Digital Marketing" className="lap" />
          <img src={podcastPlanningProductionTab} alt="Podcasting in Digital Marketing" className="tab" width="100%" />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para mt-3">
                    <h1>Podcast Planning & Production</h1>
                    <p className="mt-3">
                      Podcast is a digital medium consisting of audio and/or video elements. The NovaTales Podcast Production Agency is a team of highly skilled individuals with expertise in the entire lifecycle from developing content strategies to publishing at the right platforms to help you establish a long-term and dedicated audience. We use creativity and smart technology to produce engaging content, find the right distribution channels and enhance the discovery of your podcast.
                    </p>
                    <p>
                      Our post production services are exceptional with expertise in recording, editing, sound design graphic design and publishing. We provide advanced services through our exclusive green mat studio and Chroma key technology.We even provide promotion and marketing services for your podcast through the creation of teasers and trailers. Our services are designed to meet all your needs to create an engaging and professional podcast.
                    </p>
                  </div>
                </div>
                <div className="service-points">
                  <div className="container">
                    <div className=" left-media">
                      <div className="media">
                        <div className="media-body">
                          <h4>Audio Podcast or Video Podcast - Which one to choose?</h4>
                          <p>
                            We help you make the right decision based on a series of factors including the nature of the content, preference of your target audience, resources, financial constraints, and the chances for monetization. Although audio podcasts are more accessible to a wide variety of users, a lot of information and potential user base will be hard to reach without the use of visual elements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={podcastM} alt="Podcast Editing Services" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  );
}
