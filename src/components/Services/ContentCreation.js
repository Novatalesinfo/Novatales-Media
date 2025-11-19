import React, { useEffect, useState } from "react";
import contentCreating from "../../images/content creating.svg";
import contentCreationTab from "../../images/content creation tab.svg";
import contentCreationWeb from "../../images/CONTENT CREATION WEB IMAGE.png";
import ServiceContactForm from "./ServiceContactForm";
import AllServices from "../AllServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
    <HelmetProvider>
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Engage and Grow - NovaTales Content Marketing Services</title>
        <meta
          name="description"
          content="Maximize your marketing impact with effective social media content marketing services, ensuring your message reaches and resonates with your target audience."
        />
        <meta
          name="keywords"
          content="Social Media Content Creation, Digital Marketing Content, Digital Content Creation, Content Marketing Services, Content Creation and Marketing,content marketing in digital marketing,best content marketing agencies."
        />
      </Helmet>
      <div className="service-heading">
        <img
          src={contentCreating}
          width="100%"
          alt="Social Media Content Creation"
          className="lap"
        />
        <img
          src={contentCreationTab}
          alt="Social Media Content Creation"
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
                  <h1>Content Creation and strategy</h1>
                  <p className="mt-3">
                    Content is one of the most powerful drivers of an optimized
                    digital presence. At NovaTales Media, we create content that
                    is relevant, impactful, and engaging — content that
                    genuinely contributes to the success of your business.
                    Through strategic storytelling and unique narratives across
                    articles, blogs, and videos, we position your brand as an
                    authority in your industry. Our focus remains on generating
                    content that not only attracts attention but also leads to
                    meaningful conversions and revenue growth.
                  </p>
                  <p>Our content marketing services include:</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="service-image">
                <div className="info-img position-relative">
                  <img
                    src={contentCreationWeb}
                    alt="Social Media Content Creation"
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
                  <div className="media">
                    <div className="media-body">
                      <h4>Text content</h4>
                      <p>
                        We create long-form articles, short-form posts, and blog
                        content tailored to your brand’s goals, audience
                        interests, and industry needs. Every piece is crafted
                        for clarity, relevance, and SEO performance.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h4>Audio</h4>
                      <p>
                        We plan and produce audio content such as podcasts,
                        audiobooks, and sponsored audio pieces, paired with
                        high-impact creative posts to build organic engagement
                        and strengthen brand presence.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-body">
                      <h4>Video</h4>
                      <p>
                        We develop video content and ads with compelling
                        narratives that encourage viewers to watch, engage, and
                        share. Our videos are crafted to increase visibility,
                        build trust, and strengthen your digital identity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-up" data-aos-duration="1000">
                <div className="service-para mt-3">
                  <div className="media">
                    <div className="media-body">
                      <h4>Content repurposing</h4>
                      <p>
                        We believe every great idea deserves maximum
                        appreciation. Our team repurposes every long-form blog
                        into short videos, carousels, multiple sm posts, and
                        articles. This approach ensures your content reaches
                        wider audiences with consistency and drives maximum ROI.
                      </p>
                      <p>
                        Content marketing is a strategic approach to promoting
                        your products and services by sharing valuable,
                        SEO-friendly content across platforms like your website,
                        blog, Instagram, Facebook, YouTube, HubSpot, and more.
                        By offering helpful and relevant information, we
                        encourage customers to take actions that support your
                        business growth.
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
    </HelmetProvider>
  );
}
