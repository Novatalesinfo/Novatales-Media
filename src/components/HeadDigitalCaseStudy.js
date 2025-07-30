import React, { useEffect } from 'react'
import "swiper/css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoSequence from './VideoProduction';
import aboutHeroImage from "../images/casestudies/head_digital_lap.jpg"
import case_study_mobile_banner from "../images/casestudies/head_digital_mob.jpg"

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
            <div className="about-hero">
                <img src={aboutHeroImage} width="100%" alt="best digital advertising agencies" className="lap" />
                <img src={case_study_mobile_banner} alt="best digital advertising agencies" className="tab" width="100%" />
            </div>
            <VideoSequence />
        </>
    )
}

export default HeadDigitalCaseStudy
