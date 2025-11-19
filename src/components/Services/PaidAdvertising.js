import React, { useEffect, useState } from "react";
import paidAdvertisingLap from "../../images/PAID ADVERSTISING 6.svg";
import paidAdvertisingTab from "../../images/paid advertising tab.svg";
import paidAdvertisingM from "../../images/PAID ADVERTISING M.png";
import googleAdsIcon from "../../images/Google ads icon N.png";
import youtubeAdsIcon from "../../images/youtube ads.png";
import AOS from "aos";
import "aos/dist/aos.css";
import ServiceContactForm from "./ServiceContactForm";
import AllServices from "../AllServices";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
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
    <HelmetProvider>
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>PPC Ad Agency | Maximize ROI with Expert Ad Strategies</title>
        <meta
          name="description"
          content="Maximize your reach with our PPC advertising services. Our expert digital marketing team creates targeted campaigns, boost conversions and enhance your ROI."
        />
        <meta
          name="keywords"
          content="ppc ad agency, ppc advertising services, ppc advertising in digital marketing, youtube marketing agency, instagram marketing agency, facebook ad agency,google ppc campaigns,facebook and google ads agency."
        />
      </Helmet>
      <div className="service-heading">
        <img
          src={paidAdvertisingLap}
          width="100%"
          alt="ppc advertising services"
          className="lap"
        />
        <img
          src={paidAdvertisingTab}
          alt="ppc advertising services"
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
                  <h1>Paid Advertising</h1>
                  <p>
                    Pay-Per-Click Advertising (PPC) is one of the fastest and
                    most effective ways to drive targeted traffic to your
                    website. At NovaTales Media, our PPC specialists design,
                    launch, and manage ad campaigns that align with your goals,
                    optimizing every rupee of your budget for maximum ROI. We
                    handle everything from keyword strategy and ad creation to
                    audience targeting and analytics tracking, ensuring your
                    brand stays visible where it matters most.
                  </p>
                  <p>
                    With Google Pay-Per-Click (PPC) campaigns, your website
                    appears at the top of search results for relevant keywords,
                    instantly connecting you with potential customers. Our
                    expertise spans keyword research, campaign setup, ad copy
                    optimization, high CTR management, and landing page design.
                    By following Google’s ad policies and algorithm updates, we
                    make sure your campaigns achieve high-quality leads at the
                    lowest possible cost per click (CPC).
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img
                    src={paidAdvertisingM}
                    alt="ppc advertising in digital marketing"
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
          <div className="points-main-heading">
            <h2>Why NovaTales Media is the best for your Paid Advertising?</h2>
            <p>
              At NovaTales Media, we not only create ads, but we also add
              emotions with our creative storytelling and data-driven targeting
              strategies that aim for higher conversion. We make sure that every
              penny spent brings real growth to your business.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 left-media">
              <div className="media">
                <div className="row mt-5">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="media-image">
                      <img
                        src={googleAdsIcon}
                        alt="Google Ads icon"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="media-body">
                      <h4>Google Ads</h4>
                      <p>
                        Grow your brand’s reach across Google’s powerful
                        platforms, from Search and YouTube to Maps and the
                        Display Network. Our data-driven ad campaigns are
                        designed to deliver quick and impactful results, whether
                        your goal is lead generation, sales, website traffic, or
                        brand awareness.
                      </p>
                      <p>
                        We create tailored strategies that combine the most
                        effective ad formats, including:
                      </p>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faAnglesRight} size="lg" />
                           Search Ads
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAnglesRight} size="lg" />
                           Display Ads
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAnglesRight} size="lg" />{" "}
                          Video Ads
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAnglesRight} size="lg" />{" "}
                           Discovery Ads
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAnglesRight} size="lg" />
                           Local Ads
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAnglesRight} size="lg" />
                           Performance Max Ads
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faAnglesRight} size="lg" />
                          Shopping Ads
                        </li>
                      </ul>
                      <p>Each campaign is built to engage your audience at the right time, on the right platform, driving measurable outcomes and sustainable growth.</p>
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
                      <img
                        src={googleAdsIcon}
                        alt="Facebook, Instagram and Twitter Marketing icon"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="media-body">
                      <h4>Facebook, Instagram & Twitter (X) Ads</h4>
                      <p>
                        Social media advertising is where creativity meets conversion. We help your brand stand out on Facebook, Instagram, and Twitter (X) with impactful visuals, compelling ad copy, and precise audience targeting.
                      </p>
                      <p>Our team identifies and segments your ideal audience based on demographics, interests, and behavior, ensuring every campaign delivers visibility, engagement, and tangible results. With a balanced mix of paid promotion and organic growth strategies, we help you amplify reach, build loyal communities, and convert followers into customers.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="media">
                <div className="row mt-5">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="media-image">
                      <img
                        src={youtubeAdsIcon}
                        alt="YouTube Ads icon"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="media-body">
                      <h4>YouTube Ads</h4>
                      <p>
                       As video consumption continues to rise, YouTube Ads offer unmatched visibility and engagement. We create visually compelling video content, from skippable and non-skippable ads to interactive formats, that captivates viewers and drives action.
                      </p>
                      <p>
                      Our YouTube strategies go beyond just views; we focus on engagement, brand recall, and conversion. Through live Q&A sessions, product explainers, and storytelling-driven videos, we help your brand connect authentically with audiences and inspire them to like, share, and subscribe.
                      </p>
                      <p>
                      Our team at NovaTales continuously monitors, refines, and optimizes every campaign to create maximum impact and ROI. 
                      </p>
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
