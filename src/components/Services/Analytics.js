import React, { useState } from 'react';
import analyticsImage from '../../images/ANALYTICS & BUSINESS INSIGHTS 6.svg';
import tabImage from '../../images/analytics & business insights tab.svg';
import analyticsMImage from '../../images/Analytics & Business Insights M.png';
import croMImage from '../../images/Conversion Rate Optimization M.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import '../../css/servisesCss/analytics.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";

// import { Col, Container, Row } from 'react-bootstrap';
export default function Analytics() {

    // const [activeIndexLeft, setActiveIndexLeft] = useState(null);
    // const [activeIndexRight, setActiveIndexRight] = useState(null);
    // const toggleAccLeft = (index) => {
    //     setActiveIndexLeft(activeIndexLeft === index ? null : index);
    // };
    // const toggleAccRight = (index) => {
    //     setActiveIndexRight(activeIndexRight === index ? null : index);
    // };

//     const faq = [{
//         q: "What exactly is business analytics, and how does it help my company?",
//         a: "Business analytics is our specialized service that uses data to identify trends and guide smarter decisions, boosting efficiency and driving growth for your company.",
//     },
//      {
//         q: "Is it possible to identify hidden customer opportunities using analytics?",
//         a: "Yes, our team performs advanced segmentation and data mining to uncover untapped niches and potential marketing opportunities.",
//     },
//     {
//         q: "What kind of data do you analyze for my business?",
//         a: "At NovaTales, we focus on sales analysis, customer behavior, website traffic, operational metrics, and market trends that align with your business goals.",
//     },
//      {
//         q: "How often will Novatales update and revise the analytics reports?",
//         a: "We provide analytics updates and revisions monthly, quarterly, or as needed — depending on your chosen plan and real-time performance alerts.",
//     },
    
//     {
//         q: "Do you integrate analytics with our existing business systems?",
//         a: "Yes, we ensure seamless integration with CRMs, ERPs, and marketing tools to create a unified data ecosystem for your business.",
//     },
//     {
//         q: "Will my data remain secure and compliant with privacy laws?",
//         a: "Absolutely. We strictly follow data protection best practices and comply with GDPR, HIPAA, and other standard privacy regulations.",
//     },
//    {
//         q: "How is Novatales’ analytic report different?",
//         a: "We don’t just deliver raw data — we provide predictive insights and actionable recommendations that directly support your business objectives.",
//     },
   
//     ]
    return (
        <HelmetProvider >
            {/* Set the HTML head metadata */}
            <Helmet>
                <title>NovaTales Google Data Analytics | Insights and Solutions</title>
                <meta
                    name="description"
                    content="Optimize your Business with our Google Search Console and data analytics.Track performance, gain insights and enhance your strategies for better online results."
                />
                <meta name="keywords"
                    content="google data analytics, google search console analytics, google analytics in digital marketing, google analytics and search console, google analytics for website." />
            </Helmet>
            <div className='analytics'>
                <div className="service-heading">
                    <img src={analyticsImage} width="100%" alt="google data analytics" className="lap" />
                    <img src={tabImage} alt="google data analytics" className="tab" width="100%" />
                </div>
                <div className="service-content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="service-para mt-3">
                                        <h1 className="content-main-heading mb-3">Analytics & Business Insights</h1>
                                        <p className="mt-3">At NovaTales Media, our Analytics and Business Insights services empower organizations to make smarter, data-backed decisions for long-term growth. We transform raw data into actionable intelligence, helping brands uncover trends, measure performance, and identify new opportunities in an ever-changing digital landscape.</p>
                                        <p>Our team combines deep analytical expertise with the latest technologies to create custom data-driven strategies for each client. Using advanced tools like:</p>
                                        <ul>
                                            <li>
                                                <FontAwesomeIcon icon={faAnglesRight} size="lg" /> Google Analytics
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAnglesRight} size="lg" /> Google Search Console
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAnglesRight} size="lg" /> Instagram Insights
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAnglesRight} size="lg" /> Facebook Insights
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAnglesRight} size="lg" /> Twitter (X) Analytics
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAnglesRight} size="lg" /> LinkedIn Analytics
                                            </li>
                                        </ul>
                                        <p>We help businesses interpret data effectively, adapt quickly, and stay ahead of competitors. At NovaTales, we believe every number tells a story, and our mission is to decode it for growth and innovation. Through precise tracking, advanced analytics, and intuitive reporting, we help clients make informed, confident business decisions.</p>
                                        <p>Whether your goal is to enhance performance, improve customer engagement, or uncover new revenue opportunities, our analytics framework provides clear direction. From data collection and visualization to real-time reporting, we ensure accuracy, insight, and impact at every step.</p>
                                        <p>We also integrate tools like Mailchimp, SEMrush, and Hootsuite Analytics to offer a 360° performance view, giving your business a competitive edge and greater marketing efficiency.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <div className="service-image">
                                    <div className="info-img position-relative">
                                        <img src={analyticsMImage} alt="google analytics in digital marketing" className="img-fluid topBottom" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="service-points">
                    <div className="container">
                        <div className="row reverse">
                            <div className="col-lg-6">
                                <div className="service-image ">
                                    <div className="info-img position-relative">
                                        <img src={croMImage} alt="google analytics and search console" className="img-fluid1 topBottom" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="media">
                                    <div className="media-body">
                                        <h4>CONVERSION RATE OPTIMIZATION</h4>
                                        <p>Conversion Rate Optimization (CRO) focuses on maximizing the number of website visitors who take meaningful action, whether it’s making a purchase, signing up, or submitting an inquiry. At NovaTales Media, we use deep behavioral analysis and user experience insights to transform website traffic into measurable conversions.</p>
                                        <p>Our team identifies drop-off points, high-exit pages, and engagement gaps to understand where users lose interest. Using heatmaps, analytics data, and A/B testing, we fine-tune every touchpoint, from headlines and visuals to Call-to-Action (CTA) buttons, to ensure your audience moves seamlessly through the conversion funnel.</p>
                                        <p>Optimization is an ongoing process. We continuously test variations, measure outcomes, and adapt strategies to deliver higher conversion rates. This data-driven approach allows us to refine content, layout, and messaging based on what truly resonates with your audience.</p>
                                        <p>From personalized content strategies and product recommendations to targeted ad campaigns, we craft experiences that are both relevant and persuasive, turning visitors into loyal customers and driving tangible business growth.</p>
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
