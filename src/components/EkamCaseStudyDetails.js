import React, { useEffect } from 'react'
import ekam from "../images/casestudies/ekam.webp"
import graph from "../images/casestudies/graph.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import ekam_post_1 from "../images/casestudies/ekam_fertility_1 (1).webp"
import ekam_post_2 from "../images/casestudies/ekam_fertility_2 (1).webp"
import ekam_post_3 from "../images/casestudies/ekam_fertility_3 (1).webp"
import ekam_post_4 from "../images/casestudies/ekam_fertility_4 (1).webp"
import ekam_post_5 from "../images/casestudies/ekam_fertility_5 (1).webp"

import aboutHeroImage from "../images/casestudies/case_stude_ekam_lap.jpg"
import case_study_mobile_banner from "../images/casestudies/case_stude_ekam_mob.jpg"
const EkamCaseStudyDetails = () => {
    useEffect(() => {
         AOS.init();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    } ,[])
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
                    <div className='row mt-5 mb-3 d-flex align-items-center case-study-details-row' data-aos="fade-up" data-aos-delay="300" style={{
                    }}>
                        <div className='col-lg-6 d-flex justify-content-center p-lg-5'>
                            <img src={ekam} alt='' className='case-study-tabs-img' />
                        </div>
                        <div className='col-lg-6 ps-lg-5'>
                            <p style={{
                                fontSize: "18px", color: "gray", padding: "12px 0px"
                            }}>About the Client</p>
                            <h3 style={{
                                fontSize: "32px",
                                color: "#9b499c"
                            }}>
                                Ekam Fertility
                            </h3>
                            <div className='inside-tab-child-div' style={{
                                padding: "0px !important"
                            }} >
                                <p style={{
                                    paddingLeft: "0px !important"
                                }} className=''>
                                    Ekam Fertility & Women is a specialized women’s healthcare and fertility center located in Hyderabad, offering advanced treatments in IVF, IUI, fertility evaluations, PCOS management, and gynecological care. Led by expert fertility specialists, Ekam is known for providing empathetic, ethical, and result-driven care. The center focuses on both cutting-edge fertility treatments and holistic women’s wellness.
                                </p>
                                <a href="https://ekamfertility.com/" target="_blank" rel="noopener noreferrer">
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
                                }}>When Ekam Fertility & Women partnered with Novatales Media, they were in the early stage of their digital journey and faced multiple challenges:</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        Low brand awareness in a highly saturated fertility space
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        Lack of consistent content and visibility on Instagram and other social channels.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>
                                        Minimal online patient inquiries and no structured lead generation funnel.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"

                                    }}>
                                        Website not optimized for SEO or patient education.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>
                                        Difficulty in establishing trust and credibility online—a crucial factor in fertility marketing.
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
                            }}>The fertility and women’s healthcare niche in India is both sensitive and highly competitive:</p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    Patients often spend time researching clinics, doctor credentials, success stories, and treatment processes before making a decision.</li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"
                                }}>
                                    Emotional connection, patient trust, and doctor visibility are vital for conversions.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    High competition from well-funded chains (e.g., Nova IVF, Oasis, and Cloudnine) necessitates differentiation through organic branding.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"
                                }}>
                                    SEO and localized targeting are key, especially for high-intent search terms like “IVF doctor in Hyderabad” or “fertility center near me.”
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
                        }}>We crafted a targeted, trust-focused digital strategy tailored for Ekam:</p>

                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Social Media Management</span> : Created a monthly content calendar with a mix of informative reels, success stories, treatment FAQs, doctor tips, and awareness content (PCOS, infertility myths, menstrual health).</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>SEO Optimization</span> : Optimized on-page content with local keywords, created blog posts around high-search fertility topics, and improved internal linking.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Website Optimization</span> : Suggested clear service pages, testimonial integration, and WhatsApp CTAs to improve conversions.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Lead Generation Setup</span> : Implemented Meta Lead Ads targeting women aged 25-40 in Hyderabad, with WhatsApp integration for seamless patient inquiry.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Video Marketing</span> : Produced engaging reels with doctors addressing FAQs, success case highlights, and behind-the-scenes footage of the clinic.</p>

                    </div>

                    {/* Swiper Cards */}
                    <div className='mt-5 mb-3 d-flex flex-column' data-aos="fade-up" data-aos-delay="100">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            loop={true}
                            mousewheel
                            autoplay={{
                                delay: 3000, // 3 seconds delay
                                disableOnInteraction: false,
                            }}

                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 15,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="case-details-slider">
                                <img src={ekam_post_1} alt='swiper-images' style={{
                                    width: "100%",

                                }} />
                            </SwiperSlide>
                            <SwiperSlide className="case-details-slider">
                                <img src={ekam_post_2} alt='swiper-images' style={{
                                    width: "100%",

                                }} />
                            </SwiperSlide>
                            <SwiperSlide className="case-details-slider">
                                <img src={ekam_post_3} alt='swiper-images' style={{
                                    width: "100%",

                                }} />
                            </SwiperSlide>
                            <SwiperSlide className="case-details-slider">
                                <img src={ekam_post_4} alt='swiper-images' style={{
                                    width: "100%",

                                }} />
                            </SwiperSlide>
                            <SwiperSlide className="case-details-slider">
                                <img src={ekam_post_5} alt='swiper-images' style={{
                                    width: "100%",

                                }} />
                            </SwiperSlide>
                        </Swiper>

                    </div>

                    {/* Results */}
                    <div className='row mt-5 mb-3 d-flex align-items-center ' data-aos="fade-up" data-aos-delay="100" style={{

                    }}>
                        <div className='col-xl-6 extra-padding-case-details'>
                            <h3 style={{
                                fontSize: "32px"
                            }}>
                                Results
                            </h3>
                            <p style={{
                                color: "#2f2144",
                                padding: "12px 0px",
                                fontSize: "16px",
                                textAlign: "justify"
                            }}>
                                In just 3 months of focused marketing, Ekam Fertility & Women experienced:
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                    Instagram Reels reaching decent views, with consistent engagement and DMs from potential patients.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "18px"

                                }}>100% growth in Instagram followers, growing a focused audience of women interested in fertility and women’s health.</li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "18px"

                                }}>300+ leads generated from Meta ads with high conversion potential and a remarketing setup.</li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "18px"

                                }}>Improved clinic perception and online credibility, with positive patient feedback shared through UGC (user-generated content).
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "18px"

                                }}>Increased brand recognition as a “knowledge-first” fertility clinic through consistent educational content and medical leadership branding.
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

                                    1000%
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

                                    300+
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

export default EkamCaseStudyDetails
