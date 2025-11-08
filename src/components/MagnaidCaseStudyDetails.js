import React, { useEffect } from 'react'
import tab_img_1 from "../images/casestudies/magnaid.webp"
import graph from "../images/casestudies/graph.png"
import "swiper/css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutHeroImage from '../images/casestudies/magnaid_case_lap.jpg';
import case_study_mobile_banner from '../images/casestudies/magnaid_case_mob.jpg';
const MagnAidCaseStudyDetails = () => {
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
                <div className='case-study-tabs-child' style={{fontFamily: "Poppins"  }}>

                    {/* About the case  */}
                    <div data-aos="fade-up" data-aos-delay="300" className='row mt-5 mb-3 d-flex align-items-center case-study-details-row' style={{
                    }}>
                        <div className='col-lg-6 d-flex justify-content-center  p-lg-5'>
                            <img src={tab_img_1} alt='' className='case-study-tabs-img' />
                        </div>
                        <div className='col-lg-6 ps-lg-5'>
                            <p style={{
                                fontSize: "18px", color: "gray", padding: "12px 0px"
                            }}>About the Client</p>
                            <h3 style={{
                                fontSize: "32px",
                                color: "#9b499c"
                            }}>
                                MagnAid Hospitals
                            </h3>
                            <div className='inside-tab-child-div' style={{
                                padding: "0px !important"
                            }} >
                                <p style={{
                                    paddingLeft: "0px !important"
                                }} className=''>
                                    Magnaid Hospitals is a multi-speciality healthcare institution based in Hyderabad, committed to providing compassionate and advanced medical care. Known for its expertise in obstetrics and gynecology, pediatrics, orthopedics, and general medicine, Magnaid Hospitals combines clinical excellence with patient-centric service.
                                </p>
                                <a href="https://www.magnaid.com/" target="_blank" rel="noopener noreferrer">
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
                                }}>When Magnaid Hospitals approached Novatales Media, they were facing several digital growth challenges:</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        <span style={{
                                            fontWeight: "bold",
                                            color: "#f3bc50"
                                        }}>Low Online Visibility</span> : Despite a strong offline presence, the hospital struggled to gain traction on search engines and social media platforms.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        <span style={{
                                            fontWeight: "bold", color: "#f3bc50"
                                        }}>Poor Engagement on Social Media</span> : Their existing pages lacked consistent branding, educational content, and engagement.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>
                                        <span style={{
                                            fontWeight: "bold", color: "#f3bc50"
                                        }}>Limited Inbound Leads</span> :   There was no clear digital funnel or conversion path for patient inquiries or appointments.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"

                                    }}>
                                        <span style={{
                                            fontWeight: "bold", color: "#f3bc50"
                                        }}>No Performance Marketing Setup</span> :   The hospital wasn’t leveraging paid campaigns effectively to drive awareness or leads.
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className='col-lg-6 d-flex flex-column p-3'>
                            <h3 style={{
                                fontSize: "32px",  color: "#52377b",
                            }}>
                                Niche Analysis
                            </h3>
                            <p style={{
                                fontSize: "16px", color: "gray", padding: "12px 0px 0 0"
                            }}>The healthcare industry in India, especially in metro cities like Hyderabad, is highly competitive, with corporate hospitals and individual clinics investing heavily in digital marketing. Patients increasingly rely on Google search, reviews, and social media to evaluate healthcare providers. For the obstetrics and gynecology niche in particular:</p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    <span className='fw-bold' style={{
                                        color: "#f3bc50"
                                    }}> Trust and credibility</span> are vital patients look for experience, testimonials, and health tips.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"

                                }}>
                                    <span className='fw-bold' style={{
                                        color: "#f3bc50"
                                    }}>  Localized SEO</span> and<span className='fw-bold' style={{
                                        color: "#f3bc50"
                                    }}> Google Business Profile</span>  optimization are essential for walk-in and emergency-based services.


                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    High-value services like <span className='fw-bold' style={{
                                        color: "#f3bc50"
                                    }}> fertility treatments and maternity packages</span>  demand focused campaigns with informative content and expert branding.


                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Solutions */}
                    <div data-aos="fade-up" data-aos-delay="100" className='mt-5 mb-3 d-flex flex-column'>
                        <h3 style={{
                            fontSize: "32px"  ,color: "#52377b",
                        }}>
                            Our Solutions
                        </h3>
                        <p style={{
                            fontSize: "16px", color: "gray", padding: "12px 0px 12px 0"
                        }}>We created a comprehensive digital strategy for MagnAid Hospitals:</p>

                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Social Media Revamp</span> : Curated monthly content calendars focused on health awareness, doctor highlights, patient testimonials, and women-centric wellness campaigns.
                        </p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>SEO & Content Strategy</span> : Optimized website content and blog articles targeting relevant medical keywords (e.g., “best gynecologist in Hyderabad,” “pregnancy diet tips,” etc.).</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Meta Lead Generation Ads</span> : Launched targeted Facebook & Instagram lead ads promoting gynecology consultation, maternity packages, and general health checkups.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Google Business Profile Optimization</span> : Ensured accurate location, service listings, regular post updates, and review collection strategies.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Video Marketing</span> : Helped script and promote short videos featuring Dr. Sindhu Kodali, an in-house obstetrician, to increase trust and visibility.</p>

                    </div>

                    {/* Results */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-3 d-flex align-items-center ' style={{

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
                                Within just 3 months of implementation, Magnaid Hospitals began seeing significant improvements:
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                    <span className='fw-bold' style={{
                                        color: "#f3bc50"
                                    }} >70% increase in Instagram engagement</span>   and <span className='fw-bold' style={{
                                        color: "#f3bc50"
                                    }}> over 1,000+</span>  followers gained organically.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "16px"

                                }}> <span className='fw-bold' style={{
                                    color: "#f3bc50"
                                }}>500+ leads generated</span> via Meta ads with a conversion-focused landing page and WhatsApp integration</li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}> Improved online reputation with a <span className='fw-bold' style={{
                                    color: "#f3bc50"
                                }}> 40% rise in 5-star reviews</span>  on Google.

                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>  High-performing YouTube Videos, some crossing <span className='fw-bold' style={{
                                    color: "#f3bc50"
                                }}> 15,000+ views,</span> especially around pregnancy tips and doctor Q&As.



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

                                    70%
                                </h4>
                                <p style={{
                                    fontSize: "18px",
                                    color: "#f3bc50", textAlign: "center"
                                }}>Instagram Engagement</p>
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
                                    500+
                                </h4>
                                <p style={{
                                    fontSize: "18px",
                                    color: "#f3bc50", textAlign: "center"
                                }}>
                                    Leads Generated</p>
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

                                    40%
                                </h4>
                                <p style={{
                                    fontSize: "18px",
                                    color: "#f3bc50", textAlign: "center"
                                }}>5 Star Reviews</p>
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

export default MagnAidCaseStudyDetails
