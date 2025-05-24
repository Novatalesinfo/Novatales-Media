import React, { useEffect } from 'react'
import foodPoster from "../images/portfolio/foof_img_11.avif"
import videoPoster from "../images/portfolio/video_6.mp4"
import jewelPoster from "../images/portfolio/jewel_img_4.avif"
import prodcutPoster from "../images/portfolio/product_img_7.avif"
import cocktailPoster from "../images/portfolio/cocktail_img_1.avif"
import humanPoster from "../images/portfolio/people_img_5.avif"
import "../css/portfolio.css"
import { Link } from 'react-router-dom'
const Portfolio = () => {
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
                    >
                        portFolio
                    </span>
                </h1>
                <div className='portfolio-grid'>

                    <div className='portfolio-grid-child'>
                        <Link to="/portfolio/food-bakery" className='porfolio-grid-child-inner'>
                            <h2>Food & Bakery</h2>
                        </Link>
                        <img src={foodPoster} alt='portfolio-images' />
                    </div>
                    <div className='portfolio-grid-child'>
                        <Link to="/portfolio/cocktail" className='porfolio-grid-child-inner'>
                            <h2>Food & Bakery</h2>
                        </Link>
                        <img src={cocktailPoster} alt='portfolio-images' />
                    </div>
                    <Link to="/portfolio/video-portfolio" className='portfolio-grid-child'>
                        <div className='porfolio-grid-child-inner'>
                            <h2>Videos</h2>
                        </div>
                        <video autoPlay muted loop playsInline width="100%" >
                            <source src={videoPoster} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    </Link>
                    <div className='portfolio-grid-child'>
                        <Link to="/portfolio/products" className='porfolio-grid-child-inner'>
                            <h2>Products</h2>
                        </Link>
                        <img src={prodcutPoster} alt='portfolio-images' />
                    </div>
                    <div className='portfolio-grid-child'>
                        <Link to="/portfolio/jewellary" className='porfolio-grid-child-inner'>
                            <h2>Jewellary and Fashion</h2>
                        </Link>
                        <img src={jewelPoster} alt='portfolio-images' />
                    </div>
                    <div className='portfolio-grid-child'>
                        <Link to="/portfolio/photoshoot" className='porfolio-grid-child-inner'>
                            <h2>Photoshoot</h2>
                        </Link>
                        <img src={humanPoster} alt='portfolio-images' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
