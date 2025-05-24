import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import tab_img_1 from "../images/casestudies/magnaid.png"
import tab_img_2 from "../images/casestudies/ekam.png"
import tab_img_3 from "../images/casestudies/yards_22.png"
import tab_img_4 from "../images/casestudies/endula.png"
import tab_img_5 from "../images/casestudies/livvon.png"
import TabPanel from '@mui/lab/TabPanel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../css/casestudy.css"
import { Link } from 'react-router-dom';
const CaseStudy = () => {
    const [value, setValue] = React.useState(() => {
        return sessionStorage.getItem('lastTab') || "1";
    });
    const handleChange = (event, newValue) => {
        setValue(newValue);
        sessionStorage.setItem('lastTab', newValue);
    };
    useEffect(() => {
        AOS.init();
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }, [])
    return (
        <>
            {/* Top Banner of the page  */}
            <div className='case-study-banner'>
                <div>
                    <h1 className='mb-3'>Case Study</h1>
                    <p className='case-study-banner-para'>
                        A showcase of our commitment to delivering innovative digital solutions.
                    </p>
                    <p className='case-study-banner-para'>
                        Our commitment to quality and excellence is unparalleled.
                    </p>
                </div>
            </div>
            {/* Case studies Tabs Here I am using MUI tabs with some custom designs */}
            <div className='case-study-tabs-parents'>
                <div className='case-study-tabs-child'>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box
                                sx={{
                                    borderBottom: 1, borderColor: 'divider',
                                    display: "flex",
                                    justifyContent: "space-between",
                                    flexDirection: {
                                        xs: "column",  // stacked on small screens
                                        sm: "column",
                                        md: "row",     // side by side on larger screens
                                    },
                                    gap: 2,
                                }}
                            >
                                <h2 className='fw-bold' data-aos="fade-up" data-aos-delay="300" style={{
                                    color: "#52377b",
                                }}>Case studies</h2>
                                <Box
                                    sx={{

                                        width: {
                                            xs: "100%",   // full width on small screens
                                            md: "auto",   // shrink-wrap on larger
                                        },
                                    }}
                                >
                                    <TabList
                                        onChange={handleChange}
                                        value={value} // make sure you bind the selected value
                                        aria-label="styled pill tabs"
                                        sx={{
                                            display: "flex",
                                            overflowX: "auto",
                                            gap: "8px",
                                            padding: "8px",
                                        }}
                                    >
                                        <Tab
                                            label="Digital Marketing"
                                            value="1"
                                            sx={{
                                                backgroundColor: "#2D2E4A", // navy pill
                                                color: "#E3E3E3",
                                                borderRadius: "40px 40px 40px 20px",
                                                padding: {
                                                    xs: "4px 8px",  // padding on small screens
                                                    md: "6px 16px",  // padding on larger screens
                                                },
                                                minWidth: "auto",
                                                fontSize: "16px",
                                                textTransform: "none",
                                                fontWeight: "500",
                                                "&.Mui-selected": {
                                                    backgroundColor: "#fec426", // hot pink
                                                    color: "#fff",
                                                },
                                            }}
                                        />
                                        <Tab
                                            label="Branding"
                                            value="2"
                                            sx={{
                                                backgroundColor: "#2D2E4A",
                                                color: "#E3E3E3",
                                                borderRadius: "40px 40px 40px 20px",
                                                padding: {
                                                    xs: "4px 8px",  // padding on small screens
                                                    md: "6px 16px",  // padding on larger screens
                                                }, fontSize: "16px",
                                                minWidth: "auto",
                                                textTransform: "none",
                                                margin: "0px 12px",
                                                fontWeight: "500",
                                                "&.Mui-selected": {
                                                    backgroundColor: "#fec426",
                                                    color: "#fff",
                                                },
                                            }}
                                        />
                                        <Tab
                                            label="Video Production"
                                            value="3"
                                            sx={{
                                                backgroundColor: "#2D2E4A", fontSize: "16px",
                                                color: "#E3E3E3",
                                                borderRadius: "40px 40px 40px 20px",
                                                padding: {
                                                    xs: "4px 8px",  // padding on small screens
                                                    md: "6px 16px",  // padding on larger screens
                                                },
                                                minWidth: "auto",
                                                textTransform: "none",
                                                fontWeight: "500",
                                                "&.Mui-selected": {
                                                    backgroundColor: "#fec426",
                                                    color: "#fff",
                                                },
                                            }}
                                        />

                                    </TabList>
                                </Box>
                            </Box>
                            {/* Digital Marketing Case studies  */}
                            <TabPanel value="1">
                                <div data-aos="fade-up" data-aos-delay="300" className='row mt-5 mb-3 d-flex flex-lg-row flex-column-reverse align-items-center tab-panel-row' style={{
                                }}>
                                    <div className='col-lg-6'>
                                        <p style={{
                                            fontSize: "18px", color: "#52377b", padding: "12px 0px"
                                        }}>Digital Marketing</p>
                                        <h3 style={{
                                            color: "#9b499c",
                                            fontWeight: "500"
                                        }}>
                                            MagnAid Hospitals
                                        </h3>
                                        <div className='inside-tab-child-div' >
                                            <p className='' style={{

                                            }}>
                                                MagnAid Hospitals is a multi-speciality healthcare institution based in Hyderabad, committed to providing compassionate and advanced medical care. Known for its expertise in obstetrics and gynecology, pediatrics, orthopedics, and general medicine, Magnaid Hospitals combines clinical excellence with patient-centric service.
                                            </p>
                                            <Link to="/case-studies/magnaid-hospitals">
                                                <button className='inside-tab-child-div-button'>
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 d-flex justify-content-center'>
                                        <a href='/case-studies/magnaid-hospitals'>
                                            <img src={tab_img_1} alt='' className='case-study-tabs-img' />
                                        </a>
                                    </div>
                                </div>
                                <div data-aos="fade-up" className='row mt-5 mb-3 d-flex flex-lg-row flex-column-reverse align-items-center tab-panel-row' style={{
                                }}>
                                    <div className='col-lg-6'>
                                        <p style={{
                                            fontSize: "18px", color: "#52377b", padding: "12px 0px"
                                        }}>Digital Marketing</p>
                                        <h3 style={{
                                            color: "#9b499c",
                                            fontWeight: "500"
                                        }}>
                                            Ekam Fertility
                                        </h3>
                                        <div className='inside-tab-child-div' >
                                            <p className=''>
                                                Ekam Fertility & Women is a specialized women’s healthcare and fertility center located in Hyderabad, offering advanced treatments in IVF, IUI, fertility evaluations, PCOS management, and gynecological care. Led by expert fertility specialists, Ekam is known for providing empathetic, ethical, and result-driven care. The center focuses on both cutting-edge fertility treatments and holistic women’s wellness.
                                            </p>
                                            <Link to="/case-studies/ekam-fertility">
                                                <button className='inside-tab-child-div-button'>
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 d-flex justify-content-center'>
                                        <a href='/case-studies/ekam-fertility'>
                                            <img src={tab_img_2} alt='' className='case-study-tabs-img' />
                                        </a>
                                    </div>
                                </div>
                                <div data-aos="fade-up" className='row mt-5 mb-3 d-flex flex-lg-row flex-column-reverse align-items-center tab-panel-row' style={{
                                }}>
                                    <div className='col-lg-6'>
                                        <p style={{
                                            fontSize: "18px", color: "#52377b", padding: "12px 0px"
                                        }}>Digital Marketing</p>
                                        <h3 style={{
                                            color: "#9b499c",
                                            fontWeight: "500"
                                        }}>
                                            22 Yards
                                        </h3>
                                        <div className='inside-tab-child-div' >
                                            <p className=''>
                                                22 Yards is a cutting-edge Fractional Real Estate Investment Platform that empowers individuals to invest in premium commercial and hospitality properties with a low capital entry point. Through fractional ownership, investors can enjoy rental income, property appreciation, and a stake in high-value assets such as hotels, resorts, and commercial spaces. With transparency, legal clarity, and professional asset management, 22 Yards is revolutionizing how Indians invest in real estate.
                                            </p>

                                            <Link to="/case-studies/22-yards">
                                                <button className='inside-tab-child-div-button'>
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 d-flex justify-content-center'>
                                        <a href='/case-studies/22-yards'>
                                            <img src={tab_img_3} alt='' className='case-study-tabs-img' />
                                        </a>
                                    </div>
                                </div>

                            </TabPanel>

                            {/* Branding Case studies  */}

                            <TabPanel value="2">
                                <div data-aos="fade-up" data-aos-delay="300" className='row mt-5 mb-3 d-flex flex-lg-row flex-column-reverse align-items-center tab-panel-row' style={{

                                }}>
                                    <div className='col-lg-6'>
                                        <p style={{
                                            fontSize: "18px", color: "#52377b", padding: "12px 0px"
                                        }}>Branding</p>
                                        <h3 style={{
                                            color: "#9b499c",
                                            fontWeight: "500"
                                        }}>
                                            Endula Infra LLP
                                        </h3>
                                        <div className='inside-tab-child-div' >
                                            <p className=''>
                                                Endula Infra is a Stone Crushing Industry based in Hyderabad and has been in existence for more than three decades, placing the company as an industry legend in Stone crushing.
                                            </p>

                                            <Link to="/case-studies/endula-infra">
                                                <button className='inside-tab-child-div-button'>
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 d-flex justify-content-center'>
                                        <a href='/case-studies/endula-infra'>
                                            <img src={tab_img_4} alt='' className='case-study-tabs-img' />

                                        </a>
                                    </div>

                                </div>
                                <div data-aos="fade-up" className='row mt-5 mb-3 d-flex flex-lg-row flex-column-reverse align-items-center tab-panel-row' style={{

                                }}>
                                    <div className='col-lg-6'>
                                        <p style={{
                                            fontSize: "18px", color: "#52377b", padding: "6px 0px"
                                        }}>Branding</p>
                                        <h3 style={{
                                            color: "#9b499c",
                                            fontWeight: "500"
                                        }}>
                                            Livvon Comforts
                                        </h3>
                                        <div className='inside-tab-child-div' >
                                            <p className=''>
                                                Livvon Comforts is a premium lifestyle brand offering 100% natural latex mattresses, organic cotton bedding, and eco-friendly sleep essentials. With sustainability at its core, Livvon Comforts caters to health-conscious individuals and families who seek chemical-free, breathable, and long-lasting sleep products.
                                            </p>
                                            <Link to="/case-studies/livvon-comforts">
                                                <button className='inside-tab-child-div-button'>
                                                    View Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 d-flex justify-content-center'>
                                        <a href='/case-studies'>
                                            <img src={tab_img_5} alt='' className='case-study-tabs-img' />

                                        </a>
                                    </div>

                                </div> </TabPanel>

                            {/* Video Production Case Studies  */}

                            <TabPanel value="3">
                                <div data-aos="fade-up" data-aos-delay="300" className='row mt-5 mb-3 d-flex flex-lg-row flex-column-reverse align-items-center tab-panel-row' style={{
                                }}>
                                    <div className='col-lg-6'>
                                        <p style={{
                                            fontSize: "18px", color: "gray", padding: "12px 0px"
                                        }}>Video Production</p>
                                        <h3>
                                            Amara Hospital
                                        </h3>
                                        <div className='inside-tab-child-div' >
                                            <p className=''>
                                                MagnAid Hospitals – the Integrated Township is spanned across vast 32 acres of landscape at one of Hyderabad's fastest growing geographies, Narsingi. It's a premium residential community with 12 mega residential towers consisting of only 1317 Flats for sale in Hyderabad.
                                            </p>
                                            <h4 style={{
                                                fontSize: "17px", color: "#fec436", fontWeight: "bold", marginTop: "8px"
                                            }}>
                                                Vikas Garg

                                                <p style={{
                                                    color: "#212529", marginTop: "8px"
                                                }}>
                                                    Marketing Head
                                                </p>

                                            </h4>
                                            <button className='inside-tab-child-div-button'>
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 d-flex justify-content-center'>
                                        <a href='/case-studies'>
                                            <img src={tab_img_1} alt='' className='case-study-tabs-img' />

                                        </a>
                                    </div>

                                </div>
                                <div data-aos="fade-up" className='row mt-5 mb-3 d-flex flex-lg-row flex-column-reverse align-items-center tab-panel-row' style={{

                                }}>
                                    <div className='col-lg-6'>
                                        <p style={{
                                            fontSize: "18px", color: "gray", padding: "12px 0px"
                                        }}>Branding</p>
                                        <h3>
                                            MagnAid Hospitals
                                        </h3>
                                        <div className='inside-tab-child-div' >
                                            <p className=''>
                                                MagnAid Hospitals – the Integrated Township is spanned across vast 32 acres of landscape at one of Hyderabad's fastest growing geographies, Narsingi. It's a premium residential community with 12 mega residential towers consisting of only 1317 Flats for sale in Hyderabad.
                                            </p>
                                            <h4 style={{
                                                fontSize: "17px", color: "#fec436", fontWeight: "bold", marginTop: "8px"
                                            }}>
                                                Vikas Garg

                                                <p style={{
                                                    color: "#212529", marginTop: "8px"
                                                }}>
                                                    Marketing Head
                                                </p>

                                            </h4>
                                            <button className='inside-tab-child-div-button'>
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-6 d-flex justify-content-center'>
                                        <a href='/case-studies'>
                                            <img src={tab_img_1} alt='' className='case-study-tabs-img' />

                                        </a>
                                    </div>

                                </div> </TabPanel>
                        </TabContext>
                    </Box>
                </div>
            </div>
        </>
    )
}

export default CaseStudy
