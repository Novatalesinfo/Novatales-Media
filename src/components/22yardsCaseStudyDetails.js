import React, { useEffect } from 'react'
import tab_img_1 from "../images/casestudies/yards_22.webp"
import graph from "../images/casestudies/graph.png"
import "swiper/css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutHeroImage from "../images/casestudies/case_study_22_lap.jpg"
import case_study_mobile_banner from "../images/casestudies/case_study_22_mob.jpg"
const TwentyCaseStudyDetails = () => {
    useEffect(() => {
        AOS.init();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])
    return (
        <>
            {/* Top Banner of the page  */}
           <div className="about-hero">
                                      <img src={aboutHeroImage} width="100%" alt="best digital advertising agencies" className="lap" />
                                      <img src={case_study_mobile_banner} alt="best digital advertising agencies" className="tab" width="100%" />
                                  </div>
            <div className='case-study-tabs-parents'>
                <div className='case-study-tabs-child'>

                    {/* About the case  */}
                    <div data-aos="fade-up" data-aos-delay="300" className='row mt-5 mb-3 d-flex align-items-center case-study-details-row'  style={{
                    }}>
                        <div className='col-lg-6 d-flex justify-content-center  p-lg-5'>
                            <img src={tab_img_1} alt='' className='case-study-tabs-img' />
                        </div>
                        <div className='col-lg-6 ps-lg-5'>
                            <p style={{
                                fontSize: "18px", color: "gray", padding: "12px 0px"
                            }}>About the Client</p>
                            <h3 style={{
                                fontSize: "32px", color: "#9b499c"
                            }}>
                                22 Yards
                            </h3>
                            <div className='inside-tab-child-div' style={{
                                padding: "0px !important"
                            }} >
                                <p style={{
                                    paddingLeft: "0px !important"
                                }} className=''>
                                    22 Properties is a cutting-edge Fractional Real Estate Investment Platform that empowers individuals to invest in premium commercial and hospitality properties with a low capital entry point. Through fractional ownership, investors can enjoy rental income, property appreciation, and a stake in high-value assets such as hotels, resorts, and commercial spaces. With transparency, legal clarity, and professional asset management, 22 Properties is revolutionizing how Indians invest in real estate.
                                </p>
                                <a href="https://22yardsprop.com/" target="_blank" rel="noopener noreferrer">
                                    <button className='inside-tab-child-div-button'>
                                        Visit website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Challenges and Niche Analysis  */}
                    <div className='row mt-5 mb-3 d-flex ' data-aos="fade-up" data-aos-delay="100" style={{
                    }}>
                        <div className='col-lg-6 d-flex flex-column gap-2 p-3'>
                            <div>
                                <h3 style={{
                                    fontSize: "32px", color: "#2f2144"
                                }}>
                                    Challenges
                                </h3>
                                <p style={{
                                    fontSize: "16px", color: "gray", padding: "12px 0px 0 0"
                                }}>When 22 Yards approached NovaTales Media, they were preparing to launch their latest investment opportunity—a fractional ownership model for a hotel in Shirdi—and were facing the following challenges:</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        Low awareness about the concept of fractional ownership in Tier 1 and Tier 2 markets.                                    </li>
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        High-involvement product that required detailed education and trust-building.                                    </li>
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>No inbound lead generation funnel in place for interested investors.
                                    </li>
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>Lack of a targeted paid marketing strategy for high-net-worth individuals (HNIs) and business owners.
                                    </li>
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>Minimal SEO visibility for search terms related to real estate investments and fractional property investment in India.
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className='col-lg-6 d-flex flex-column p-3'>
                            <h3 style={{
                                fontSize: "32px", color: "#2f2144"
                            }}>
                                Niche Analysis
                            </h3>
                            <p style={{
                                fontSize: "16px", color: "gray", padding: "12px 0px 0 0"
                            }}>The fractional real estate space is rapidly growing but still nascent in India. Key insights:</p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144"
                                }}>
                                    The Indian investor community is still warming up to alternative investment options outside of gold, FD, and mutual funds.
                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"
                                }}>
                                    Educational content around ROI, safety, legal structure, and tax implications is crucial.
                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"
                                }}>
                                    Most investment decisions in this space are long-cycle, trust-based, and involve multiple touchpoints before conversion.
                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144"
                                }}>
                                    The TG (target group) includes business owners, NRIs, senior professionals, and retired individuals seeking passive income.
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Solutions */}
                    <div className='mt-5 mb-3 d-flex flex-column' data-aos="fade-up" data-aos-delay="100">
                        <h3 style={{
                            fontSize: "32px"
                        }}>
                            Our Solutions
                        </h3>
                        <p style={{
                            fontSize: "16px", color: "gray", padding: "12px 0px 12px 0"
                        }}>To build credibility and drive leads for their Shirdi project, we implemented a full-funnel digital strategy:</p>

                        <p style={{
                            paddingTop: "16px",

                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Investor Education Campaigns</span> : Designed ad creatives and carousel posts explaining how fractional ownership works, benefits vs. traditional real estate, expected returns, and legal safeguards.
                        </p>
                        <p style={{
                            paddingTop: "16px",

                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Targeted Meta Lead Ads</span> : Focused campaigns targeting HNIs, business owners, and real estate investors in Hyderabad and Bangalore, with lead forms integrated into WhatsApp and CRM.</p>
                        <p style={{
                            paddingTop: "16px",

                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Landing Page Optimization</span> : Developed a conversion-focused landing page for the Shirdi investment opportunity with compelling USPs, property walkthrough videos, and downloadable brochures.</p>
                        <p style={{
                            paddingTop: "16px",

                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Explainer Video Ads</span> :Created video content highlighting investment opportunities and real customer testimonials to build trust and convey professionalism.</p>
                        <p style={{
                            paddingTop: "16px",

                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>SEO Consultation</span> : Advised on content clusters around keywords such as “fractional property investment India,” “invest in hotels India,” “passive income through real estate.”</p>

                    </div>


                    {/* Results */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-3 d-flex align-items-center  ' style={{

                    }}>
                        <div className='col-xl-6 extra-padding-case-details'>
                            <h3>
                                Results
                            </h3>
                            <p style={{
                                color: "#2f2144",
                                padding: "12px 0px",
                                fontSize: "16px",
                                textAlign: "justify"
                            }}>
                                In just 4 weeks of active campaigning, 22 Yards saw :
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                    1,000+ highly interested leads captured across campaigns, especially from Hyderabad and Bangalore.
                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "16px"

                                }}>	30+ qualified investor calls booked directly from the landing page and WhatsApp lead funnel.</li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}> 	Click-through Rate (CTR) of 4.2% on Meta campaigns—well above the real estate benchmark.

                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>  A growing audience base of financially savvy professionals and investors, now nurtured through remarketing and newsletters.
                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>  Enhanced brand authority as an educational leader in the fractional real estate space through thought-leadership content and video explainers.
                                </li>
                            </ul>
                        </div>
                        <div className='col-xl-6 d-flex justify-content-center align-items-center'>
                            <img src={graph} alt='' className='case-study-tabs-img' />
                        </div>
                    </div>

                    {/* Results in Numbers */}
                    <div data-aos="fade-up" data-aos-delay="100" style={{
                        paddingBottom: "25px", minHeight: "350px"
                    }} className='row mt-5 mb-3 d-flex align-items-center '>
                        <h3 style={{
                            paddingBottom: "25px", fontSize: "32px"
                        }} className='text-center mb-3'>See The Results</h3>
                        <div className='col-lg-3 col-md-6 p-2 d-flex justify-content-center '>
                            <div style={{
                                border: "1px solid #fec426",
                                display: "flex",
                                width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: "20px 20px 15px 20px",
                                borderRadius: "24px"
                            }}>
                                <h4 style={{
                                    fontSize: "40px",
                                    color: "#53377b",
                                    fontWeight: "500"
                                }}>

                                    1000+
                                </h4>
                                <p style={{
                                    fontSize: "18px",
                                    color: "#f3bc50", textAlign: "center"
                                }}>Highly Interested Lead</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 p-2 d-flex justify-content-center'>
                            <div style={{
                                border: "1px solid #fec426",
                                display: "flex", width: "100%",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: "20px 20px 15px 20px",
                                borderRadius: "24px"
                            }}>
                                <h4 style={{
                                    fontSize: "40px",
                                    color: "#53377b",
                                    fontWeight: "500"
                                }}>

                                    30+
                                </h4>
                                <p style={{
                                    fontSize: "18px",
                                    color: "#f3bc50", textAlign: "center"
                                }}>
                                    Qualified Investor </p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 p-2 d-flex justify-content-center'>
                            <div style={{
                                border: "1px solid #fec426",
                                display: "flex",
                                justifyContent: "center", width: "100%",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: "20px 20px 15px 20px",
                                borderRadius: "24px"
                            }}>
                                <h4 style={{
                                    fontSize: "40px",
                                    color: "#53377b",
                                    fontWeight: "500"
                                }}>

                                    4.2%
                                </h4>
                                <p style={{
                                    fontSize: "18px",
                                    color: "#f3bc50", textAlign: "center"
                                }}>Click-through Rate </p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 p-2 d-flex justify-content-center'>
                            <div style={{
                                border: "1px solid #fec426", width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: "20px 20px 15px 20px",
                                borderRadius: "24px"
                            }}>
                                <h4 style={{
                                    fontSize: "40px",
                                    color: "#53377b",
                                    fontWeight: "500"
                                }}>
                                    15000+
                                </h4>
                                <p style={{
                                    fontSize: "18px",
                                    color: "#f3bc50",
                                    textAlign: "center"
                                }}>YouTube Videos Views</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TwentyCaseStudyDetails
