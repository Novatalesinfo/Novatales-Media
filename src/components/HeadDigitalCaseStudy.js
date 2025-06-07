import React, { useEffect } from 'react'
import "swiper/css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoSequence from './VideoProduction';
const HeadDigitalCaseStudy = () => {
    useEffect(() => {
        AOS.init();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <>
            {/* Top Banner of the page  */}
            <div className='case-study-details-banner'>
                <div>
                    <h1 className='mb-3' data-aos="fade-up" data-aos-delay="100" style={{
                    }}>Head Digital Works</h1>
                </div>
            </div>
            <VideoSequence />
           
        </>
    )
}

export default HeadDigitalCaseStudy
