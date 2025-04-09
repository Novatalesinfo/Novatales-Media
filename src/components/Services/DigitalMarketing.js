import React, { useEffect } from 'react';
import digitalMarketingIllustration from '../../images/digital marketing illustration.svg';
import digitalMarketingTab from '../../images/digital marketing tab.svg';
import digitalMarketingWebImage from '../../images/DIGITAL MARKETING WEB IMAGE.png';
import seoIcon from '../../images/SEO icon.png';
import emailMarketingIcon from '../../images/email marketing icon N.png';
import analyticsIcon from '../../images/analytics and business insights icon.png';
import affiliateMarketingIcon from '../../images/affliated marketing icon N.png';
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
export default function DigitalMarketing() {

  useEffect(() => {
    // Initialize AOS library for animations
    AOS.init();
  }, []);

  useEffect(() => {
    // Scroll to the top of the window
    window.scrollTo(0, 0);
  }, []);

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
                      Digital marketing involves the promotion of brands to reach, engage and convert customers using different forms of digital technologies and platforms. It is essential for all companies big or small to market digitally in today’s business landscape.
                    </p>
                    <p>
                      Digital marketing is one of the most cost-effective forms of marketing that offers huge returns on investment and the best part is, it can be measured and tailored based on real-time data to provide immediate benefits. Digital marketing allows communication to be targeted to the demographic of our choice, personalized in order to hook the customer, and interactive through messaging, comments and likes.
                    </p>
                    <p>
                      Through the digital marketing services provided by Nova Tales, our expert team creates digital marketing campaigns that are unique to each customer. Based on your needs, we tailor campaigns to include a combination of website creation, Search Engine Optimization (SEO), Pay per click Ads, Social media marketing (SMM), Email Marketing, and Affiliate Marketing.
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
                <Link to="/Search-Engine-optmization-MarketingAnalytics-Business-Insights">
                  <div className="media">
                    <div className="row">
                      <div className="col-lg-2 col-md-2 col-sm-2">
                        <div className="media-image mt-2">
                          <img src={seoIcon} alt="SEO icon" width="100%" />
                        </div>
                      </div>
                      <div className="col-lg-10 col-md-10 col-sm-12">
                        <div className="media-body">
                          <h4 className="point-head">Search Engine Optimization</h4>
                          <p>
                            Search Engine Optimization is the process of improving the visibility of your website organically in various search engines. The greater the visibility your page achieves in search results, the higher the clicks. Even though it takes time and effort to achieve search engine optimization, you will reap lasting benefits for the efforts.
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
                            Email marketing is an effective way to promote your products and services and incentivize your customers for showing loyalty to your brand. Promotional emails are used to keep customers on your mailing list up-to-date with product announcements, provide discount coupons for their next purchase and engage with customers with creative content to stay top of the mind between purchases.
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
                            Analytics and business insights services involve collection of data points from various digital platforms, analyzing it and generating reports to gain valuable insights on the current situation of our client’s online presence. Actionable steps are then laid out to make improved decisions for long-term success of their online business strategies.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
                            As of today, 61% of the world’s population that is about 4.95 Billion is on Social Media and the numbers are rising by the day. Research shows that a vast majority of users’ buying habits are influenced by social media usage, making it one of the most important platforms for marketing in today’s business landscape.
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
                          <h4 className="point-head">Paid Advertising</h4>
                          <p>
                            Paid advertising is the practice of placing promotional content or advertisements in various digital platforms to promote businesses and reach more customers. It enables us to reach specific audiences within the allocated budget and attain positive business outcomes that are measurable and immediate.
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
        <AllServices />
        <ServiceContactForm />
      </div>
    </HelmetProvider>
  );
}
