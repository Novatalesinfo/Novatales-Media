import React, { useEffect, useState } from "react";
import seoImage from "../../images/Search Engine Optimization M.png";
import seoLapImage from "../../images/SEARCH ENGINE OPTIMIZATION 6.svg";
import seoTabImage from "../../images/search engine optimization tab.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import ServiceContactForm from "./ServiceContactForm";
import AllServices from "../AllServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
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
    <HelmetProvider>
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Best SEO and Digital Marketing Agency | NovaTales Media</title>
        <meta
          name="description"
          content="Drive success with our SEO and digital marketing services. We deliver customized strategies to increase your online visibility, engagement and organic growth."
        />
        <meta
          name="keywords"
          content="best seo agency,seo and digital marketing,seo marketing agency,best seo provider,digital marketing and search engine optimization,seo and marketing services,seo services provider company,website and seo company."
        />
      </Helmet>
      <div className="service-heading">
        <img
          src={seoLapImage}
          width="100%"
          alt="seo marketing agency"
          className="lap"
        />
        <img
          src={seoTabImage}
          alt="seo marketing agency"
          className="tab"
          width="100%"
        />
      </div>
      <div className="service-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <h3 className="seo-caption">
                    <FontAwesomeIcon icon={faQuoteLeft} /> We know how customers
                    search online.
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </h3>
                  <h1 className="mt-4 fs-3">Search Engine Optimization</h1>
                  <p className="mt-3">
                    Search Engine Optimization (SEO) is the process of enhancing
                    your website’s visibility and relevance across search
                    engines like Google. Our goal is to make your website easily
                    discoverable and understandable for both users and search
                    algorithms. A strong SEO strategy ensures your brand appears
                    when potential customers search for products or services
                    like yours, driving organic traffic and building long-term
                    digital credibility.
                  </p>
                  <p>
                    At NovaTales Media, our SEO experts use data-driven insights
                    and advanced optimization techniques to strengthen your
                    online presence. From keyword research and content
                    optimization to technical SEO and link-building, we focus on
                    strategies that improve rankings, user experience, and
                    conversion rates. Our approach is rooted in transparency,
                    quality, and measurable growth.
                  </p>
                  {/* <div className="media">
                    <div className="media-body">
                      <p>
                     When you collaborate with NovaTales for SEO services, we will:
                      </p>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img
                    src={seoImage}
                    alt="best seo provider"
                    className="img-fluid topBottom"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para">
                  <div className="points-main-heading">
                    <h2>
                      When you collaborate with NovaTales for SEO services, we
                      will:
                    </h2>
                    <ul>
                      <li>
                        <FontAwesomeIcon icon={faAnglesRight} size="lg" />
                        Enhance your Online Visibility
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAnglesRight} size="lg" />
                        Drive Meaningful Traffic
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAnglesRight} size="lg" /> Build
                        credibility and trust
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAnglesRight} size="lg" />{" "}
                        Contributes to long-term ROI
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faAnglesRight} size="lg" />
                        Adapt to new trends easily
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para">
                  <div className="points-main-heading">
                    <p>
                      SEO is not a one-time effort but an evolving process. With
                      ever-changing search algorithms and user trends, we
                      continuously monitor performance, adapt strategies, and
                      ensure your business stays ahead in search results.
                    </p>
                    <p>
                      Let NovaTales Media help you boost your rankings and
                      dominate the search results.
                    </p>
                  </div>
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
