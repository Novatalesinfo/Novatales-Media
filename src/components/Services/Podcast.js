import React, { useEffect } from 'react';
import podcastPlanningProduction6 from '../../images/podcast planning & production6.svg';
import podcastPlanningProductionTab from '../../images/podcast planning & production tab.svg';
import podcastM from '../../images/PODCAST M.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Podcast() {
  // Initialize AOS library for animations
  useEffect(() => {
    AOS.init();
  }, []);

  // Scroll to top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Podcasting in Digital Marketing: Power Up Your Strategy</title>
        <meta
          name="description"
          content="At Novatales launch your podcast with our expert planning, production, and editing services transforming your ideas into high-quality audio and video content."
        />
             <meta name="keywords"
        content="Podcasting in Digital Marketing, Podcast Editing Services, Best Podcast Platform, Podcast Hosting Services, Video Podcast Editing Services."/>
      </Helmet>
      <div className='podcast'>
        <div className="service-heading">
          <img src={podcastPlanningProduction6} width="100%" alt="Podcasting in Digital Marketing" className="lap" />
          <img src={podcastPlanningProductionTab} alt="Podcasting in Digital Marketing" className="tab" width="100%" />
        </div>
        <div className="service-content">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div data-aos="fade-up" data-aos-duration="1000">
                  <div className="service-para mt-3">
                    <h1>Podcast Planning & Production</h1>
                    <p className="mt-3">
                      Podcast is a digital medium consisting of audio and/or video elements. The NovaTales Podcast Production Agency is a team of highly skilled individuals with expertise in the entire lifecycle from developing content strategies to publishing at the right platforms to help you establish a long-term and dedicated audience. We use creativity and smart technology to produce engaging content, find the right distribution channels and enhance the discovery of your podcast.
                    </p>
                    <p>
                      Our post production services are exceptional with expertise in recording, editing, sound design graphic design and publishing. We provide advanced services through our exclusive green mat studio and Chroma key technology.We even provide promotion and marketing services for your podcast through the creation of teasers and trailers. Our services are designed to meet all your needs to create an engaging and professional podcast.
                    </p>
                  </div>
                </div>
                <div className="service-points">
                  <div className="container">
                    <div className=" left-media">
                      <div className="media">
                        <div className="media-body">
                          <h4>Audio Podcast or Video Podcast - Which one to choose?</h4>
                          <p>
                            We help you make the right decision based on a series of factors including the nature of the content, preference of your target audience, resources, financial constraints, and the chances for monetization. Although audio podcasts are more accessible to a wide variety of users, a lot of information and potential user base will be hard to reach without the use of visual elements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <div className="service-image">
                  <div className="info-img position-relative">
                    <img src={podcastM} alt="Podcast Editing Services" className="img-fluid topBottom" />
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
