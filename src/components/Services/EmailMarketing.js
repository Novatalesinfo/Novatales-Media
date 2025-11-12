import React, { useEffect, useState } from 'react';
import emailMarketingDesktop from '../../images/EMAIL MARKETING 6..svg';
import emailMarketingTablet from '../../images/email marketing tab.svg';
import emailMarketingMobile from '../../images/EMAIL MARKETING M.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import { Col, Container, Row } from 'react-bootstrap';
export default function EmailMarketing() {
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
  //     q: "Will email marketing really increase my sales?",
  //     a: "Yes. At NovaTales, we personalize campaigns and maintain consistent communication that builds trust, drives engagement, and boosts conversions.",
  //   },
  //   {
  //     q: "What is the average ROI from email marketing?",
  //     a: "It’s proven that email marketing delivers an average ROI of around $36 for every $1 spent, making it one of the most cost-effective digital marketing strategies.",
  //   },
  //   {
  //     q: "How will you prevent emails from landing in spam folders?",
  //     a: "We use verified sender domains, follow proper authentication protocols, and avoid spam-triggering language to maintain high deliverability rates.",
  //   },
  //   {
  //     q: "Can automation help improve our email marketing results?",
  //     a: "Yes. Automation allows us to create personalized, behavior-based campaigns that save time, boost engagement, and increase overall efficiency.",
  //   },
  //   {
  //     q: "Is it possible to measure email campaign success?",
  //     a: "Absolutely. We track open rates, click-through rates, conversions, and unsubscribe rates — and optimize strategies based on real data.",
  //   },
  //   {
  //     q: "Can my business only rely on email marketing?",
  //     a: "No. Email marketing works best when paired with other digital strategies — it enhances brand growth and customer retention as part of a multi-channel approach.",
  //   },
  //   {
  //     q: "Is it possible to integrate email campaigns with our CRM or sales software?",
  //     a: "Yes. Our team seamlessly integrates email campaigns with CRMs, automation tools, and analytics platforms to ensure smooth workflows and accurate tracking.",
  //   },
  //   {
  //     q: "What makes NovaTales’ email marketing campaigns different?",
  //     a: "At NovaTales, we focus on personalized, audience-driven campaigns with engaging content, relevant offers, and measurable, data-backed results.",
  //   },
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
        <title>NovaTales Email Marketing Campaigns to Increase Conversions</title>
        <meta
          name="description"
          content="Our best email marketing services ensure your message lands directly in your customers inbox driving engagement and conversions with precision and impact,best email marketing platforms."
        />
        <meta name="keywords"
          content="Email Marketing Campaign, Best Email Marketing Service, Best Email Campaign Service, Email Marketing in Digital Marketing, Lead Generation in Email Marketing. " />
      </Helmet>
      <div className="service-heading">
        <img src={emailMarketingDesktop} width="100%" alt="Email Marketing Campaign, Best Email Marketing Service" className="lap" />
        <img src={emailMarketingTablet} alt="Email Marketing Campaign, Best Email Marketing Service" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para">
                  <h1>EMAIL MARKETING</h1>
                  <p>Email marketing is an effective way to promote your products and services and incentivize your customers for showing loyalty to your brand. Marketing or promotional emails are used to keep customers on your mailing list up-to-date with product announcements, provide discount offers and coupons for their next purchase, and engage with customers with creative content to stay top of the mind between purchases.
                  </p>
                  <p>Through NovaTales Email Marketing services, we create marketing campaigns to design email templates using rich media, provide strategies to generate extensive mailing lists, and deliver campaigns straight to inboxes that are relevant to your business. Newsletters are created and shared on a regular basis to keep subscribers informed and increase brand awareness. We tailor email marketing campaigns to fit your brand needs, budget, and market segments.</p>
                  <div className="media">
                    <div className="media-body">
                      <p>Key benefit of email marketing is that it allows personalization of emails to provide maximum relevance and generates better engagement. We use email marketing tools that allow us to run A/B tests to experiment with the subject line, content, or call to action to see which option is most effective and then send out the emails to the relevant segment. We use analytics to measure the performance of the marketing campaign by tracking open rates, click-through rates, and conversion rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={emailMarketingMobile} alt="Email Marketing in Digital Marketing" className="img-fluid topBottom" />
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