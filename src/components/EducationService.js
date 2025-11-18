import React, { useEffect, useState } from 'react'
import aboutHeroImage from '../images/portfolio/healthcare_banner_l.jpg';
import case_study_mobile_banner from '../images/portfolio/healthcare_banner_m.jpg';
import real_estate from "../images/portfolio/education.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import contentMarketingIcon from '../images/content marketing icon-01.png';
import seoIcon from '../images/SEO icon.png';
import emailMarketingIcon from '../images/email marketing icon N.png';
import analyticsIcon from '../images/analytics and business insights icon.png';
import socialMediaMarketingIcon from '../images/social m marketing icon N.png';
import paidAdvertisingIcon from '../images/paid advertising.png';
import online_realestate from "../images/casestudies/NEXT GEN-01.png"
import social from "../images/casestudies/SEO 01-01.png"
import gads from "../images/casestudies/brand_voice.png"
import data from "../images/casestudies/Creative Storytelling-01.png"
import analyst from "../images/casestudies/Advanced Analytics-01.png"
import edu_cont from "../images/portfolio/edu_contact.png"
import EducationBookForm from './EducationBookForm';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';

const EducationService = () => {

    const faqs = [
        {
            q: "Is Digital Marketing really helpful for my Real Estate sales?",
            a: "Yes, it helps you attract the targeted buyers and build an online presence."
        },
        {
            q: "Will I be able to find more leads with Digital Marketing?",
            a: "Definitely yes. We use the strategies that target the buyers in real time who are actively searching online."
        },
        {
            q: "Will Digital Marketing help me boost my brand reputation?",
            a: "Absolutely, at NovaTales, we follow various strategies that help in increasing your online presence and build trust that automatically boosts your brand’s reputation."
        },
        {
            q: "Can I manage Digital Marketing on my own?",
            a: "If you wish to see results, then you need technical specialists like NovaTales who are experienced in the field."
        },
        {
            q: "Is it possible to get immediate results from Digital Marketing?",
            a: "It is not possible to see immediate results, as lead generation and building awareness take time."
        },
        {
            q: "Will digital marketing improve the online reputation of real estate?",
            a: "At NovaTales, we have an expert team that consistently looks at the reviews and works towards creating a better influence."
        },
        {
            q: "Will my business appear as a top result with GEO?",
            a: "At Novatales, we improve the chances of your business getting featured on the GEO search results, which requires certain criteria to be fulfilled."
        }, {
            q: "Is Marketing Automation essential in Real Estate?",
            a: "Yes, there is a need because it saves a lot of time in addressing the follow-up questions and increases the lead conversion."
        },
        {
            q: "How do Virtual tours help sell properties?",
            a: "It lets the buyers explore the properties remotely, which increases engagement."
        },
        {
            q: "Is AI really helpful in real estate digital marketing?",
            a: "Yes, AI tools are extremely helpful as they ensure smart targeting with higher-quality leads by identifying genuine buyers, optimizing ads, and making real-time property recommendations."
        },

    ];
    const [activeIndexLeft, setActiveIndexLeft] = useState(0);
    const toggleAccLeft = (index) => {
        setActiveIndexLeft(activeIndexLeft === index ? null : index);
    };

    useEffect(() => {
        // window.scrollTo({ top: 0, behavior: "smooth" });
        AOS.init();
    }, []);
    return (
        <>
            {/* Top Banner of the page  */}
            <div className="about-hero">
                <img src={aboutHeroImage} width="100%" alt="healthcare digital marketing agency" className="lap" />
                <img src={case_study_mobile_banner} alt="healthcare digital marketing agency" className="tab" width="100%" />
            </div>

            {/* Why Choose NovaTales for Education Empowering  */}
            <div data-aos="fade-up" data-aos-delay="100" className="health-why-novatales text-center d-flex justify-content-center flex-column align-items-center">
                <h2 className='mb-5 px-3' style={{
                    color: "#52377b"
                }}>
                    Why Choose NovaTales for Your Education Marketing Needs
                </h2>
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <div className="service-para mt-3 pe-xl-2">
                                <div className='healthcareTopPara'>In today’s dynamic education landscape, whether you are an online course provider, coaching institute, K-12 school, university, or skill-training centre, digital visibility is no longer optional. At NovaTales, we combine deep domain understanding of the education sector with full-stack digital marketing to help you:</div>
                                <div className='healthcareTopPara'>
                                    <ul className='text-left flex align-items-start justify-content-md-start' style={{
                                        display: "flex",
                                        justifyContent: "start",
                                        flexDirection: "column",
                                        gap: "1",
                                    }}>
                                        <li className=''><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold text-dark'>Attract prospective students</span> with targeted campaigns and compelling positioning.</li>
                                        <li className=''><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold text-dark'>Engage effectively</span> by creating high-value content and community touch-points.</li>
                                        <li className=''><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold text-dark'>Convert leads</span> into enrollments through optimized funnels, nurturing and analytics.</li>
                                        <li className=''><FontAwesomeIcon icon={faAnglesRight} /> <span className='fw-bold text-dark'>Retain & grow student loyalty </span> via brand advocacy and lifetime engagement</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-between ps-lg-5">
                            <div className="service-image">
                                <div className="info-img position-relative p-2">
                                    <img src={real_estate} alt="digital marketing and real estate" className="img-fluid topBottom" />
                                </div>
                                <div className='healthcareTopPara'>We understand the unique challenges: long decision cycles, multiple stakeholders (students, parents, guardians), trust and credibility factors, regulatory environment, and the rising cost of acquisition. Our education-focused approach ensures your message hits the right audience, at the right time, on the right platform.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Servises provided by the novatales digital for education empowering  */}

            <div className="service-points">
                <div data-aos="fade-up" className="health-why-novatales">
                    <h2
                        className="text-center"
                        style={{
                            textAlign: "center",
                            color: "#52377b",
                            marginTop: "80px",
                            marginBottom: "20px"
                        }}
                    > Our Tailored Solutions for the Education Sector
                    </h2>
                </div>
                <div className="container pt-5">
                    <div className="row mt-5">
                        <div className="col-lg-6 left-media" style={{ paddingRight: '70px' }}>

                            {/* AI in SEO (Search + Generative + Answer Optimization) */}
                            <div data-aos="fade-up" className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={seoIcon} alt="SEO icon" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4 className=""> Market & Audience Research</h4>
                                            <p>
                                                We begin by deeply understanding your institution, your offerings, your region, and your target segments, for example, high-school students driving towards engineering/medicine, adult learners seeking skill-upgradation, or international students looking for study-abroad pathways. We map personas (students, parents, career-counsellors) and analyse competition and digital behaviour.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* AI in Email & Automation */}
                            <div data-aos="fade-up" className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={emailMarketingIcon} alt="Email marketing icon" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4 className="">Brand Positioning & Messaging</h4>
                                            <p>
                                                You might have a strong legacy, unique pedagogy, or innovative delivery model, but is that reflected in your digital presence? We craft a compelling value proposition (“Why us?”) that resonates with students and parents alike, define key brand pillars, and ensure consistent messaging across web, social and offline touch-points.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* AI in Analytics & Insights */}
                            <div data-aos="fade-up" className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={analyticsIcon} alt="Analytics and business insights icon" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4 className="">Content Marketing & Engagement</h4>
                                            <p>
                                                Students today research online first. Our content strategy includes:
                                            </p>
                                            <ul>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Blog articles on topics like “How to choose an MBA program”, “Tips for cracking NEET”, “Online learning vs campus learning”;</li>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Video & reel content (virtual tours, student testimonials, day-in-the-life), ideal for social;
                                                </li>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Webinars/podcasts featuring faculty or alumni;</li>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Lead magnets: e-brochures, checklists, scholarships guides;
                                                </li>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Email workflows to nurture leads through decision stages.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={emailMarketingIcon} alt="Email marketing icon" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4 className=""> Analytics, Reporting & Optimisation</h4>
                                            <p>
                                                We believe in data-driven decision-making. You’ll receive clear dashboards tracking: website traffic, lead sources, cost per lead, enrolment conversion rate, student lifetime value (where applicable). Monthly review meetings ensure we optimise campaigns, shift budget to high-performers and refine messaging.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-lg-6">
                            {/* AI in Social Media Marketing */}
                            <div data-aos="fade-up" className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={socialMediaMarketingIcon} alt="Social media marketing icon" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4 className="">Website & Landing Page Optimisation</h4>
                                            <p>
                                                Your website is often the first place a prospect interacts. We ensure: </p>

                                            <ul>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Fast, responsive, mobile-ready design;</li>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Clear structure: courses, faculty, testimonials, campus/virtual experience;</li>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Trust signals: accreditation, alumni stories, success metrics;</li>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Conversion-focused landing pages: enquiry forms, brochures, scholarships, virtual-tour registrations;</li>
                                                <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> SEO foundations so you appear when students search for keywords like “best engineering college in Hyderabad”, “online MBA India”, etc.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AI in Paid Advertising (Google, Meta, LinkedIn) */}
                            <div data-aos="fade-up" className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={paidAdvertisingIcon} alt="paid advertsing icon" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4 className="">Search Engine Optimisation (SEO)
                                            </h4>
                                            <p>
                                                Leveraging our SEO expertise, we optimize for both local and national/international keywords relevant to your institution. From on-page optimisations (meta tags, schema for events/courses, site structure) to off-page efforts (link building with education portals, guest blogging, press releases), we drive organic visibility and reduce your dependence on paid ads.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AI in Content Marketing */}
                            <div data-aos="fade-up" className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className=" mt-2">
                                            <img src={contentMarketingIcon} alt="paid advertsing icon" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4 className="">Paid Media & Lead Generation
                                            </h4>
                                            <p>
                                                Enquiries cost matter. We run targeted Google Search Ads (for keywords like “join coaching institute”, “study abroad program”), Display & Remarketing campaigns (targeting parents/guardians via relevant portals), and Social Media Ads (Facebook, Instagram, LinkedIn, depending on target segment). Our leads are routed to your CRM/WhatsApp/lead-form with immediate follow-up workflows.
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-aos="fade-up" className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={emailMarketingIcon} alt="Email marketing icon" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4 className="">Social Media & Community Building</h4>
                                            <p>
                                                We design platform-specific strategies for Instagram, Facebook, YouTube, and LinkedIn (for professional courses). This includes organic content calendar, reels, stories, live Q&A with faculty, student take-overs, campus events. The goal: build trust, humanise your institution and promote word-of-mouth via alumni and student voice.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Why choose novatales for education epowerment */}

            <div data-aos="fade-up" data-aos-delay="100" className="health-why-novatales text-center d-flex justify-content-center flex-column align-items-center">
                <h2 className=' px-3' style={{
                    color: "#52377b"
                }}>
                    Why This Approach Works for Education
                </h2>
                <div className='row whyneedRealestate' >
                    <div className='col-lg-4'>
                        <div className=' whyNeedListCards' style={{
                            backgroundColor: "rgba(36, 73, 168, 0.03)",
                            margin: "4px",
                            height: "220px",
                            borderRadius: "10px",
                            padding: "12px 15px"
                        }}>
                            <div className='text-left d-flex justify-content-start ps-2 mt-1'>
                                <img src={online_realestate} alt='real estate digital agency' />
                            </div>
                            <div className='ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start'>
                                <span className='my-1' style={{
                                    color: "#52377b", fontSize: "18px", fontWeight: "bold"
                                }}>Longer decision journey?</span>
                                <p className='text-left' id='whyNeedRealP' style={{
                                    textAlign: "left", fontSize: "15px"
                                }}>
                                    Yes. That means more touch-points, we provide content and nurturing across that journey.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className=' whyNeedListCards' style={{
                            backgroundColor: "rgba(36, 73, 168, 0.03)",
                            margin: "4px",
                            height: "220px",
                            borderRadius: "10px",
                            padding: "12px 15px"
                        }}>
                            <div className='text-left d-flex justify-content-start ps-2 mt-1'>
                                <img src={social} alt='real estate digital agency' />
                            </div>
                            <div className='ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start'>
                                <span className='my-1' style={{
                                    color: "#52377b", fontSize: "18px", fontWeight: "bold"
                                }}>Multiple stakeholders?</span>
                                <p className='text-left' id='whyNeedRealP' style={{
                                    textAlign: "left", fontSize: "15px"
                                }}>
                                    We craft content for students and parents / guardians with emotional and logical messaging.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className=' whyNeedListCards' style={{
                            backgroundColor: "rgba(36, 73, 168, 0.03)",
                            margin: "4px",
                            height: "220px",
                            borderRadius: "10px",
                            padding: "12px 15px"
                        }}>
                            <div className='text-left d-flex justify-content-start ps-2 mt-1'>
                                <img src={gads} alt='real estate digital agency' />
                            </div>
                            <div className='ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start'>
                                <span className='my-1' style={{
                                    color: "#52377b", fontSize: "18px", fontWeight: "bold"
                                }}>Trust & credibility is key</span>
                                <p className='text-left' id='whyNeedRealP' style={{
                                    textAlign: "left", fontSize: "15px"
                                }}>
                                    Our methodology emphasises testimonials, alumni success, accreditations, faculty visibility and transparent outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row whyneedRealestate2 mt-md-4 ' >
                    <div className='col-lg-6 col-xl-5'>
                        <div className=' whyNeedListCards' style={{
                            backgroundColor: "rgba(36, 73, 168, 0.03)",
                            margin: "4px",
                            minHeight: "220px",
                            borderRadius: "10px",
                            padding: "12px 15px"
                        }}>
                            <div className='text-left d-flex justify-content-start ps-2 mt-1'>
                                <img src={data} alt='real estate digital agency' />
                            </div>
                            <div className='ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start'>
                                <span className='my-1' style={{
                                    color: "#52377b", fontSize: "18px", fontWeight: "bold"
                                }}>Location/format diversification</span>
                                <p className='text-left' id='whyNeedRealP' style={{
                                    textAlign: "left", fontSize: "15px"
                                }}>
                                    Whether you’re local (Hyderabad/Telangana), national or international, online or offline, we tailor platform mix and messaging accordingly.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-6 col-xl-5'>
                        <div className=' whyNeedListCards' style={{
                            backgroundColor: "rgba(36, 73, 168, 0.03)",
                            margin: "4px",
                            minHeight: "220px",
                            borderRadius: "10px",
                            padding: "12px 15px"
                        }}>
                            <div className='text-left d-flex justify-content-start ps-2 mt-1'>
                                <img src={analyst} alt='real estate digital agency' />
                            </div>
                            <div className='ps-2 d-flex justify-content-start gap-0 mt-1 flex-column align-items-start'>
                                <span className='my-1' style={{
                                    color: "#52377b", fontSize: "18px", fontWeight: "bold", textAlign: "left",
                                }}>Cost-sensitivity and ROI focussed</span>
                                <p className='text-left' id='whyNeedRealP' style={{
                                    textAlign: "left", fontSize: "15px"
                                }}>
                                    By combining SEO (long-term lower cost) with precision paid media, we maximise your marketing ROI and minimize wasted spend.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="health-why-novatales text-center d-flex justify-content-center mb-5 flex-column align-items-center">
                <h2 className=' px-3 ' style={{
                    color: "#52377b"
                }}>
                    Get Started With NovaTales
                </h2>
            </div>
            <div className="service-content LogoVisual pt-4 pb-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div data-aos="fade-up" className="service-para mt-3">
                                <div className="">
                                    <p>Ready to give your education institution the digital presence it deserves?</p>
                                    <p className='mt-1 ps-3'>  <span className='my-1' style={{
                                        color: "#52377b", fontSize: "18px", fontWeight: "bold"
                                    }}><FontAwesomeIcon icon={faAnglesRight} />  Free Consultation : </span>
                                        Let’s assess your current marketing performance, competition and digital landscape
                                    </p>
                                    <div className='my-2' >
                                        <p className='mt-1 ps-3'>  <span className='my-1' style={{
                                            color: "#52377b", fontSize: "18px", fontWeight: "bold"
                                        }}><FontAwesomeIcon icon={faAnglesRight} />  Custom Proposal : </span>
                                            We’ll outline a 90-day roadmap, budget options and key milestones.
                                        </p>
                                    </div>
                                    <p className='mt-1 ps-3'> <span className='' style={{
                                        color: "#52377b", fontSize: "18px", fontWeight: "bold"
                                    }}><FontAwesomeIcon icon={faAnglesRight} /> Launch & Grow : </span>
                                        Ongoing optimisation, monthly reporting and strategic expansion as we scale together.
                                    </p>
                                    <span className='' style={{
                                        color: "#000", fontSize: "18px", fontWeight: "bold"
                                    }}> Contact us today</span>
                                    <p className='mt-1 ps-3'>
                                        <span style={{
                                            color: "#52377b", fontWeight: "bold"
                                        }}> Novatales Media
                                        </span> – your digital growth partner in the education sector.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="fade-up" className="col-lg-6 d-flex justify-content-center">
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
                        <h2 className='text-center' style={{
                            textAlign: "center !important",
                            marginBottom: "40px",
                            marginTop: "40px",
                            color: "#52377b"
                        }}>Frequently Asked  Questions </h2>
                    </div>
                    <div className="faq-accordion">

                        {/* Left Column */}
                        <div className='faq_container' data-aos="fade-up">
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 1
                                        ? "accordion__item--active"
                                        : ""
                                        }`}
                                    onClick={() => toggleAccLeft(1)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            Why should an educational institution hire NovaTales Media?

                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 1 && (
                                        <div className="accordion__content fw-normal">
                                            NovaTales specializes in student-focused digital marketing strategies designed specifically for schools, colleges, coaching institutes, universities, and online course providers. We help you increase admissions, improve brand trust, build digital visibility, and generate high-quality leads consistently.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 2
                                        ? "accordion__item--active"
                                        : ""
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
                                            We work with schools, junior colleges, coaching centers, universities, online education platforms (EdTech), skill development centres, study-abroad consultants, and professional certification institutes.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 3
                                        ? "accordion__item--active"
                                        : ""
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
                                            Paid campaigns (Google & Meta Ads) generate leads within 7–10 days, while SEO-driven organic results take 3–6 months based on competition, content volume, and website quality.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 4
                                        ? "accordion__item--active"
                                        : ""
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
                                            Yes. We specialize in lead generation for admissions through Google Search Ads, Meta Ads, landing pages, WhatsApp automation, and nurturing flows.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 5
                                        ? "accordion__item--active"
                                        : ""
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
                                            We target students and parents using precise audience filters, keyword search intent, custom lookalike audiences, remarketing, and analytics. This helps attract serious and high-intent prospects rather than generic inquiries.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 6
                                        ? "accordion__item--active"
                                        : ""
                                        }`}
                                    onClick={() => toggleAccLeft(6)}
                                >
                                    <button className="accordion__btn real-estate-faq">
                                        <span className="accordion__caption fw-medium">
                                            Can you help with website improvement or creating a new website?

                                        </span>
                                        <span className="accordion__icon">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </span>
                                    </button>
                                    {activeIndexLeft === 6 && (
                                        <div className="accordion__content fw-normal">
                                            <p style={{ padding: "0" }} className='py-1'>Absolutely. We build and optimize education-focused websites with:</p>
                                            <ul className='mt-0 flex flex-column gap-2' >
                                                <li style={{ listStyleType: "disc" }}> Course structure & program pages </li>
                                                <li style={{ listStyleType: "disc" }}> Lead forms, CTAs & brochure downloads</li>
                                                <li style={{ listStyleType: "disc" }}> Fast speed & mobile-first layouts</li>
                                                <li style={{ listStyleType: "disc" }}> SEO-ready architecture </li>
                                                <li style={{ listStyleType: "disc" }}> WhatsApp & CRM integrations</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 7
                                        ? "accordion__item--active"
                                        : ""
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
                                            <p style={{ padding: "0" }} className='py-1'>Yes. We create:</p>
                                            <ul className='mt-0 flex flex-column gap-2' >
                                                <li style={{ listStyleType: "disc" }}> Course explainers</li>
                                                <li style={{ listStyleType: "disc" }}> Blogs</li>

                                                <li style={{ listStyleType: "disc" }}> Student testimonials</li>
                                                <li style={{ listStyleType: "disc" }}> Video reels</li>
                                                <li style={{ listStyleType: "disc" }}> Faculty introduction videos </li>
                                                <li style={{ listStyleType: "disc" }}> Virtual campus tours</li>
                                                <li style={{ listStyleType: "disc" }}> Success stories</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 8
                                        ? "accordion__item--active"
                                        : ""
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
                                            Yes. We run location-based targeting across India and abroad. Whether you want students from Hyderabad, Telangana, India-wide, or NRI students globally, we customize campaigns accordingly.
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 9
                                        ? "accordion__item--active"
                                        : ""
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
                                            <p style={{ padding: "0" }} className='py-1'>We track and report metrics such as:</p>
                                            <ul className='mt-0 flex flex-column gap-2' >
                                                <li style={{ listStyleType: "disc" }}> Cost per lead</li>
                                                <li style={{ listStyleType: "disc" }}> Lead quality score</li>
                                                <li style={{ listStyleType: "disc" }}> Conversion rate (enquiry → admission)</li>
                                                <li style={{ listStyleType: "disc" }}> Website traffic & keyword rankings</li>
                                                <li style={{ listStyleType: "disc" }}> Engagement rates </li>

                                            </ul>
                                            <p style={{ padding: "0", margin: "0" }}>
                                                This helps you clearly understand your ROI and scale effectively.
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="accordion " >
                                <div
                                    className={`accordion__item ${activeIndexLeft === 10
                                        ? "accordion__item--active"
                                        : ""
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

                                            <ul className='mt-0 flex flex-column gap-2' >
                                                <li style={{ listStyleType: "disc" }}> Education-specific experience</li>
                                                <li style={{ listStyleType: "disc" }}> Structured student funnel strategy</li>
                                                <li style={{ listStyleType: "disc" }}> Strong SEO + Paid Ads expertise</li>
                                                <li style={{ listStyleType: "disc" }}> Fast communication & monthly review calls</li>
                                                <li style={{ listStyleType: "disc" }}> Transparent performance reporting </li>
                                                <li style={{ listStyleType: "disc" }}> Tailored marketing plans for each institution size </li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="conclusion mb-5">
                    </div>
                </Container>
            </div>
        </>
    )
}

export default EducationService
