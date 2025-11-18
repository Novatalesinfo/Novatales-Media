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
                                            At NovaTales Media, we combine human creativity with the power of advanced Artificial Intelligence to deliver digital marketing that is smarter, faster, and deeply personalized.</p>
                                        <p>
                                            Our AI-driven ecosystem boosts brand visibility, sharpens targeting, enhances engagement, and accelerates conversions, all while staying aligned with modern search behavior across Google, voice assistants, and Generative AI platforms.
                                        </p>
                                        <p>
                                            With integrated GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization), your brand becomes discoverable across:
                                        </p>
                                        <ul>
                                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Google Search</li>
                                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> AI search engines</li>
                                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Voice assistants (Alexa, Siri, Google Assistant)</li>
                                            <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Generative engines (ChatGPT, Gemini, Bing Copilot, Perplexity, Claude)</li>

                                        </ul>
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
                        > How NovaTales Uses AI Across Every Digital Channel
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
                                                <h4 className="">AI in SEO (Search + Generative + Answer Optimization)</h4>
                                                <p>
                                                    SEO has evolved from keyword stuffing to intent-driven, AI-assisted search visibility.
                                                    NovaTales uses advanced AI tools to dominate organic + generative search.</p>
                                                <p className='fw-bold'>AI Tools We Use</p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Surfer SEO → On-page optimization using NLP.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Semrush + Ahrefs AI → Competitor analysis, backlinks, keyword intelligence</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> RankMath / Yoast AI → Content scoring + schema automation</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> ChatGPT-5 + Gemini Advanced → GEO-optimized content generation</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Frase / MarketMuse → Intent mapping, clustering, content briefs</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Screaming Frog + DeepCrawl → Automated technical SEO audits</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Answer The Public AI → AEO optimization for PAA queries</li>
                                                </ul>
                                                <p className='fw-bold'>
                                                    What We Achieve
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Identify user intent with semantic analysis</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Optimize for GEO (Generative Engine Optimization)</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Implement AEO (Answer Engine Optimization) for snippets</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predict keyword trends with machine learning</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Automate technical audits & link quality checks</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Analyze search sentiment for better content tone</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' >Result  : </span>
                                                    Higher organic rankings, AI search visibility, and stronger authority across conversational platforms.
                                                </p>
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
                                                <h4 className="">AI in Email & Automation</h4>
                                                <p>
                                                    Hyper-personalized marketing at scale
                                                </p>
                                                <p className='fw-bold'>AI Tools We Use</p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> MailChimp AI / Klaviyo AI</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> HubSpot Marketing Hub AI</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Omnisend AI</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Sender.net AI</li>
                                                </ul>
                                                <p className='fw-bold'>What We Achieve</p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> AI segmentation → Right email, right time</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predictive open & click rates</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Dynamic subject lines</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Automated re-engagement</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Personalized user journeys</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' >Result  : </span>
                                                    Higher open rates, repeat customers, and lower churn.
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
                                                <h4 className="">AI in Analytics & Insights</h4>
                                                <p>
                                                    AI gives meaning to data and predictions for the future.
                                                </p>
                                                <p className='fw-bold'>
                                                    AI Tools We Use

                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Google Analytics 4 (GA4 AI Predictions)</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Google Looker Studio AI
                                                    </li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Hotjar AI Insights</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Mixpanel Predictive Analytics
                                                    </li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> HubSpot AI CRM</li>
                                                </ul>
                                                <p className='fw-bold'>
                                                    What We Achieve
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predict high-performing channels</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Understand customer drop-offs
                                                    </li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Identify new opportunities</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Auto-generate reports
                                                    </li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Real-time optimization
                                                    </li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold'>Result  : </span>
                                                    Faster, data-driven decisions with continuous growth.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* AI in Affiliate & Influencer Marketing */}
                                <div data-aos="fade-up" className="media">
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className="media-image mt-2">
                                                <img src={analyticsIcon} alt="Analytics and business insights icon" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-10 col-md-10 col-sm-12">
                                            <div className="media-body">
                                                <h4 className="">AI in Affiliate & Influencer Marketing</h4>
                                                <p className='fw-bold'>
                                                    AI Tools We Use
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Upfluence AI</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Influencity AI
                                                    </li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Modash AI
                                                    </li>

                                                </ul>
                                                <p className='fw-bold'>
                                                    What We Achieve
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Identify genuine influencers</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Analyze demographics, engagement & authenticity
                                                    </li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Match influencers to brand personality</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Track conversions & ROI
                                                    </li>
                                                </ul>                                                <p>
                                                    <span className='fw-bold' >Result  : </span>
                                                    Authentic collaborations with measurable impact.
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
                                                <h4 className="">AI in Social Media Marketing</h4>
                                                <p>
                                                    Social media is now fueled by predictive intelligence, not guesswork. </p>
                                                <p className='fw-bold'>
                                                    AI Tools We Use
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Lately.ai / Predis.ai → AI content generation, post ideas</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Canva AI / Adobe Firefly → Creative generation</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> InVideo AI / CapCut AI → Reel editing & auto-cuts</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Notch Social AI → Influencer analysis.</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Hootsuite AI / Buffer AI → Predictive posting times</li>
                                                </ul>
                                                <p className='fw-bold'>
                                                    What We Achieve
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> AI-generated content ideas & captions</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Auto-researched hashtags & competitor insights</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predictive engagement optimization</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Instant reel/video enhancement</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Strategy adjustments based on behavior analytics</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' >Result  : </span>
                                                    Growth in followers, engagement, and brand visibility across Instagram, Facebook, LinkedIn, YouTube & X.                                                </p>
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
                                                <h4 className="">AI in Paid Advertising (Google, Meta, LinkedIn)
                                                </h4>
                                                <p>
                                                    We use AI to maximize ROI and reduce ad wastage.
                                                </p>
                                                <p className='fw-bold'>
                                                    AI Tools We Use
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Google Ads Smart Bidding AI</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Meta Advantage+ AI</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> LinkedIn Campaign AI Optimization</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> AdCreative.ai → High-performing ad creatives</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Revealbot AI → Automated rules, auto A/B testing</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Madgicx AI → Predictive campaign suggestions</li>
                                                </ul>
                                                <p className='fw-bold'>
                                                    What We Achieve
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Smart bidding to lower CPA</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> AI-generated ad copies & creatives</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Dynamic audience segmentation</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> AI-powered A/B testing</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predictive budget allocation</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> GEO + intent-based targeting</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' >Example  : </span>
                                                    Our system predicts the top-performing creative before spending any ad budget.
                                                </p>
                                                <p>
                                                    <span className='fw-bold'>Result  : </span>
                                                    Up to 40% improvement in ad performance and higher ROI.
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
                                                <h4 className="">AI in Content Marketing
                                                </h4>
                                                <p>
                                                    Content is now powered by semantic intelligence and generative AI.
                                                </p>
                                                <p className='fw-bold'>
                                                    AI Tools We Use
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Jasper / Writesonic / ChatGPT-5 → Conversion copies</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Frase / MarketMuse → Topic clustering & SERP scoring</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Originality.ai → Plagiarism & AI detection</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Grammarly AI → Tone, readability, emotion scoring</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Schema Markup AI tools → Metadata automation</li>
                                                </ul>
                                                <p className='fw-bold'>
                                                    What We Achieve
                                                </p>
                                                <ul>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> GEO + AEO optimized blogs</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Multilingual content with high accuracy</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Emotionally aligned storytelling</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Auto-generated schema, metadata, FAQs</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Predictive budget allocation</li>
                                                    <li className='justifyText'><FontAwesomeIcon icon={faAnglesRight} /> Voice-search friendly content</li>
                                                </ul>
                                                <p>
                                                    <span className='fw-bold' >Result  : </span>
                                                    Content that ranks on Google + AI engines + voice assistants.
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
                    <div className='row whyneedRealestate gap-0' >
                        <div className='col-md-6 col-lg-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "170px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={online_realestate} alt='real estate digital agency' />
                                </div>
                                <div className='d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    {/* <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>AI + Human Expertise</span> */}
                                    <p className='text-left' id='whyNeedRealP'>
                                        AI + Human Intelligence, best of creativity + precision
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-6 col-lg-4 mt-md-0 mt-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "170px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={social} alt='real estate seo company' />
                                </div>
                                <div className='d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    {/* <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>Full-Funnel Digital Strategy</span> */}
                                    <p className='text-left' id='whyNeedRealP'>
                                      Full-Funnel AI Optimization, from discovery to conversion
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-6 col-lg-4 mt-lg-0 mt-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "170px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={data} alt='online marketing real estate' />
                                </div>
                                <div className=' d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    {/* <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>Customized Dashboards</span> */}
                                    <p className='text-left' id='whyNeedRealP'>
                                        24/7 AI Monitoring & Optimization
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-6 col-lg-4 mt-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "170px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={online_realestate} alt='real estate digital agency' />
                                </div>
                                <div className='d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    {/* <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>AI + Human Expertise</span> */}
                                    <p className='text-left' id='whyNeedRealP'>
                                        Custom Dashboards with Predictive Metrics

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-6 col-lg-4 mt-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "170px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={analyst} alt='real estate seo company' />
                                </div>
                                <div className='d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    {/* <span style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>Full-Funnel Digital Strategy</span> */}
                                    <p className='text-left' id='whyNeedRealP'>
                                      Higher ROI and reduced ad wastage
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' col-md-6  col-lg-4 mt-4'>
                            <div className=' d-flex flex-column justify-content-center align-items-center whyNeedListCards' style={{
                                backgroundColor: "rgba(36, 73, 168, 0.03)",
                                margin: "4px",
                                height: "170px",
                                borderRadius: "10px",
                            }}>
                                <div>
                                    <img src={gads} alt='advertising for real estate' style={{
                                        width: "50px"
                                    }} />
                                </div>
                                <div className=' d-flex justify-content-center gap-0 flex-column align-items-center'>
                                    {/* <span className='' style={{
                                        color: "#52377b", fontSize: "20px", fontWeight: "bold"
                                    }}>Future-Ready Optimization (GEO+AEO)</span> */}
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
