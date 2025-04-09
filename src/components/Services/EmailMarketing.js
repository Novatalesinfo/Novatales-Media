import React, { useEffect } from 'react';
import emailMarketingDesktop from '../../images/EMAIL MARKETING 6..svg';
import emailMarketingTablet from '../../images/email marketing tab.svg';
import emailMarketingMobile from '../../images/EMAIL MARKETING M.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function EmailMarketing() {
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
        content="Email Marketing Campaign, Best Email Marketing Service, Best Email Campaign Service, Email Marketing in Digital Marketing, Lead Generation in Email Marketing. "/>
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
      <AllServices />
      <ServiceContactForm />
    </HelmetProvider>
  );
}