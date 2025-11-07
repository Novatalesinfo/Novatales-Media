import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import "../css/portfolio.css"
import VideoSequence from './VideoProduction';
const VdoPortfolio = () => {
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
                            marginTop: "140px"
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
                </Box>
            </div>
        </div>
    )
}

export default VdoPortfolio
