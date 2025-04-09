import React, { useEffect } from 'react'
import GrennScreenLarge from '../../images/greenscreen header-01 (1).jpg';
import GreenScreenTab from '../../images/green screen for tab-01.jpg';
import { Row, Col, Container } from 'react-bootstrap';
import studioRentalsImage from '../../images/Studio rentals M.png';
import '../../css/servisesCss/GreenScreen.css';
import '../../css/servisesCss/sevices-mediaquery.css';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GreenScreenVideo from './GreenScreenVideo';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function GreenScreen() {
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // Initialize AOS library
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HelmetProvider >
      <div>
        <Helmet>
          <title>Green Screen Studio Space Available For Rent | NovaTales</title>
          <meta
            name="description"
            content="Rent our green screen studio in hyderabad for your next project! Perfect for product shoots, corpaorate videos, Talkshows, Interviews and creative shoots."
          />
          <meta name="keywords"
            content="green screen studio for rent, photoshoot space rental, photography studio space for rent, photography studio rental, photoshoot studio for rent,photo studio for rent in hyderabad,rental studio for photography." />
        </Helmet>
      </div>
      <div>
        <div className="service-heading">
          <img src={GrennScreenLarge} width="100%" alt="green screen studio for rent" className="lap" />
          <img src={GreenScreenTab} alt="green screen studio for rent" className="tab" width="100%" />
        </div>
        <div className='Green-screen-video'>
          <div className='container-fluid mt-3'>
            <div className='service-para'>
              <h1 className="content-main-heading  mt-4 fs-3" data-aos="fade-up" data-aos-delay="0">Green screen Rentals</h1>
            </div>
            <GreenScreenVideo />
          </div>
        </div>
        <div className='greenScreenContentSection'>
          <Container>
            <Row>
              <Col lg={6}>
                <div className="service-para mt-3">
                  <h3 className="seo-caption">
                    <FontAwesomeIcon icon={faQuoteLeft} /> Bring Your Vision to Life.
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </h3>
                  {/* <h2 className="content-main-heading  mt-4 fs-3" data-aos="fade-up" data-aos-delay="0">Green screen Rentals</h2> */}
                  <div data-aos="fade-right" data-aos-delay="0">
                    <p className="mt-5" >
                      NovaTales Studio the only limit is your imagination. From the impressive backgrounds to performing a live stream for a TV show, we give you the ability to produce professional and interesting content.
                      Not a green screen expert? No problem!
                    </p>
                    <p>NovaTales believe in the power of creativity and offers the opportunity for businesses to create visually stunning and impactful videos or photos such as Commercial videos, promotional videos, and digital advertisements. By filming in front of the vibrant green backdrop of our exclusive recording studio, our editors replace the background with any other existing backgrounds or computer-generated imagery during the post-production process which allows seamless integration of actors or presenters into dynamic environments.
                      We know that every project is unique. So, if you are in search for a well-equipped shooting space, studio sets designed for various types of shoots and a fine selection of posing aids, well, we have got everything you are looking for and that’s why our rental programs are flexible, with no fixed term. From hourly bookings to full day sessions, our green screen studio is available for rent at an affordable price.</p>
                  </div>
                </div>
              </Col>
              <Col lg={6} className='greenScreenImage'>
                <img src={studioRentalsImage} alt="photoshoot space rental" />
              </Col>
            </Row>
          </Container>
        </div>
        <AllServices />
        <ServiceContactForm />
      </div>
    </HelmetProvider>
  )
}
