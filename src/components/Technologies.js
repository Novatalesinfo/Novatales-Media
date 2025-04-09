import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/technologies.css';

// Import your images
import flutter from '../images/flutter-1.svg';
import angular from '../images/angular-2.svg';
import reactJs from '../images/react-js.svg';
import vue from '../images/vue-1.png';
import nextjs from '../images/nextjs.png';
import nodeJs from '../images/node-js.svg';
import mongoDb from '../images/mongo-db-1.svg';
import python from '../images/python-2.svg';
import golang from '../images/golang.svg';
import firebase from '../images/firebase-1.svg';
import aws from '../images/aws-1.svg';
import googleCloud from '../images/google-cloud.svg';
import zoho from '../images/zoho.svg';
import salesforce from '../images/salesforce.svg';
import paypal from '../images/paypal.svg';
import googleAnalytics from '../images/google-analytics.svg';
import postman from '../images/postman.svg';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigation } from '../components/NavigationContext';
export default function Technologies() {
  // Initialize AOS library for scroll animations
  useEffect(() => {
    AOS.init();
  }, []);
  // Scroll to the top of the page when the component is rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { handleNavigation } = useNavigation();
  return (
  <div>
      <HelmetProvider >
      {/* Set the HTML head metadata */}
      <Helmet>
        <title>Advanced Technologies for Web Development | NovaTales</title>
        <meta
          name="description"
          content="Lead the way in software development with our advanced web technologies like React JS, Node.js, Angular, MongDB and Postman for designing apps and websites"
        />
        <meta name="keywords"
          content="Development Tools, Web Technologies, Best Framework for Web Development, Mobile Development Frameworks, Front End Development Tools." />
      </Helmet>
      {/* Technologies section */}
   <div>
       <div className="technologies-Section">
        <div className="container">
          <div className="technologies-heading">
            <h1>Visualize the future and make it a reality with our <span>software technologies</span></h1>
            <div className="lets">
              <button className="talk"><Link to="/contactus">Let's talk</Link></button>
              <button className="service-button" data-aos="fade-up" data-aos-delay="0">
                <Link smooth="true" to="/#our-services"  onClick={() => handleNavigation('home')}>Our Services</Link>
              </button>

            </div>
          </div>
        </div>
        <div className="frontend">
          <div className="container">
            <div className="section-title">
              <div data-aos="fade-up" data-aos-delay="0">
                <h1>Front End Technologies</h1>
              </div>
            </div>
            <div className="section-para">
              <p>Connect with a broad audience with the help of robust web applications developed using flexible and multi-platform technologies such as Angular, React JS, Vue.JS, and Flutter.</p>
            </div>
            <div className="section-images">
              <img src={flutter} alt="Flutter Logo" width="240px" height="120px" className="image-cover" />
              <img src={angular} alt="Angular Logo" width="240px" height="120px" className="image-cover" />
              <img src={reactJs} alt="React JS Logo" width="240px" height="120px" className="image-cover" />
              <img src={vue} alt="Vue.js Logo" width="240px" height="120px" className="image-cover" />
              <img src={nextjs} alt="Next.js Logo" width="240px" height="120px" className="image-cover" />
            </div>
          </div>
        </div>

        <div className="backend">
          <div className="container">
            <div className="section-title">
              <div data-aos="fade-up" data-aos-delay="0">
                <h1>Back End Technologies</h1>
              </div>
            </div>
            <div className="section-para">
              <p>Build a strong base for your mobile app or online platform using powerful, adaptable backend technologies and ensure a seamless experience for your users globally. We have expertise in deploying server-side languages such as PHP, Java, Python, NodeJS, and MongoDB.</p>
            </div>
            <div className="section-images">
              <img src={nodeJs} alt="Node.js Logo" width="240px" height="120px" className="image-cover" />
              <img src={mongoDb} alt="MongoDB Logo" width="240px" height="120px" className="image-cover" />
              <img src={python} alt="Python Logo" width="240px" height="120px" className="image-cover" />
              <img src={golang} alt="Golang Logo" width="240px" height="120px" className="image-cover" />
              <img src={firebase} alt="Firebase Logo" width="240px" height="120px" className="image-cover" />
            </div>
          </div>
        </div>

        <div className="cloud-tech">
          <div className="container">
            <div className="section-title">
              <div data-aos="fade-up" data-aos-delay="0">
                <h1>Cloud Technologies</h1>
              </div>
            </div>
            <div className="section-para">
              <p>Lead the way in the cloud computing market. Our expertise in cloud technologies like Amazon Web Services and Google Cloud are tailor-made to fit your business needs.</p>
            </div>
            <div className="section-images">
              <img src={aws} alt="Amazon Web Services (AWS) Logo" width="240px" height="120px" className="image-cover" />
              <img src={googleCloud} alt="Google Cloud Logo" width="240px" height="120px" className="image-cover" />
            </div>
          </div>
        </div>

        <div className="software">
          <div className="container">
            <div className="section-title">
              <div data-aos="fade-up" data-aos-delay="0">
                <h1>Software Integrations</h1>
              </div>
            </div>
            <div className="section-para">
              <p>Nova Tales is your go-to solution for effortlessly integrating third-party softwares such as ZOHO, Zendesk, Analytics, Firebase, Paypal, and more into your current IT platform, ensuring disruption-free operations.</p>
            </div>
            <div className="section-images">
              <img src={zoho} alt="Zoho Logo" width="240px" height="120px" className="image-cover" />
              <img src={firebase} alt="Firebase Logo" width="240px" height="120px" className="image-cover" />
              <img src={salesforce} alt="Salesforce Logo" width="240px" height="120px" className="image-cover" />
              <img src={paypal} alt="PayPal Logo" width="240px" height="120px" className="image-cover" />
              <img src={googleAnalytics} alt="Google Analytics Logo" width="240px" height="120px" className="image-cover" />
            </div>
          </div>
        </div>

        <div className="testing">
          <div className="container">
            <div className="section-title">
              <div data-aos="fade-up" data-aos-delay="0">
                <h1>Testing & QA</h1>
              </div>
            </div>
            <div className="section-para">
              <p>Our proven Testing and QA solutions help our clients release fully integrated, tested, and user-friendly solutions for their users, free from bugs and glitches.</p>
            </div>
            <div className="section-images">
              <img src={postman} alt="Postman Logo" width="240px" height="120px" className="image-cover" />
            </div>
          </div>
        </div>
      </div>
   </div>
    </HelmetProvider>
  </div>
  );
}
