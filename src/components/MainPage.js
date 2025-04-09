import React from 'react'
import { ReactTyped as Typed } from 'react-typed';
import DigitalMarketing from '../images/digital illustration web.png';
import '../css/Home.css';
import '../css/HomeMediaQuery.css';
import girlImage from '../images/bg copy-04.png';
import icon1 from '../images/icon 1.png';
import icon2 from '../images/icon 2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon 4.png';
import { Col, Container, Row } from 'react-bootstrap';
export default function MainPage() {
    return (
        <div>
            <section className='Landing-Image'>
                <Container>
                    <Row className='First-section'>
                        <div className="col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center align-items-center display-1 fw-semibold ">
                            <div className="main-text">
                                <h1>
                                    <Typed
                                        strings={['Empower', 'Transform', 'Elevate']}
                                        typeSpeed={50}
                                        backSpeed={80}
                                        loop
                                        className="txt-type"
                                    />
                                    <div className="text">Digital Presence.</div>
                                </h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="image animate__animated animate__fadeIn">
                                <img src={DigitalMarketing} alt="best digital marketing company" />
                            </div>
                        </div>
                    </Row>
                    <Row className='ourapproach'>
                        <Col lg={6} className="OurApprochSectionHeading">
                            <h2>Our <br /> Approach</h2>
                            <div className="OurApprochSectionvertical-line"></div>
                        </Col>
                        <Col lg={6}>
                            <div className="OurApprochSectionContent">
                                <p>Nova Tales is not just your marketing service provider. We are your partners in success, your creative collaborators, and your digital storytellers. Our approach is a fusion of creativity and data-driven strategy. We believe in the power of tailored solutions that connect with your audience, guided by analytics and fueled by creativity.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="thread-animation-left">
                    <div className="bubble-section-1 rotate-left">
                        <svg
                            viewBox="0 0 250 500"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="100%"
                            height="100%"
                        >
                            <defs>
                                <clipPath id="cut-off-bottom">
                                    <rect x="0" y="0" width="250" height="500" />
                                </clipPath>
                            </defs>
                            <path
                                className="animated-path"
                                d="M439.5,305.5Q462,361,424.5,405Q387,449,331.5,456.5Q276,464,222,465Q168,466,123.5,434Q79,402,44.5,355.5Q10,309,23,253Q36,197,62,152Q88,107,138,96.5Q188,86,228,92Q268,98,308.5,102.5Q349,107,395,128.5Q441,150,429,200Q417,250,439.5,305.5Z"
                                fill="none"
                                strokeWidth="7"
                                stroke="#FEC436"
                                clipPath="url(#cut-off-bottom)"
                            />
                        </svg>
                    </div>
                </div>
            </section>
            <section className='Below-Landing'>
              <Container>
              <div className="image-wrapper">
                    <img src={girlImage} alt="social media content creation" className="overlap-image"/>
                        <div className="content-on-image">
                        <Row className='justify-content-center'>
                            <Col lg={3} md={6} sm={12} >
                                <div className='icon-1 mx-md-4'>
                                    <div>
                                        <img src={icon1} alt="icon" width="90px" />
                                    </div>
                                    <div className="heading">
                                        <p className="title">Holistic
                                            Approach</p>
                                    </div>
                                    <div className="content">
                                        <p>Our process is all-encompassing. We start with a deep dive into your brand's essence and craft digital strategies that are in perfect alignment with your objectives.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} sm={12} >
                                <div className='icon-2 mx-md-4'>
                                    <div>
                                        <img src={icon2} alt="icon" width="90px" />
                                    </div>
                                    <div className="heading">
                                        <p className="title">Innovation</p>
                                    </div>
                                    <div className="content">
                                        <p>The digital landscape is ever-changing, and we are here to help you navigate it successfully. We are committed to keeping you updated with the latest trends and technologies.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} >
                                <div className='icon-3 mx-md-4'>
                                    <div>
                                        <img src={icon3} alt="icon" width="90px" height="80px"/>
                                    </div>
                                    <div className="heading">
                                        <p className="title">Results-Driven</p>
                                    </div>
                                    <div className="content">
                                        <p>We do not just create and leave it at that. We continually measure, analyze, and optimize to ensure that your digital presence is performing at its best.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={6} >
                                <div className='icon-4 mx-md-4'>
                                    <div>
                                        <img src={icon4} alt="icon" width="90px" />
                                    </div>
                                    <div className="heading">
                                        <p className="title">Client-Centric</p>
                                    </div>
                                    <div className="content">
                                        <p>Your satisfaction is our priority. We communicate transparently, keep you in the loop, and value your input throughout the process to ensure your contentment. </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        </div>
                </div>
              </Container>
            </section>
        </div>
    )
}
