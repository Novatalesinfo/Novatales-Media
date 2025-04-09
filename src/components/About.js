import React, { useEffect } from 'react';
import aboutHeroImage from '../images/ABOUT US N.svg';
import aboutHeroImageTab from '../images/about us n tab.svg';
import aboutImage from '../images/ABOUT US.png';
import ceoImage from '../images/veena mam pic.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/about.css'
import AllServices from './AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function About() {
  // Initialize AOS library
  useEffect(() => {
    AOS.init();
  }, []);
  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
        {/* Set the HTML head metadata */}
      <Helmet>
        <title>NovaTales - One of the Best Digital Advertising Agencies</title>
        <meta
          name="description"
          content="NovaTales is a digital marketing agency and branding firm with expertise in Marketing campaign strategy, Multimedia content creation, Web and App development"
        />
         <meta name="keywords"
        content="best digital advertising agencies, best seo companies, best digital marketing agency, mobile app development company, e commerce website design."/>
      </Helmet>
      <div className="about-hero">
        <img src={aboutHeroImage} width="100%" alt="best digital advertising agencies" className="lap" />
        <img src={aboutHeroImageTab}  alt="best digital advertising agencies" className="tab" width="100%" />
      </div>
      <div className="about-content">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div data-aos="fade-up">
                <div className="about-para">
                  <h1>About Us</h1>
                  <p>
                    Nova Tales is the adviser for business in the online world. We use different online
                    methods to make sure people notice and understand what a brand is all about. From making
                    websites show up when someone searches on Google to creating interesting posts on social
                    media, our focus is on telling each brand's unique story. Novatales keeps up with
                    ever-changing internet trends, so our strategies are always up-to-date and tailored to
                    help brands shine in the digital space.
                  </p>
                  <p>
                    Our approach is simple, we want to connect businesses with the right audience and guide
                    them through the online journey. Digital marketing with Novatales is not just about
                    using words it is about making sure every brand is heard and appreciated by the people
                    who matter most. We believe that in the vast online landscape, every business has a
                    story worth sharing, and we are here to help them share it effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div className="about-image">
                <img src={aboutImage} alt="best digital marketing agency" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-points">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div data-aos="fade-right">
                <div className="about-para-2">
                  <p>At Nova Tales, we aim to make strong and lasting connections with our clients. We are
                    dedicated in giving the best service and support, and we are here to answer any
                    questions or help with any concerns.</p>
                  <h4>OUR CORE VALUES</h4>
                  <ul type="square">
                    <li>Teamwork.</li>
                    <li>Focus on growth.</li>
                    <li>Always do what's right, no shortcuts.</li>
                    <li>Solve problems using data and technology.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div data-aos="fade-down">
                <div className="about-para-2">
                  <p>We are a skilled digital marketing company with a creative perspective. We understand how
                    business growth works. If you want to shake up your online presence and attain
                    exponential growth for your business, we would love to work with you. Reach out today to
                    find out more about our services and how we can help your business grow.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ceo">
        <div className="container">
          <div className="row">
            <h1>Meet The Founder</h1>
            <div className="col-lg-6">
              <div className="profile">
                <p>Veena is a techie turned marketing professional. She describes her startup in digital marketing as the “perfect amalgamation of her past career experiences”. She has studied Marketing at the prestigious Indian School of Business (ISB PGP Co2015) where she developed a penchant towards Branding and how it reshapes businesses.</p>
                <p>She has done her Engineering from the University of Illinois, Urbana-Champaign (UIUC) where she honed her technical skills. She later pursued technology careers at Deloitte & Touche LLP in Chicago, IL, USA, and at Vision Infonet Inc, USA where she worked on developing electronical medical records (EMR) applications and discovered her interest in UI/UX design. Post ISB, she pursued a career in Marketing and Branding at the erstwhile Optimus Pharma.</p>
              </div>
            </div>
            <div className="col-lg-6 ceo-pic">
              <div className="ceo-photo">
                <img src={ceoImage} alt="Portrait of Veena Reddy Endula, Founder & CEO of NovaTales" width="300px" />
                <h2>Veena Reddy Endula</h2>
                <h3>Founder & CEO</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AllServices />
    </HelmetProvider>
  );
}
