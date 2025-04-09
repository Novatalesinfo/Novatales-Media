import React, { useEffect } from 'react';
import ecommerceLap from '../../images/E-Commerce 6.svg';
import ecommerceTab from '../../images/E-commerce tab.svg';
import ecommerceImage from '../../images/Ecommerce M.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Ecommerce() {
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
        content="Ecommerce Website Development Agency, Best Ecommerce Website Development Company, Ecommerce Web Development Agency, Ecommerce Web Development, Ecommerce Website Design & Development Company,ecommerce website development services."/>
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
      <AllServices />
      <ServiceContactForm />
    </HelmetProvider>
  );
}
