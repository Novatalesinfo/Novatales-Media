import React, { useEffect, useState } from "react";
import digitalMarketingIllustration from "../../images/digital marketing illustration.svg";
import digitalMarketingTab from "../../images/digital marketing tab.svg";
import digitalMarketingWebImage from "../../images/DIGITAL MARKETING WEB IMAGE.png";
import seoIcon from "../../images/SEO icon.png";
import emailMarketingIcon from "../../images/email marketing icon N.png";
import analyticsIcon from "../../images/analytics and business insights icon.png";
import socialMediaMarketingIcon from "../../images/social m marketing icon N.png";
import paidAdvertisingIcon from "../../images/paid advertising.png";
import "../../css/servisesCss/digital.css";
import ServiceContactForm from "./ServiceContactForm";
import AllServices from "../AllServices";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { Helmet, HelmetProvider } from "react-helmet-async";
import BrandingStrategy from "./BrandingStrategy";
import seoImage from "../../images/Search Engine Optimization M.png";
import emailMarketingMain from "../../images/EMAIL MARKETING M.png";
import analyticsMImage from "../../images/Analytics & Business Insights M.png";
import paidAdvertisingM from "../../images/PAID ADVERTISING M.png";
import smmImage from "../../images/SMM WEB IMAGE 2.png";
export default function DigitalMarketing() {
  const points = [
    {
      title: "Traditional SEO",
      content:
        "We improve your Google ranking by optimizing your website’s structure, keywords, backlinks, and on-page elements that drive long-term organic traffic.",
    },
    {
      title: "Answer Engine Optimization",
      content:
        "We optimize your content to sound more direct, conversational, and to appear in the “People Also Ask” section and in voice search, so users rely on your brand for queries.",
    },
    {
      title: "Generative Engine Optimization",
      content:
        "We follow the strategies that let the AI discover your content over ChatGPT or Gemini, AI chat results, and summaries by aligning with the generative engine algorithms.",
    },
  ];
  const pointsEmail = [
    {
      title: "Increase repeat purchases",
      content:
        " It encourages customers to buy again by sending targeted reminders, personalized recommendations, and post-purchase follow-up messages. ",
    },
    {
      title: "Share offers & product launches",
      content:
        "It is ideal to introduce and announce new products, create appealing newsletters, broadcast seasonal offers, and exclusive discounts, which help your audience engage.",
    },
    {
      title: "Nurture leads with valuable content",
      content:
        " It provides a platform to share educational resources, your brand stories, and how-to guides, helping to build trust among potential customers. ",
    },
    {
      title: "Reward loyal customers",
      content:
        "Personalized emails retain customers by notifying them of loyalty points, early offers, and sending thank-you emails after every purchase.",
    },
  ];
  const pointsAnalytics = [
    {
      title: "Customer behavior tracking",
      content:
        "The data obtained after tracking customer behavior, like how they interact, what they click, how they spend time on your brand, and what drives their purchasing decision. ",
    },
    {
      title: "Campaign performance reports",
      content:
        "With accurate insights about the performance of the campaign, like what’s working and what’s not, we adjust our strategies for better engagement and ROI.  ",
    },
    {
      title: "Website analytics",
      content:
        "With website analytics, all the data about traffic, top-performing pages, and user experience can be obtained, which helps to improve the conversion rates.",
    },
    {
      title: "ROI measurement",
      content:
        "Every penny spent on marketing is measured against the business results. The ROI helps your business to spend wisely and grow efficiently.",
    },
    {
      title: "Growth recommendations",
      content:
        "The data-driven insights play a significant role in enhancing the performance of your brand through actionable steps for your business growth.",
    },
  ];
  const pointsSocial = [
    {
      title: "Creative posts & reels",
      content:
        " We create visually appealing and engaging content that captures attention by encouraging them to interact and increasing the brand identity.",
    },
    {
      title: "Paid social ads",
      content:
        "We run highly targeted campaigns intended to reach your potential audience, which helps boost visibility and generate measurable results. ",
    },
    {
      title: "Influencer collaborations",
      content:
        "Collaborating with credible creators who closely resonate with your brand's ideas will help expand your visibility, credibility, and reach wide audiences. ",
    },
    {
      title: "Comments & community engagement",
      content:
        "Actively engaging and interacting with comments and handling queries of your audiences and followers boosts the loyalty to your brand.  ",
    },
    {
      title: "Brand storytelling",
      content:
        "Consistently sharing relatable and emotional stories about the brand creates an emotional connection with the audience.",
    },
  ];
  const pointsPaid = [
    {
      title: "Google Ads",
      content:
        "We design and manage campaigns, ensuring maximum reach and high conversion rates, and capture your audience’s attention, whether they are on Google, browsers, or on YouTube.",
    },
    {
      title: "Meta Ads",
      content:
        "We help your brand stand out in the crowd of feeds by creating appealing posts to drive engagement and sales that precisely target your audience on Facebook and Instagram.",
    },
    {
      title: "LinkedIn Ads",
      content:
        " It is one of the best platforms for B2B connections, so we professionally optimize campaigns to build qualified leads and professional networking, and credibility.",
    },
    {
      title: "E-commerce Ads",
      content:
        "We help boost your brand’s ROAS by attracting customers ready to make purchases from your online store through our dynamic product ads and strategies. ",
    },
  ];

  useEffect(() => {
    // Initialize AOS library for animations
    AOS.init();
  }, []);

  return (
    <HelmetProvider>
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>
          Transform Your Online Reach| Best Digital Marketing Agency{" "}
        </title>
        <meta
          name="description"
          content="NovaTales is a full service digital marketing and branding agency offering SEO, PPC, SMM, Analytics, Google Ads, YouTube Ads, Instagram Ads, Facebook Ads."
        />
        <meta
          name="keywords"
          content="digital marketing agency, best digital marketing company, best digital marketing services, digital marketing company services,digital marketing company."
        />
      </Helmet>
      <div className="Digital">
        <div className="service-heading">
          <img
            src={digitalMarketingIllustration}
            width="100%"
            alt="digital marketing agency"
            className="lap"
          />
          <img
            src={digitalMarketingTab}
            alt="digital marketing agency"
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
                    <h1>Digital marketing</h1>
                    <p className="mt-3">
                      Digital marketing enables brands to reach, engage, and
                      convert customers through online platforms, smart
                      analytics, and personalized communication. Today, every
                      business, small, medium, or enterprise, needs digital
                      marketing to stay competitive, attract customers, and
                      scale faster.
                    </p>
                    <p>
                      It is one of the most cost-effective and measurable
                      marketing methods. Every campaign can be optimized in
                      real-time based on performance data, ensuring better ROI
                      and smarter decisions.
                    </p>
                    <p>
                      At NovaTales, we build digital marketing strategies that
                      combine Data, Creativity, Technology, GEO (Generative
                      Engine Optimization), and AEO (Answer Engine Optimization)
                      together, helping your brand appear not only on Google but
                      also on AI-powered search, generative engines, and
                      voice-based platforms like ChatGPT, Google Gemini, Bard,
                      Siri & Alexa.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img
                      src={digitalMarketingWebImage}
                      alt="digital marketing agency"
                      className="img-fluid topBottom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img
                      src={seoImage}
                      alt="digital marketing agency"
                      className=" topBottom"
                       width="100%"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 Digital-services">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="points-content"
                >
                  <div className="subcontent">
                    <h3 className="mb-3">Search Engine Optimization</h3>
                    <p>
                      SEO increases your website’s visibility on search engines.
                      But modern search has evolved; people ask questions, use
                      voice queries, and depend on AI chatbots for answers.
                      <br /> That’s why we optimize for:
                    </p>
                    <div className="row points-down">
                      <ul>
                        {points.map((item, idx) => (
                          <li key={idx}>
                            <div className="points-header">
                              <span>{item.title}</span>
                            </div>
                            <div className="pointer-content">
                              <p>{item.content}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      We align our strategies with generative engine algorithms
                      so that your content is discovered on ChatGPT, Gemini, AI
                      chat results, summaries, or recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-6 Digital-services">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="points-content"
                >
                  <div className="subcontent">
                    <h3 className="mb-3">Email Marketing</h3>
                    <p>
                      Email marketing helps brands maintain long-term customer
                      relationships. We design automated and personalized email
                      flows that:
                    </p>
                    <div className=" row points-down">
                      <ul>
                        {pointsEmail.map((item, idx) => (
                          <li key={idx}>
                            <div className="points-header">
                              <span>{item.title}</span>
                            </div>
                            <div className="pointer-content">
                              <p>{item.content}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      From welcome series to festival campaigns, your brand
                      stays connected.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img
                      src={emailMarketingMain}
                      alt="digital marketing agency"
                      className=" topBottom"
                       width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img
                      src={analyticsMImage}
                      alt="digital marketing agency"
                      className=" topBottom"
                       width="100%"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 Digital-services">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="points-content"
                >
                  <div className="subcontent">
                    <h3 className="mb-3">Analytics & Business Insights</h3>
                    <p>
                      Data-driven marketing outperforms guesswork. We track,
                      measure, and analyze digital performance to help you make
                      smarter decisions.
                    </p>
                    <div className=" row points-down">
                      <ul>
                        {pointsAnalytics.map((item, idx) => (
                          <li key={idx}>
                            <div className="points-header">
                              <span>{item.title}</span>
                            </div>
                            <div className="pointer-content">
                              <p>{item.content}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      These insights help optimize spending and increase
                      conversions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-6 Digital-services">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="points-content"
                >
                  <div className="subcontent">
                    <h3 className="mb-3">Paid Advertising (PPC + Social Ads)</h3>
                    <p>
                      Paid ads help your business reach customers instantly. We
                      manage platforms like Google Ads, Meta Ads, LinkedIn Ads,
                      and E-commerce Ads. With advanced targeting, retargeting,
                      conversion tracking, and budget control, you get
                      measurable, fast results.
                    </p>
                    <div className=" row points-down">
                      <ul>
                        {pointsPaid.map((item, idx) => (
                          <li key={idx}>
                            <div className="points-header">
                              <span>{item.title}</span>
                            </div>
                            <div className="pointer-content">
                              <p>{item.content}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      Through our continuous monitoring system and retargeting,
                      we ensure every campaign brings boosts in growth and ROI.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img
                      src={paidAdvertisingM}
                      alt="digital marketing agency"
                      className="topBottom"
                       width="100%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="container">
            <div className="row align-items-center ">
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img
                      src={smmImage}
                      alt="digital marketing agency"
                      className=" topBottom "
                      width="100%"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 Digital-services">
                <div
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className="points-content"
                >
                  <div className="subcontent">
                      <h3>Social Media Marketing</h3>
                    <p>
                      4.95 billion people are active on social media. Their
                      buying decisions are influenced by reels, ads, reviews &
                      brand stories. We create brand-focused digital content
                      across Instagram, Facebook, LinkedIn, YouTube, and Twitter
                      (X). Our SMM services include:
                    </p>
                    <div className=" row points-down">
                      <ul>
                        {pointsSocial.map((item, idx) => (
                          <li key={idx}>
                            <div className="points-header">

                              <span>{item.title}</span>
                            </div>
                            <div className="pointer-content">
                              <p>{item.content}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      Turn followers into customers and customers into brand
                      fans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="Digital-services">
          <div className="container">
            <div className="points-content">
              <div className="">
                <div >
                  <div className=" subcontent sidebyside">
                    <div >
                      <div className="Icon">
                        {" "}
                        <img src={seoIcon} alt="SEO icon" width="100%" />
                      </div>
                    </div>
                    <div >
                      <h3>Search Engine Optimization</h3>
                      <p>
                        SEO increases your website’s visibility on search
                        engines. But modern search has evolved; people ask
                        questions, use voice queries, and depend on AI chatbots
                        for answers.
                        <br /> That’s why we optimize for:
                      </p>
                      <div className="row points-down">
                        <ul>
                          {points.map((item, idx) => (
                            <li key={idx}>
                              <div className="points-header">
  
                                <span>{item.title}</span>
                              </div>
                              <div className="pointer-content">
                                <p>{item.content}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        We align our strategies with generative engine
                        algorithms so that your content is discovered on
                        ChatGPT, Gemini, AI chat results, summaries, or
                        recommendations.
                      </p>
                    </div>
                  </div>
                </div>
                <div >
                  <div className=" subcontent sidebyside">
                    <div >
                      <div className="Icon-2">
                        {" "}
                        <img
                          src={emailMarketingIcon}
                          alt="Email marketing icon"
                          width="100%"
                        />
                      </div>
                    </div>
                    <div>
                      <h3>Email Marketing</h3>
                      <p>
                        Email marketing helps brands maintain long-term customer
                        relationships. We design automated and personalized
                        email flows that:
                      </p>
                      <div className=" row points-down">
                        <ul>
                          {pointsEmail.map((item, idx) => (
                            <li key={idx}>
                              <div className="points-header">
  
                                <span>{item.title}</span>
                              </div>
                              <div className="pointer-content">
                                <p>{item.content}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        From welcome series to festival campaigns, your brand
                        stays connected.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className=" subcontent sidebyside">
                    <div className="">
                      <div className="Icon-2">
                        {" "}
                        <img
                          src={analyticsIcon}
                          alt="Analytics and business insights icon"
                          width="100%"
                        />
                      </div>
                    </div>
                    <div className="">
                      <h3>Analytics & Business Insights</h3>
                      <p>
                        Data-driven marketing outperforms guesswork. We track,
                        measure, and analyze digital performance to help you
                        make smarter decisions.
                      </p>
                      <div className=" row points-down">
                        <ul>
                          {pointsAnalytics.map((item, idx) => (
                            <li key={idx}>
                              <div className="points-header">
  
                                <span>{item.title}</span>
                              </div>
                              <div className="pointer-content">
                                <p>{item.content}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        These insights help optimize spending and increase
                        conversions.
                      </p>
                    </div>
                  </div>
                </div>
                <div >
                  <div className="sidebyside subcontent">
                    <div className="">
                      <div className="Icon-2">
                        {" "}
                        <img
                          src={paidAdvertisingIcon}
                          alt="paid advertsing icon"
                          width="100%"
                        />
                      </div>
                    </div>
                    <div className="">
                      <h3>Paid Advertising (PPC + Social Ads)</h3>
                      <p>
                        Paid ads help your business reach customers instantly.
                        We manage platforms like Google Ads, Meta Ads, LinkedIn
                        Ads, and E-commerce Ads. With advanced targeting,
                        retargeting, conversion tracking, and budget control,
                        you get measurable, fast results.
                      </p>
                      <div className=" row points-down">
                        <ul>
                          {pointsPaid.map((item, idx) => (
                            <li key={idx}>
                              <div className="points-header">
  
                                <span>{item.title}</span>
                              </div>
                              <div className="pointer-content">
                                <p>{item.content}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p>
                        Through our continuous monitoring system and
                        retargeting, we ensure every campaign brings boosts in
                        growth and ROI.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className=" subcontent sidebyside">
                  <div>
                    <div className="Icon-2">
                      {" "}
                      <img
                        src={socialMediaMarketingIcon}
                        alt="Social media marketing icon"
                        width="100%"
                      />
                    </div>
                  </div>
                  <div>
                    <h3>Social Media Marketing</h3>
                    <p>
                      4.95 billion people are active on social media. Their
                      buying decisions are influenced by reels, ads, reviews &
                      brand stories. We create brand-focused digital content
                      across Instagram, Facebook, LinkedIn, YouTube, and Twitter
                      (X). Our SMM services include:
                    </p>
                    <div className=" row points-down">
                      <ul>
                        {pointsSocial.map((item, idx) => (
                          <li key={idx}>
                            <div className="points-header">

                              <span>{item.title}</span>
                            </div>
                            <div className="pointer-content">
                              <p>{item.content}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p>
                      Turn followers into customers and customers into brand
                      fans.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <AllServices />
        <ServiceContactForm />
      </div>
    </HelmetProvider>
  );
}
