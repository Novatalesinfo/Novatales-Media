import React, { useEffect } from 'react';
import digitalMarketingIllustration from '../../images/digital marketing illustration.svg';
import digitalMarketingTab from '../../images/digital marketing tab.svg';
import digitalMarketingWebImage from '../../images/DIGITAL MARKETING WEB IMAGE.png';
import seoIcon from '../../images/SEO icon.png';
import emailMarketingIcon from '../../images/email marketing icon N.png';
import analyticsIcon from '../../images/analytics and business insights icon.png';
// import affiliateMarketingIcon from '../../images/affliated marketing icon N.png';
import socialMediaMarketingIcon from '../../images/social m marketing icon N.png';
import paidAdvertisingIcon from '../../images/paid advertising.png';
import '../../css/servisesCss/digital.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";

// import { Col, Container, Row } from 'react-bootstrap';
export default function DigitalMarketing() {


  //   const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  //   const [activeIndexRight, setActiveIndexRight] = useState(null);
  //   const toggleAccLeft = (index) => {
  //     setActiveIndexLeft(activeIndexLeft === index ? null : index);
  //   };
  //   const toggleAccRight = (index) => {
  //     setActiveIndexRight(activeIndexRight === index ? null : index);
  //   };

  //   const faq = [  {
  //   q: "What digital marketing services do you offer?",
  //   a: "We provide Branding, Web Design, Video Production, Podcasting, Paid Advertising, and Digital Campaigns, using AI insights and GEO-targeted strategies where relevant.",
  // },
  // {
  //   q: "How do you create a digital marketing strategy for a business?",
  //   a: "We analyze audience behavior, competitors, and business goals to design a tailored strategy for measurable results.",
  // },
  // {
  //   q: "How do you measure the success of a digital marketing campaign?",
  //   a: "Campaign performance is tracked using KPIs like website traffic, engagement, conversions, and ROI to optimize future campaigns.",
  // },
  // {
  //   q: "Can GEO-targeting improve campaign performance?",
  //   a: "Yes, location-based targeting ensures campaigns reach the right audiences, reducing wasted spend and improving conversions.",
  // },
  // {
  //   q: "How do you decide which platforms are best for a business?",
  //   a: "We evaluate audience presence, campaign objectives, and industry trends to select the most effective platforms.",
  // },
  // {
  //   q: "Can AI help improve my marketing campaigns?",
  //   a: "AI is applied selectively to analyze data, optimize targeting, and provide insights that enhance campaign performance.",
  // },
  // {
  //   q: "Do you offer services for both small businesses and large enterprises?",
  //   a: "Yes, our strategies scale effectively for startups and global companies, optimizing budgets and resources efficiently.",
  // },
  // {
  //   q: "How long does it take to see results from digital marketing?",
  //   a: "Paid campaigns can show quick traction, while SEO, GEO, and content strategies gradually build sustainable growth over a few months.",
  // },
  // {
  //   q: "How often do you update campaigns or strategies?",
  //   a: "Campaigns are monitored continuously, with updates made based on performance data and emerging trends.",
  // },
  // {
  //   q: "Can digital marketing improve customer retention?",
  //   a: "Yes, personalized campaigns, remarketing, and consistent engagement help strengthen customer loyalty over time.",
  // },

  //   ]
  useEffect(() => {
    // Initialize AOS library for animations
    AOS.init();
  }, []);

  // useEffect(() => {

  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Transform Your Online Reach| Best Digital Marketing Agency </title>
        <meta
          name="description"
          content="NovaTales is a full service digital marketing and branding agency offering SEO, PPC, SMM, Analytics, Google Ads, YouTube Ads, Instagram Ads, Facebook Ads."
        />
        <meta name="keywords"
          content="digital marketing agency, best digital marketing company, best digital marketing services, digital marketing company services,digital marketing company." />
      </Helmet>
      <div className='Digital'>
        <div className="service-heading">
          <img src={digitalMarketingIllustration} width="100%" alt="digital marketing agency" className="lap" />
          <img src={digitalMarketingTab} alt="digital marketing agency" className="tab" width="100%" />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para mt-3">
                    <h1>Digital marketing</h1>
                    <p className="mt-3">
                      Digital marketing enables brands to reach, engage, and convert customers through online platforms, smart analytics, and personalized communication. Today, every business, small, medium, or enterprise, needs digital marketing to stay competitive, attract customers, and scale faster.
                    </p>
                    <p>
                      It is one of the most cost-effective and measurable marketing methods. Every campaign can be optimized in real-time based on performance data, ensuring better ROI and smarter decisions.
                    </p>
                    <p>
                      At NovaTales, we build digital marketing strategies that combines Data, Creativity, Technology, GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) together helping your brand appear not only on Google, but also on AI-powered search, generative engines, and voice-based platforms like ChatGPT, Google Gemini, Bard, Siri & Alexa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={digitalMarketingWebImage} alt="digital marketing agency" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-points">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-6 left-media" style={{ paddingRight: '70px' }}>
                <Link to="/search-engine-optmization-marketing">
                  <div className="media">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="media-image mt-2">
                          <img src={seoIcon} alt="SEO icon" width="100%" />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="media-body">
                          <h4 className="point-head">Search Engine Optimization (SEO+AEO+GEO)</h4>
                          <p>
                            SEO increases your website’s visibility on search engines. But modern search has evolved, people ask questions, use voice queries, and depend on AI chatbots for answers.
                          </p>
                          <p>That’s why we optimize for:</p>
                          <ul>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Traditional SEO</span> : keywords, backlinks, and technical SEO</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>AEO</span> : Answer Engine Optimization for “People Also Ask”, voice search, and direct answers.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>GEO</span> : Generative Engine Optimization for AI search results, ChatGPT, and generative AI responses.</li>
                          </ul>
                          <p>
                            This makes your brand visible in Google Search, Google Voice, ChatGPT Search, Bard / Gemini, Bing Copilot, and AI-generated summaries & recommendations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/email-marketing">
                  <div className="media">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="media-image mt-2">
                          <img src={emailMarketingIcon} alt="Email marketing icon" width="100%" />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="media-body">
                          <h4 className="point-head">Email Marketing</h4>
                          <p>
                            Email marketing helps brands maintain long-term customer relationships.
                          </p>
                          <p>
                            We design automated and personalized email flows that:
                          </p>
                          <ul>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Increase repeat purchases </span> : It encourages customers to buy again by sending targeted reminders, personalized recommendations, and post-purchase follow-up messages.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Share offers & product launches </span> :  It offers a chance to introduce and announce the new products, create appealing newsletters, broadcast seasonal offers and exclusive discounts, which helps your audience engage.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Nurture leads with valuable content </span> :  It provides a platform to share educational resources, your brand stories, and how-to guides, helping to build trust among potential customers.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Reward loyal customers </span> : Personalized emails help you strengthen your long-term connections with your customers by notifying them of loyalty points, early access to offers, and sending thank-you emails after purchase.</li>
                          </ul>
                          <p>
                            From welcome series to festival campaigns, your brand stays connected
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/google-analytics-search-console">
                  <div className="media">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="media-image mt-2">
                          <img src={analyticsIcon} alt="Analytics and business insights icon" width="100%" />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="media-body">
                          <h4 className="point-head">Analytics and Business Insights</h4>
                          <p>
                            Data-driven marketing outperforms guesswork.
                          </p>
                          <p>
                            We track, measure, and analyze digital performance to help you make smarter decisions.
                          </p>
                          <ul>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Customer behavior tracking</span> : Tracking customer behavior by understanding how they interact with your brand, what they are clicking, how they are spending time, and what drives their purchasing decision. All this data helps understand customer behavior.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Campaign performance reports </span> : It provides accurate insights about the performance of the campaign, about what’s working and what’s not. With the data obtained, the strategies can be adjusted accordingly for better engagement and ROI.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Website analytics </span> : With website analytics, all the data about traffic, top-performing pages, and user experience can be obtained, which helps to improve the conversion rates.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>ROI measurement </span> : Every penny spent in marketing is measured against the business results. The ROI helps your business to spend wisely and grow efficiently.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Growth recommendations </span> : The data-driven insights play a significant role in enhancing the performance of your brand through actionable steps for your business growth.</li>
                          </ul>
                          <p>
                            These insights help optimize spending and increase conversions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                {/* <Link to="#">
                  <div className="media">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="media-image mt-2">
                          <img src={affiliateMarketingIcon} alt="Affiliate marketing icon" width="100%" />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="media-body">
                          <h4 className="point-head">Affiliate Marketing</h4>
                          <p>
                            Boost your product sales through Nova Tales’ affiliate marketing services. We have a wide network of key publishers, advertisers and influencers that enable us to connect you with the right marketer and maximize returns. Our services include Display ads, video ads, blogs, social media posts, etc.
                          </p>
                          <ul>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> Instagram Marketing</li>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> Facebook Marketing</li>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> Twitter Marketing</li>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> LinkedIn Marketing</li>
                            <li><FontAwesomeIcon icon={faAnglesRight} /> YouTube Marketing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link> */}
              </div>
              <div className="col-lg-6 side-points">
                <Link to="/social-media-marketing">
                  <div className="media">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="media-image mt-2">
                          <img src={socialMediaMarketingIcon} alt="Social media marketing icon" width="100%" />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="media-body">
                          <h4 className="point-head">Social Media Marketing</h4>
                          <p>
                            4.95 billion people are active on social media. Their buying decisions are influenced by reels, ads, reviews & brand stories.
                          </p>
                          <p>
                            We create brand-focused digital content across Instagram, Facebook, LinkedIn, YouTube, and Twitter (X).
                          </p>
                          <p>
                            Our SMM services include :
                          </p>
                          <ul>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Creative posts & reels</span> : We create visually appealing and engaging content that captures attention by encouraging them to interact and increasing the brand identity.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /><span className='fw-bold'> Paid social ads </span> : We run highly targeted campaigns that are intended to reach your potential audience, which helps boost the visibility and generate measurable results.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /><span className='fw-bold'> Influencer collaborations </span> : Collaborating with authentic creators who resonate with your brand's ideas closely will help expand your visibility, credibility, and reach among wide audiences .</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Comments & community engagement</span> : Actively engaging and interacting with your audiences and followers online helps to build positive relationships by replying to their comments or actively handling their queries, boosting the loyalty around your brand.</li>
                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold'>Brand storytelling</span> : Creating an emotional connection with your audience through consistently sharing relatable and emotional stories about the brand helps to strengthen the brand’s connection with your audience.</li>
                          </ul>
                          <p>
                            Turn followers into customers and customers into brand fans.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/ppc-advertising">
                  <div className="media">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="media-image mt-2">
                          <img src={paidAdvertisingIcon} alt="paid advertsing icon" width="100%" />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="media-body">
                          <h4 className="point-head">Paid Advertising (PPC + Social Ads)</h4>
                          <p>
                            Paid ads help your business reach customers instantly. We manage platforms like Google Ads (search, display, and YouTube), Meta Ads (Facebook and Instagram), LinkedIn Ads, and E-commerce Ads.
                          </p>
                          <p>
                            With advanced targeting, retargeting, conversion tracking, and budget control, you get measurable, fast results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
