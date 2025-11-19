import React, { useEffect, useState } from "react";
import linkedinIcon from "../../images/linkedin icon.png";
import twitterIcon from "../../images/twitter icon.png";
import smmIcon from "../../images/social m marketing icon N.png";
import youtubeAdsIcon from "../../images/youtube ads.png";
import smmImage from "../../images/SMM WEB IMAGE 2.png";
import smmLapImage from "../../images/SOCIAL MEDIA MARKETING 6.svg";
import smmTabImage from "../../images/social media marketing tab.svg";
import "../../css/servisesCss/smm.css";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceContactForm from "./ServiceContactForm";
import AllServices from "../AllServices";
import { Helmet, HelmetProvider } from "react-helmet-async";
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
    <HelmetProvider>
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Best Social Media Marketing Agency | NovaTales Media</title>
        <meta
          name="description"
          content="NovaTales is the best social media marketing agency specializes in Facebook and Instagram Ads, Smart Ads, Search Ads, Display Ads, YouTube Ads for maximum impact."
        />
        <meta
          name="keywords"
          content="best social media marketing agency, digital marketing and social media marketing,digital marketing for social media, smm marketing agency, social media marketing services,smm marketing,digital and social media marketing,social media advertising agencies."
        />
      </Helmet>
      <div className="smm">
        <div className="service-heading">
          <img
            src={smmLapImage}
            width="100%"
            alt="best social media marketing agency"
            className="lap"
          />
          <img
            src={smmTabImage}
            alt="best social media marketing agency"
            className="tab"
            width="100%"
          />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para">
                    <h1 className="mt-3 mb-3">Social Media Marketing</h1>
                    <p>
                      At NovaTales Media, we integrate creativity, strategy, and
                      analytics to develop social media campaigns that truly
                      connect. With the perfect balance of high-performing
                      content, active audience interaction, and continuous
                      performance tracking, we make sure every post, story, and
                      campaign delivers measurable results. Our goal is simple,
                      to grow your brand organically while nurturing a loyal
                      online community that genuinely connects with your brand’s
                      story.
                    </p>
                    <p>
                      We don’t believe in one-size-fits-all social media. Our
                      team dives deep into your brand identity, industry trends,
                      and audience behavior to develop content that captures
                      attention and drives conversions. From storytelling to
                      sales-driven campaigns, every piece of content is designed
                      for growth and engagement.
                    </p>
                    <p>
                      The strongest brands today thrive on a mix of organic
                      presence and paid strategy. Here’s how we help you stand
                      out across platforms:
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img
                      src={smmImage}
                      alt="digital marketing and social media marketing"
                      className="img-fluid topBottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-points">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 left-media"
                style={{ paddingRight: "70px" }}
              >
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img
                          src={linkedinIcon}
                          alt="LinkedIn icon representing LinkedIn advertising"
                          width="100%"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>LinkedIn</h4>
                        <p>
                          We create tailored ad campaigns to build awareness,
                          drive leads, or boost conversions, using a smart mix
                          of carousel ads, conversation ads, and event
                          promotions. Alongside, we build an authentic
                          professional following with thought leadership content
                          and strategic engagement.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img
                          src={twitterIcon}
                          alt="Twitter icon representing Twitter (X) advertising"
                          width="80%"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>Twitter (X)</h4>
                        <p>
                          We design scroll-stopping tweets, visuals, and ad
                          campaigns that spark conversations and encourage users
                          to engage, repost, and share. Our strategies are
                          designed to grow followers and amplify your brand’s
                          voice in real-time trends.
                        </p>
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
                        <img
                          src={smmIcon}
                          alt="Instagram and Facebook icons representing social media marketing"
                          width="100%"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>Instagram and Facebook </h4>
                        <p>
                          We handle everything from creative content and
                          storytelling reels to influencer collaborations and
                          paid ad campaigns. Our analytics-first approach helps
                          track metrics like reach, engagement, clicks, and
                          conversions, ensuring your social media spend delivers
                          maximum ROI.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img
                          src={youtubeAdsIcon}
                          alt="YouTube icon representing YouTube advertising"
                          width="100%"
                        />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4> YouTube </h4>
                        <p>
                          From short-form video ads to long-format storytelling,
                          we produce captivating content that drives views,
                          engagement, and subscriptions. Interactive sessions
                          like live Q&As and behind-the-scenes videos help your
                          brand connect authentically with its audience.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-text">
          <p>
            Whether you want to build brand awareness or increase sales,
            NovaTales Media will help in establishing a powerful social presence
            by creating real business impact.
          </p>
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
