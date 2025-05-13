import React, { useEffect } from "react";
import "../css/clients.css";
import TrippinladakhLogo from "../images/trippin-ladakh-logo-03.png";
import mdOfficelogo from "../images/Untitled-1-01.png";
import FaxtoneLogo from "../images/Faxtone logo.png";
import TavasLogo from "../images/TavasSecurity.png";
import VInfoNetLogo from "../images/Vision infonet logo (2).png";
import ConfluxLogo from "../images/Asset 2.png";
import MDCareLogo from "../images/MdCareLogo.png";
import  livvonconforts from "../images/livon logo 2v final.png";
import LivonfoamsLogo from "../images/livvon-foams-logo.png"
import ekam from "../images/ekam.png"
import conceiva from "../images/conceiva.webp";
import magnaid from "../images/final-magnaid.png";
import hdworks from "../images/Logo new.png";
import navatris from "../images/navatris.png";
import yard_22 from "../images/yard-22.png"
import mapplestreet from "../images/MSB_1 FRONT.png"
const ClientsPage = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="our-clinets-parent">
      <div>
        <h1 id="topHeading" className="text-center">
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

        <div class="client-row-layout">
           <div class="client-item">
            <img
              style={{
                width: "200px",
              }}
              src={LivonfoamsLogo}
              alt="Client 2"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "500px",
              }}
              src={livvonconforts}
              alt="Client 2"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "250px",
              }}
              src={conceiva}
              alt="Client 3"
            />
          </div>
          <div class="client-item">
            <img style={{
              width:"150px"
            }} src={magnaid} alt="Client 1" />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "300px",
              }}
              src={hdworks}
              alt="Client 2"
            />
          </div>
           <div class="client-item">
            <img
              style={{
                width: "250px",
              }}
              src={navatris}
              alt="Client 3"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "150px",
              }}
              src={ekam}
              alt="Client 3"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "250px",
              }}
              src={yard_22}
              alt="Client 3"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "250px",
              }}
              src={mapplestreet}
              alt="Client 3"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "200px",
              }}
              src={MDCareLogo}
              alt="Client 1"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "200px",
              }}
              src={TrippinladakhLogo}
              alt="Client 1"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "250px",
              }}
              src={mdOfficelogo}
              alt="Client 2"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "240px",
              }}
              src={FaxtoneLogo}
              alt="Client 3"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "200px",
              }}
              src={TavasLogo}
              alt="Client 1"
            />
          </div>
          <div class="client-item">
            <img
              style={{
                width: "200px",
              }}
              src={VInfoNetLogo}
              alt="Client 2"
            />
          </div>
          <div class="client-item">
            <img
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
