import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import jewel_img_1 from "../images/portfolio/jewel_img_1.avif"
import jewel_img_2 from "../images/portfolio/jewel_img_2.avif"
import jewel_img_3 from "../images/portfolio/jewel_img_3.avif"
import jewel_img_4 from "../images/portfolio/jewel_img_4.avif"
import jewel_img_5 from "../images/portfolio/jewel_img_5.avif"
import jewel_img_6 from "../images/portfolio/jewel_img_6.avif"
import jewel_img_7 from "../images/portfolio/jewel_img_7.avif"
import jewel_img_8 from "../images/portfolio/jewel_img_8.avif"
import jewel_img_9 from "../images/portfolio/jewel_img_9.avif"
import jewel_img_10 from "../images/portfolio/jewel_img_10.avif"
import "../css/portfolio.css"
const JewelPortfolio = () => {
    const itemData = [
        {
            img: jewel_img_1,
            title: 'Fern',
        },
        {
            img: jewel_img_2,
            title: 'Snacks',
        },
        {
            img: jewel_img_3,
            title: 'Mushrooms',
        },
        {
            img: jewel_img_4,
            title: 'Tower',
        },
        {
            img: jewel_img_5,
            title: 'Sea star',
        },
        {
            img: jewel_img_6,
            title: 'Honey',
        },
        {
            img: jewel_img_7,
            title: 'Basketball',
        },
        {
            img: jewel_img_8,
            title: 'Breakfast',
        },
        {
            img: jewel_img_9,
            title: 'Tree',
        },
        {
            img: jewel_img_10,
            title: 'Burger',
        },
       
    ];
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleImageClick = (index) => {
        setCurrentIndex(index);
        setSelectedImage(itemData[index].img);
    };
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
        <div className="foodbakery-parent">
            <div>
                <h1 id="topHeading" className="text-center">
                    <span
                        style={{
                            color: "#fec436",
                        }}
                    >jewellary
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
                        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                        spacing={2}
                    >
                        {itemData.map((item, index) => (
                            <div key={index} onClick={() => handleImageClick(index)} style={{
                                overflow: "hidden",
                            }} >
                                <img className='masonary-img'
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="lazy"

                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </div>
                        ))}
                    </Masonry>
                </Box>
            </div>
            {selectedImage && (
                <div className="fullscreen-modal">
                    <span className="close-btn" onClick={() => setSelectedImage(null)}>✖</span>
                    <img src={selectedImage} alt="Fullscreen" className="fullscreen-image" />
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
