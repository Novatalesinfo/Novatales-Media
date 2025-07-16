import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import food_img_1 from "../images/portfolio/3d_img_1.png"
import food_img_2 from "../images/portfolio/3d_img_2.png"
import food_img_3 from "../images/portfolio/3d_img_3.png"
import food_img_4 from "../images/portfolio/3d_img_4.png"
import "../css/portfolio.css"
const FoodBakery = () => {
    const itemData = [
        {
            img: food_img_1,
            title: 'Fern',
        },
        {
            img: food_img_2,
            title: 'Snacks',
        },
        {
            img: food_img_3,
            title: 'Mushrooms',
        },
        {
            img: food_img_4,
            title: 'Tower',
        },
    ];
    const [selectedImage, setSelectedImage] = useState(null);
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const handleImageClick = (index) => {
    //     setCurrentIndex(index);
    //     setSelectedImage(itemData[index].img);
    // };
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
                    >
                        3D
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
                        spacing={4}
                    >
                        <div
                            onClick={() => setSelectedImage(true)} // just open modal
                            style={{
                                overflow: "hidden",
                                padding: "10px",
                                borderRadius: "10px",
                                minHeight: "280px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                cursor: "pointer"
                            }}
                        >
                            {itemData.map((item, index) => (
                                <img
                                    key={index}
                                    className={`threedimg${index + 1}`}
                                    src={item.img}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        display: "block",
                                        width: "100%",
                                        objectFit: "cover",
                                        borderRadius: "8px",
                                        transition: "transform 0.3s ease",
                                    }}
                                />
                            ))}
                        </div>
                    </Masonry>
                </Box>
            </div>
            {selectedImage && (
                <div className="fullscreen-modal">
                    <span className="close-btn" onClick={() => setSelectedImage(null)}>✖</span>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "1rem",
                        }}
                    >
                        {itemData.map((item, index) => (
                            <img
                                key={index}
                                src={item.img}
                                alt={item.title}
                                className={`threedimg${index + 1}`}
                                style={{
                                    maxWidth: "90%",
                                    objectFit: "contain",
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}

        </div>
    )
}

export default FoodBakery
