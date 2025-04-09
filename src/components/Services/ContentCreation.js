import React, { useEffect } from 'react';
import contentCreating from '../../images/content creating.svg';
import contentCreationTab from '../../images/content creation tab.svg';
import contentCreationWeb from '../../images/CONTENT CREATION WEB IMAGE.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function ContentCreation() {
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
        <title>Engage and Grow - NovaTales Content Marketing Services</title>
        <meta
          name="description"
          content="Maximize your marketing impact with effective social media content marketing services, ensuring your message reaches and resonates with your target audience."
        />
        <meta name="keywords"
          content="Social Media Content Creation, Digital Marketing Content, Digital Content Creation, Content Marketing Services, Content Creation and Marketing,content marketing in digital marketing,best content marketing agencies." />
      </Helmet>
      <div className="service-heading">
        <img src={contentCreating} width="100%" alt="Social Media Content Creation" className="lap" />
        <img src={contentCreationTab} alt="Social Media Content Creation" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h1>Content Creation and stratagy</h1>
                  <p className="mt-3">
                    The content is a key component of an optimized page. We create content that is highly relevant, effective and engaging. We create content that make a real difference in the success of our client’s business. We drive change by creating unique narratives through articles, blog posts and videos about products and trends to establish our clients as industry leaders. Our focus is to boost revenue by generating content that leads to conversions.
                  </p>
                  <div className="media">
                    <div className="media-body">
                      <p>Our content marketing services include </p>
                      <h4>Text content</h4>
                      <p>
                        We create Long-form content, short-form content and blog posts which are tailored to your specific needs.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h4>Audio</h4>
                      <p>
                        We strategize and create audio podcasts, audio books and sponsored audio content along with striking posts for organic following and engagement.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h4>Video</h4>
                      <p>
                        We create video ads with interesting narratives to increase your following using content that makes audience want to like, comment and share.
                      </p>
                    </div>
                  </div>
                  <p>
                    Content marketing is a smart way of promoting products/services by sharing helpful and SEO-friendly content on different online platforms such as your website or blog, Instagram, Face book, YouTube, Hub Spot and more to encourage customers to take actions that benefit your business.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={contentCreationWeb} alt="Social Media Content Creation" className="img-fluid topBottom" />
                </div>
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
