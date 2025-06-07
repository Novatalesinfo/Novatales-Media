// import React, { useEffect, useState } from 'react';
// import Box from '@mui/material/Box';
// import Masonry from '@mui/lab/Masonry';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import _vdo_1 from "../images/portfolio/video_1.mp4"
// import _vdo_2 from "../images/portfolio/video_2.mp4"
// import _vdo_3 from "../images/portfolio/video_3.mp4"
// import _vdo_4 from "../images/portfolio/video_4.mp4"
// import _vdo_5 from "../images/portfolio/video_5.mp4"

// import "../css/portfolio.css"
// const VdoPortfolio = () => {
//     const itemData = [
//         {
//             img: _vdo_1,
//             title: 'Fern',
//         },
//         {
//             img: _vdo_2,
//             title: 'Snacks',
//         },
//         {
//             img: _vdo_3,
//             title: 'Mushrooms',
//         },
//         {
//             img: _vdo_4,
//             title: 'Tower',
//         },
//         {
//             img: _vdo_5,
//             title: 'Sea star',
//         },

//     ];
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const handleImageClick = (index) => {
//         setCurrentIndex(index);
//         setSelectedImage(itemData[index].img);
//     };
//     useEffect(() => {
//         const handleKeyDown = (e) => {
//             if (e.key === "Escape") setSelectedImage(null);
//         };
//         window.addEventListener("keydown", handleKeyDown);
//         return () => window.removeEventListener("keydown", handleKeyDown);
//     }, []);
//     useEffect(() => {
//         window.scrollTo(0, 0);
//     }, []);
//     return (
//         <div className="portfolio-parent">
//             <div>
//                 <h1 id="topHeading" className="text-center">
//                     <span
//                         style={{
//                             color: "#fec436",
//                         }}
//                     >VIDEOS
//                     </span>
//                 </h1>
//                 <Box
//                     sx={{
//                         width: '100vw',
//                         padding: { xs: 2, sm: 4, md: 6 },
//                         minHeight: '100vh',
//                         overflowX: 'hidden',
//                     }}
//                 >
//                     <Masonry
//                         columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
//                         spacing={2}
//                     >
//                         {itemData.map((item, index) => (
//                             <div key={index} onClick={() => handleImageClick(index)} style={{
//                                 overflow: "hidden",
//                             }} >
//                                 <video autoPlay muted loop className='masonary-img'
//                                     srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
//                                     src={`${item.img}?w=162&auto=format`}
//                                     alt={item.title}
//                                     loading="lazy"

//                                     style={{
//                                         display: 'block',
//                                         width: '100%',
//                                         objectFit: 'cover',
//                                     }}
//                                 >
//                                     <source src={item.img} />
//                                 </video>
//                             </div>
//                         ))}
//                     </Masonry>
//                 </Box>
//             </div>
//             {selectedImage && (
//                 <div className="fullscreen-modal">
//                     <span className="close-btn" onClick={() => setSelectedImage(null)}>✖</span>
//                     <video controls autoPlay className='fullscreen-image' >
//                         <source src={selectedImage} type='video/mp4' />
//                         Your browser does not support the video tag.
//                     </video>
//                     <span className="nav-btn left" onClick={() => {
//                         const newIndex = (currentIndex - 1 + itemData.length) % itemData.length;
//                         setCurrentIndex(newIndex);
//                         setSelectedImage(itemData[newIndex].img);
//                     }}><ArrowBackIosNewIcon /></span>

//                     <span className="nav-btn right" onClick={() => {
//                         const newIndex = (currentIndex + 1) % itemData.length;
//                         setCurrentIndex(newIndex);
//                         setSelectedImage(itemData[newIndex].img);
//                     }}><ArrowForwardIosIcon /></span>
//                 </div>
//             )}
//         </div>
//     )
// }

// export default VdoPortfolio


import React, { useEffect} from 'react';
import Box from '@mui/material/Box';

import "../css/portfolio.css"
import VideoSequence from './VideoProduction';
const VdoPortfolio = () => {
   
    // const [selectedImage, setSelectedImage] = useState(null);
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const handleImageClick = (index) => {
    //     setCurrentIndex(index);
    //     setSelectedImage(itemData[index].img);
    // };
    // const videoRefs = useRef([]);
    // useEffect(() => {
    //     const handleKeyDown = (e) => {
    //         if (e.key === "Escape") setSelectedImage(null);
    //     };
    //     window.addEventListener("keydown", handleKeyDown);
    //     return () => window.removeEventListener("keydown", handleKeyDown);
    // }, []);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <div className="">
            <div>
                <h1 id="topHeading" className="text-center">
                    <span
                        style={{
                            color: "#fec436",
                            marginTop:"140px"
                        }}
                    > Videos
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
                    <VideoSequence />
                    {/* <Masonry
                        columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                        spacing={2}
                    >
                        {itemData.map((item, index) => (
                            <div key={index} onClick={() => handleImageClick(index)} style={{
                                overflow: "hidden",
                            }} >
                                <video
                                    ref={(el) => (videoRefs.current[index] = el)}
                                    onMouseOver={() => videoRefs.current[index]?.play()}
                                    onMouseLeave={() => {
                                        videoRefs.current[index]?.pause();
                                    }}
                                    muted
                                    loop
                                    playsInline preload="auto"
                                    poster={`${item.postImg}?w=162&auto=format`}
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        height: "600px",
                                        objectFit: 'cover',
                                        cursor: 'pointer',
                                    }}

                                >
                                    <source src={item.img} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                            </div>
                        ))}
                    </Masonry> */}
                </Box>
            </div>
            {/* {selectedImage && (
                <div className="fullscreen-modal">
                    <span className="close-btn" onClick={() => setSelectedImage(null)}>✖</span>
                    <video
                        key={selectedImage}
                        controls
                        autoPlay
                        loop
                        style={{
                            width: 'auto',
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
            )} */}

        </div>
    )
}

export default VdoPortfolio
