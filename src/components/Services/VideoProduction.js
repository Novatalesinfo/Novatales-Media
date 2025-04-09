import React, { useEffect } from 'react'
import videoScreenLaptop from '../../images/video production-01.jpg';
import videoScreenTab from '../../images/video production tab-01.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../css/studio.css'; // Make sure you import your CSS file
import adFilms from '../../images/ad films.png';
import youtubeAds from '../../images/youtube ads.png';
import socialMediaMarketing from '../../images/social m marketing icon N.png';
import productAds from '../../images/product ads.png';
import corporateFilms from '../../images/corporate films.png';
import explainerVideos from '../../images/expainer videos.png';
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function VideoProduction() {
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
      <Helmet>
        <title>Professional Video filming and Production Agency| NovaTales</title>
        <meta
          name="description"
          content="Elevate your brand with our expert video production and video filming services for your corporate film, video ad, podcast, explainer video, reels, shorts."
        />
        <meta name="keywords"
          content="corporate video production company,video production Agency,best video editing services,videography editing,video production company,corporate videography." />
      </Helmet>
      <div>
        <div className="service-heading">
          <img src={videoScreenLaptop} width="100%" alt="corporate video production company" className="lap" />
          <img src={videoScreenTab} alt="corporate video production company" className="tab" width="100%" />
        </div>
        <div className="video" id="video">
          <div className="container">
            <div className="section-title">
              <div data-aos="fade-up" data-aos-delay="0">
                <h1>VIDEO PRODUCTION</h1>
              </div>
            </div>
            <div className="section-para">
              <p>Our talented team of writers, graphic designers, artists, videographers, editors, musicians, directors and producers bring to life visually stunning video production assignments to suit your needs. </p>
            </div>
            <div className="video-icons">
              <div className="video-box">
                <div className="video-box-icon">
                  <img src={adFilms} alt="Ad Films" width="70px" />
                </div>
                <div className="video-box-heading">
                  <h3>Ad Films</h3>
                </div>
                <div className="video-box-content">
                  <p>From storyboarding to post production for any medium of distribution </p>
                </div>
              </div>
              <div className="video-box">
                <div className="video-box-icon">
                  <img src={youtubeAds} alt="YouTube Ads" width="80px" />
                </div>
                <div className="video-box-heading">
                  <h3>YouTube Ads</h3>
                </div>
                <div className="video-box-content">
                  <p>Captivating and visually stunning ads from 15 seconds up to 3 minutes</p>
                </div>
              </div>
              <div className="video-box">
                <div className="video-box-icon">
                  <img src={socialMediaMarketing} alt="Social Media Marketing Ads" width="80px" />
                </div>
                <div className="video-box-heading">
                  <h3>Social Media Ads</h3>
                </div>
                <div className="video-box-content">
                  <p>Highly engaging, crisp, and optimized for Instagram and Facebook</p>
                </div>
              </div>
            </div>
            <div className="video-icons2">
              <div className="video-box">
                <div className="video-box-icon">
                  <img src={productAds} alt="Product Videos" width="70px" />
                </div>
                <div className="video-box-heading">
                  <h3>Product Videos</h3>
                </div>
                <div className="video-box-content">
                  <p>Creative storytelling to increase customer engagement with product/service</p>
                </div>
              </div>
              <div className="video-box">
                <div className="video-box-icon">
                  <img src={corporateFilms} alt="Corporate Films" width="60px" />
                </div>
                <div className="video-box-heading">
                  <h3>Corporate Films</h3>
                </div>
                <div className="video-box-content">
                  <p>Professionally done, ideal for external stakeholders & internal communication</p>
                </div>
              </div>
              <div className="video-box">
                <div className="video-box-icon">
                  <img src={explainerVideos} alt="Explainer Videos" width="80px" />
                </div>
                <div className="video-box-heading">
                  <h3>Explainer Videos</h3>
                </div>
                <div className="video-box-content">
                  <p>Explain any new concept, product, service or app with simple ideas </p>
                </div>
              </div>
            </div>
            <div className="video-content">
              <p className="sub-video-heading" data-aos="fade-up" data-aos-delay="0">NovaTales production team creates relevant productions that maximize benefits:</p>
              <div data-aos="fade-right" data-aos-delay="0">
                <p> Our process for creating exceptional professional videos starts with first understanding your current business scenario and then doing our own in-depth research to align your business needs with the audience’s requirements. </p>
                <p>Our production team creates a detailed plan of timelines right from scripting to shots needed to create a smooth and efficient shooting schedule. Our creative team of directors and cinematographers makes sure the script is translated into spell-binding imagery through detailed instruction to the cast and crew and close monitoring of the progress. </p>
                <p>Our team can film at any location to get the best footage for your project. We can even transport you to a magical wonderland by shooting footage at our exclusive green screen studio and placing suitable backgrounds. Using the latest software, our skilled editors turn your footage into something amazing. </p>
                <p>Our post-production services include motion graphics, titles, animation, voiceover, special effects, music, sound design, and color adjustments. If you can think of it, we can do it. </p>
              </div>
            </div>
          </div>
        </div>
        <AllServices />
        <ServiceContactForm />
      </div>
    </HelmetProvider>
  )
}
