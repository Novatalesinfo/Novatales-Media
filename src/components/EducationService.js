import React, { useEffect, useState } from "react";
import aboutHeroImage from "../images/portfolio/icons/edu_banner_L_1.jpg";
import case_study_mobile_banner from "../images/portfolio/healthcare_banner_m.jpg";
import real_estate from "../images/portfolio/icons/edu_ban_1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contentMarketingIcon from "../images/casestudies/content_icon.png";
import seoIcon from "../images/SEO icon.png";
import market_aud from "../images/casestudies/market_aud-01.png";
import analyticsIcon from "../images/analytics and business insights icon.png";
import socialMediaMarketingIcon from "../images/social m marketing icon N.png";
import paidAdvertisingIcon from "../images/paid advertising.png";
import webdev from "../images/casestudies/web_dev.png";
import online_realestate from "../images/portfolio/longer.png";
import social from "../images/casestudies/stake.png";
import gads from "../images/portfolio/trust.png";
import data from "../images/portfolio/destinations.png";
import analyst from "../images/portfolio/roi-01.png";
import edu_cont from "../images/casestudies/edu_banner.png";
import EducationBookForm from "./EducationBookForm";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";
import BrandPositioningIcon from "../images/casestudies/market_position.png";
const EducationService = () => {
    const [activeIndexLeft, setActiveIndexLeft] = useState(0);
    const toggleAccLeft = (index) => {
        setActiveIndexLeft(activeIndexLeft === index ? null : index);
    };
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        AOS.init();
    }, []);
    return (
        <>
            {/* Top Banner of the page  */}
            <div className="about-hero">
                <img
                    src={aboutHeroImage}
                    width="100%"
                    alt="healthcare digital marketing agency"
                    className="lap"
                />
                <img
                    src={case_study_mobile_banner}
                    alt="healthcare digital marketing agency"
                    className="tab"
                    width="100%"
                />
            </div>
            {/* Why Choose NovaTales for Education Empowering  */}
            <div className="service-content LogoVisual pt-5 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div data-aos="fade-up" className="service-para">
                                <div className="health-why-novatales text-center text-lg-start">
                                    <h3
                                        className="fw-bold pb-3"
                                        style={{
                                            lineHeight: "40px",
                                            padding: "0px 12px",
                                            color: "#52377b",
                                            fontSize: "28px",
                                        }}
                                    >
                                        Why Choose NovaTales for Your Education Marketing Needs
                                    </h3>
                                </div>
                                <div className="healthcareTopPara">
                                    In today’s dynamic education landscape, whether you are an
                                    online course provider, coaching institute, K-12 school,
                                    university, or skill-training centre, digital visibility is no
                                    longer optional. At NovaTales, we combine deep domain
                                    understanding of the education sector with full-stack digital
                                    marketing to help you:
                                </div>
                                <ul className="listPara px-3">
                                    <li className="listPara-li">
                                        <span></span> Attract prospective students with targeted
                                        campaigns and compelling positioning.
                                    </li>
                                    <li className="listPara-li">
                                        <span></span> Engage effectively by creating high-value
                                        content and community touch-points.
                                    </li>
                                    <li className="listPara-li">
                                        <span></span> Convert leads into enrollments through
                                        optimized funnels, nurturing and analytics.
                                    </li>
                                    <li className="listPara-li">
                                        <span></span> Retain & grow student loyalty via brand
                                        advocacy and lifetime engagement.
                                    </li>
                                </ul>
                                <div className="healthcareTopPara">
                                    We understand the unique challenges: long decision cycles,
                                    multiple stakeholders (students, parents, guardians), trust
                                    and credibility factors, regulatory environment, and the
                                    rising cost of acquisition. Our education-focused approach
                                    ensures your message hits the right audience, at the right
                                    time, on the right platform.
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            className="col-lg-6 d-flex justify-content-center align-items-center"
                        >
                            <img
                                src={real_estate}
                                alt="hospital digital marketing"
                                className=" topBottom"
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <EducationBookForm />
            {/* Servises provided by the novatales digital for education empowering  */}
            <div className="service-points ">
                <div data-aos="fade-up" className="health-why-novatales">
                    <h2
                        className="text-center"
                        style={{
                            textAlign: "center",
                            color: "#52377b",
                            marginTop: "80px",
                            marginBottom: "20px",
                        }}
                    >
                        {" "}
                        Our Tailored Solutions for the Education Sector
                    </h2>
                </div>

                {/* New Section Designing for services section as cards */}

                <div className="container pt-5">
                    {/* ROW 1 */}
                    <div className="row g-4 p-md-0 p-2 justify-content-center align-items-center align-items-md-stretch">
                        <div className="col-lg-6 d-flex justify-content-center justify-content-md-start">
                            <div
                                className="w-100 py-3 p-md-3 row h-100"
                                style={{
                                    backgroundColor: "#ebd4ff6b",
                                    borderRadius: "10px",
                                    boxShadow: "0px 1rem 2.6rem #ebd4ff6b",
                                }}
                            >
                                <div className="col-12 media-image col-md-2 d-flex justify-content-center justify-content-md-center align-items-start">
                                    <img src={market_aud} alt="SEO icon" width="110%" />
                                </div>
                                <div className="col-md-10 media-body">
                                    <h4 className="px-2 px-md-0 pt-2 educatation_h">Market & Audience Research</h4>
                                    <p
                                        className="mb-0 educatation_p"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        We begin by deeply understanding your institution, your
                                        offerings, your region, and your target segments, for
                                        example, high-school students driving towards
                                        engineering/medicine, adult learners seeking
                                        skill-upgradation, or international students looking for
                                        study-abroad pathways. We map personas (students,
                                        parents, career-counsellors) and analyse competition and
                                        digital behaviour.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex justify-content-center justify-content-md-start">
                            <div
                                className="w-100 py-3 p-md-3 row h-100"
                                style={{
                                    backgroundColor: "#ebd4ff6b",
                                    borderRadius: "10px",
                                    boxShadow: "0px 1rem 2.6rem #ebd4ff6b",
                                }}
                            >
                                <div className="col-12 media-image col-md-2 d-flex justify-content-center justify-content-md-center align-items-start">
                                    <img src={BrandPositioningIcon}
                                        alt="Email marketing icon" width="110%" />
                                </div>
                                <div className="col-md-10 media-body">
                                    <h4 className="px-2 px-md-0 pt-2 educatation_h">Brand Positioning & Messaging</h4>
                                    <p
                                        className="mb-0 educatation_p"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        You might have a strong legacy, unique pedagogy, or
                                        innovative delivery model, but is that reflected in your
                                        digital presence? We craft a compelling value
                                        proposition (“Why us?”) that resonates with students and
                                        parents alike, define key brand pillars, and ensure
                                        consistent messaging across web, social and offline
                                        touch-points.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROW 2 */}
                    <div className="row g-4 mt-1 p-md-0 p-2 justify-content-center align-items-center align-items-md-stretch">
                        <div className="col-lg-6 d-flex justify-content-center justify-content-md-start">
                            <div
                                className="w-100 p-md-3 row h-100"
                                style={{
                                    backgroundColor: "#ebd4ff6b",
                                    borderRadius: "10px",
                                    boxShadow: "0px 1rem 2.6rem #ebd4ff6b",
                                }}
                            >
                                <div className="col-12 media-image col-md-2 d-flex justify-content-center justify-content-md-center align-items-start">
                                    <img src={webdev}
                                        alt="Social media marketing icon"
                                        width="100%" />
                                </div>
                                <div className="col-md-10 media-body">
                                    <h4 className="px-2 px-md-0 pt-2 educatation_h">Website & Landing Page Optimisation</h4>
                                    <p
                                        className="mb-0 educatation_p"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        Your website is often the first place a prospect
                                        interacts. We ensure:{" "}
                                    </p>
                                    <ul className="listPara">
                                        <li className="listPara-li">
                                            <span></span> Fast, responsive, mobile-ready design;
                                        </li>
                                        <li className="listPara-li">
                                            <span></span> Clear structure: courses, faculty,
                                            testimonials, campus/virtual experience;
                                        </li>
                                        <li className="listPara-li">
                                            <span></span> Trust signals: accreditation, alumni
                                            stories, success metrics;
                                        </li>
                                        <li className="listPara-li">
                                            <span></span> Conversion-focused landing pages:
                                            enquiry forms, brochures, scholarships, virtual-tour
                                            registrations;
                                        </li>
                                        <li className="listPara-li">
                                            <span></span> SEO foundations so you appear when
                                            students search for keywords like “best engineering
                                            college in Hyderabad”, “online MBA India”, etc.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 d-flex justify-content-center justify-content-md-start">
                            <div
                                className="w-100 py-3 p-md-3 row h-100"
                                style={{
                                    backgroundColor: "#ebd4ff6b",
                                    borderRadius: "10px",
                                    boxShadow: "0px 1rem 2.6rem #ebd4ff6b",
                                }}
                            >
                                <div className="col-12 media-image col-md-2 d-flex justify-content-center justify-content-md-center align-items-start">
                                    <img src={contentMarketingIcon} alt="Content Marketing & Engagement icon" width="110%" />
                                </div>
                                <div className="col-md-10 media-body">
                                    <h4 className="px-2 px-md-0 pt-2 educatation_h">Content Marketing & Engagement</h4>
                                    <p
                                        className="mb-0 educatation_p"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        Students today research online first. Our content
                                        strategy includes:
                                    </p>
                                    <ul className="listPara">
                                        <li className="listPara-li">
                                            <span></span> Blog articles on topics like “How to
                                            choose an MBA program”, “Tips for cracking NEET”,
                                            “Online learning vs campus learning”.
                                        </li>
                                        <li className="listPara-li">
                                            <span></span> Video & reel content (virtual tours,
                                            student testimonials, day-in-the-life), ideal for
                                            social.
                                        </li>
                                        <li className="listPara-li">
                                            <span></span> Webinars/podcasts featuring faculty or
                                            alumni.
                                        </li>
                                        <li className="listPara-li">
                                            <span></span> Lead magnets: e-brochures, checklists,
                                            scholarships guides.
                                        </li>
                                        <li className="listPara-li">
                                            <span></span> Email workflows to nurture leads through
                                            decision stages.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ROW 3 */}
                    <div className="row g-4 mt-1 p-md-0 p-2 justify-content-center align-items-center align-items-md-stretch">
                        <div className="col-lg-6 d-flex justify-content-center justify-content-md-start">
                            <div
                                className="w-100 py-3 p-md-3 row h-100"
                                style={{
                                    backgroundColor: "#ebd4ff6b",
                                    borderRadius: "10px",
                                    boxShadow: "0px 1rem 2.6rem #ebd4ff6b",
                                }}
                            >
                                <div className="col-12 media-image col-md-2 d-flex justify-content-center justify-content-md-center align-items-start">
                                    <img src={seoIcon}
                                        alt="paid advertsing icon"
                                        width="100%" />
                                </div>
                                <div className="col-md-10 media-body">
                                    <h4 className="px-2 px-md-0 pt-2 educatation_h">Search Engine Optimisation (SEO)</h4>
                                    <p
                                        className="mb-0 educatation_p"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        Leveraging our SEO expertise, we optimize for both local
                                        and national/international keywords relevant to your
                                        institution. From on-page optimisations (meta tags,
                                        schema for events/courses, site structure) to off-page
                                        efforts (link building with education portals, guest
                                        blogging, press releases), we drive organic visibility
                                        and reduce your dependence on paid ads.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center justify-content-md-start">
                            <div
                                className="w-100 py-3 p-md-3 row h-100"
                                style={{
                                    backgroundColor: "#ebd4ff6b",
                                    borderRadius: "10px",
                                    boxShadow: "0px 1rem 2.6rem #ebd4ff6b",
                                }}
                            >
                                <div className="col-12 media-image col-md-2 d-flex justify-content-center justify-content-md-center align-items-start">
                                    <img src={paidAdvertisingIcon}
                                        alt="paid advertsing icon"
                                        width="100%" />
                                </div>
                                <div className="col-md-10 media-body">
                                    <h4 className="px-2 px-md-0 pt-2 educatation_h">Paid Media & Lead Generation</h4>
                                    <p
                                        className="mb-0 educatation_p"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        Enquiries cost matter. We run targeted Google Search Ads
                                        (for keywords like “join coaching institute”, “study
                                        abroad program”), Display & Remarketing campaigns
                                        (targeting parents/guardians via relevant portals), and
                                        Social Media Ads (Facebook, Instagram, LinkedIn,
                                        depending on target segment). Our leads are routed to
                                        your CRM/WhatsApp/lead-form with immediate follow-up
                                        workflows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ROW 4 */}
                    <div className="row g-4 mt-1 p-md-0 p-2 justify-content-center align-items-center align-items-md-stretch">

                        <div className="col-lg-6 d-flex justify-content-center justify-content-md-start">
                            <div
                                className="w-100 py-3 p-md-3 row h-100"
                                style={{
                                    backgroundColor: "#ebd4ff6b",
                                    borderRadius: "10px",
                                    boxShadow: "0px 1rem 2.6rem #ebd4ff6b",
                                }}
                            >
                                <div className="col-12 media-image col-md-2 d-flex justify-content-center justify-content-md-center align-items-start">
                                    <img src={socialMediaMarketingIcon}
                                        alt="Email marketing icon"
                                        width="100%" />
                                </div>
                                <div className="col-md-10 media-body">
                                    <h4 className="px-2 px-md-0 pt-2 educatation_h">Social Media & Community Building</h4>
                                    <p
                                        className="mb-0 educatation_p"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        We design platform-specific strategies for Instagram,
                                        Facebook, YouTube, and LinkedIn (for professional
                                        courses). This includes organic content calendar, reels,
                                        stories, live Q&A with faculty, student take-overs,
                                        campus events. The goal: build trust, humanise your
                                        institution and promote word-of-mouth via alumni and
                                        student voice.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center justify-content-md-start">
                            <div
                                className="w-100 py-3 p-md-3 row h-100"
                                style={{
                                    backgroundColor: "#ebd4ff6b",
                                    borderRadius: "10px",
                                    boxShadow: "0px 1rem 2.6rem #ebd4ff6b",
                                }}
                            >
                                <div className="col-12 media-image col-md-2 d-flex justify-content-center justify-content-md-center align-items-start">
                                    <img src={analyticsIcon} alt="analytics, Reporting & Optimisation icon" width="95%" />
                                </div>
                                <div className="col-md-10 media-body">
                                    <h4 className="px-2 px-md-0 pt-2 educatation_h">Analytics, Reporting & Optimisation</h4>
                                    <p
                                        className="mb-0 educatation_p"
                                        style={{
                                            fontSize: "15px",
                                        }}
                                    >
                                        We believe in data-driven decision-making. You’ll
                                        receive clear dashboards tracking: website traffic, lead
                                        sources, cost per lead, enrolment conversion rate,
                                        student lifetime value (where applicable). Monthly
                                        review meetings ensure we optimise campaigns, shift
                                        budget to high-performers and refine messaging.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Why choose novatales for education epowerment */}
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="health-why-novatales text-center d-flex justify-content-center flex-column align-items-center"
            >
                <h2
                    className=" px-3"
                    style={{
                        color: "#52377b",
                    }}
                >
                    Why This Approach Works for Education
                </h2>
                <div className="row whyneedRealestate">
                    <div className="col-lg-4">
                        <div
                            className=" whyNeedListCards"
                            style={{
                                backgroundColor: "#ebd4ff",
                                margin: "4px",
                                height: "220px",
                                borderRadius: "10px",
                                padding: "12px 15px",
                            }}
                        >
                            <div className="text-left d-flex justify-content-start ps-2 mt-1">
                                <img src={online_realestate} alt="real estate digital agency" />
                            </div>
                            <div className="ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start">
                                <span
                                    className="my-1"
                                    style={{
                                        color: "#52377b",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Longer decision journey?
                                </span>
                                <p
                                    className="text-left"
                                    id="whyNeedRealP"
                                    style={{
                                        textAlign: "left",
                                        fontSize: "15px",
                                    }}
                                >
                                    Yes. That means more touch-points, we provide content and
                                    nurturing across that journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div
                            className=" whyNeedListCards"
                            style={{
                                // backgroundColor: "rgba(36, 73, 168, 0.03)",
                                backgroundColor: "#ebd4ff",
                                margin: "4px",
                                height: "220px",
                                borderRadius: "10px",
                                padding: "12px 15px",
                            }}
                        >
                            <div className="text-left d-flex justify-content-start ps-2 mt-1">
                                <img src={social} alt="real estate digital agency" />
                            </div>
                            <div className="ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start">
                                <span
                                    className="my-1"
                                    style={{
                                        color: "#52377b",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }} ha ji
                                >
                                    Multiple stakeholders?
                                </span>
                                <p
                                    className="text-left"
                                    id="whyNeedRealP"
                                    style={{
                                        textAlign: "left",
                                        fontSize: "15px",
                                    }}
                                >
                                    We craft content for students and parents / guardians with
                                    emotional and logical messaging.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div
                            className=" whyNeedListCards"
                            style={{
                                backgroundColor: "#ebd4ff",
                                margin: "4px",
                                height: "220px",
                                borderRadius: "10px",
                                padding: "12px 15px",
                            }}
                        >
                            <div className="text-left d-flex justify-content-start ps-2 mt-1">
                                <img src={gads} alt="real estate digital agency" />
                            </div>
                            <div className="ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start">
                                <span
                                    className="my-1"
                                    style={{
                                        color: "#52377b",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Trust & credibility is key
                                </span>
                                <p
                                    className="text-left"
                                    id="whyNeedRealP"
                                    style={{
                                        textAlign: "left",
                                        fontSize: "15px",
                                    }}
                                >
                                    Our methodology emphasises testimonials, alumni success,
                                    accreditations, faculty visibility and transparent outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row whyneedRealestate2 mt-md-4 ">
                    <div className="col-lg-6 col-xl-5">
                        <div
                            className=" whyNeedListCards"
                            style={{
                                backgroundColor: "#ebd4ff",
                                margin: "4px",
                                minHeight: "220px",
                                borderRadius: "10px",
                                padding: "12px 15px",
                            }}
                        >
                            <div className="text-left d-flex justify-content-start ps-2 mt-1">
                                <img src={data} alt="real estate digital agency" />
                            </div>
                            <div className="ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start">
                                <span
                                    className="my-1"
                                    style={{
                                        color: "#52377b",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                    }}
                                >
                                    Location/format diversification
                                </span>
                                <p
                                    className="text-left"
                                    id="whyNeedRealP"
                                    style={{
                                        textAlign: "left",
                                        fontSize: "15px",
                                    }}
                                >
                                    Whether you’re local (Hyderabad/Telangana), national or
                                    international, online or offline, we tailor platform mix and
                                    messaging accordingly.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                        <div
                            className=" whyNeedListCards"
                            style={{
                                backgroundColor: "#ebd4ff",
                                margin: "4px",
                                minHeight: "220px",
                                borderRadius: "10px",
                                padding: "12px 15px",
                            }}
                        >
                            <div className="text-left d-flex justify-content-start ps-2 mt-1">
                                <img src={analyst} alt="real estate digital agency" />
                            </div>
                            <div className="ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start">
                                <span
                                    className="my-1"
                                    style={{
                                        color: "#52377b",
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        textAlign: "left",
                                    }}
                                >
                                    Cost-sensitivity and ROI focussed
                                </span>
                                <p
                                    className="text-left"
                                    id="whyNeedRealP"
                                    style={{
                                        textAlign: "left",
                                        fontSize: "15px",
                                    }}
                                >
                                    By combining SEO (long-term lower cost) with precision paid
                                    media, we maximise your marketing ROI and minimize wasted
                                    spend.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="health-why-novatales text-center d-flex justify-content-center mb-5 flex-column align-items-center"
            >
                <h2
                    className=" px-3 "
                    style={{
                        color: "#52377b",
                    }}
                >
                    Get Started With NovaTales
                </h2>
            </div>
            <div className="service-content LogoVisual pt-4 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div data-aos="fade-up" className=" mt-3">
                                <p style={{ textAlign: "left" }}>
                                    Ready to give your education institution the digital presence
                                    it deserves?
                                </p>
                                <div className="px-2">
                                    <div
                                        className="my-1"
                                        style={{
                                            color: "#52377b",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Free Consultation{" "}
                                    </div>
                                    <div className="">
                                        Let’s assess your current marketing performance, competition
                                        and digital landscape
                                    </div>
                                    <div
                                        className="my-1"
                                        style={{
                                            color: "#52377b",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Custom Proposal{" "}
                                    </div>
                                    <div className="">
                                        We’ll outline a 90-day roadmap, budget options and key
                                        milestones.
                                    </div>
                                    <div
                                        className="my-1"
                                        style={{
                                            color: "#52377b",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Launch & Grow{" "}
                                    </div>
                                    <div className="">
                                        Ongoing optimisation, monthly reporting and strategic
                                        expansion as we scale together.
                                    </div>
                                    <div
                                        className="my-1"
                                        style={{
                                            color: "#52377b",
                                            fontSize: "16px",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Contact us today{" "}
                                    </div>
                                    <div className="">
                                        NovaTales Media– your digital growth partner in the
                                        education sector.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            data-aos="fade-up"
                            className="col-lg-6 d-flex justify-content-center"
                        >
                            <div className="service-image">
                                <div className="info-img position-relative">
                                    <img
                                        src={edu_cont}
                                        alt="hospital digital marketing"
                                        className=" topBottom"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <EducationBookForm />
            <div className="Health-faqs pt-5">
                <Container>
                    <div data-aos="fade-up" className="health-why-novatales">
                        <h2
                            className="text-center"
                            style={{
                                textAlign: "center !important",
                                marginBottom: "40px",
                                marginTop: "40px",
                                color: "#52377b",
                            }}
                        >
                            Frequently Asked Questions{" "}
                        </h2>
                    </div>
                    <div className="faq-accordion">
                        {/* Left Column */}
                        <div className="faq_container" data-aos="fade-up">
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 1 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(1)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            Why should an educational institution hire NovaTales
                                            Media?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 1 && (
                                        <div className="accordion__content fw-normal">
                                            NovaTales specializes in student-focused digital marketing
                                            strategies designed specifically for schools, colleges,
                                            coaching institutes, universities, and online course
                                            providers. We help you increase admissions, improve brand
                                            trust, build digital visibility, and generate high-quality
                                            leads consistently.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 2 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(2)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            What types of educational institutions do you work with?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 2 && (
                                        <div className="accordion__content fw-normal">
                                            We work with schools, junior colleges, coaching centers,
                                            universities, online education platforms (EdTech), skill
                                            development centres, study-abroad consultants, and
                                            professional certification institutes.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 3 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(3)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            How soon can we start seeing results?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 3 && (
                                        <div className="accordion__content fw-normal">
                                            Paid campaigns (Google & Meta Ads) generate leads within
                                            7–10 days, while SEO-driven organic results take 3–6
                                            months based on competition, content volume, and website
                                            quality.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 4 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(4)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            Do you provide lead generation services for admissions?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 4 && (
                                        <div className="accordion__content fw-normal">
                                            Yes. We specialize in lead generation for admissions
                                            through Google Search Ads, Meta Ads, landing pages,
                                            WhatsApp automation, and nurturing flows.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 5 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(5)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            How do you ensure the quality of leads?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 5 && (
                                        <div className="accordion__content fw-normal">
                                            We target students and parents using precise audience
                                            filters, keyword search intent, custom lookalike
                                            audiences, remarketing, and analytics. This helps attract
                                            serious and high-intent prospects rather than generic
                                            inquiries.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 6 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(6)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            Can you help with website improvement or creating a new
                                            website?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 6 && (
                                        <div className="accordion__content fw-normal">
                                            <p style={{ padding: "0" }} className="py-1">
                                                Absolutely. We build and optimize education-focused
                                                websites with:
                                            </p>
                                            <ul className="mt-0 flex flex-column gap-2">
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Course structure & program pages{" "}
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Lead forms, CTAs & brochure downloads
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Fast speed & mobile-first layouts
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    SEO-ready architecture{" "}
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    WhatsApp & CRM integrations
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 7 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(7)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            Do you offer content creation for education?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 7 && (
                                        <div className="accordion__content fw-normal">
                                            <p style={{ padding: "0" }} className="py-1">
                                                Yes. We create:
                                            </p>
                                            <ul className="mt-0 flex flex-column gap-2">
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Course explainers
                                                </li>
                                                <li style={{ listStyleType: "disc" }}> Blogs</li>

                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Student testimonials
                                                </li>
                                                <li style={{ listStyleType: "disc" }}> Video reels</li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Faculty introduction videos{" "}
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Virtual campus tours
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Success stories
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 8 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(8)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            Can you help us attract students from specific locations?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 8 && (
                                        <div className="accordion__content fw-normal">
                                            Yes. We run location-based targeting across India and
                                            abroad. Whether you want students from Hyderabad,
                                            Telangana, India-wide, or NRI students globally, we
                                            customize campaigns accordingly.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 9 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(9)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            How do you measure ROI for education marketing?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 9 && (
                                        <div className="accordion__content fw-normal">
                                            <p style={{ padding: "0" }} className="py-1">
                                                We track and report metrics such as:
                                            </p>
                                            <ul className="mt-0 flex flex-column gap-2">
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Cost per lead
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Lead quality score
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Conversion rate (enquiry → admission)
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Website traffic & keyword rankings
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Engagement rates{" "}
                                                </li>
                                            </ul>
                                            <p style={{ padding: "0", margin: "0" }}>
                                                This helps you clearly understand your ROI and scale
                                                effectively.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion ">
                                <div
                                    className={`accordion__item ${activeIndexLeft === 10 ? "accordion__item--active" : ""
                                        }`}
                                    onClick={() => toggleAccLeft(10)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            What makes NovaTales different from other agencies?
                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 10 && (
                                        <div className="accordion__content fw-normal">
                                            <ul className="mt-0 flex flex-column gap-2">
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Education-specific experience
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Structured student funnel strategy
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Strong SEO + Paid Ads expertise
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Fast communication & monthly review calls
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Transparent performance reporting{" "}
                                                </li>
                                                <li style={{ listStyleType: "disc" }}>
                                                    {" "}
                                                    Tailored marketing plans for each institution size{" "}
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="conclusion mb-5"></div>
                </Container>
            </div>
        </>
    );
};

export default EducationService;
