
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import digitalIcon from '../images/digital marketing icon-01.png';
import videoProductionIcon from '../images/video production icon-01.png';
import webAppIcon from '../images/web &app DVP icon-01.png';
import seoIcon from '../images/seo icon-01.png';
import smmIcon from '../images/social media M icon-01.png';
import BrandPositioningIcon from '../images/brand positioning-04.png';
import contentMarketingIcon from '../images/content marketing icon-01.png';
import ECommerceIcon from '../images/e commerce icon-01.png';
import paidAdvertisingIcon from '../images/paid advertising icon-01.png';
import PodcastIcon from '../images/podcast icon-01.png';
import BrandingIcon from '../images/branding -01.png';
import photoshootIcon from '../images/photoshoot icon-01.png'
import '../css/Home.css';
import '../css/HomeMediaQuery.css';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default function AllServices() {
  

    // Scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            <div className="container">
                <div className="start">
                    <h3>Let's Get <span>started</span></h3>
                    <div className='button-wiggle'>
                        <Link to="/contactus"><button>Request a quote <FontAwesomeIcon icon={faAngleRight} /></button></Link>
                    </div>
                </div>
            </div>
            <div className="about-services">
                <div className="container">
                    <div className="about-services-heading">
                        <div className="decription-heading">
                            <h2>We Have Something More For You </h2>
                            <p>We fully understand the importance of transforming a business idea or image into a recognizable
                                brand. Whether you are looking for a professional logo design or a complete business image
                                solution; we will always provide honest direction and creative results.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-3 col-lg-4 col-md-6  mt-lg-5">
                            <Link to="/digital-marketing">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed">
                                            <h5 className="card-title">360° Marketing</h5>
                                            <img src={digitalIcon} alt="Digital Marketing Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">A 360° solution combining brand strategy, data, creative assets, and performance-driven campaigns.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-6  mt-lg-5">
                            <Link to="/video-production">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed">
                                            <h5 className="card-title me-xxl-0 me-xl-4">Video Production </h5>
                                            <img src={videoProductionIcon} alt="Video Production Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Product videos, corporate films, reels, ads, drone shoots—visual content that attracts and converts customers.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-6  mt-lg-5">
                            <Link to="/ui-ux-design-development">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed">
                                            <h5 className="card-title">Web & App Development </h5>
                                            <img src={webAppIcon} alt="Web and App Development Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Mobile-responsive, fast, secure, and SEO-friendly websites & apps that improve customer experience.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-6  mt-lg-5">
                            <Link to="/search-engine-optmization-marketing">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed">
                                            <h5 className="card-title">SEO + AEO + GEO </h5>
                                            <img src={seoIcon} alt="Search Engine Optimization Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Rank on Google, appear in “People Also Ask”, voice search, and AI-generated results.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-6  mt-lg-5">
                            <Link to="/social-media-marketing">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed smm-icon">
                                            <h5 className="card-title ">Social Media Marketing </h5>
                                            <img src={smmIcon} width={100} height={100} alt="Social Media Marketing Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Consistent branding, creative communication, and viral content that builds trust.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4  col-md-6  mt-lg-5">
                            <div className="card border-0 shadow" >
                                <Link to="/content-creation-and-marketing">
                                    <div className="card-body">
                                        <div className="tailored_made_hed">
                                            <h5 className="card-title">Content Marketing </h5>
                                            <img src={contentMarketingIcon} alt="Content Marketing Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Blogs, scripts, posts, ad copies—content that educates, engages, and influences buying decisions.</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4  col-md-6  mt-lg-5">
                            <Link to="/brand-positioning">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed brand-icon">
                                            <h5 className="card-title">Brand Positioning </h5>
                                            <img src={BrandPositioningIcon} alt="Brand Positioning Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Define your brand identity, tone, values, and market differentiation.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4  col-md-6  mt-lg-5">
                            <Link to="/e-commerce-web-development">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed ecom-icon">
                                            <h5 className="card-title  me-5">E-Commerce</h5>
                                            <img src={ECommerceIcon} alt="E-Commerce Icon" className='ms-lg-3 ms-xl-4 ms-xxl-0' />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Online stores with secure payments, smooth UI/UX, catalog setup, and conversion optimization.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4  col-md-6  mt-lg-5">
                            <Link to="/professional-photoshoot">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed">
                                            <h5 className="card-title me-4">Photoshoots</h5>
                                            <img src={photoshootIcon} alt="Photoshoot Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Studio and outdoor product shoots with professional editing for catalogues, websites & ads.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4  col-md-6  mt-lg-5">
                            <Link to="/ppc-advertising">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed">
                                            <h5 className="card-title"> Paid Advertising</h5>
                                            <img src={paidAdvertisingIcon} alt="Paid Advertising Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Create demand, boost visibility, and generate leads at scale.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4  col-md-6  mt-lg-5">
                            <Link to="/podcast-editing-hosting">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed podcast-icon">
                                            <h5 className="card-title  me-4">Podcast</h5>
                                            <img src={PodcastIcon} alt="Podcast Icon" className='ms-5' />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Professional recording, editing & publishing – craft conversations that build community and authority.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4  col-md-6  mt-lg-5">
                            <Link to="/branding-and-marketing
                            ">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed smm-icon">
                                            <h5 className="card-title  me-4">Branding</h5>
                                            <img src={BrandingIcon} alt="Branding Icon" className='ms-lg-4 ms-md-0' />
                                        </div>
                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Logos, brand guidelines, packaging, and visual identity that create trust and recall.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
