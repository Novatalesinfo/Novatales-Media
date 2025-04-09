import React from 'react'
import { Row, Container } from 'react-bootstrap';
import MissionImage from '../images/SMM WEB IMAGE 2.png';
export default function YourAims() {
    return (
        <div>
            <div className='ourAims'>
                <Container>
                    <Row>
                        <div className="col-lg-6 col-sm-12">
                            <div>
                                <div className="effect">
                                    <div className="our-heading">
                                        <span className='our-heading1'>
                                            your aims
                                        </span>
                                        <span className="wrapper">
                                            Our expertise<div className="underline-animation">
                                                <div className="spacer-left"></div>
                                                <div className="underline"></div>
                                                <div className="spacer-right"></div>
                                            </div>
                                        </span>
                                    </div>
                                    <div className="goal">
                                        <p>We are all about providing digital marketing services that match your goals perfectly. We want to boost your online presence and make your brand stand out. Whether it is creating interesting content, developing your marketing strategy or driving your digital ad campaigns, we have got you covered.</p>
                                        <p>Our services are carefully crafted to make sure you make a big impact online. Join us for a journey to digital success, where our skills meet your vision, and our services lead the way to your marketing success.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-12">
                            <div className="our-image">
                                <div>
                                    <img src={MissionImage} alt="mission" width="100%" />
                                </div>
                            </div>
                        </div>
                    </Row>
                </Container>
                <div className="thread-animation-right">
                    <div className="bubble-section">
                        <svg viewBox="0 0 250 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="100%">
                            <defs>
                                <clipPath id="cut-off-bottom">
                                    <rect x="0" y="0" width="250" height="500" />
                                </clipPath>
                            </defs>
                            <path className="animated-path" d="M439.5,305.5Q462,361,424.5,405Q387,449,331.5,456.5Q276,464,222,465Q168,466,123.5,434Q79,402,44.5,355.5Q10,309,23,253Q36,197,62,152Q88,107,138,96.5Q188,86,228,92Q268,98,308.5,102.5Q349,107,395,128.5Q441,150,429,200Q417,250,439.5,305.5Z" fill="none" strokeWidth="7" stroke="#fec436" clipPath="url(#cut-off-bottom)" />
                        </svg>
                    </div>
                </div>
            </div></div>
    )
}
