import React, { useEffect } from 'react';
import advertisingMarketingImg from '../../images/ADVERTISING & MARKETING MATERIALS 6.jpg';
import advertisingMarketingTabImg from '../../images/advertising & marketing tab.jpg';
import brochureIcon from '../../images/brochure icon N.png';
import flyerIcon from '../../images/flyer icon.png';
import businessCardIcon from '../../images/bussiness card icon.png';
import advertisingMarketingMaterialsImg from '../../images/Advertising & Marketing Materials M.png';
import webAdIcon from '../../images/Web ad icon N.png';
import corporateFilmsIcon from '../../images/corporate films.png';
import socialMediaMarketingIcon from '../../images/social m marketing icon N.png';
import linkedinIcon from '../../images/linkedin icon.png';
import twitterIcon from '../../images/twitter icon.png';
import '../../css/servisesCss/advertising.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Advertising() {
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
        <title>Brand Marketing and Advertising Ad Agency | NovaTales</title>
        <meta
          name="description"
          content="NovaTales is one of the Best marketing and advertising agencies known for its brochures,flyers and business card designs to create a strong and unique brand."
        />
        <meta name="keywords"
          content="digital marketing and advertising agency, best digital marketing agencies, marketing and advertising agency, digital marketing and advertising company, advertising ad agency,branding and advertising agency." />
      </Helmet>
      <div className='advertising'>
        <div className="service-heading">
          <img src={advertisingMarketingImg} width="100%" alt="digital marketing and advertising agency" className="lap" />
          <img src={advertisingMarketingTabImg} alt="digital marketing and advertising agency" className="tab" width="100%" />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para mt-3">
                    <h1 className="content-main-heading mb-3">Advertising and Marketing Materials</h1>
                    <p className="mt-3">
                      We make materials that create great opportunities to bring awareness to who you are, what you do and what you stand for. Our designs focus on the content, the design and most importantly the message you want to deliver.
                    </p>
                    <p>
                      We create designs that increase the awareness of your brand by incorporating company
                      logo, brand colors, and other consistent branding elements to reinforce brand identity.
                    </p>
                    <div className="media">
                      <div className="media-head">
                        <h3>Print</h3>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                          <div className="media-image">
                            <img src={brochureIcon} alt="Icon representing a brochure" width="100%" />
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                          <div className="media-body">
                            <h4>Brochures</h4>
                            <p>
                              Brochure design can provide a detailed overview of who you are and what
                              you do with crisp content and attractive design. We offer the most
                              suitable brochure designs in various cuts, folds and themes to deliver
                              your business message in the most efficient manner.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                          <div className="media-image">
                            <img src={flyerIcon} alt="Icon representing a flyer" width="75%" />
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                          <div className="media-body">
                            <h4>Flyers</h4>
                            <p>
                              Flyers bring tremendous amount of attention to a quick announcement you want to make to your target customers. Since space is limited giving utmost importance to the message you are conveying is important. Here at Nova Tales, we are experts at focused content creation.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                          <div className="media-image">
                            <img src={businessCardIcon}  alt="Icon representing a business card" width="100%" />
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                          <div className="media-body">
                            <h4>Business cards</h4>
                            <p>
                              The business card is the first element of your branding that you
                              physically pass on to a potential customer. The look and feel of the
                              business card creates the first impression with them. Make it count with
                              exceptional designs from Nova Tales.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={advertisingMarketingMaterialsImg} alt="digital marketing and advertising company" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-points">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 left-media">
                <div className="media">
                  <div className="media-head">
                    <h3>DIGITAL</h3>
                    <p>
                      Our varied and diversified digital media content offers you with solutions that can make
                      your brand become more visible with a viable online presence strategy. With effective
                      online advertising campaigns, we can help raise your brand awareness and company profile
                      and help you realize your revenue and marketing goals. We create tailored solutions that
                      plan and strategize your web campaign and execute it seamlessly.
                    </p>
                    <p>
                      Our supremely talented design team creates the necessary creative visuals for online
                      banners, social media ads, email marketing, etc. Using the latest tools in click ads,
                      social media marketing, affiliate marketing and email marketing we push the content to
                      the right audience. Our creative content creation team creates customized solutions from
                      scratch. We work tirelessly to provide never-seen-before ideas, concepts, designs, and
                      storylines that are created for your unique needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="media">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image mt-2">
                        <img src={webAdIcon} alt="Icon representing a web advertisement" width="100%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4 className="med-head">Digital & Advertising Content</h4>
                        <ul>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Online Display Ads</li>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Search Engine Ads (PPC)</li>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Email Campaigns</li>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Banner Ads</li>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Blog posts</li>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Infographics</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image mt-2">
                        <img src={corporateFilmsIcon} alt="Icon representing corporate films" width="90%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4 className="med-head">Audio Visual Materials</h4>
                        <ul>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Online Videos</li>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Podcast Content</li>
                          <li><FontAwesomeIcon icon={faAnglesRight} size="lg" /> Podcast Advertisements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="service-points">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 left-media">
                <div className="media">
                  <div className="media-head">
                    <h3>SOCIAL MEDIA</h3>
                    <p>
                      Here at Nova Tales, we have unlocked the art & science behind creating the perfect social
                      media content. With the right mixture of creativity, engaging and relevant content, right
                      amount of interaction with the audience, and regular monitoring of analytics to track key
                      metrics will ensure that all your time and monetary efforts have the desired reach and
                      exceptional conversion rates that your brand deserves. Our consistent and targeted efforts
                      ensure that your brand not only expands organically but continues to enjoy loyal followers
                      that will look forward to your every move on social media.
                    </p>
                    <p>
                      We help you create the perfect content for social media engagement by deep diving into your
                      brand, the industry and your potential customers and create tailored content that ensures
                      conversions, sales and exponential growth.
                    </p>
                    <p>
                      The most successful businesses must have a combination of organic and paid strategies. Some
                      of Social media content we plan, create, drive, track and push include:
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6  marketing-services">
                <div className="row mb-5">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <div className="media-image mt-2">
                      <img src={socialMediaMarketingIcon} alt="Icon representing social media marketing"  width="100%" />
                    </div>
                  </div>
                  <div className="col-lg-10 col-md-10 col-sm-12">
                    <div className="media-body">
                      <h4>Instagram and Facebook</h4>
                      <p>
                        Ad campaigns and sponsored content along with engagement posts, Stories, Videos for
                        organic following and engagement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image mt-2">
                        <img src={linkedinIcon} alt="LinkedIn icon" width="90%" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>LinkedIn</h4>
                        <p>
                          Ad campaigns tailored to your specific needs whether it is to create brand
                          awareness, drive consideration, or conversion. With a mix of carousel ads,
                          conversation or message ads, ads for events, followers, jobs, etc.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="media">
                  <div className="row mt-3">
                    <div className="col-lg-2 col-md-2 col-sm-2">
                      <div className="media-image mt-2">
                        <img src={twitterIcon} alt="Twitter icon" width="60%" className="twitter" />
                      </div>
                    </div>
                    <div className="col-lg-10 col-md-10 col-sm-12">
                      <div className="media-body">
                        <h4>Twitter</h4>
                        <p>
                          Create the perfect ad campaign using image, video and carousel ads, or grow your
                          following using content that makes users want to like, repost and reply.
                        </p>
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
