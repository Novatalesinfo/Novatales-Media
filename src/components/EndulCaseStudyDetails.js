import React, { useEffect } from 'react'
import tab_img_1 from "../images/casestudies/endula.webp"
import graph from "../images/casestudies/graph.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const EndulaCaseStudyDetails = () => {
    AOS.init();
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    },[])
    return (
        <>
            {/* Top Banner of the page  */}
            <div className='case-study-details-banner'>
                <div>
                    <h1 className='mb-3' data-aos="fade-up" data-aos-delay="100" style={{

                    }}>Endula Infra LLP</h1>

                </div>
            </div>
            <div className='case-study-tabs-parents'>
                <div className='case-study-tabs-child'>

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
                                fontSize: "32px", color: "#f3bc50"
                            }}>
                                Endula Infra LLP
                            </h3>
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
                                }}>When Endula Infra LLP partnered with Novatales Media, the brand had operational strength but lacked visual identity and branding clarity, especially when presenting itself to contractors, vendors, and infrastructure project bidders:</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        No professional logo or brand identity—leading to inconsistent use across documents and equipment.
                                    </li>
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        No packaging or labeling design for their aggregate bags or transport documents.
                                    </li>
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"

                                    }}>
                                        Low brand recall in a highly competitive, commodity-driven market.


                                    </li>
                                    <li style={{
                                        listStyle: "circle",
                                        lineHeight: "1.8",
                                        color: "#2f2144"

                                    }}>
                                        Difficulty in presenting a modern, professional image during tenders, dealership partnerships, and government project bids.
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
                            }}>The stone crushing and infrastructure raw materials industry is often under-branded despite being competitive:</p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    Most players operate with generic names and minimal visual identity.
                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"

                                }}>
                                    Having a distinct, strong, and industrial-looking brand helps companies stand out, especially in B2B environments.


                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"

                                }}>
                                    Logo usage on invoices, safety wear, documents, and vehicle branding builds consistent recognition and trust.


                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    Packaging plays a crucial role when the materials are transported, stocked, or exported, even more so when the company scales operations.


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
                        }}>We developed a powerful visual identity and industrial packaging design system for Endula Infra LLP:</p>

                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Logo Design</span> : Crafted a bold, geometric logo inspired by crushed stones and machinery, using strong typography and earthy tones to communicate reliability, strength, and raw power.
                        </p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Color Palette & Branding Kit</span> : Delivered a branding kit with colors, font guidelines, and usage rules for professional implementation across formats.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Packaging & Label Design</span> : Created designs for bulk packaging bags and label stickers used during dispatch, featuring safety instructions, weight specs, and batch codes.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Document Branding</span> : Designed branded letterheads, quotation formats, delivery challans, and invoice templates for uniformity.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Brand Placement Guidelines</span> : Provided recommendations for applying branding across trucks, uniforms, and safety helmets.</p>

                    </div>

                    {/* Results */}
                    <div className='row mt-5 mb-5 d-flex align-items-center ' data-aos="fade-up" data-aos-delay="100" style={{

                    }}>
                        <div className='col-xl-6 extra-padding-case-details'>
                            <h3>
                                Results
                            </h3>
                            <p style={{
                                color: "gray",
                                padding: "12px 0px",
                                fontSize: "16px",
                                textAlign: "justify"
                            }}>
                                Within a few weeks of project completion, Endula Infra saw:
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                    A solid brand presence that resonated with industry buyers and vendors.
                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "16px"

                                }}> Positive reception of branded documents during meetings with contractors and government officials.

                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}> Professional packaging improved perception among logistics partners and local retailers of aggregates.

                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>High-quality visual assets are now used in presentations, WhatsApp catalogs, and future website plans.

                                </li>
                                <li style={{
                                    listStyle: "circle",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>  Better brand recall and trust, especially during partner outreach and dealer meetings.
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

export default EndulaCaseStudyDetails
