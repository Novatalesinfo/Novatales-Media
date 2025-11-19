import React, { useEffect } from 'react'
import tab_img_1 from "../images/portfolio/cdc_website.png"
import graph from "../images/casestudies/graph.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutHeroImage from "../images/casestudies/endula_lap.jpg"
import case_study_mobile_banner from "../images/casestudies/endula_mob.jpg"
const CdcCenter = () => {
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
                        <div className='col-lg-6 ps-lg-5 pt-3 pt-lg-0'>
                            <p style={{
                                fontSize: "18px", color: "gray", padding: "0px 0px"
                            }}>About the Client</p>
                            <h3 style={{
                                fontSize: "32px", color: "#f3bc50"
                            }}>
                                Citrus Diagnostic Center
                            </h3>
                            <p style={{
                                fontSize: "18px", color: "", padding: "0px 20px 0px"
                            }}> <span className='fw-bold' style={{
                                color: "#f3bc50"
                            }}>Industry : </span> Healthcare / Medical diagnostics</p>
                            <div className='inside-tab-child-div' style={{
                                padding: "0px !important"
                            }} >
                                <p style={{
                                    paddingLeft: "0px !important"
                                }} className=''>
                                    Citrus Diagnostic Center is a patient-centered, modern medical imaging facility based in Citrus County, dedicated to delivering accurate, accessible, and high-quality diagnostic services. It is known for its state-of-the-art technology with compassionate care, quick turnaround, and a comfortable experience for patients while supporting healthcare professionals with trusted diagnostic insights                                </p>
                              
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
                                }}>When CDC partnered with Novatales Media, the diagnostic center already had excellent facilities and trusted radiologists, but a modern digital presence was missing to match its professional reputation:</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        Outdated website design that could not clearly communicate their services, medical credibility, and ease of access for patients
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        The website had complicated navigation to book tests, get information, and find contact details.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>
                                        Poor mobile optimization that impacted the accessibility of smartphone and tablet users.
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
                            }}>We developed a complete website for Citrus Diagnostic Center with a personalized digital solution:</p>
                            <div data-aos="fade-up" data-aos-delay="100" className='mb-3 d-flex flex-column'>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>Website design</span> : Developed a structured layout with intuitive menus and call-to-action buttons.
                                </p>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>Clean Interface</span> : Used clean, calming visual design (colors, typography, imagery) suitable for the healthcare sector.</p>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>Responsive & Mobile-friendly: </span> : Ensured accessibility and responsive design so that patients can find information easily from mobile devices and other devices. </p>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>Better UI/UX</span> : Simplified navigation, services, and CTAs to improve the booking or inquiry process and patient engagement.</p>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>Appointment section</span> : Included online appointment forms, contact form, and patient resources for the patient's convenience. </p>
                                <p style={{
                                }}>
                                    <span style={{
                                        fontWeight: "bold", color: "#f3bc50"
                                    }}>SEO Optimization</span> : Used best SEO practices, highlighted key differentiator terms for credibility, and increased trust. </p>
                            </div>
                        </div>
                    </div>
                    {/* Results */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-5 pb-5 d-flex align-items-center'>
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
                                textAlign: "left"
                            }}>
                                Within a few weeks of launch, Citrus Diagnostic Center noted the visible improvements :
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                    A welcoming, accessible diagnostic center website that helps patients find and use services efficiently, boosting credibility and patient trust.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "16px"

                                }}> Improved patient satisfaction with clean content structure, communicative services, turnaround times,  and clear patient instructions for every service.</li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>Significant increase in website traffic and appointment bookings with fewer follow-ups.
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

export default CdcCenter
