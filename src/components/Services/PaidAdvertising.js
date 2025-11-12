import React, { useEffect, useState } from 'react';
import paidAdvertisingLap from '../../images/PAID ADVERSTISING 6.svg';
import paidAdvertisingTab from '../../images/paid advertising tab.svg';
import paidAdvertisingM from '../../images/PAID ADVERTISING M.png';
import googleAdsIcon from '../../images/Google ads icon N.png';
import youtubeAdsIcon from '../../images/youtube ads.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Col, Container, Row } from 'react-bootstrap';
export default function PaidAdvertising() {

  // const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  // const [activeIndexRight, setActiveIndexRight] = useState(null);
  // const toggleAccLeft = (index) => {
  //   setActiveIndexLeft(activeIndexLeft === index ? null : index);
  // };
  // const toggleAccRight = (index) => {
  //   setActiveIndexRight(activeIndexRight === index ? null : index);
  // };

  // const faq = [
  //    {
  //   q: "Do you handle both ad creative design and copywriting?",
  //   a: "Yes. We provide full end-to-end ad services including creative design, copywriting, and platform optimization tailored for your audience.",
  // },
  // {
  //   q: "What if my competitors are aggressively advertising too?",
  //   a: "Our team identifies unique positioning angles and optimizes bidding strategies to outperform competitors without overspending.",
  // },
  //   {
  //   q: "Do paid advertisements guarantee immediate sales?",
  //   a: "No. Paid ads quickly boost visibility, but converting visitors into buyers depends on multiple factors such as audience targeting, landing page quality, and product relevance.",
  // },
  // {
  //   q: "How is success measured for paid ad campaigns?",
  //   a: "Our team tracks conversions, cost-per-acquisition, click-through rates, and ROI — all aligned with your specific business objectives.",
  // },
 
  // {
  //   q: "I have a small business. Will I benefit from paid advertising?",
  //   a: "Absolutely yes. We create targeted campaigns and manage budgets efficiently to drive meaningful growth for small and mid-sized businesses.",
  // },
  // {
  //   q: "Why should one choose NovaTales for paid advertising over other agencies?",
  //   a: "At NovaTales, we combine deep industry expertise with data-driven optimization and transparent reporting focused entirely on your brand’s growth.",
  // },
  // {
  //   q: "How often do you optimize ads?",
  //   a: "We perform daily performance monitoring and make weekly optimizations in bids, targeting, and creatives to maximize results.",
  // },
  // ]
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>PPC Ad Agency | Maximize ROI with Expert Ad Strategies</title>
        <meta
          name="description"
          content="Maximize your reach with our PPC advertising services. Our expert digital marketing team creates targeted campaigns, boost conversions and enhance your ROI."
        />
        <meta name="keywords"
          content="ppc ad agency, ppc advertising services, ppc advertising in digital marketing, youtube marketing agency, instagram marketing agency, facebook ad agency,google ppc campaigns,facebook and google ads agency." />
      </Helmet>
      <div className="service-heading">
        <img src={paidAdvertisingLap} width="100%" alt="ppc advertising services" className="lap" />
        <img src={paidAdvertisingTab} alt="ppc advertising services" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para">
                  <h1>Paid Advertising</h1>
                  <p>Pay-Per-Click Advertising (PPC) is a way to quickly drive traffic to your website through online paid ads. At Nova Tales we have experts who manage PPC campaigns based on specific budgets, timeframes, and target areas for your business. Our Search Engine Marketing experts cover all aspects of PPC Campaign Guidelines, delivering detailed reports on each campaign's performance. We analyze these reports to suggest strategies for a great return on your investments.</p>
                  <p>Using Google Pay Per Click (PPC) advertising can put your website at the top of search engine results pages when searched for specific keywords. We excel in services like Keyword research, setting up campaigns, managing high Click-Through Rates (CTR), and creating attractive landing pages. We adhere to search engine policies and algorithms, making our PPC Services beneficial for displaying your ads at the top of search results and generating more business lead at a low cost per click (CPC).</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={paidAdvertisingM} alt="ppc advertising in digital marketing" className="img-fluid topBottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-points">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 left-media">
              <div className="media">
                <div className="row mt-5">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="media-image">
                      <img src={googleAdsIcon} alt="Google Ads icon" width="100%" />
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="media-body">
                      <h4>Google Ads</h4>
                      <p>Grow your brand with ads across Google’s platforms such as the most powerful search engine, Google Search, the world’s largest video sharing website, YouTube and the most used tool to look up local businesses, Google Maps. Our Ad campaigns are designed to deliver quick and effective results to the task at hand.</p>
                      <p>Ads could be used to market your product or service when someone is actively searching for it, drive highly relevant traffic to your website, generate sales and enquires, boost your brand awareness and consideration, or increase calls and visits to your local store. We tailor your campaign by choosing a combination of various types of Google Ad formats including Google Search Ads, Display Ads, Video Ads, Discovery Ads, Local Ads, Performance Max Ads, Smart Ads and Shopping Ads.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="media">
                <div className="row mt-5">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="media-image">
                      <img src={googleAdsIcon} alt="Facebook, Instagram and Twitter Marketing icon" width="100%" />
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="media-body">
                      <h4>Facebook, Instagram and Twitter Marketing</h4>
                      <p>Facebook, Instagram and Twitter (X) are the most prominent online marketing platforms that expand your brand recognition and increase conversions and leads exponentially. We identify your target audience and ensure that your brand visibility multiplies considerably with smart ad investments as well as organic growth on various social media platforms.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="row mt-5">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="media-image">
                      <img src={youtubeAdsIcon} alt="YouTube Ads icon" width="100%" />
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="media-body">
                      <h4>YouTube Ads</h4>
                      <p>We create visually appealing content that encourage clicks such as skippable ads and non-skippable ads, host live Q&A sessions and other interactive content to encourage viewers to like, share and subscribe.</p>
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
    </HelmetProvider>
  );
}