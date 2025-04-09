import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhoneVolume, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebookSquare, faSquareXTwitter, faLinkedin, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Logo from '../images/NOVATALES F3.png';
import ContactButtonWithForm from './ContactButtonWithForm';
import '../css/Home.css';
import '../css/HomeMediaQuery.css';

import { useNavigation } from '../components/NavigationContext';



export default function Footer() {
// Scroll to the top of the page when the component mounts
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
const { handleNavigation } = useNavigation();


    return (
        <div>
        {/* <GoogleReviews placeId="ChIJzWP1mY2TyzsRYEKpnj8dcR0" /> */}
        <div className="our-address">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="about">
                            <h2>About</h2>
                            <p>
                                <Link to="/about"  onClick={() => handleNavigation('about')}>Nova Tales is a boutique digital marketing and brand strategy consulting firm with expertise in Marketing campaign strategy, Multimedia content creation, Web and App development, Podcasting etc.</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-address">
                            <div className="address-heading">
                                <h2>Our Offices</h2>
                            </div>
                            <div className="address">
                            <p className='offices'>US office:</p>
                                <a href="https://maps.app.goo.gl/pZnYQpLaaSJmjW5J8" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p>2055 Comprehensive Dr,<br />
                                    Aurora, Illinois - 60505.</p>
                                </a>
                                <p className='offices'>India office:</p>
                                <a href="https://maps.app.goo.gl/d7QYSdQdVPYrSSCK6" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                    <p>Endula Empresa, 5th Floor, <br />
                                    Kondapur, Hyderabad - 500084.
                                    </p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="our-links">
                            <div className="links-heading">
                                <h2>Services</h2>
                            </div>
                            <ul>
                                <li><Link to="/branding-and-marketing" onClick={() => handleNavigation('about')}><FontAwesomeIcon icon={faArrowRight} className="fa-solid" /> Branding</Link></li>
                                <li><Link to="/digital-marketing" onClick={() => handleNavigation('about')}><FontAwesomeIcon icon={faArrowRight} className="fa-solid" /> Digital Marketing</Link></li>
                                <li><Link to="/ui-ux-design-development" onClick={() => handleNavigation('about')}><FontAwesomeIcon icon={faArrowRight} className="fa-solid" /> Web & App Development</Link></li>
                                <li><Link to="/content-creation-and-marketing" onClick={() => handleNavigation('about')}><FontAwesomeIcon icon={faArrowRight} className="fa-solid" /> Content Marketing</Link></li>
                                <li><Link to="/video-production" onClick={() => handleNavigation('about')}><FontAwesomeIcon icon={faArrowRight} className="fa-solid" /> Video Production</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="brands">
                            <div className="brand-heading ">
                                <h2>Follow Us</h2>
                            </div>
                            <div className="row mb-4">
                                <div className="col-1 pr-3">
                                    <Link to="https://www.instagram.com/novatalesmedia/" title="Instagram" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </Link>
                                </div>
                                <div className="col-1 pr-3">
                                    <Link to="https://www.facebook.com/novatalesdigital" title="Facebook" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
                                    </Link>
                                </div>
                                <div className="col-1 pr-3">
                                    <Link to="https://twitter.com/novatalesmedia" title="Twitter" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
                                    </Link>
                                </div>
                                <div className="col-1 pr-3">
                                    <Link to="https://www.linkedin.com/company/novatales/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    </Link>
                                </div>
                                <div className="col-1 pr-3">
                                    <Link to="https://www.youtube.com/@NovaTalesMedia" title="YouTube" target="_blank" rel="noopener noreferrer">
                                        <FontAwesomeIcon icon={faYoutubeSquare} size="2x" />
                                    </Link>
                                </div>
                            </div>
                           
                        </div>
                        <div className="row ms-md-5 ms-lg-0">
                        <div className="contact-heading">
                                <h2>Contact us</h2>
                            </div>
                            <div className="call">
                                <a href="tel:+91 9459666999" className="ui-link">
                                    <FontAwesomeIcon icon={faPhoneVolume} />
                                    <p>+91 9459666999</p>
                                </a>
                            </div>
                            <div className="email">
                                <a href="mailto:info@novatales.com">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    <p>info@novatales.com</p>
                                </a>
                            </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <ContactButtonWithForm />
        <FloatingWhatsApp
            phoneNumber="+919459666999"
            accountName="Novatales Media"
            chatMessage="Welcome to Novatales Media! How can we help you?"
            avatar={Logo}
        />
        <div className="copy">
            <h6>&copy; 2023 CopyRights: NovaTales.com</h6>
        </div>
    </div>
    );
}
