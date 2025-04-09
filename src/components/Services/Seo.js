import React, { useEffect } from 'react';
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
export default function Seo() {
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
      <AllServices />
      <ServiceContactForm />
    </HelmetProvider>
  );
}
