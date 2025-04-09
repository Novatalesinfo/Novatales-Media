import React, { useEffect } from 'react';
import linkedinIcon from '../../images/linkedin icon.png';
import twitterIcon from '../../images/twitter icon.png';
import smmIcon from '../../images/social m marketing icon N.png';
import youtubeAdsIcon from '../../images/youtube ads.png';
import smmImage from '../../images/SMM WEB IMAGE 2.png';
import smmLapImage from '../../images/SOCIAL MEDIA MARKETING 6.svg';
import smmTabImage from '../../images/social media marketing tab.svg';
import '../../css/servisesCss/smm.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function SMM() {
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
        <title>Best Social Media Marketing Agency | NovaTales Media</title>
        <meta
          name="description"
          content="NovaTales is the best social media marketing agency specializes in Facebook and Instagram Ads, Smart Ads, Search Ads, Display Ads, YouTube Ads for maximum impact."
        />
             <meta name="keywords"
        content="best social media marketing agency, digital marketing and social media marketing,digital marketing for social media, smm marketing agency, social media marketing services,smm marketing,digital and social media marketing,social media advertising agencies."/>
      </Helmet>
      <div className='smm'>
        <div className="service-heading">
          <img src={smmLapImage} width="100%" alt="best social media marketing agency" className="lap" />
          <img src={smmTabImage} alt="best social media marketing agency" className="tab" width="100%" />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para">
                    <h1 className='mt-3 mb-3'>Social Media Marketing</h1>
                    <p>Here at Nova Tales, we have unlocked the art & science behind creating the perfect social media campaign. With the right mixture of creativity, engaging and relevant content, right amount of interaction with the audience, and regular monitoring of analytics to track key metrics, we will ensure that all your time and monetary efforts have the desired reach and exceptional conversion rates that your brand deserves. Our consistent and targeted efforts ensure that your brand not only expands organically but continues to enjoy loyal followers that will look forward to your every move on social media.</p>
                    <p>We help you create the perfect content for social media engagement by deep diving into your brand, the industry and your potential customers and create tailored content that ensures conversions, sales and exponential growth. </p>
                    <p>The most successful businesses must have a combination of organic and paid strategies. Some of Social media content we plan, create, drive, track and push include:</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={smmImage} alt="digital marketing and social media marketing" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-points">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 left-media" style={{ paddingRight: '70px' }}>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img src={linkedinIcon} alt="LinkedIn icon representing LinkedIn advertising" width="100%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>LinkedIn</h4>
                        <p>Ad campaigns tailored to your specific needs whether it is to create brand awareness, drive consideration, or conversion using a mix of carousel ads, conversation or message ads, ads for events, followers, jobs, etc. Additionally, strategies to organically build following through rich content.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img src={twitterIcon} alt="Twitter icon representing Twitter (X) advertising" width="80%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>Twitter (X)</h4>
                        <p>Strategies to increase your Twitter (X) following using content that makes users want to like, repost and reply. Furthermore, we create the perfect ad campaign using image, video and carousel ads.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 side-points">
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img src={smmIcon} alt="Instagram and Facebook icons representing social media marketing" width="100%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>Instagram and Facebook </h4>
                        <p>We drive content creation and publishing, organic growth through engagement posts, stories, videos along with paid activities such as sponsored content, influencer marketing and paid ads. Analytics to monitor performance and track metrics such as reach, engagement, clicks, and conversions. </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image">
                        <img src={youtubeAdsIcon} alt="YouTube icon representing YouTube advertising" width="100%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4> YouTube </h4>
                        <p> We create visually appealing content that encourages clicks such as skippable ads and non-skippable ads, host live Q&A sessions and other interactive content to encourage viewers to like, share and subscribe.</p>
                      </div>
                    </div>
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
