import React from 'react';
import logoVisualImage from '../../images/LOGO & VISUAL ELEMENTS 6.svg';
import logoVisualTabImage from '../../images/logo & visual elements tab.svg';
import logoVisualMImage from '../../images/logo & visual elements m.png';
import colorPaletteIcon from '../../images/color palette icon.png';
import brandTypographyIcon from '../../images/Brand typography icon N.png';
import taglineIcon from '../../images/tagline icon.png';
import logoIcon from '../../images/Logo icon N.png';
import brandVoiceIcon from '../../images/brand voice.png';
import '../../css/servisesCss/logo.css'
import ServiceContactForm from './ServiceContactForm';
import AllServices from '../AllServices';
import { Helmet, HelmetProvider } from 'react-helmet-async';
export default function LogoVisual() {
    return (
        <HelmetProvider >
            {/* Set the HTML head metadata */}
            <Helmet>
                <title>Creative Logo Design Company for your Business | NovaTales</title>
                <meta
                    name="description"
                    content="Stand out with NovaTales best logo design company. Our distinctive logos enhance your brand’s identity and create powerful connections with your customers."
                />
                <meta name="keywords"
                    content="logo design company,best logo design company,logo designing,logo designing agency,design and branding company,graphic design agency,logo and branding,best branding agency." />
            </Helmet>
            <div className="service-heading">
                <img src={logoVisualImage} width="100%" alt="best logo design company" className="lap" />
                <img src={logoVisualTabImage} alt="best logo design company" className="tab" width="100%" />
            </div>
            <div className="service-content LogoVisual">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <div className="service-para mt-3">
                                    <h1 className="content-main-heading mb-3">Logo & Visual Elements</h1>
                                    <p className="mt-4">
                                        Visual appeal is paramount for brand building. Along with creating a brand story and messaging, it is important to create branding elements that send a clear message and attract consumers. Creating a positive first impression and then continuing to remain in the mind space of your customer requires the skill and expertise of branding experts like Nova Tales.
                                    </p>
                                    <p>
                                        The visual elements created by Nova Tales for your brand will be carefully curated to ensure the personality and values of your brand are communicated without ambiguity.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-center">
                            <div className="service-image">
                                <div className="info-img position-relative">
                                    <img src={logoVisualMImage} alt="logo design company" className="img-fluid topBottom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-points Logo-ser">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 left-media" style={{ paddingRight: '70px' }}>
                            <div className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={colorPaletteIcon} alt="Color palette icon representing color choices for branding" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4>Color Palette</h4>
                                            <p>
                                                Colors can evoke powerful emotions in client engagement and pay a huge contribution to brand recognition. Choosing the appropriate set of colors that must be associated with your brand in line with your brand personality.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={brandTypographyIcon} alt="Typography icon illustrating font choices for branding" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4>Typography</h4>
                                            <p>
                                                Typography comprises the distinct fonts and styles to be used in your logo, tagline and various internal and external communications. It is imperative that the typography is clearly defined and consistently used to create a cohesive brand identity.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-2">
                                            <img src={taglineIcon} alt="Tagline icon representing brand messaging" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4>Tagline</h4>
                                            <p>
                                                We will provide tagline options to capture the essence of your brand and its values in the form of a concise and memorable phrase. Tagline sets the tone for your brand communication and starts to paint a picture of your brand’s personality. You can optionally include this in your marketing communications.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 side-points">
                            <div className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-3">
                                            <img src={logoIcon} alt="Logo design icon representing logo creation services" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4>Logo design</h4>
                                            <p>
                                                The most crucial element of our services is to create a visually distinctive and memorable imagery that represents the company and serves as your primary visual identifier. A well-designed logo can help make the brand memorable and convey the values of the company at a glance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <div className="row">
                                    <div className="col-lg-2 col-md-2 col-sm-2">
                                        <div className="media-image mt-3">
                                            <img src={brandVoiceIcon} alt="Brand voice icon representing brand tone and style" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-10 col-md-10 col-sm-12">
                                        <div className="media-body">
                                            <h4>Brand Voice</h4>
                                            <p>
                                                Our first step is to create the tone, style, and personality of your brand. We achieve this through our in-depth analysis of your brand values through interviews and questionnaires; the internal research we conduct of your industry, its current market trends, and your competitors. Based on our findings, we will create a checklist to align your brand voice with the goals and aspirations you have imagined.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AllServices />
            <ServiceContactForm />
        </HelmetProvider>

    );
}
