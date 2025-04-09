import React, { useEffect } from 'react'
import '../css/healthcare.css'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import checkIcon from '../images/check list bullet points 0001-01.png'
import checkIcon2 from '../images/check list bullet points 0-02.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeart, faShare, faStarOfLife } from '@fortawesome/free-solid-svg-icons';
export default function HealthCare() {
  // Scroll to top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <div className='landing-health-care'>
          <div>
            <h2>Unlock Your Hospital's Potential Using <span>Digital Marketing Services</span></h2>
            <Link to="/contactus">
              <button>Connect With Us</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="stethescope">
          <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/landing-slider-1-image-8.png" alt="" />
        </div>
        <div className="tablets-1">
          <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/landing-slider-1-image-9.png" alt="" />
        </div>
        <div className="tablets-2">
          <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/landing-slider-1-image-11.png" alt="" />
        </div>
        <div className="tablets-3">
          <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/landing-slider-1-image-4.png" alt="" />
        </div>
        <div className="knief">
            <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/landing-slider-1-image-3.png" alt="" />
          </div>
          <div className="tablete-01">
            <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/landing-slider-1-image-2.png" alt="" />
          </div>
          <div className="tablete-02">
            <img src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/landing-slider-1-image-4.png" alt="" />
          </div>
      </div>
      <div className="unlock">
        <div className="health-care-content">
          <Container>
            <Row>
              <Col lg={6} className='content-background'>
                <p>Imagine your hospital being the top choice when patients think about getting medical care. How would you feel when your hospital speaks directly to your patients even before they step into your doors? How does it feel when patients not only find your hospital but rather choose your hospital over other hospitals?</p>
                <p>In an era, where every click counts, do you afford to be invisible online? Do you want to rise above the crowd and make a visible impression of trust in this crowded market? If yes, then you are ready to dive into the world of Digital Marketing where you will leverage all the tools and strategies that make you different and unique in this crowded industry of healthcare organisations.</p>
                <p>In today's rapidly shifting environment, authenticity will demonstrate your trustworthiness. And the healthcare sector demands high cautiousness before people establish their trust. People prefer hospitals with good ratings, genuine reviews, and skilled practitioners. There are plenty of hospitals in India with advanced technologies and experienced doctors. So people will automatically choose the one which is best for them.</p>
              </Col>
              <Col lg={6} className='content-background'>
                <p>People search for hospitals online and their trust drives them to the top listed hospitals. But we know your hospital is no less than the top-listed one. But your hospital is not getting the attention that it deserves.</p>
                <p>But don't worry, we are here. We aim to bring your hospital to the people's notice. The solution is Digital Marketing for your hospital. We will be doing our best to bring more visits, increase your revenue, create awareness of the brand, and ease patient engagement. All of these will be achieved by running strategic marketing tactics.</p>
                <p>We will be providing you with a timely report with a detailed analysis of your performance. That's not the end. We will be there with you forever to ensure you perform well and give you timely support. According to the reports, the Hospital sector in India will see a growth rate of 18.24%. So, this is the best time to boost your business to see significant growth.</p>
                <Row className='content-background-2'>
                  <p>Our aim is your Prosperity.</p>
                </Row>
              </Col>
            </Row>

          </Container>
        </div>
      </div>
      <div className="health-care-why-choose">
        <Container>
          <div className="health-why-novatales">
            <h3>Why Choose <span>NovaTales</span> for Your Healthcare <span>Marketing Strategies?</span></h3>
          </div>
          <Row>
            <Col lg={6}>
              <div className="health-choose-content">
                <ul>
                  <li><FontAwesomeIcon icon={faShare} className='even' />  We have considerable experience in providing digital marketing services. We are tied up with many reputed companies providing them with top-notch services.</li>
                  <li><FontAwesomeIcon icon={faShare} className='even' /> 	Our services are flexible. Our services are customizable according to your demands. We will curate our solutions depending on the hospital's needs.</li>
                  <li><FontAwesomeIcon icon={faShare} className='even' />  We will be providing insider insights about your hospital's statistics.</li>
                  <li><FontAwesomeIcon icon={faShare} className='even' /> 	Whatever your hospital size, we tailor our services to meet your expectations.</li>
                </ul>
              </div>
            </Col>
            <Col lg={6}>
              <div className="health-choose-content">
                <ul>
                  <li><FontAwesomeIcon icon={faShare} className='even' /> 	Our friendly support system is always there to assist you. No matter what and where you got stuck, we are there to bring you back on track.</li>
                  <li><FontAwesomeIcon icon={faShare} className='even' /> 	Digital Marketing is a cost-effective method of advertising to set your hospital as a brand compared to traditional methods. With us, budget is not a barrier to achieving your goal.</li>
                  <li><FontAwesomeIcon icon={faShare} className='even' /> 	We leverage the latest technologies thus making our services more affordable, and providing you with the best.</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className='health-choose-content-2'>
            <p>Step into the world of Digital Marketing with NovaTales, where every click from your patients will lead them to a healthy future turning your hospital into a trusted community pillar!!</p>
          </Row>
        </Container>
      </div>
      <div className="health-Digital-Marketing">
        <Container>
          <div className="health-digit-heading">
            <h3>NovaTales' Expert Digital Marketing Services for Healthcare and Clinics</h3>
            <p>Whatever your budget, we will be doing our best to promote your healthcare industry. We have a variety of ways in which you can expand your business.</p>
          </div>
        </Container>
        <Container fluid>
          <Row className='health-Digital-Marketing-content'>
            <Col lg={6} className='health-dig-para'>
              <h4>Building Strong Social Media Presence</h4>
              <div className="bottom-underline"></div>
              <p>We will establish your strong presence on Social media. Why Social media? In the digital era, where everything is available online, so it's obvious you will find your prospects online.</p>
              <p>   For starting your social media marketing, we will be setting up and building a community on Facebook, Instagram, Twitter and LinkedIn. From there you can see how your brand is getting popular and recognised. With this setup, you will be in touch with your customers 24/7. And we are here to make sure everything is working out smoothly.</p>
              <p>To know more about how you can boost your business with Social media marketing, <Link to=''>Click here</Link>.
              </p>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img'>
              <span className="wdt-heading-title">01</span>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img1'>
              <span className="wdt-heading-title-1">02</span>
            </Col>
            <Col lg={6} className='health-dig-para1'>
              <h4>Expert SEO and SEM Services</h4>
              <div className="bottom-underline"></div>
              <p>When people need to find a hospital, they rely on Google. Still today, Google has more searches than any other platform. So it's very crucial to rank on Google. Our expert SEM and SEO services will serve the results for you.</p>
              <p>To know more about how you can maximise your reach to targeted prospects using effective SEO and SEM services, <Link to=''>Click here</Link>.
              </p>
            </Col>
            <Col lg={6} className='health-dig-para'>
              <h4>Professional Content Marketing Services</h4>
              <div className="bottom-underline"></div>
              <p>When you want to turn your targeted audience into your customers, content marketing will serve you the purpose. Though the results are not immediate, it is an effective strategy to keep hold of your customers.</p>
              <p><Link to=''>Click here</Link> to dive in to learn how you can enhance your business with content.
              </p>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img'>
              <span className="wdt-heading-title">03</span>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img1'>
              <span className="wdt-heading-title-1">04</span>
            </Col>
            <Col lg={6} className='health-dig-para1'>
              <h4>Personalised E-mail Marketing Service</h4>
              <div className="bottom-underline"></div>
              <p>If you want to get in direct touch with your customers, E-mail marketing is a powerful strategy. E-mails have a personalised touch which will create a sense of familiarity.</p>
              <p>To know how you can grow your business with email marketing,  <Link to=''>Click here</Link>.
              </p>
            </Col>
            <Col lg={6} className='health-dig-para'>
              <h4>Comprehensive Reputation Management Services</h4>
              <div className="bottom-underline"></div>
              <p>Once we succeed in establishing your hospital as a brand, then We will be helping you to improve your online reputation. We will be managing the feedback and reviews using our tools.</p>
              <p>Know more about the importance of Reputation management of your business <Link to=''>Click here</Link>.
              </p>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img'>
              <span className="wdt-heading-title">05</span>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img1'>
              <span className="wdt-heading-title-1">06</span>
            </Col>
            <Col lg={6} className='health-dig-para1'>
              <h4>Customized Website Development & Optimization Services</h4>
              <div className="bottom-underline"></div>
              <p>When patients get aware of your hospital, the first thing they notice is your website. When the website is visually appealing, covering all the minor to major concerns of patients then it is more likely that the patient will contact your hospital for further queries.</p>
              <p> Our team will help you with setting up your professional website. Our web optimization service will increase traffic and improve website performance. Your website will be designed in such a way that users of any age group will find it easy to use.</p>
              <p>Learn insider insights about the significant role that web development plays in digital marketing for the growth of your business,<Link to=''>Click here</Link>.
              </p>
            </Col>
            <Col lg={6} className='health-dig-para'>
              <h4>StrategicPaid Advertisements</h4>
              <div className="bottom-underline"></div>
              <p>We have vast experience in running advertisements that reach your targeted patients. Be it about highlighting any specific treatment or about any health services, with our ad services it will always have quality volume.</p>
              <p>Learn more about how paid advertisements work to boost your business, <Link to=''>Click here</Link>.
              </p>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img'>
              <span className="wdt-heading-title">07</span>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img1'>
              <span className="wdt-heading-title-1">08</span>
            </Col>
            <Col lg={6} className='health-dig-para1'>
              <h4>Powerful Video Marketing Solutions</h4>
              <div className="bottom-underline"></div>
              <p>Video is a powerful way to convey your hospital's message to people. The report suggests that people get more engaged with video content than with text-based information. By creating an informative video about your hospital's vision, mission, services and testimonials you will be able to leave a strong impact on the audiences.</p>
              <p>Learn more about how we help in enhancing your business through video marketing ,<Link to=''>Click here</Link>.
              </p>
            </Col>
            <Col lg={6} className='health-dig-para'>
              <h4>Expert Medical Content Writing services</h4>
              <div className="bottom-underline"></div>
              <p>When you share, you gain more. If you want to gain traffic and want to create awareness about your hospital then include informative articles about daunting medical terms for your patients.</p>
            </Col>
            <Col lg={6} className='health-Digital-Marketing-content-img'>
              <span className="wdt-heading-title">09</span>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="Benefits">
        <Container>
          <div className="benefits-heading">
            <h3>Explore the <span>Benefits</span> of Digital Marketing Services in the Healthcare Industry</h3>
            <p>Everyone around the world has taken advantage of the internet. And the healthcare sector is not far behind. Already there are so many healthcare units who have set up their presence online and have gained a lot of recognition. Let's have a brief look at how Digital Marketing will lift the name of your hospital:</p>
          </div>
          <Row>
            <Col lg={2}>
              <div className="ivon">
                <img src={checkIcon} alt="CHECKLIST" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="benefuts-points">
                <div className="benefits-content">
                  <h1 className='arrow'>Strong online presence</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ul className="circle-list">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Digital Marketing is such a boon to businesses that they can have access to a wider range of audiences in no time. People are relying on search results, and the top searches assure them about brand authenticity. More people get to know about your hospital, and chances are that more patients will also be drawn to your hospital.
                </li>
              </ul>

            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="ivon">
                <img src={checkIcon2} alt="CHECKLIST" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="benefuts-points">
                <div className="benefits-content">
                  <h1 className='arrow2'>Boost patient visits</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ul className="circle-list">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Digital Marketing uses your data and curates it in such a way that matches the needs of the patients. The message reaches the specific targeted group that makes people visit your hospital.
                </li>
              </ul>

            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="ivon">
                <img src={checkIcon} alt="CHECKLIST" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="benefuts-points">
                <div className="benefits-content">
                  <h1 className='arrow'>Increased Awareness of your Hospital</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ul className="circle-list">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Today almost all brands are competing to be on the frontier. The more the reach, more the awareness about your hospital. And having an awareness about your hospital among the public is very crucial. When your hospital is established as a recognised brand then trust is built which attracts patients.
                </li>
              </ul>

            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="ivon">
                <img src={checkIcon2} alt="CHECKLIST" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="benefuts-points">
                <div className="benefits-content">
                  <h1 className='arrow2'>Innovative ways to Market your brands</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ul className="circle-list">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Digital Marketing has a wide variety of innovative ways to market your hospital as a brand. As per the requirements, the digital marketing team carry out their best possible strategies to establish your hospital as a brand.
                </li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="ivon">
                <img src={checkIcon} alt="CHECKLIST" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="benefuts-points">
                <div className="benefits-content">
                  <h1 className='arrow'>Budget-friendly Marketing</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ul className="circle-list">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Unlike the traditional methods of marketing where the cost to run the marketing campaigns was expensive and time-consuming. The modern way of marketing digitally is equally pocket-friendly and you can see the results in less period.
                </li>
              </ul>

            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="ivon">
                <img src={checkIcon2} alt="CHECKLIST" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="benefuts-points">
                <div className="benefits-content">
                  <h1 className='arrow2'>Informed decisions with data</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ul className="circle-list">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Upon joining hands with digital marketing you have access to data insights about how your site and the other online marketing campaigns are performing. Based on the data you can decide further steps to be taken.
                </li>
              </ul>

            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="ivon">
                <img src={checkIcon} alt="CHECKLIST" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="benefuts-points">
                <div className="benefits-content">
                  <h1 className='arrow'>Foster connections with your Patients</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ul className="circle-list">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  Being in touch with your patients will bring a sense of a homey atmosphere among the patients. Taking advantage of digital marketing by sending personalised messages or emails will give a touch of belongingness. Approaches like this will help in building and establishing long-term relationships.
                </li>
              </ul>

            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <div className="ivon">
                <img src={checkIcon2} alt="CHECKLIST" />
              </div>
            </Col>
            <Col lg={4}>
              <div className="benefuts-points">
                <div className="benefits-content">
                  <h1 className='arrow2'>Enhance patient experience</h1>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <ul className="circle-list">
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  When a hospital provides a good service to a patient, then the hospital will be in the good books of the patient. But that is not enough. Providing them the supreme level of comfort and satisfaction before, during and after the hospital visit will bring satisfaction for them.
                </li>
                <li>
                  <FontAwesomeIcon icon={faCircle} />
                  So, now we know the multiple unresistible benefits of including Digital marketing in your Hospital to make it stand out from others in the crowded market. Then why is your hospital not yet on the frontier?
                </li>
              </ul>

            </Col>
          </Row>
        </Container>
      </div>
      <div className="Health-faqs">
        <Container>
          <div className="health-faqs-heading">
            <h3>FAQ'S</h3>
          </div>
          <div className="faq-accordion">
            <Row>
              <Col lg={6}>
                <Accordion >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span className='highlight-point'>01</span> Does my Hospital need Digital Marketing?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, Digital Marketing is a way by which you can promote your hospital's services through social media, emails, and websites. It will help to reach and connect with potential patients.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className='highlight-point'>02</span> Will the results reflect immediately?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, the reflection of results depends on the services you have opted for.
                      The paid advertisement will show you the result within 2-4 days or a week. At the same time, the SEO will take somewhere around 4-6 months because this way your hospital's growth will be organic.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className='highlight-point'>03</span> Will the cost of Digital Marketing services go along with my budget?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, the cost varies from service to service. It depends on what service you will be opting for.
                      If you go with paid ads- it will cost you more. If you need to grow organically with SEO, it will be cost-effective. We even allow you to have a customized service which is a combination of both paid advertisement and SEO. In customization, you choose the services.
                      So the cost will completely depend on your needs.

                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <span className='highlight-point'>04</span> Will I be able to check the progress after opting for Digital Marketing Services from NovaTales?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, we will be providing you with the regular progress report. It will be either weekly, bi-weekly or monthly reports. Depending on the package chosen, a detailed report on the updates will be made covering various performance metrics like website traffic, engagements on social media, conversion rates, and SEO rankings.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <span className='highlight-point'>05</span> Will NovaTales' Digital Marketing services be effective if I want to raise awareness about any event or campaign that my hospital will organise?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes. Using the best social media marketing strategies we will make awareness about your campaigns and events among the targeted and potential users on social media.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <span className='highlight-point'>06</span> Will NovaTales' Services help me retain patients?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, there's no doubt about it. We provide various services. You have the choice to choose from it. And we follow the best strategies to develop trust and engage patients in the long run.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      <span className='highlight-point'>07</span> Will NovaTales write medical blog posts for my Hospital?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, of course. We have a creative writing team. They can write as many posts as your hospital needs based on your requirements.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      <span className='highlight-point'>08</span> Will NovaTales' services improve my hospital's availability for emergency services?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, to make your hospital visible on top of the search results for emergency searches, we will be optimizing local SEO.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={6}>
                <Accordion >
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <span className='highlight-point'>10</span>Will NovaTales provide post services if we face any problems?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, you can count on us. We are readily available at your service whenever you need. Our mission is your progress and prosperity. Once you join hands with us, we make sure that it lasts forever.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <span className='highlight-point'>11</span> Will Digital Marketing help in increasing patient footfall?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, this is what our mission is. We will be improving your visibility using social media. We will target more local patients and help you improve your healthcare accessibility online for the ease of your patients.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <span className='highlight-point'>12</span> What is medical marketing?
                    </Accordion.Header>
                    <Accordion.Body>
                      Medical marketing is the set of strategies for healthcare organisations to use to increase their patients, establish their unit as a brand, present their services and attract more patients.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <span className='highlight-point'>13</span> Will Digital Marketing help my hospital stand out in the competitive market?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes. Along with our experts and innovative strategies, we will establish a brand identity among the people. Our techniques are more patient-centric to know about their psychology and needs and accordingly, we carry out the best practices.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <span className='highlight-point'>14</span> Is Digital Marketing beneficial for doctors and their practices?
                    </Accordion.Header>
                    <Accordion.Body>
                      Offcourse Yes. Digital Marketing's sole purpose is to make your efforts visible to a wide group of people and turn them into your forever patients.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <span className='highlight-point'>15</span> Should clinics consider hiring a Marketing agency?
                    </Accordion.Header>
                    <Accordion.Body>
                      Yes, if you want to get more patients, increase your revenue and establish your organisation as a brand.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      <span className='highlight-point'>16</span> How will Digital Marketing be adjusted for clinics and hospitals?
                    </Accordion.Header>
                    <Accordion.Body>
                      Digital Marketing will focus on improving local SEO for your website, setting up the personalised communication mode for patients, quick and hassle-free online bookings and appointments, promoting your services to people and much more.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7">
                    <Accordion.Header>
                      <span className='highlight-point'>17</span> What services are offered by NovaTales to promote our medical practices?
                    </Accordion.Header>
                    <Accordion.Body>
                      Digital Marketing services promote medical practices by offering SEO, website development, establishing a strong social presence, paid ads, reputation management, and content marketing. Also, we customise services as per your needs and request.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </div>
          <div className="conclusion mb-5">
            <div className="concl-heading">
              {/* <h3>CONCLUSION</h3> */}
              <div></div>
            </div>
            <p>When you get partnered with NovaTales, we guarantee that your fear of lagging behind the online visibility on search engines will vanish. You will confidently stand alongside other hospitals with a strong online presence. You will be able to attend and assist patients online more effectively. Our tools will bring positive feedback to the hospital. Your medical services will drag more patients when effectively shown to the public. You will get many more benefits from our services.</p>
            <p>Let's transform your hospital's digital presence by building a strong community creating a positive impact on society and unleashing the true potential that your hospital holds. Let's embark on this journey together.</p>
          </div>
        </Container>
      </div>
    </>
  )
}
