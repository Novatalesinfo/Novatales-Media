import React, { useEffect, useState } from 'react';
import seoImage from '../../images/Search Engine Optimization M.png';
import seoLapImage from '../../images/SEARCH ENGINE OPTIMIZATION 6.svg';
import seoTabImage from '../../images/search engine optimization tab.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
// import { Col, Container, Row } from 'react-bootstrap';
export default function Seo() {

  //   const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  //   const [activeIndexRight, setActiveIndexRight] = useState(null);
  //   const toggleAccLeft = (index) => {
  //     setActiveIndexLeft(activeIndexLeft === index ? null : index);
  //   };
  //   const toggleAccRight = (index) => {
  //     setActiveIndexRight(activeIndexRight === index ? null : index);
  //   };
  
  //   const faq = [  {
  //   q: "Can Novatales guarantee top rankings on Google?",
  //   a: "No reliable agency can promise top positions on any search engine. However, we constantly work and aim for the highest possible visibility through strategic, data-driven SEO practices.",
  // },
  // {
  //   q: "How long will SEO take to show results?",
  //   a: "SEO is a long-term investment that usually shows initial improvements within 3–6 months.",
  // },
  // {
  //   q: "What kind of SEO techniques does Novatales follow?",
  //   a: "At NovaTales, we follow 100% ethical and Google-approved practices to ensure safe and sustainable growth.",
  // },
  // {
  //   q: "Can Novatales help fix Google penalties?",
  //   a: "Yes, we specialize in penalty analysis, cleanup, and recovery for affected sites.",
  // },
  // {
  //   q: "Is SEO a one-time service?",
  //   a: "No, SEO is an ongoing process that requires regular updates, monitoring, and optimization to maintain and improve rankings.",
  // },
  // {
  //   q: "How will I get to know about the progress?",
  //   a: "Our team provides clear monthly reports with updates on rankings, traffic, and goal performance metrics.",
  // },
  // {
  //   q: "What services are included in your SEO process?",
  //   a: "We cover site audits, keyword research, on-page optimization, technical fixes, content creation, link building, and monthly performance reporting.",
  // },
  // {
  //   q: "Can I skip paid ads if I completely rely on SEO?",
  //   a: "We recommend combining both SEO and paid ads for the best results. SEO drives long-term organic traffic cost-effectively, while paid ads offer instant visibility.",
  // },
  //   ]
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
        <title>Best SEO and Digital Marketing Agency | NovaTales Media</title>
        <meta
          name="description"
          content="Drive success with our SEO and digital marketing services. We deliver customized strategies to increase your online visibility, engagement and organic growth."
        />
        <meta name="keywords"
          content="best seo agency,seo and digital marketing,seo marketing agency,best seo provider,digital marketing and search engine optimization,seo and marketing services,seo services provider company,website and seo company." />
      </Helmet>
      <div className="service-heading">
        <img src={seoLapImage} width="100%" alt="seo marketing agency" className="lap" />
        <img src={seoTabImage} alt="seo marketing agency" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h3 className="seo-caption">
                    <FontAwesomeIcon icon={faQuoteLeft} /> We know how customers search online.
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </h3>
                  <h1 className='mt-4 fs-3'>Search Engine Optimization</h1>
                  <p className="mt-3">
                    Search Engine Optimization (SEO) is about optimizing your website and its content so that it shows up higher in search engine results pages (SERPs). The main goal of SEO is to make your website easy to understand for both search engines and internet users. By improving your website's ranking in search results, customers can find you when they search for related products or services. It is one of the most crucial steps of your overall digital marketing plan as it drives traffic to your website and enhances your online presence.
                  </p>
                  <p>
                    Our expert team of digital marketers will take all the deliberate measures to boost your webpages online and as a direct result, you will see an increase in conversions. Using various tools, we tailor your website offerings to meet the customer needs. If you're seeking a reliable digital marketing partner, Nova Tales is here for you. Our services cover everything from finding the right keywords to optimize content, on-page and off-page optimization ensuring ethical methods to drive traffic.
                  </p>
                  <div className="media">
                    <div className="media-body">
                      <p>
                        It is important to keep in mind that search engine optimization is not a one-time activity. It is an ongoing process that requires continuous monitoring and analysis to adapt to the changes in the search engine algorithms and user behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={seoImage} alt="best seo provider" className="img-fluid topBottom" />
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
