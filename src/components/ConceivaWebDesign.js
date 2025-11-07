
import React, { useEffect } from 'react'
import tab_img_1 from "../images/portfolio/conceiva.png"
import graph from "../images/casestudies/graph.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutHeroImage from "../images/casestudies/endula_lap.jpg"
import case_study_mobile_banner from "../images/casestudies/endula_mob.jpg"
const ConceivaWebDesign = () => {
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
                                Conceiva Fertility
                            </h3>
                            <p style={{
                                fontSize: "18px", color: "", padding: "0px 20px 0px"
                            }}> <span className='fw-bold' style={{
                                color: "#f3bc50"
                            }}>Industry : </span> Fertility / Healthcare</p>
                            <div className='inside-tab-child-div' style={{
                                padding: "0px !important"
                            }} >
                                <p style={{
                                    paddingLeft: "0px !important"
                                }} className=''>
                                    Conceiva Fertility is a fertility and reproductive health clinic in Hyderabad. With over a decade of experience, the fertility experts here offer advanced fertility treatments like IVF, ICSI, cryopreservation, and personalized reproductive care. Conceiva Fertility combines compassionate care with medical excellence, making the journey towards parenthood easy.                                 </p>
                                <a href="https://conceivafertility.com/" target="_blank" rel="noopener noreferrer">
                                    <button className='inside-tab-child-div-button'>
                                        Visit website
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Challenges and Niche Analysis  */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-3 d-flex  ' style={{
                    }}>
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
                                }}>When Conceiva Fertility reached out to Novatales Media, the brand had no digital presence, even though they were providing quality fertility treatments and lacked an online identity to showcase their credibility and build trust.</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.5",
                                        color: "#2f2144"
                                    }}>
                                        No website to show the presence of the clinic, services, treatment offered, and success stories.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.5",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        No medium to present a sensitive and personal offering with professionalism and empathy.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.5",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>
                                        Difficulty in providing clear information about treatments, success stories, and patient guidance.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"

                                    }}>
                                        No platform for appointment booking, initial consultation, and generating leads
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className='col-lg-6 d-flex flex-column p-3 ps-xl-5'>
                            <h3 style={{
                                fontSize: "32px", color: "#2f2144"
                            }}>
                                Solution
                            </h3>
                            <p style={{
                                fontSize: "16px", color: "gray", padding: "12px 0px 0 0"
                            }}>We developed a comprehensive website from the ground level for Conceiva Fertility:</p>
                            <ul style={{
                                marginTop: "24px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.5",
                                    color: "#2f2144"
                                }}>
                                    Crafted a user-friendly flow, guiding site visitors through services, patient education, and contact forms that reflect the warmth of the clinic.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.5",
                                    color: "#2f2144",
                                    padding: "8px 0px"
                                }}
                                >
                                    Employed warm, reassuring design elements to connect with prospective patients.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.5",
                                    color: "#2f2144", padding: "8px 0px"

                                }}>
                                    Embedded patient testimonials to enhance trust and relatability.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    Optimized website with keywords for fertility treatments and common searches, along with a seamless mobile experience.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    Included fertility services, treatment options, and fertility expert profiles to build trust and patient confidence.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    Included appointment forms, contact forms, and strong CTA  buttons for easy patient communication.
                                </li>
                            </ul>
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

                            }}>
                                Right after launching the website, Conceiva Fertility experienced significant growth in the digital world and patient reach:
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                   A website that not only informs but comforts and guides potential patients, helping the client convey expertise and care.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "16px"

                                }}>Establishment of the professional, trustworthy, and official website for the first time.</li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>Increase in the number of inquiries and booking requests.

                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>Emerged as a trusted and reliable fertility clinic in local and online searches.
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

export default ConceivaWebDesign
