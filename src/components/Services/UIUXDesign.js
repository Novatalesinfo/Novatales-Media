import React, { useEffect } from 'react';
import serviceImage1 from '../../images/Ui ux design 6.svg';
import serviceImage2 from '../../images/UI UX design tab.svg';
import designIcon from '../../images/design & development icon N.png';
import ideationIcon from '../../images/Ideation icon M.png';
import serviceImage3 from '../../images/UI  UX Design M.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function UIUXDesign() {
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Best UI/UX Design Agency for Exceptional User Experience</title>
        <meta
          name="description"
          content="Novatales specializes in UI/UX development services with smart web designs that elevate user satisfaction, improve navigation and engagement across platforms."
        />
        <meta name="keywords"
          content="Best UI UX Design Agency, UIUX Development Services, UI UX App Development, UI UX Design and Development Services, UI and UX Company" />
      </Helmet>
      <div className='ui-ux'>
        <div className="service-heading">
          <img src={serviceImage1} width="100%" alt="UIUX Development Services" className="lap" />
          <img src={serviceImage2} alt="UIUX Development Services" className="tab" width="100%" />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para">
                    <h1>UI/UX Design</h1>
                    <p>
                      Building a thorough UI / UX Design ensures that websites don’t just look good but are easy and enjoyable to use. At Nova Tales, we build UI/UX designs that search engines like to show at the top of their results pages with content relevant to the search terms your potential customers are using.
                    </p>
                    <p>
                      We understand how to improve your website user experience and how it will influence customer decisions. We are also aware of the technology tools such as Vue JS, NEXT JS and React JS that help keep a website relevant on all devices and search engines. Whether you need a brand new website, an update to your existing website or a complete redesign, we can help, quickly and efficiently.
                    </p>
                    <div className="media">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                          <div className="media-image">
                            <img src={designIcon} alt="Design and development icon" width="100%" />
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                          <div className="media-body">
                            <h4>Design & Development</h4>
                            <p>
                              Our main focus will be on developing a visually appealing layout that not only captures your attention but is intuitive, allows access to content and easy to navigate. We build prototypes and test the flow and functionality of the design. We take feedback from real users from first interaction to final completion of tasks and refine the designs. UI / UX design is essential to create a memorable user experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="media">
                      <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                          <div className="media-image">
                            <img src={ideationIcon} alt="Ideation and brainstorming icon" width="100%" />
                          </div>
                        </div>
                        <div className="col-lg-10 col-md-10 col-sm-12">
                          <div className="media-body">
                            <h4>Ideation</h4>
                            <p>
                              In our ideation process of designing a website we start by talking to our clients to understand who they are and what they want. Then, we come up with unique ideas that match their brand and connect with their audience. Our goal is to make websites that look good, work well, and truly represent our clients online.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={serviceImage3} alt="UI UX App Development" className="img-fluid topBottom" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AllServices />
        <ServiceContactForm />
      </div>
    </HelmetProvider>
  );
}
