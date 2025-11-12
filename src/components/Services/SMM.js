import React, { useEffect, useState } from 'react';
import linkedinIcon from '../../images/linkedin icon.png';
import twitterIcon from '../../images/twitter icon.png';
import smmIcon from '../../images/social m marketing icon N.png';
import youtubeAdsIcon from '../../images/youtube ads.png';
import smmImage from '../../images/SMM WEB IMAGE 2.png';
import smmLapImage from '../../images/SOCIAL MEDIA MARKETING 6.svg';
import smmTabImage from '../../images/social media marketing tab.svg';
import '../../css/servisesCss/smm.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Col, Container, Row } from 'react-bootstrap';
export default function SMM() {


  // const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  // const [activeIndexRight, setActiveIndexRight] = useState(null);
  // const toggleAccLeft = (index) => {
  //   setActiveIndexLeft(activeIndexLeft === index ? null : index);
  // };
  // const toggleAccRight = (index) => {
  //   setActiveIndexRight(activeIndexRight === index ? null : index);
  // };

  // const faq = [
  //   {
  //     q: "Can you handle negative comments on our social handles?",
  //     a: "Yes. We proactively monitor and provide professional responses to protect your brand’s reputation and de-escalate issues effectively.",
  //   },
  //   {
  //     q: "How do you decide the ideal platforms for my brand?",
  //     a: "The right platforms for your brand are determined by analyzing where your audience spends most of their time. At NovaTales, our specialized team studies audience behavior and focuses your presence on those platforms.",
  //   },

  //   {
  //     q: "How do you stay on top of algorithm changes?",
  //     a: "Our SMM team stays updated with platform trends and algorithm updates, allowing us to adapt strategies quickly and keep your brand performing at its best.",
  //   },
  //   {
  //     q: "I want fresh and engaging content every month for my brand.",
  //     a: "We create research-based content calendars using trending formats and audience insights to maintain engagement and keep your content fresh every month.",
  //   },
  //   {
  //     q: "Is it possible to track sales or ROI from social media?",
  //     a: "Yes, our team tracks and records every lead and purchase generated through campaigns so you can see real business results from your social presence.",
  //   },
  //   {
  //     q: "How is our brand voice kept consistent everywhere?",
  //     a: "We follow comprehensive brand guidelines and approval workflows to ensure every post matches your tone and maintains consistency across all platforms.",
  //   },
  // ]
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
        <title>Best Social Media Marketing Agency | NovaTales Media</title>
        <meta
          name="description"
          content="NovaTales is the best social media marketing agency specializes in Facebook and Instagram Ads, Smart Ads, Search Ads, Display Ads, YouTube Ads for maximum impact."
        />
        <meta name="keywords"
          content="best social media marketing agency, digital marketing and social media marketing,digital marketing for social media, smm marketing agency, social media marketing services,smm marketing,digital and social media marketing,social media advertising agencies." />
      </Helmet>
      <div className='smm'>
        <div className="service-heading">
          <img src={smmLapImage} width="100%" alt="best social media marketing agency" className="lap" />
          <img src={smmTabImage} alt="best social media marketing agency" className="tab" width="100%" />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para">
                    <h1 className='mt-3 mb-3'>Social Media Marketing</h1>
                    <p>Here at Nova Tales, we have unlocked the art & science behind creating the perfect social media campaign. With the right mixture of creativity, engaging and relevant content, right amount of interaction with the audience, and regular monitoring of analytics to track key metrics, we will ensure that all your time and monetary efforts have the desired reach and exceptional conversion rates that your brand deserves. Our consistent and targeted efforts ensure that your brand not only expands organically but continues to enjoy loyal followers that will look forward to your every move on social media.</p>
                    <p>We help you create the perfect content for social media engagement by deep diving into your brand, the industry and your potential customers and create tailored content that ensures conversions, sales and exponential growth. </p>
                    <p>The most successful businesses must have a combination of organic and paid strategies. Some of Social media content we plan, create, drive, track and push include:</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={smmImage} alt="digital marketing and social media marketing" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-points">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 left-media" style={{ paddingRight: '70px' }}>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img src={linkedinIcon} alt="LinkedIn icon representing LinkedIn advertising" width="100%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>LinkedIn</h4>
                        <p>Ad campaigns tailored to your specific needs whether it is to create brand awareness, drive consideration, or conversion using a mix of carousel ads, conversation or message ads, ads for events, followers, jobs, etc. Additionally, strategies to organically build following through rich content.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img src={twitterIcon} alt="Twitter icon representing Twitter (X) advertising" width="80%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>Twitter (X)</h4>
                        <p>Strategies to increase your Twitter (X) following using content that makes users want to like, repost and reply. Furthermore, we create the perfect ad campaign using image, video and carousel ads.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 side-points">
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img src={smmIcon} alt="Instagram and Facebook icons representing social media marketing" width="100%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>Instagram and Facebook </h4>
                        <p>We drive content creation and publishing, organic growth through engagement posts, stories, videos along with paid activities such as sponsored content, influencer marketing and paid ads. Analytics to monitor performance and track metrics such as reach, engagement, clicks, and conversions. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img src={youtubeAdsIcon} alt="YouTube icon representing YouTube advertising" width="100%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4> YouTube </h4>
                        <p> We create visually appealing content that encourages clicks such as skippable ads and non-skippable ads, host live Q&A sessions and other interactive content to encourage viewers to like, share and subscribe.</p>
                      </div>
                    </div>
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
