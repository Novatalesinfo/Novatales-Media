import React from 'react';
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
export default function Analytics() {
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
                                        <p className="mt-3">Nova Tales Analytics and Business Insights services help organizations use data analysis to gain valuable insights about their business to make smart choices for long-term success. Our team has an extensive knowledge on various technologies to create a unique approach based on data to help customers.</p>
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
                                                <FontAwesomeIcon icon={faAnglesRight} size="lg" /> Twitter (X) Analytics Dashboard
                                            </li>
                                            <li>
                                                <FontAwesomeIcon icon={faAnglesRight} size="lg" /> LinkedIn Analytics
                                            </li>
                                        </ul>
                                        <p>These technologies let organizations find important data, discover new trends, and adapt to a changing market easily. We believe every piece of data has a story and are dedicated to help our clients get the most value from their data through careful planning, advanced analytics tools, and the latest technology in report generation.</p>
                                        <p>Nova Tales Analytics services help turn data into valuable insights for business growth and innovation. Whether you want to improve how things work, serve customers better, or find new ways to make money, we have the knowledge and tools to help. We customize our data analytics services to fit each client's needs, giving them useful information to move their organization in the right direction.</p>
                                        <p>From collecting and processing data to analyzing it, we cover every step to provide our clients with accurate and helpful information for important decisions. We stay up-to-date with the latest data analytics technology so we can offer the best consulting services as our clients' needs evolve. We also make use of tools like MailChimp, SemRush and Hootsuite Analytics to give our clients an edge in the market and increase productivity.</p>
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
                                        <p>Conversion Rate Optimization (CRO) is a strategy that focuses on improving the percentage of website visitors who take a desired action, such as making a purchase, filling out a form, or subscribing. At Nova Tales we conduct thorough analysis to understand user behavior on your business website. By identifying pages with high bounce rates or drop-offs in conversions, we pinpoint areas that need improvement. Analyzing user data helps in implementing targeted changes to enhance the overall user experience and increase the probability of conversion.</p>
                                        <p>Testing is a continuous process, allowing us to refine and optimize various elements on your website to achieve optimal conversion results. It involves creating multiple variations on a webpage such as call-to-action (CTA) button and presenting them in different segments of the website. By comparing the performance of these variations, we determine which design or content resonates best with the audience and ensure to drive higher conversion rates to your business.</p>
                                        <p>We create dynamic content strategies, product recommendations, and run ad campaigns with targeted marketing messages for more engaging and relevant experience for a user, which significantly impacts conversion rates and boosts your business.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AllServices />
                <ServiceContactForm />
            </div>
        </HelmetProvider>
    );
}
