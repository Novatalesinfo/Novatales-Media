import React, { useEffect } from 'react'
import tab_img_1 from "../images/casestudies/livvon.png"
import graph from "../images/casestudies/graph.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const LivvonCaseStudyDetails = () => {
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
            <div className='case-study-details-banner'>
                <div>
                    <h1 data-aos="fade-up" data-aos-delay="100" className='mb-3' style={{
                    }}>Livvon Comforts</h1>
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
                                fontSize: "32px", color: "#9b499c"
                            }}>
                                Livvon Comforts
                            </h3>
                            <div className='inside-tab-child-div' style={{
                                padding: "0px !important"
                            }} >
                                <p style={{
                                    paddingLeft: "0px !important"
                                }} className=''>
                                    Livvon Comforts is a premium lifestyle brand offering 100% natural latex mattresses, organic cotton bedding, and eco-friendly sleep essentials. With sustainability at its core, Livvon Comforts caters to health-conscious individuals and families who seek chemical-free, breathable, and long-lasting sleep products.
                                </p>

                            </div>
                        </div>
                    </div>
                    {/* Challenges and Niche Analysis  */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-3 d-flex ' style={{
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
                                }}>When Livvon Comforts approached Novatales Media, they were entering a market where trust, aesthetics, and eco-values are crucial. They faced the following branding and design challenges</p>
                                <ul style={{
                                    marginTop: "24px"
                                }} >
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        No consistent visual identity or brand recall, despite having a premium product line.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144",
                                        padding: "8px 0px"
                                    }}
                                    >
                                        Lack of eco-centric packaging design that reflects the sustainability values of the brand.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"
                                    }}>
                                        Competitors in the organic bedding space had clean, minimalist branding, making Livvon’s existing design feel outdated

                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144", padding: "8px 0px"
                                    }}>
                                        No structured brand assets for catalogues, hang tags, and POS material.
                                    </li>
                                    <li style={{
                                        listStyle: "disc",
                                        lineHeight: "1.8",
                                        color: "#2f2144"
                                    }}>
                                        Difficulty in standing out in D2C marketplaces (e.g., Amazon, website, exhibitions) due to inconsistent or generic packaging.
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
                            }}>The eco-friendly mattress and bedding niche caters to affluent, health-conscious, and environmentally aware consumers:</p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    Shoppers seek clarity, minimalism, and natural aesthetics in both logo and packaging.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"

                                }}>
                                    Visual branding must communicate trust, organic authenticity, and luxury comfort.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    padding: "8px 0px"

                                }}>
                                    Packaging isn’t just functional—it’s a brand storytelling tool that customers interact with.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144"

                                }}>
                                    Sustainability messaging must be embedded into every touchpoint, from product tags to outer cartons.

                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Solutions */}
                    <div data-aos="fade-up" data-aos-delay="100" className='mt-5 mb-3 d-flex flex-column'>
                        <h3 style={{
                            fontSize: "32px"
                        }}>
                            Our Solutions
                        </h3>
                        <p style={{
                            fontSize: "16px", color: "gray", padding: "12px 0px 12px 0"
                        }}>NovaTales Media designed a complete logo and packaging identity system that elevated Livvon Comforts into a premium, nature-inspired brand:</p>

                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Logo Design</span> : Created a minimalistic yet elegant logo with organic curves and a leaf-inspired motif, symbolizing comfort, purity, and nature.
                        </p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Natural Color Palette</span> :Used earthy greens, soft browns, and ivory whites to reflect sustainability, sleep calmness, and organic origins.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Packaging Design</span> : Developed branded packaging for mattresses, pillows, and sheets—including kraft boxes, fabric bags, eco tags, and printed instructions with nature-driven illustrations.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Product Tags & Inserts</span> : Designed eco-themed hang tags, care instructions, and brand story cards for each product to educate and engage the customer at unboxing.</p>
                        <p style={{
                            paddingTop: "16px",
                            // fontSize: "18px" 
                        }}>
                            <span style={{
                                fontWeight: "bold", color: "#f3bc50"
                            }}>Brand Assets Kit</span> : Delivered a full brand guide with font pairings, iconography, and layout templates for consistent usage across website, social media, and print media.</p>

                    </div>
                    {/* Results */}
                    <div data-aos="fade-up" data-aos-delay="100" className='row mt-5 mb-5 d-flex align-items-center ' style={{

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
                                Within 4 weeks of implementation, Livvon Comforts experienced:
                            </p>
                            <ul style={{
                                marginTop: "16px"
                            }} >
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",

                                }}>
                                    A clear, premium brand identity aligned with the values of organic, conscious consumers.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144",
                                    paddingTop: "16px"

                                }}>Branded unboxing moments shared by customers on social media enhance user-generated content and trust.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>Higher visibility in retail shelves and exhibitions, with clean packaging standing out among cluttered designs.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>Increased brand recall and emotional connection among first-time buyers and returning customers.
                                </li>
                                <li style={{
                                    listStyle: "disc",
                                    lineHeight: "1.8",
                                    color: "#2f2144", paddingTop: "16px"

                                }}>Ready-to-scale assets for future expansion into e-commerce marketplaces and offline partner stores.
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

export default LivvonCaseStudyDetails
