import React, { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import _vdo_1 from "../images/portfolio/video_1.mp4"
import _vdo_2 from "../images/portfolio/video_2.mp4"
import _vdo_3 from "../images/portfolio/video_3.mp4"


import "../css/portfolio.css"
const JewelPortfolio = () => {
    const itemData = [
        {
            img: _vdo_1,
            title: 'Snacks',
        },
        {
            img: _vdo_2,
            title: 'Snacks',
        },
        {
            img: _vdo_3,
            title: 'Mushrooms',
        },


    ];
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setSelectedImage(itemData[index].img);
    };
    const videoRefs = useRef([]);
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") setSelectedImage(null);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="portfolio-parent">
            <div>
                <h1 id="topHeading" className="text-center">
                    <span
                        style={{
                            color: "#fec436",
                        }}
                    > Motion Graphics
                    </span>
                </h1>
                <Box
                    sx={{
                        width: '100vw',
                        padding: { xs: 2, sm: 4, md: 6 },
                        minHeight: '100vh',
                        overflowX: 'hidden',
                    }}
                >
                    <Masonry
                        columns={{ xs: 1, sm: 2, md: 3 }}
                        spacing={2}
                    >
                        {itemData.map((item, index) => (
                            <div key={index} onClick={() => handleImageClick(index)} style={{
                                overflow: "hidden",
                            }} >
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline preload="auto"
                                    poster={`${item.postImg}?w=162&auto=format`}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}

                                >
                                    <source src={item.img} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                            </div>
                        ))}
                    </Masonry>
                </Box>
            </div>
            {selectedImage && (
                <div className="fullscreen-modal">
                    <span className="close-btn" onClick={() => setSelectedImage(null)}>✖</span>
                    <video
                        key={selectedImage}
                        controls
                        autoPlay
                        loop
                        style={{
                            width: '80%',
                            height: 'calc(80% + 1px)',
                        }}
                    >
                        <source src={selectedImage} type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                    <span className="nav-btn left" onClick={() => {
                        const newIndex = (currentIndex - 1 + itemData.length) % itemData.length;
                        setCurrentIndex(newIndex);
                        setSelectedImage(itemData[newIndex].img);
                    }}><ArrowBackIosNewIcon /></span>
                    <span className="nav-btn right" onClick={() => {
                        const newIndex = (currentIndex + 1) % itemData.length;
                        setCurrentIndex(newIndex);
                        setSelectedImage(itemData[newIndex].img);
                    }}><ArrowForwardIosIcon /></span>
                </div>
            )}

        </div>
    )
}

export default JewelPortfolio
