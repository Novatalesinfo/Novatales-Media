import React, { useEffect } from 'react';
import TrippinladakhLogo from '../images/trippin-ladakh-logo-03.png';
import mdOfficelogo from '../images/Untitled-1-01.png';
import FaxtoneLogo from '../images/Faxtone logo.png';
import TavasLogo from '../images/TavasSecurity.png';
import VInfoNetLogo from '../images/Vision infonet logo (2).png';
import ConfluxLogo from '../images/Asset 2.png';
import MDCareLogo from '../images/MdCareLogo.png';
import LivonComfortsLogo from '../images/livvon-foams-logo.png';
import livvon from "../images/livon logo 2v final.png"
import conceiva from "../images/conceiva.webp"
import magnaid from "../images/final-magnaid.png"
import hdworks from "../images/Logo new.png"
import navatris from "../images/navatris.png"
import ekam from "../images/ekam.png"
import yard from "../images/yard-22.png"
import mapplestreet from "../images/MSB_1 FRONT.png"
import '../css/Home.css';
import '../css/HomeMediaQuery.css';
import cdc from "../images/casestudies/CDC FINAL LOGO - 01 (1).png"
export default function Clients() {
    useEffect(() => {
        const logoSlide = document.querySelector(".logos-slide");
        const copy = logoSlide.cloneNode(true);
        document.querySelector(".logo-slider").appendChild(copy);
    }, []);
    return (
        <div className='Clients Ourservice-heading' id='our-clients'>
            <h2 >Our Clients</h2>
            <div className="logo-slider" >
                <div className="logos-slide">
                    <img src={TrippinladakhLogo} alt="Trippin Ladakh" width="150px" height="80px"/>
                    <img src={LivonComfortsLogo} alt="Livon Comforts" width="150px" height="80px"/>
                    <img src={livvon} alt="Livon Comforts" width="300px"/>
                    <img src={mdOfficelogo} alt="Md Office" width="250px" height="auto" className='mdOffice'/>
                    <img src={FaxtoneLogo} alt="Faxtone" width="250px" height="auto"/>
                    <img src={TavasLogo} alt="Tavas" width="250px" height="auto"/> 
                    <img src={cdc} alt="CDC" width="280px" height="auto"/> 
                    <img src={conceiva} alt="Conceiva" width="200px" height="auto"/> 
                    <img src={magnaid} alt="Magnaid" width="auto" height="auto"/> 
                    <img src={navatris} alt="Navatris" width="180px" height="auto"/> 
                    <img src={hdworks} alt="hdworks" width="180px" height="auto"/> 
                    <img src={VInfoNetLogo} alt="VInfoNet" width="200px" height="auto"/>
                    <img src={ConfluxLogo} alt="Conflux" width="250px" height="auto"/>
                    <img src={MDCareLogo} alt="MdCare" width="250px" height="auto"/>
                    <img src={ekam} alt="MdCare" width="120px" height="auto"/>
                    <img src={yard} alt="MdCare" width="250px" height="auto"/>
                    <img src={mapplestreet} alt="MdCare" width="200px" height="auto"/>
                </div>
            </div>
        </div>
    );
}
