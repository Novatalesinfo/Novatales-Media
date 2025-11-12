import React, { useEffect } from 'react'
import tab_img_1 from "../images/casestudies/magnaid.webp"
import graph from "../images/casestudies/graph.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutHeroImage from '../images/casestudies/magnaid_case_lap.jpg';
import case_study_mobile_banner from '../images/casestudies/magnaid_case_mob.jpg';
const MagnaidWebDesign = () => {
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
                <div className='case-study-tabs-child' style={{ fontFamily: "Poppins" }}>

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
                                Magnaid Hospitals
                            </h3>
                            <p style={{
                                fontSize: "18px", color: "", padding: "0px 20px 0px"
                            }}> <span className='fw-bold' style={{
                                color: "#f3bc50"
                            }}>Industry : </span> Healthcare / Multi-Specialty Hospital</p>
                            <div className='inside-tab-child-div' style={{
                                padding: "0px !important"
                            }} >
                                <p style={{
                                    paddingLeft: "0px !important"
                                }} className=''>
                                    Magnaid Hospitals is a multi-specialty healthcare institution based in Hyderabad, committed to providing compassionate and advanced medical care. Known for its expertise in obstetrics and gynecology, pediatrics, orthopedics, and general medicine, Magnaid Hospitals combines clinical excellence with patient-centric service.                                </p>
                                <a href="https://magnaid.com/" target="_blank" rel="noopener noreferrer">
                                    <button className='inside-tab-child-div-button'>
                                        Visit website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Challenges and Niche Analysis  */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-3 d-flex ' style={{
                    }}>
                        <div className='col-lg-6 d-flex flex-column gap-2 p-3'>
                            <div>
                                <h3 style={{
                                    fontSize: "32px"
                                    ,  color: "#52377b",
                                }}>
                                    Challenges
                                </h3>
                                <p style={{
                                    fontSize: "16px", color: "gray", padding: "12px 0px 0 0"
                                }}>When Magnaid Hospitals collaborated with Novatales Media, it already had strong medical expertise but lacked a digital identity to represent its range of specialties and values:</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        Magnaid Hospitals wanted a modern, informative, and patient-friendly website that reflects their expertise across multiple specialties
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        The goal was to make it easy for patients to learn about treatments, find doctors, and book consultations online
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>
                                        The site needed to convey trust, medical authority, and accessibility.
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className='col-lg-6 d-flex flex-column p-3  ps-xl-5'>
                            <h3 style={{
                                fontSize: "32px",  color: "#52377b",
                            }}>
                                Solution
                            </h3>
                            <p style={{
                                fontSize: "16px", color: "gray", padding: "12px 0px 0 0"
                            }}>We designed a comprehensive website for Magnaid Hospitals:</p>

                            <ul style={{
                                marginTop: "24px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"
                                }}>
                                    Designed a clean, professional healthcare website with a focus on easy navigation and clear service categorization (General Surgery, Gynecology, Diabetology, Pulmonology, Orthopedics, etc.).
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"
                                }}
                                >
                                    Integrated appointment booking, doctor profiles, and Google Business Profile links to improve patient conversion and visibility.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", padding: "8px 0px"

                                }}>
                                    Used soft, reassuring colors and authentic imagery to build trust and comfort for patients visiting the site.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", padding: "8px 0px"

                                }}>
                                    Ensured full mobile responsiveness, SEO optimization, and fast load times to deliver an excellent user experience.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", padding: "8px 0px"

                                }}>
                                    Optimized with Hyderabad-based healthcare searches to reach a wide range of audience and attract new patients from the surrounding area.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", padding: "8px 0px"

                                }}>
                                    Included the expert profiles of doctors to build credibility and trust, improve transparency, and increase patient engagement.
                                </li>
                            </ul>

                        </div>

                    </div>
                    {/* Results */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-5 pb-5 d-flex align-items-center '>
                        <div className='col-xl-6 extra-padding-case-details'>
                            <h3 style={{
                                fontSize: "32px", color: "#52377b",
                            }}>
                                Results
                            </h3>
                            <p style={{
                                color: "gray",
                                padding: "12px 0px",
                                fontSize: "16px",
                                textAlign: "justify"
                            }}>
                                After the relaunch of the new website, Magnaid Hospital saw improvement in its digital presence:
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                    A credible, patient-focused website that positions Magnaid Hospitals as a trusted destination for comprehensive healthcare
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "16px"

                                }}> Improved online visibility, increased organic traffic, and appointment bookings through enhanced user flow and optimized design.</li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>Strengthened hospital branding and digital presence in Hyderabad’s competitive healthcare sector.

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

export default MagnaidWebDesign
