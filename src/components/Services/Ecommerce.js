import React, { useEffect, useState } from 'react';
import ecommerceLap from '../../images/E-Commerce 6.svg';
import ecommerceTab from '../../images/E-commerce tab.svg';
import ecommerceImage from '../../images/Ecommerce M.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { faLightbulb, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Ecommerce() {

  const [activeIndexLeft, setActiveIndexLeft] = useState(null);
  const [activeIndexRight, setActiveIndexRight] = useState(null);
  const toggleAccLeft = (index) => {
    setActiveIndexLeft(activeIndexLeft === index ? null : index);
  };
  const toggleAccRight = (index) => {
    setActiveIndexRight(activeIndexRight === index ? null : index);
  };

  const faq = [ {
    q: "What e-commerce platforms does Novatales use?",
    a: "At NovaTales, we generally work with platforms like Shopify, WooCommerce, Magento, and Wix. We also develop customized solutions based on your product size, complexity, and scalability needs.",
  },
  {
    q: "How long will it take to launch a fully functional e-commerce site?",
    a: "The timeline depends on your specific requirements, features, design complexity, and integrations — typically taking around 8 weeks for a complete launch.",
  },
  {
    q: "How is the security of customer data and transactions secured?",
    a: "We implement SSL certificates, PCI compliance, and strong encryption while following strict security practices to safeguard customer privacy and payment data.",
  },
  {
    q: "I need a payment gateway integration that also accepts international transactions. Will Novatales be able to add the option?",
    a: "Absolutely yes. We integrate multiple payment gateways such as PayPal, Stripe, and Razorpay to support both domestic and international transactions.",
  },
 
   {
    q: "Will my e-commerce website be mobile-friendly?",
    a: "Yes, every e-commerce site we build is fully responsive, ensuring seamless and consistent shopping experiences across all devices.",
  },
  {
    q: "Is it possible to develop customized features like customer accounts, loyalty programs, or subscriptions?",
    a: "Yes, we can build customized features like user accounts, loyalty programs, subscriptions, and other advanced functionalities to enhance engagement and retention.",
  },
  {
    q: "Do you provide ongoing support for maintenance and updates?",
    a: "Yes, we offer complete post-launch support, including feature updates, security patches, and performance monitoring to ensure your store runs smoothly.",
  },
  {
    q: "Why should one choose NovaTales for their e-commerce project?",
    a: "At NovaTales, we combine deep technical expertise, strategic thinking, and customer-focused design to build high-performing online stores that accelerate business growth.",
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
        <title>Best Ecommerce Web Development Agency | NovaTales Media</title>
        <meta
          name="description"
          content="Transform your online store with NovaTales, the best ecommerce website development company, delivering a smooth user experience and boosting sales growth."
        />
        <meta name="keywords"
          content="Ecommerce Website Development Agency, Best Ecommerce Website Development Company, Ecommerce Web Development Agency, Ecommerce Web Development, Ecommerce Website Design & Development Company,ecommerce website development services." />
      </Helmet>
      <div className="service-heading">
        <img src={ecommerceLap} width="100%" alt="Ecommerce Website Development Agency" className="lap" />
        <img src={ecommerceTab} alt="Ecommerce Website Development Agency" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h1>E-Commerce</h1>
                  <p className="mt-3">
                    Ecommerce provides digital solutions to help your business reach new customers online. At Nova Tales we design and build successful and functional e-commerce platforms which provide a seamless and secure online shopping experience to its users.
                  </p>
                  <div className="media">
                    <div className="media-body">
                      <h4>Virtual store:</h4>
                      <p>
                        Ecommerce can be done through a virtual store which is a well-designed and user-friendly website that acts as a digital showcase. This virtual space allows customers to effortlessly browse products, access detailed information, and securely make purchases. We design a storefront that is appealing, optimized for clear navigation, with intuitive product categories and search functionality, ensuring a smooth and enjoyable user experience.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h4>Product Inventory:</h4>
                      <p>
                        A well-structured product inventory is essential for attractively presenting the collection of products or services. At Nova Tales, we curate the product listing which includes images, descriptions, pricing and customer reviews. We present the product inventory to enhance customer engagement and improve purchasing decisions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={ecommerceImage} alt="Best Ecommerce Website Development Company" className="img-fluid topBottom" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 service-para">
            <div className="media">
              <div className="media-body">
                <h4>Cart and Checkout:</h4>
                <p>
                  We incorporate a secure and user-friendly shopping cart system to facilitate payment transactions smoothly. This feature enables users to add products, review their selections, and seamlessly proceed to checkout. The checkout process is streamlined, offering options for guest checkout and a variety of payment methods to complete the transaction.
                </p>
              </div>
            </div>
            <div className="media-body">
              <h4>Mobile Responsive:</h4>
              <p>
                Our Ecommerce platform is optimized for mobile responsiveness. This optimization ensures a seamless experience for users on smart phones and tablets, allowing them to shop conveniently from any device.
              </p>
            </div>
            <div className="media mt-5">
              <div className="media-body">
                <h4>Shipping and Logistics:</h4>
                <p>
                  We offer various shipping options with costs and provide real-time shipping information to customers which contribute to an enhanced shopping experience.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="media">
              <div className="media">
                <div className="media-body">
                  <h4>Payment Gateway:</h4>
                  <p>
                    The integration of a secure payment gateway is crucial for the secure processing of online transactions. At Nova Tales we ensure the integration of the payment gateway to safely handle confidential financial information and support various payment methods including credit cards, digital wallets, and other online payment options.
                  </p>
                </div>
              </div>
            </div>
            <div className="media">
              <div className="media-body">
                <h4>Accounts and Profiles:</h4>
                <p>
                  We incorporate Customer accounts and profiles to increase the user experience by allowing customers to track order history, save favorite items and the checkout process for future purchases. Personalized profiles contribute to a more engaging customer experience.
                </p>
              </div>
            </div>
            <div className="media">
              <div className="media-body">
                <h4>Customer Support:</h4>
                <p>
                  We provide accessible customer support options, such as chat, email, or a customer service hotline for addressing customer queries, concerns, and issues promptly.
                </p>
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
    </HelmetProvider>
  );
}
