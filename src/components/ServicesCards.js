
import '../css/HomeMediaQuery.css';
import 'react-toastify/dist/ReactToastify.css';
import serviceCardimg_1 from "../images/portfolio/icons/smi.png"
import serviceCardimg_2 from "../images/portfolio/icons/seosmm.png"
import serviceCardimg_3 from "../images/portfolio/icons/content.png"
import serviceCardimg_4 from "../images/portfolio/icons/webDev.png"
import serviceCardimg_5 from "../images/portfolio/icons/vdoicon.png"
import serviceCardimg_6 from "../images/portfolio/icons/email.png"
import serviceCardimg_7 from "../images/portfolio/icons/ppc.png"
import serviceCardimg_8 from "../images/portfolio/icons/reputaion.png"
import "../css/serviceCards.css"
const ServicesCards = () => {
    return (
        <div className="section-get">
            <div className="wrapper">
                <div data-aos="fade-up" className="health-why-novatales">
                    <h2
                        className="text-center"
                        style={{
                            textAlign: "center",
                            color: "#52377b",
                            marginTop: "20px",
                        }}
                    >
                        NovaTales Expert Digital Marketing Services <br /> for Healthcare and Clinics
                    </h2>
                </div>

                <div className="get-list row">
                    {/* -------- COLUMN 1 -------- */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                        <div className="get-list__item">
                            <div className="get-list__heading">
                                <div className="get-list__icon">
                                    <img src={serviceCardimg_1} alt="" loading="lazy" />
                                </div>
                                <div className="get-list__title">Social Media Marketing</div>
                            </div>
                            <div className="get-list__text">
                                Engage with potential patients on Facebook, Instagram, and LinkedIn.
                            </div>
                        </div>
                        <div className="get-list__item extraTop">
                            <div className="get-list__heading">
                                <div className="get-list__icon">
                                    <img src={serviceCardimg_2} alt="" loading="lazy" />
                                </div>
                                <div className="get-list__title">SEO and SEM</div>
                            </div>
                            <div className="get-list__text">
                                Optimize your hospital’s website to rank higher on Google.
                            </div>
                        </div>
                    </div>

                    {/* -------- COLUMN 2 -------- */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mt-lg-5 pt-lg-5 d-flex justify-content-center align-items-center flex-column">
                        <div className="get-list__item">
                            <div className="get-list__heading">
                                <div className="get-list__icon">
                                    <img src={serviceCardimg_3} alt="" loading="lazy" />
                                </div>
                                <div className="get-list__title">Content Marketing</div>
                            </div>
                            <div className="get-list__text">
                                Provide valuable healthcare content to educate and attract patients.
                            </div>
                        </div>

                        <div className="get-list__item extraTop">
                            <div className="get-list__heading">
                                <div className="get-list__icon">
                                    <img src={serviceCardimg_6} alt="" loading="lazy" />
                                </div>
                                <div className="get-list__title">Email Marketing</div>
                            </div>
                            <div className="get-list__text">
                                Increase patient retention through informative email campaigns.
                            </div>
                        </div>
                    </div>

                    {/* -------- COLUMN 3 -------- */}
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center flex-column">
                        <div className="get-list__item">
                            <div className="get-list__heading">
                                <div className="get-list__icon">
                                    <img src={serviceCardimg_8} alt="" loading="lazy" />
                                </div>
                                <div className="get-list__title">Reputation Management</div>
                            </div>
                            <div className="get-list__text">
                                Monitor and manage online reviews. Enhance your hospital’s
                                credibility.
                            </div>
                        </div>

                        <div className="get-list__item extraTop">
                            <div className="get-list__heading">
                                <div className="get-list__icon">
                                    <img src={serviceCardimg_7} alt="" loading="lazy" />
                                </div>
                                <div className="get-list__title">Paid Advertising (PPC)</div>
                            </div>
                            <div className="get-list__text">
                                Generate instant visibility through targeted ads. Optimize ad
                                campaigns for maximum ROI.
                            </div>
                        </div>
                    </div>

                    {/* -------- COLUMN 4 -------- */}
                    <div className="col-xl-3 col-lg-12 col-md-6 col-sm-12 mt-xl-5 pt-xl-5 d-flex justify-content-center align-items-center flex-column">
                        <div className='row d-flex justify-content-center align-items-center flex-column flex-lg-row'>
                            <div className='col-xl-12 col-lg-6'>
                                <div className="get-list__item">
                                    <div className="get-list__heading">
                                        <div className="get-list__icon">
                                            <img src={serviceCardimg_4} alt="" loading="lazy" />
                                        </div>
                                        <div className="get-list__title">Website Development</div>
                                    </div>
                                    <div className="get-list__text">
                                        Improve user experience with a professionally designed website.
                                    </div>
                                </div>
                            </div>
                            <div className='col-xl-12 col-lg-6'>
                                <div className="get-list__item extraTop">
                                    <div className="get-list__heading">
                                        <div className="get-list__icon">
                                            <img src={serviceCardimg_5} alt="" loading="lazy" />
                                        </div>
                                        <div className="get-list__title">Video Marketing</div>
                                    </div>
                                    <div className="get-list__text">
                                        Increase engagement with informative hospital-related videos.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ServicesCards
