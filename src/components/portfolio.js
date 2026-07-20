import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Masonry } from '@mui/lab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import foodPoster from "../images/portfolio/collage_3d.png";
import videoPoster from "../images/portfolio/output_000.mp4";
import prodcutPoster from "../images/portfolio/product_img_7.webp";
// import cocktailPoster from "../images/casestudies/magnaid_post_2.webp";
import humanPoster from "../images/portfolio/photoshoot_img_1.webp";
import _vdo_1 from "../images/portfolio/video_1.mp4"
import "../css/portfolio.css";
const Portfolio = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const dataObject = [
        {
            id: 1,
            title: "People",
            mediaType: "image",
            media: humanPoster,
            link: "/portfolio/people"
        },
        {
            id: 2,
            title: "3D",
            mediaType: "image",
            media: foodPoster,
            link: "/portfolio/3d"
        },
        {
            id: 3,
            title: "Videos",
            mediaType: "video",
            media: videoPoster,
            link: "/portfolio/video-portfolio"
        },
        {
            id: 4,
            title: "Products",
            mediaType: "image",
            media: prodcutPoster,
            link: "/portfolio/products"
        },
        // {
        //     id: 5,
        //     title: "Graphics",
        //     mediaType: "image",
        //     media: cocktailPoster,
        //     link: "/portfolio/graphics"
        // },
    ];
    return (
        <div className="portfolio-parent d-flex justify-content-center align-items-center flex-column">
            <h1 id="topHeading" className="text-center">
                <span
                    style={{
                        color: "#fec436",
                    }}
                >
                    portFolio
                </span>
            </h1>
            <Box sx={{ width: '100%', padding: '0 5px 0 20px' }}>
                <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
                    {dataObject.map((item) => (
                        <Box key={item.id} className='portfolio-grid-child'>
                            <Link to={item.link} className='porfolio-grid-child-inner'>
                                <Typography variant="h5" sx={{ marginBottom: 1, color: "white", fontWeight: "600", fontSize: "30px" }}>
                                    {item.title}
                                </Typography>
                            </Link>
                            {item.mediaType === 'image' ? (
                                <img
                                    src={item.media}
                                    alt={`${item.title}-poster`}
                                    className='portfolio-image'
                                    loading="lazy"
                                />
                            ) : (
                                <Link to="/portfolio/video-portfolio">
                                    <video
                                        src={item.media}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className='portfolio-video'
                                        style={{ width: '100%', borderRadius: "10px" }}
                                    />
                                </Link>
                            )}
                        </Box>
                    ))}
                    <Box className='portfolio-grid-child'>
                        <Link to="" className='porfolio-grid-child-inner'>
                            <Typography variant="h5" sx={{ marginBottom: 1, color: "white", fontWeight: "600", fontSize: "30px" }}>
                                Motion Graphics
                            </Typography>
                        </Link>
                        <Link to="/portfolio/motion-graphics">
                            <video
                                src={_vdo_1}
                                autoPlay
                                muted
                                loop
                                playsInline
                                className='portfolio-video'
                                style={{ width: '100%', borderRadius: "10px" }}
                            />
                        </Link>
                    </Box>
                </Masonry>
            </Box>
        </div>
    );
};

export default Portfolio;
