import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import cocktail_img_1 from "../images/portfolio/cocktail_img_1.avif"
import cocktail_img_2 from "../images/portfolio/cocktail_img_2.avif"
import cocktail_img_3 from "../images/portfolio/cocktail_img_3.avif"
import cocktail_img_4 from "../images/portfolio/cocktail_img_4.avif"
import cocktail_img_5 from "../images/portfolio/cocktail_img_5.avif"
import cocktail_img_6 from "../images/portfolio/cocktail_img_6.avif"
import cocktail_img_7 from "../images/portfolio/cocktail_img_7.avif"
import cocktail_img_8 from "../images/portfolio/cocktail_img_8.avif"
import cocktail_img_9 from "../images/portfolio/cocktail_img_9.avif"
import cocktail_img_10 from "../images/portfolio/cocktail_img_10.avif"
import cocktail_img_11 from "../images/portfolio/cocktail_img_11.webp"
import cocktail_img_12 from "../images/portfolio/cocktail_img_12.webp"
import cocktail_img_13 from "../images/portfolio/cocktail_img_13.webp"
import cocktail_img_14 from "../images/portfolio/cocktail_img_14.webp"
import cocktail_img_15 from "../images/portfolio/cocktail_img_15.webp"
import cocktail_img_16 from "../images/portfolio/cocktail_img_16.webp"
import cocktail_img_17 from "../images/portfolio/cocktail_img_17.webp"
import cocktail_img_18 from "../images/portfolio/cocktail_img_18.webp"
import cocktail_img_19 from "../images/portfolio/cocktail_img_19.webp"
import cocktail_img_20 from "../images/portfolio/cocktail_img_20.webp"
import cocktail_img_21 from "../images/portfolio/cocktail_img_21.webp"
import cocktail_img_22 from "../images/portfolio/cocktail_img_22.webp"
import cocktail_img_23 from "../images/portfolio/cocktail_img_23.webp"
import cocktail_img_24 from "../images/portfolio/cocktail_img_24.webp"
import cocktail_img_25 from "../images/portfolio/cocktail_img_25.webp"
const CockTail = () => {
    const itemData = [
        {
            img: cocktail_img_1,
            title: 'Fern',
        },
        {
            img: cocktail_img_2,
            title: 'Snacks',
        },
        {
            img: cocktail_img_3,
            title: 'Mushrooms',
        },
        {
            img: cocktail_img_4,
            title: 'Tower',
        },
        {
            img: cocktail_img_5,
            title: 'Sea star',
        },
        {
            img: cocktail_img_6,
            title: 'Honey',
        },
        {
            img: cocktail_img_7,
            title: 'Basketball',
        },
        {
            img: cocktail_img_8,
            title: 'Breakfast',
        },
        {
            img: cocktail_img_9,
            title: 'Tree',
        },
        {
            img: cocktail_img_10,
            title: 'Burger',
        },
        {
            img: cocktail_img_11,
            title: 'Camera',
        },
        {
            img: cocktail_img_12,
            title: 'Coffee',
        },
        {
            img: cocktail_img_13,
            title: 'Camping Car',
        },
        {
            img: cocktail_img_14,
            title: 'Hats',
        },
        {
            img: cocktail_img_15,
            title: 'Tomato basil',
        },
        {
            img: cocktail_img_16,
            title: 'Mountain',
        },
        {
            img: cocktail_img_17,
            title: 'Bike',
        },
        {
            img: cocktail_img_18,
            title: 'Bike',
        },
        {
            img: cocktail_img_19,
            title: 'Bike',
        },
        {
            img: cocktail_img_20,
            title: 'Bike',
        },
        {
            img: cocktail_img_21,
            title: 'Bike',
        },
        {
            img: cocktail_img_22,
            title: 'Bike',
        },
        {
            img: cocktail_img_23,
            title: 'Bike',
        },
        {
            img: cocktail_img_24,
            title: 'Bike',
        },
        {
            img: cocktail_img_25,
            title: 'Bike',
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
                    >CockTail
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
                            <div key={index} onClick={() => handleImageClick(index)}  style={{
                                overflow: "hidden",
                            }} >
                                <img className='masonary-img'
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="eager"

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

export default CockTail
