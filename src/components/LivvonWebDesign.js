import React, { useEffect } from "react";
import tab_img_1 from "../images/portfolio/livon_techno.png";
import graph from "../images/casestudies/graph.png";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutHeroImage from "../images/casestudies/livvon_lap.jpg";
import case_study_mobile_banner from "../images/casestudies/livvon_mob.jpg";
const LivvonWebDesign = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {/* Top Banner of the page  */}
      <div className="about-hero">
        <img
          src={aboutHeroImage}
          width="100%"
          alt="best digital advertising agencies"
          className="lap"
        />
        <img
          src={case_study_mobile_banner}
          alt="best digital advertising agencies"
          className="tab"
          width="100%"
        />
      </div>
      <div className="case-study-tabs-parents">
        <div className="case-study-tabs-child">
          {/* About the case  */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="row mt-5 mb-3 d-flex align-items-center case-study-details-row"
            style={{}}
          >
            <div className="col-lg-6 d-flex justify-content-center  p-lg-5">
              <img src={tab_img_1} alt="" className="case-study-tabs-img" />
            </div>
            <div className="col-lg-6 ps-lg-5 pt-3 pt-lg-0">
              <p
                style={{
                  fontSize: "18px",
                  color: "gray",
                  padding: "0px 0px",
                }}
              >
                About the Client
              </p>
              <h3
                style={{
                  fontSize: "32px",
                  color: "#f3bc50",
                }}
              >
                Livon Techno Foams
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  color: "",
                  padding: "0px 20px 0px",
                }}
              >
                {" "}
                <span
                  className="fw-bold"
                  style={{
                    color: "#f3bc50",
                  }}
                >
                  Industry :{" "}
                </span>{" "}
                Manufacturing / PU Foams
              </p>
              <div
                className="inside-tab-child-div"
                style={{
                  padding: "0px !important",
                }}
              >
                <p
                  style={{
                    paddingLeft: "0px !important",
                  }}
                  className=""
                >
                  Livvon Techno Foams, a manufacturer of high-quality mattress
                  toppers, pillows, and foam-based comfort solutions designed
                  for modern lifestyles. Utilizing advanced technology, Livvon
                  is redefining comfort through innovation, durability, and
                  ergonomic design for restful sleep for its customers.{" "}
                </p>
                <a
                  href="https://livontechnofoams.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="inside-tab-child-div-button">
                    Visit website
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Challenges and Niche Analysis  */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="row mt-5 mb-3 d-flex "
            style={{}}
          >
            <div className="col-lg-6 d-flex flex-column gap-2 p-3">
              <div>
                <h3
                  style={{
                    fontSize: "32px",
                    color: "#2f2144",
                  }}
                >
                  Challenges
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    color: "gray",
                    padding: "12px 0px 0 0",
                  }}
                >
                  The brand already had a strong manufacturing foundation, but
                  lacked brand identity when it partnered with Novatales Media:
                </p>
                <ul
                  style={{
                    marginTop: "24px",
                  }}
                >
                  <li
                    style={{
                      listStyle: "disc",
                      lineHeight: "1.8",
                      color: "#2f2144",
                    }}
                  >
                    No official website to present a wide range of industrial
                    foam products clearly and attractively categorized.
                  </li>
                  <li
                    style={{
                      listStyle: "disc",
                      lineHeight: "1.8",
                      color: "#2f2144",
                      padding: "8px 0px",
                    }}
                  >
                    Communicate technological capability, production quality,
                    and product differentiation.
                  </li>
                  <li
                    style={{
                      listStyle: "disc",
                      lineHeight: "1.8",
                      color: "#2f2144",
                      padding: "8px 0px",
                    }}
                  >
                    Low awareness about the brand in the competitive digital
                    environment.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex flex-column p-3  ps-xl-5">
              <h3
                style={{
                  fontSize: "32px",
                  color: "#2f2144",
                }}
              >
                Solution
              </h3>
              <p
                style={{
                  fontSize: "16px",
                  color: "gray",
                  padding: "12px 0px 0 0",
                }}
              >
                We built a comprehensive website for Livvon Techno Foams to
                establish a digital presence:
              </p>
              <ul
                style={{
                  marginTop: "24px",
                }}
              >
                <li
                  style={{
                    listStyle: "disc",
                    lineHeight: "1.8",
                    color: "#2f2144",
                  }}
                >
                  Created structured product categories (e.g., mattress cores, technical foams, acoustic foams).
                </li>
                <li
                  style={{
                    listStyle: "disc",
                    lineHeight: "1.8",
                    color: "#2f2144",
                    padding: "8px 0px",
                  }}
                >
                  Showcased manufacturing capabilities, quality certifications, and use cases.
                </li>
                <li
                  style={{
                    listStyle: "disc",
                    lineHeight: "1.8",
                    color: "#2f2144",
                    padding: "8px 0px",
                  }}
                >
                  Developed a responsive, performance-optimized layout targeting B2B clients and industrial buyers
                </li>
              </ul>
            </div>
          </div>
          {/* Results */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="row mt-5 mb-5 pb-5 d-flex align-items-center "
            style={{}}
          >
            <div className="col-xl-6 extra-padding-case-details">
              <h3
                style={{
                  fontSize: "32px",
                }}
              >
                Results
              </h3>
              <p
                style={{
                  color: "gray",
                  padding: "12px 0px",
                  fontSize: "16px",
                  textAlign: "justify",
                }}
              >
              After launching the website, Livvon Techno Foams measured visible organic footprints with improved digital visibility
              </p>
              <ul
                style={{
                  marginTop: "16px",
                }}
              >
                <li
                  style={{
                    listStyle: "disc",
                    lineHeight: "1.8",
                    color: "#2f2144",
                  }}
                >
                 A robust, well-presented product catalogue that helps Livon Techno Foams reach national and global markets, reinforce “Make in India” credentials, and grow sales.
                </li>
                <li
                  style={{
                    listStyle: "disc",
                    lineHeight: "1.8",
                    color: "#2f2144",
                    paddingTop: "16px",
                  }}
                >
                  {" "}
                  Improved customer engagement due to responsive web design and user-friendly navigation.
                </li>
                
              </ul>
            </div>
            <div className="col-xl-6 d-flex justify-content-center align-items-center">
              <img src={graph} alt="" className="case-study-tabs-img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LivvonWebDesign;
