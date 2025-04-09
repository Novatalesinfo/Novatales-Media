import React, { useEffect } from 'react'
import PhotoshootBannerLaptop from '../../images/Photoshoots header.jpg';
import PhotoshootBannerTab from '../../images/photoshoots tab.jpg';
import photoshootsImage from '../../images/Photoshoots M.png';
import '../../css/studio.css'; // Make sure you import your CSS file
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function Photoshoot() {
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
        <title>NovaTales - Best Professional Product Photography Services</title>
        <meta
          name="description"
          content="Showcase your products with our professional photoshoot services. NovaTales deliver high-quality images with precise detailing to enhance your brand’s appeal."
        />
        <meta name="keywords"
          content="professional photo shoot,product photography services,product photoshoot,professional product photography,business photoshoot,ecommerce product photography services." />
      </Helmet>
    </div>
      <div>
      <div className="service-heading">
        <img src={PhotoshootBannerLaptop} width="100%" alt="professional photo shoot" className="lap" />
        <img src={PhotoshootBannerTab} alt="professional photo shoot" className="tab" width="100%" />
      </div>
      <div className="photoshoots" id="photoshoots">
        <div className="container">
          <div className="section-title">
            <div data-aos="fade-up" data-aos-delay="0">
              <h1>PHOTOSHOOTS</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="photo-content" data-aos="fade-right" data-aos-delay="0">
                <p>We pride ourselves on creating customized pictures that perfectly fit your brand and its objectives. From concept to execution we have the people, tools, the locations including our own exclusive studio and the process to supercharge your initiatives. We think out of the box to create unique solutions for every business need. Our photoshoots service delivers high-quality, visually stunning pictures that showcase your brand's values, products, and services. We work closely with you to understand your objectives and bring your vision to life.</p>
                <p>NovaTales Photoshoot service for various business needs such as visual content for webpages, photoshoots for Ad campaigns including search ads, displays ads, and social media ads, photoshoots for brochures, flyers and other marketing materials. We strategize, plan and execute every element of the photoshoot to be consistent with your Brand personality and fit into your overall Brand strategy. </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="photo-image">
                <img src={photoshootsImage} alt="product photography services" className="photoshoot" />
              </div>
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
