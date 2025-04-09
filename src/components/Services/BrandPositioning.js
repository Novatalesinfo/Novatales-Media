import React, { useEffect } from 'react';
// Import your images here
import brandPositioningImage from '../../images/brand postioning.svg';
import tabImage from '../../images/brand postioning tab.svg';
import positioningMImage from '../../images/brand postioning M.png';
import AllServices from '../AllServices';
import ServiceContactForm from './ServiceContactForm';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function BrandPositioning() {
  // Scroll to the top of the page when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Expert Brand Positioning Strategy Solutions | NovaTales</title>
        <meta
          name="description"
          content="Transform your business with our brand positioning strategy. We help you refine your unique value to make your mark and stand out in the competitive market."
        />
          <meta name="keywords"
        content="brand positioning strategy,brand positioning in marketing,branding and marketing companies,brand building strategies,design and branding strategy,branding and brand positioning,branding and positioning strategy."/>
      </Helmet>
      <div className="service-heading">
        <img src={brandPositioningImage} width="100%" alt="brand positioning strategy" className="lap" />
        <img src={tabImage} alt="brand positioning strategy" className="tab" width="100%" />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h1>Brand Positioning</h1>
                  <p className="mt-3">In this world of clutter, it is difficult to stand out. Even more so in the online space where attention span of the consumer is minimum and competition among providers is huge. This is where your brand personality enters and steals the show.
                  </p>
                  <p>Understanding what makes a brand unique, what makes its product or service stand out, and capitalizing on these strengths is essential for any business. With our in-depth analysis and research skills we thoroughly gauge your industry, your peers, your target customer behaviors, the current market conditions and future sentiments to create a complete picture of the environment.  </p>
                  <div className="media">
                    <div className="media-body">
                      <p>Using the latest business intelligence tools and data driven analysis, we uniquely position your brand to stand out from competitors. Our branding services create a memorable narrative that distinctly positions your brand, ignites your client engagement and creates long term benefits of good will and trust for your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img src={positioningMImage} alt="brand positioning strategy" className="img-fluid topBottom" />
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
