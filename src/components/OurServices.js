import React from 'react';
import { Link } from 'react-router-dom';
import webAppImg from '../images/Web & app development c new.png';
import brandingImg from '../images/branding c new.png';
import seoImg from '../images/seo c new.png';
import digitalMarketingImg from '../images/digital marketing c new.png';
import videoProductionImg from '../images/video production c new.png';
import smmImg from '../images/SMM c new.png';
import paidAdvertisingImg from '../images/paid advertising c new.png';
import contentCreationImg from '../images/content-creation-c.png';
import podcastImg from '../images/podcast c new.png';
import photoshootsImg from '../images/photoshoots c.png';
import ecommerceImg from '../images/E -commerce c new.png';
import brandPositioningImg from '../images/brand positioning c.png';
import '../css/Home.css';
import '../css/HomeMediaQuery.css';
import { useNavigation } from '../components/NavigationContext';

export default function OurServices() {

  // Import the useNavigation hook from the navigation library
  const { handleNavigation } = useNavigation();

  return (
    <div>
      <div className="service" id="our-services">
        <div className="container">
          <div className="Ourservice-heading">
            <h2>Our Services</h2>
            <p>We are here to help startups and established businesses with our services. We listen, understand, and work
              hard to give you the best. Our unique approach keeps our services affordable for all businesses and startups
              during this time when digital presence is of paramount importance.</p>
          </div>
        </div>
        <div className="our-services">
          <div className="container-fluid">
            <div className="row mx-auto">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/ui-ux-design-development" onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={webAppImg} alt="Web and app development services" /></div>
                      <div className="info">
                        <h3>WEB & APP DEVELOPMENT</h3>
                        <p>Web design and development is not just about the look and feel it is also about how well it works
                          and serves the purpose.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/branding-and-marketing"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={brandingImg} alt="Branding services" /></div>
                      <div className="info">
                        <h3>BRANDING</h3>
                        <p>Your company’s perception and recognition is dependent on your brand. Let us help you stand out.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/search-engine-optmization-marketing"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={seoImg} alt="Search Engine Optimization services" /></div>
                      <div className="info">
                        <h3>Search Engine Optimization</h3>
                        <p>SEO improves your visibility, gets you more eyeballs, more enquiries and ultimately more
                          conversions.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/digital-marketing"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={digitalMarketingImg} alt="Digital marketing services" /></div>
                      <div className="info">
                        <h3>DIGITAL MARKETING</h3>
                        <p>Digital marketing is the ultimate guide to online success by combining strategy with the right
                          tools to spark engagement and ignite businesses.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/video-production"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={videoProductionImg} alt="Video production services" /></div>
                      <div className="info">
                        <h3>VIDEO PRODUCTION</h3>
                        <p>Visual solutions are the most important resources to provide maximum information in minimal time.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/social-media-marketing"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={smmImg} alt="Social Media Marketing services" /></div>
                      <div className="info">
                        <h3>SOCIAL MEDIA MARKETING</h3>
                        <p>SMM is the most creative and far-reaching tool to strategically connect with new and existing
                          customers.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/ppc-advertising"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={paidAdvertisingImg} alt="Paid advertising services" /></div>
                      <div className="info">
                        <h3>PAID ADVERTISING</h3>
                        <p>Advertising makes the world curious about your business! Let us help you create the buzz to drive
                          your business to new heights.
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/content-creation-and-marketing"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={contentCreationImg} alt="Content creation services" /></div>
                      <div className="info">
                        <h3>CONTENT CREATION</h3>
                        <p>Content creation is about creating messages that people connect with, capturing attention and
                          standing out in a world of ideas.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/podcast-editing-hosting"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={podcastImg} alt="Podcast production services" /></div>
                      <div className="info">
                        <h3>PODCAST</h3>
                        <p>Podcast is a place for stories, voices and vibrant conversations that connect minds one episode
                          after another.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/professional-photoshoot"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={photoshootsImg} alt="Photoshoots services" /></div>
                      <div className="info">
                        <h3>Photoshoots</h3>
                        <p>Whether it is at our Exclusive studio or your outdoor unit, our latest equipment and highly
                          skilled photographers and editors are ready to serve your business needs.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/e-commerce-web-development"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={ecommerceImg} alt="E-commerce services" /></div>
                      <div className="info">
                        <h3>E-Commerce</h3>
                        <p>Let us help you take your sales online - From creating attractive online displays to establishing
                          secure backend transactions.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="center">
                  <div className="ih-item circle effect3 left_to_right">
                    <Link to="/brand-positioning"  onClick={() => handleNavigation('about')}>
                      <div className="img"><img src={brandPositioningImg} alt="Brand positioning services" /></div>
                      <div className="info">
                        <h3>Brand Positioning</h3>
                        <p>Brand positioning involves communicating the distinct value that your brand offers to set your
                          business apart from the rest.</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
