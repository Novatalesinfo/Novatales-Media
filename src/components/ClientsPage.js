import React, { useEffect } from "react";
import "../css/clients.css";
import TrippinladakhLogo from "../images/trippin-ladakh-logo-03.png";
import mdOfficelogo from "../images/Untitled-1-01.png";
import FaxtoneLogo from "../images/Faxtone logo.png";
import TavasLogo from "../images/TavasSecurity.png";
import VInfoNetLogo from "../images/Vision infonet logo (2).png";
import ConfluxLogo from "../images/Asset 2.png";
import MDCareLogo from "../images/MdCareLogo.png";
import livvonconforts from "../images/casestudies/moondew.jpeg";
import LivonfoamsLogo from "../images/livvon-foams-logo.png"
import ekam from "../images/ekam.png"
import conceiva from "../images/conceiva.webp";
import magnaid from "../images/final-magnaid.png";
import hdworks from "../images/Logo new.png";
import navatris from "../images/navatris.png";
import yard_22 from "../images/yard-22.png"
import mapplestreet from "../images/MSB_1 FRONT.png"
import ace2three from "../images/casestudies/a23-rummy-card.webp"
import acet3poker from "../images/casestudies/tranquilla.png"
import cricket from "../images/casestudies/cricket-card.webp"
import tic from "../images/casestudies/TIC LOGO REDESIGN-01.jpg"
import endul from "../images/casestudies/ENDULA LOGO-01.png"
import avis from "../images/casestudies/Avis_Logo.webp"
import max from "../images/casestudies/Maxx Sleep Logo-01.png"
import start from "../images/casestudies/Straunt Illusrator Logo l-01.png"
import tttt from "../images/casestudies/TTT logo-01.png"
import cdc from "../images/casestudies/CDC FINAL LOGO - 01 (1).png"
import lakme from "../images/portfolio/lakem_logo.png"
import bonnie from "../images/portfolio/bonnie_logo.png"
import qc_logo from "../images/portfolio/qc_logo.png"
import slned from "../images/portfolio/slned_logo.png"
import prachin from "../images/portfolio/prachin.png"
import truviq from "../images/portfolio/truviq.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
const ClientsPage = () => {
  AOS.init();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="our-clinets-parent">
      <div>
        <h1 data-aos="fade-up" id="topHeading" className="text-center">
          <span
            style={{
              color: "#212529",
            }}
          >
            {" "}
            Our
          </span>{" "}
          <span
            style={{
              color: "#fec436",
            }}
          >
            Clients
          </span>{" "}
        </h1>

        <div className="client-row-layout">


          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={prachin}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={lakme}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={bonnie}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={qc_logo}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={slned}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy" style={{
              width: "150px"
            }} src={magnaid} alt="Client 1" />
          </div>


          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "150px",
              }}
              src={ekam}
              alt="Client 3"
            />
          </div>


          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={livvonconforts}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "90%",
              }}
              src={truviq}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "220px",
              }}
              src={acet3poker}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={conceiva}
              alt="Client 3"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={cdc}
              alt="Client 1"
            />
          </div>

          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "300px",
              }}
              src={hdworks}
              alt="Client 2"
            />
          </div>

          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={yard_22}
              alt="Client 3"
            />
          </div>


          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={LivonfoamsLogo}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={endul}
              alt="Client 1"
            />
          </div>


          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={navatris}
              alt="Client 3"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={mapplestreet}
              alt="Client 3"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "150px",
              }}
              src={ace2three}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "150px",
              }}
              src={cricket}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={MDCareLogo}
              alt="Client 1"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={tic}
              alt="Client 1"
            />
          </div>

          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={avis}
              alt="Client 1"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "300px",
              }}
              src={max}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={start}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={tttt}
              alt="Client 1"
            />
          </div>

          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={TrippinladakhLogo}
              alt="Client 1"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "250px",
              }}
              src={mdOfficelogo}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "240px",
              }}
              src={FaxtoneLogo}
              alt="Client 3"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={TavasLogo}
              alt="Client 1"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "200px",
              }}
              src={VInfoNetLogo}
              alt="Client 2"
            />
          </div>
          <div className="client-item">
            <img loading="lazy"
              style={{
                width: "280px",
              }}
              src={ConfluxLogo}
              alt="Client 3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsPage;
