import React, { useEffect } from 'react'
import tab_img_1 from "../images/casestudies/endula.webp"
import graph from "../images/casestudies/graph.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutHeroImage from "../images/casestudies/endula_lap.jpg"
import case_study_mobile_banner from "../images/casestudies/endula_mob.jpg"
const EndulaWebDesign = () => {
    useEffect(() => {
        AOS.init();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
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
                    <div data-aos="fade-up" data-aos-delay="300" className='row mt-5 mb-3 d-flex align-items-center case-study-details-row' style={{
                    }}>
                        <div className='col-lg-6 d-flex justify-content-center  p-lg-5'>
                            <img src={tab_img_1} alt='' className='case-study-tabs-img' />
                        </div>
                        <div className='col-lg-6 ps-lg-5 pt-3 pt-lg-0'>
                            <p style={{
                                fontSize: "18px", color: "gray", padding: "0px 0px"
                            }}>About the Client</p>
                            <h3 style={{
                                fontSize: "32px", color: "#f3bc50"
                            }}>
                                Endula Infra LLP
                            </h3>
                            <p style={{
                                fontSize: "18px", color: "", padding: "0px 20px 0px"
                            }}> <span className='fw-bold' style={{
                                color: "#f3bc50"
                            }}>Industry : </span> Infrastructure</p>
                            <div className='inside-tab-child-div' style={{
                                padding: "0px !important"
                            }} >
                                <p style={{
                                    paddingLeft: "0px !important"
                                }} className=''>
                                    Endula Infra is a Stone Crushing Industry based in Hyderabad and has been in existence for more than three decades, placing the company as an industry legend in Stone crushing
                                </p>
                                <a href="https://endulainfra.com/" target="_blank" rel="noopener noreferrer">
                                    <button className='inside-tab-child-div-button'>
                                        Visit website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Challenges and Niche Analysis  */}
                    <div data-aos="fade-up" data-aos-delay="300" className='row mt-5 mb-3 d-flex '>
                        <div className='col-lg-6 d-flex flex-column gap-2 p-3'>
                            <div>
                                <h3 style={{
                                    fontSize: "32px"
                                    , color: "#2f2144"
                                }}>
                                    Challenges
                                </h3>
                                <p style={{
                                    fontSize: "16px", color: "gray", padding: "12px 0px 0 0"
                                }}>When Endula Infra partnered with Novatales Media, they already had a strong operational setup but lacked a prominent digital presence and identity, which could have reflected their professionalism.</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        Difficulty in showcasing their services and client testimonials online.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        Limited client inquiries and bookings, which restricted their business growth.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>
                                        No professional web presence that reflects their credibility in infrastructure development.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"

                                    }}>
                                        Needed clear, well-structured content and visual appeal to attract investors, stakeholders, and clients.
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className='col-lg-6 d-flex flex-column p-3  ps-xl-5'>
                            <h3 style={{
                                fontSize: "32px", color: "#2f2144"
                            }}>
                                Solution
                            </h3>
                            <p style={{
                                fontSize: "16px", color: "gray", padding: "12px 0px 0 0"
                            }}>We developed a responsive, functional, and visually appealing website for Endula Infra:</p>
                            <div data-aos="fade-up" data-aos-delay="100" className='mb-3 d-flex flex-column'>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>Website design & UX</span> : Designed a clean, modern UI for easy navigation and engagement with strong branding to evoke trust and stability.
                                </p>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>Services & Portfolio Presentation</span> : Organized content sections to highlight projects, services, client testimonials, and company vision to clearly communicate the expertise.</p>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>Optimized Experience</span> : Optimized for performance and responsiveness to ensure smooth access across devices.</p>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>SEO & Performance optimization</span> : Implemented on-page SEO and fast-loading pages for better user experience and search ranking.</p>
                            </div>
                        </div>

                    </div>
                    {/* Results */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-5 pb-5 d-flex align-items-center ' style={{

                    }}>
                        <div className='col-xl-6 extra-padding-case-details'>
                            <h3 style={{
                                fontSize: "32px"
                            }}>
                                Results
                            </h3>
                            <p style={{
                                color: "gray",
                                padding: "12px 0px",
                                fontSize: "16px",
                                textAlign: "justify"
                            }}>
                                Within weeks of launching a website, Endula Infra saw:
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                    A professional, trustworthy online platform that helped Endula Infra present its portfolio effectively to potential clients and partners
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "16px"

                                }}> Enhanced credibility and increased trust among vendors, clients, and business partners.</li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>Increased client inquiries and leads through the integrated Contact form.

                                </li>
                            </ul>
                        </div>
                        <div className='col-xl-6 d-flex justify-content-center align-items-center'>
                            <img src={graph} alt='' className='case-study-tabs-img' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EndulaWebDesign
