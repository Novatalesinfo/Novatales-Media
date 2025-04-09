
import React, { useEffect, useState } from 'react'
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
import { Row, Col, Container } from 'react-bootstrap';
import axios from 'axios';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'; // Import the Bounce transition effect
import baseURL from '../Environment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
export default function AllServices() {
    // Initialize form data state
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        phonenumber: '',
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    // Handle phone number input to allow only digits
    const handlePhoneChange = (e) => {
        const { value } = e.target;
        // Remove non-numeric characters
        const numericValue = value.replace(/\D/g, '');
        setFormData((prevFormData) => ({
            ...prevFormData,
            phonenumber: numericValue,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Send form data to the server
        axios.post(baseURL + 'servicecontact.php', formData)
            .then(response => {
                // Handle success, e.g., show success message
                toast.success('Your message has been sent successfully! We will get back to you shortly.', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                    transition: Bounce,
                });
                // Clear form fields
                setFormData({
                    fullname: '',
                    email: '',
                    phonenumber: '',
                });
            })
            .catch(error => {
                console.error('There was an error submitting the form!', error);
                // Handle error, e.g., show error message
                toast.error('Oops! We encountered an issue sending your message. Please try again later.', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'colored',
                    transition: Bounce,
                });
            });
    };

    // Scroll to the top of the page when the component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div>
            {/* <div className="LetusConnect">
                <div className="contact-title">
                <h3>Let's Get <span>started</span></h3>
                </div>
                <form onSubmit={handleSubmit}>
                    <Container>
                        <div className="GetTouch">
                            <Row>
                                <Col lg={3}>
                                    <input
                                        type="text"
                                        placeholder='Your Name'
                                        name="fullname"
                                        id="fullname"
                                        required
                                        value={formData.fullname}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col lg={3}>
                                    <input
                                        type="text"
                                        placeholder='Your Number'
                                        name="phonenumber"
                                        id="phonenumber"
                                        required
                                        value={formData.phonenumber}
                                        onChange={handlePhoneChange}
                                        pattern="\d{10}"
                                        maxLength="10"
                                    />
                                </Col>
                                <Col lg={3}>
                                    <input
                                        type="text"
                                        placeholder='Your Email'
                                        name="email"
                                        id="email"
                                        required
                                        aria-required="true"
                                        pattern="^.+@.+\.[a-zA-Z]{2,63}$"
                                        maxLength="250"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </Col>
                                <Col lg={2}>
                                    <button type="submit">Submit</button>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </form>
            </div> */}
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
                                            <h5 className="card-title">Digital Marketing</h5>
                                            <img src={digitalIcon} alt="Digital Marketing Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">Digital marketing is the ultimate guide to online success by
                                            combining strategy with the right tools to spark engagement and ignite businesses.
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
                                        <p className="card-text">Visual solutions are the most important resources to provide
                                            maximum information in minimal time.</p>
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
                                        <p className="card-text">Web design and development is not just about the look and feel it
                                            is also about how well it works and serves the purpose.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-md-6  mt-lg-5">
                            <Link to="/search-engine-optmization-marketing">
                                <div className="card border-0 shadow" >
                                    <div className="card-body">
                                        <div className="tailored_made_hed">
                                            <h5 className="card-title">Search Engine Optimization </h5>
                                            <img src={seoIcon} alt="Search Engine Optimization Icon" />
                                        </div>

                                        <div className="tailored_made_border hidden-xs"></div>
                                        <p className="card-text">SEO improves your visibility, gets you more eyeballs, more
                                            enquiries and ultimately more conversions.</p>
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
                                        <p className="card-text">SMM is the most creative and far-reaching tool to strategically
                                            connect with new and existing customers.</p>
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
                                        <p className="card-text">Content creation is about creating messages that people connect
                                            with, capturing attention and standing out in a world of ideas.</p>
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
                                        <p className="card-text">Brand positioning involves communicating the distinct value that
                                            your brand offers to set your business apart from the rest.</p>
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
                                        <p className="card-text">Let us help you take your sales online - From creating attractive
                                            online displays to establishing secure backend transactions.</p>
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
                                        <p className="card-text">Whether it is at our Exclusive studio or your outdoor unit, our
                                            latest equipment and highly skilled photographers and editors are ready to serve
                                            your business needs.</p>
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
                                        <p className="card-text">Advertising makes the world curious about your business! Let us
                                            help you create the buzz to drive your business to new heights.</p>
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
                                        <p className="card-text">Podcast is a place for stories, voices and vibrant conversations
                                            that
                                            connect minds one episode
                                            after another.</p>
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
                                        <p className="card-text">Your company’s perception and recognition is dependent on your
                                            brand. Let us help you stand out.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div></div>
    )
}
