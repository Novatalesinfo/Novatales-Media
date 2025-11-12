import React, { useEffect } from 'react';
import digitalMarketingIllustration from '../../images/digital marketing illustration.svg';
import digitalMarketingTab from '../../images/digital marketing tab.svg';
import digitalMarketingWebImage from '../../images/portfolio/ai_powered-01.png';
import seoIcon from '../../images/SEO icon.png';
import emailMarketingIcon from '../../images/email marketing icon N.png';
import analyticsIcon from '../../images/analytics and business insights icon.png';
import socialMediaMarketingIcon from '../../images/social m marketing icon N.png';
import paidAdvertisingIcon from '../../images/paid advertising.png';
import '../../css/servisesCss/digital.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import contentMarketingIcon from '../../images/content marketing icon-01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import social from "../../images/casestudies/SEO 01-01.png"
import gads from "../../images/portfolio/geo_aeo-01.svg"
import data from "../../images/casestudies/Creative Storytelling-01.png"
import analyst from "../../images/casestudies/Advanced Analytics-01.png"
import online_realestate from "../../images/casestudies/NEXT GEN-01.png"

const AImarketing = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <HelmetProvider >
            <Helmet>
                <title>Transform Your Online Reach| Best Digital Marketing Agency </title>
                <meta
                    name="description"
                    content="NovaTales is a full service digital marketing and branding agency offering SEO, PPC, SMM, Analytics, Google Ads, YouTube Ads, Instagram Ads, Facebook Ads."
                />
                <meta name="keywords"
                    content="digital marketing agency, best digital marketing company, best digital marketing services, digital marketing company services,digital marketing company." />
            </Helmet>
            <div className='Digital'>
                <div className="service-heading">
                    <img src={digitalMarketingIllustration} width="100%" alt="digital marketing agency" className="lap" />
                    <img src={digitalMarketingTab} alt="digital marketing agency" className="tab" width="100%" />
                </div>
                <div className="service-content">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div data-aos="fade-up" data-aos-duration="1000">
                                    <div className="service-para mt-3">
                                        <h1>AI-Powered Digital Marketing Services by NovaTales Media</h1>
                                        <p className="mt-3">
                                            At NovaTales Media, we combine human creativity with Artificial Intelligence to deliver marketing that’s smarter, faster, and more personalized than ever before.
                                            Our AI-driven approach helps brands rank higher, engage better, and convert faster, all while adapting to the rapidly changing digital landscape.
                                        </p>
                                        <p>
                                            With integrated GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization), your brand becomes visible not just on Google, but across AI search platforms, voice assistants, and generative engines like ChatGPT, Bard (Gemini), Bing Copilot, and others.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center">
                                <div className="service-image">
                                    <div className="info-img position-relative">
                                        <img src={digitalMarketingWebImage} alt="digital marketing agency" className="img-fluid topBottom" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                        > How NovaTales Uses AI Across  Every Digital Channel
                        </h2>
                    </div>
                    <div className="container pt-5">
                        <div className="row mt-5">
                            <div className="col-lg-6 left-media" style={{ paddingRight: '70px' }}>
                                <div className="media">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className="media-image mt-2">
                                                <img src={seoIcon} alt="SEO icon" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12">
                                            <div className="media-body">
                                                <h4 className="">AI in SEO (Search + Generative + Answer Optimization)</h4>
                                                <p>
                                                    SEO has evolved beyond just keywords and backlinks, it’s now powered by machine learning and intent analysis.
                                                    At NovaTales, we use AI-driven SEO systems to:</p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Identify user intent and map content to search & voice queries.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Optimize pages for GEO (Generative Engine Optimization) to appear in AI search results</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Implement AEO (Answer Engine Optimization) for “People Also Ask” & featured snippets.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Use predictive SEO tools to detect keyword trends before competitors.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Automate technical audits & backlink quality checks.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Analyze search sentiment to create content that matches user tone.</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Result  : </span>
                                                    Better rankings, AI visibility, and higher trust in search and conversational platforms.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className="media-image mt-2">
                                                <img src={emailMarketingIcon} alt="Email marketing icon" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12">
                                            <div className="media-body">
                                                <h4 className="">AI in Email & Automation</h4>
                                                <p>
                                                    AI enables personalized communication at scale.
                                                    We use automation platforms with AI segmentation to:
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Send the right email to the right person at the right time.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predict open rates and click behavior</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Create dynamic subject lines based on user interests.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Automate re-engagement & loyalty campaigns</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Automate technical audits & backlink quality checks.</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Result  : </span>
                                                    Higher open rates, lower churn, and strong brand recall.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className="media-image mt-2">
                                                <img src={analyticsIcon} alt="Analytics and business insights icon" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12">
                                            <div className="media-body">
                                                <h4 className="">AI in Analytics & Insights</h4>
                                                <p>
                                                    AI doesn’t just show numbers, it finds meaning.
                                                    We integrate analytics tools powered by machine learning to :
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predict which channels will perform best next month</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Detect customer drop-off points in the funnel
                                                    </li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Identify new market opportunities</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Automate reporting dashboards
                                                    </li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Give real-time insights for smarter decisions</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Result  : </span>
                                                    Faster, data-driven marketing decisions that scale your performance month after month.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className="media-image mt-2">
                                                <img src={analyticsIcon} alt="Analytics and business insights icon" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12">
                                            <div className="media-body">
                                                <h4 className="">AI in Affiliate & Influencer Marketing</h4>
                                                <p>
                                                    AI tools help us identify and collaborate with the right influencers.
                                                </p>
                                                <p>We track engagement rates, audience demographics, and performance data to match the right influencer to your brand personality.</p>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Result  : </span>
                                                    Authentic partnerships and measurable reach that actually convert.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="media">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className="media-image mt-2">
                                                <img src={socialMediaMarketingIcon} alt="Social media marketing icon" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12">
                                            <div className="media-body">
                                                <h4 className="">AI in Social Media Marketing</h4>
                                                <p>
                                                    AI revolutionizes how we plan, create, and optimize content.We use AI to : </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Generate post ideas & trending content using real-time data.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Identify the best posting times for engagement using predictive analytics.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Create dynamic captions, ad copies, and hashtags optimized for reach.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Monitor audience behavior and auto-adjust strategies.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Use AI tools to edit reels and analyze performance instantly.</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Example  : </span>
                                                    Our AI tools can scan your competitors' content strategies and auto-suggest what to post next to outperform them.
                                                </p>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Result  : </span>
                                                    Consistent growth in followers, engagement, and brand visibility across platforms like Instagram, Facebook, LinkedIn, YouTube, and X (Twitter).
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className="media-image mt-2">
                                                <img src={paidAdvertisingIcon} alt="paid advertsing icon" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12">
                                            <div className="media-body">
                                                <h4 className="">AI in Paid Advertising (PPC + Social Ads)
                                                </h4>
                                                <p>
                                                    We let AI take the guesswork out of ad performance.
                                                    NovaTales uses AI for:
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Smart bidding to reduce cost per conversion</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Ad copy generation optimized for CTR & emotional triggers.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Create dynamic captions, ad copies, and hashtags optimized for reach.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Dynamic audience segmentation using AI-based behavioral data</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> A/B testing automation – the system itself finds the best-performing ads.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predictive budget allocation based on past performance.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> GEO & interest-based targeting for maximum ROI.</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Example  : </span>
                                                    Our AI engine predicts which creatives will perform best — before spending a single rupee
                                                </p>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Result  : </span>
                                                    Up to 40% better ad performance and higher ROI on Google, Meta, and LinkedIn Ads.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className=" mt-2">
                                                <img src={contentMarketingIcon} alt="paid advertsing icon" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12">
                                            <div className="media-body">
                                                <h4 className="">AI in Content Marketing
                                                </h4>
                                                <p>
                                                    Content that ranks and resonates is now built smarter, not just written longer.
                                                    We use AI for:
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Topic & keyword clustering using semantic intelligence</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Blog & landing page generation optimized for GEO + AEO</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Create dynamic captions, ad copies, and hashtags optimized for reach.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Readability enhancement & tone alignment for audience emotion</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Plagiarism & factual validation with AI fact-checking</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Automatic metadata and schema tagging.</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Example  : </span>
                                                    Our AI-driven content system ensures every piece is SEO-ready, voice-friendly, and conversion-focused.
                                                </p>
                                                <p>
                                                    <span className='fw-bold' style={{
                                                        color: "#fec436"
                                                    }}>Result  : </span>
                                                    Content that ranks across search, AI engines, and voice assistants like Siri, Alexa, and Google Assistant.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className="health-why-novatales text-center d-flex justify-content-center flex-column align-items-center">
                    <h2 className=' px-3' style={{
                        color: "#52377b"
                    }}>
                        Why Choose NovaTales Media?
                    </h2>
                    <div className='row whyneedRealestate' >
                        <div className='col-lg-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "210px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={online_realestate} alt='real estate digital agency' />
                                </div>
                                <div className='d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>AI + Human Expertise</span>
                                    <p className='text-left' id='whyNeedRealP'>
                                        The perfect blend of intelligent automation and creative storytelling.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "210px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={social} alt='real estate seo company' />
                                </div>
                                <div className='d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>Full-Funnel Digital Strategy</span>
                                    <p className='text-left' id='whyNeedRealP'>
                                        From discovery to conversion everything is AI-optimized.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "210px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={data} alt='online marketing real estate' />
                                </div>
                                <div className=' d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>Customized Dashboards</span>
                                    <p className='text-left' id='whyNeedRealP'>
                                        Real-time visibility into your marketing performance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row whyneedRealestate2 mt-md-4 ' >
                        <div className='col-lg-5'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                borderRadius: "10px", height: "210px",
                            }}>
                                <div>
                                    <img src={analyst} alt='digital agency for real estate' />
                                </div>
                                <div className=' d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>Proven Results</span>
                                    <p className='text-left' id='whyNeedRealP'>
                                        Improved ROI, reduced ad spend waste, and 24/7 campaign optimization.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "210px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={gads} alt='advertising for real estate'  style={{
                                        width: "50px"
                                    }} />
                                </div>
                                <div className=' d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    <span className='' style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>Future-Ready Optimization (GEO+AEO)</span>
                                    <p className='text-left' id='whyNeedRealP'>
                                        Appear in search, voice, and generative results.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AllServices />
                <ServiceContactForm />
            </div>
        </HelmetProvider>
    )
}

export default AImarketing
