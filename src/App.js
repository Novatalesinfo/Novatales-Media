import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import './css/HomeMediaQuery.css';
import Technologies from './components/Technologies';
import ContactUsMain from './components/ContactUsMain';
import BrandingStrategy from './components/Services/BrandingStrategy';
import BrandPositioning from './components/Services/BrandPositioning';
import LogoVisual from './components/Services/LogoVisual';
import PackageDesign from './components/Services/PackageDesign';
import Advertising from './components/Services/Advertising';
import Seo from './components/Services/Seo';
import SMM from './components/Services/SMM';
import Analytics from './components/Services/Analytics';
import LogoQuestions from './components/Services/LogoQuestions';
import PaidAdvertising from './components/Services/PaidAdvertising';
import EmailMarketing from './components/Services/EmailMarketing';
import UIUXDesign from './components/Services/UIUXDesign';
import MobileApp from './components/Services/MobileApp';
import Ecommerce from './components/Services/Ecommerce';
import ContentCreation from './components/Services/ContentCreation';
import Podcast from './components/Services/Podcast';
import DigitalMarketing from './components/Services/DigitalMarketing';
import WebAppDevelopment from './components/Services/WebAppDevelopment';
import { NavigationProvider } from './components/NavigationContext';
import GreenScreen from './components/Services/GreenScreen';
import VideoProduction from './components/Services/VideoProduction';
import Photoshoot from './components/Services/Photoshoot';
import Blog from './components/Blog';
import HealthCare from './components/HealthCare';
import ThankYou from './components/thankyou';

// Component to handle uppercase-to-lowercase redirects
const RedirectToLowercase = () => {
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;
    // Check if the pathname contains any uppercase letters
    if (/[A-Z]/.test(pathname)) {
      // Redirect to the lowercase version, preserving query strings
      const lowercasePath = pathname.toLowerCase();
      window.location.replace(`${lowercasePath}${location.search}`);
    }
  }, [location]);

  return null; // This component doesn't render anything
};

const App = () => {
  return (
    <Router>
      <NavigationProvider>
        <Header />
        <RedirectToLowercase /> {/* Add the redirect logic here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/contactus" element={<ContactUsMain />} />
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/healthcare" element={<HealthCare />} /> */} {/* Lowercased if uncommented */}
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} /> {/* Fixed: Use element instead of component */}

          {/* Services Routes */}
          <Route path="/branding-and-marketing" element={<BrandingStrategy />} />
          <Route path="/brand-positioning" element={<BrandPositioning />} />
          <Route path="/logo-designing" element={<LogoVisual />} />
          <Route path="/logo-question" element={<LogoQuestions />} />
          <Route path="/brand-and-packaging-design" element={<PackageDesign />} />
          <Route path="/marketing-and-advertising" element={<Advertising />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/search-engine-optmization-marketing" element={<Seo />} /> {/* Typo: "optmization" should be "optimization" */}
          <Route path="/social-media-marketing" element={<SMM />} />
          <Route path="/google-analytics-search-console" element={<Analytics />} />
          <Route path="/ppc-advertising" element={<PaidAdvertising />} />
          <Route path="/email-marketing" element={<EmailMarketing />} />
          <Route path="/website-development" element={<WebAppDevelopment />} />
          <Route path="/ui-ux-design-development" element={<UIUXDesign />} />
          <Route path="/mobile-application-development" element={<MobileApp />} />
          <Route path="/e-commerce-web-development" element={<Ecommerce />} />
          <Route path="/content-creation-and-marketing" element={<ContentCreation />} />
          <Route path="/podcast-editing-hosting" element={<Podcast />} />
          <Route path="/green-screen-studio-rent" element={<GreenScreen />} />
          <Route path="/video-production" element={<VideoProduction />} />
          <Route path="/professional-photoshoot" element={<Photoshoot />} />
          
        </Routes>
        <Footer />
      </NavigationProvider>
    </Router>
  );
};

export default App;