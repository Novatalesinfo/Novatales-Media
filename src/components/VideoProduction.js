import { useEffect, useRef, useState } from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import "../css/SplitVideo.css"
import backPoster from "../images/casestudies/splitvideoPoster.png"
const TOTAL_VIDEOS = 6;
export default function VideoSequence() {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);
    const [started, setStarted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [lastFrame, setLastFrame] = useState(null); // Store the last frame as a data URL
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !started) return;
        // console.log(
        //     `Loading video: output_${String(current).padStart(3, "0")}.mp4`
        // );
        const handleLoadedData = () => {
            // console.log(`Video ${current} loaded`);
            setLoading(false);
            setLastFrame(null); // Clear last frame when new video loads
            video.play().catch((error) => {
                // console.error(`Error playing video ${current}:`, error);
                setIsPlaying(false);
            });
            setIsPlaying(true);
        };
        const handleEnded = () => {
            console.log(`Video ${current} ended`);
            // Capture the last frame
            const canvas = canvasRef.current;
            if (canvas && video) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                setLastFrame(canvas.toDataURL("image/png")); // Save last frame as data URL
            }
            setLoading(true);
            const nextVideo = current < TOTAL_VIDEOS - 1 ? current + 1 : 0;
            setCurrent(nextVideo);
        };
        const handleError = () => {
            // console.error(`Error loading video ${current}`);
            setLoading(false); // Hide spinner to avoid infinite loading
        };
        video.addEventListener("loadeddata", handleLoadedData);
        video.addEventListener("ended", handleEnded);
        video.addEventListener("error", handleError);
        // Explicitly load the video source
        video.load();
        return () => {
            video.removeEventListener("loadeddata", handleLoadedData);
            video.removeEventListener("ended", handleEnded);
            video.removeEventListener("error", handleError);
        };
    }, [current, started]);
    const handleStart = () => {
        console.log("Start button clicked");
        setStarted(true);
        setLoading(true);
        const video = videoRef.current;
        if (video) {
            video.muted = false;
            video.volume = 1;
            video.load();
            video.play().catch((error) => {
                // console.error("Error playing video on start:", error);
                setIsPlaying(false);
            });
            setIsPlaying(true);
        }
    };
    const togglePlayPause = () => {
        const video = videoRef.current;
        if (!video) return;
        if (video.paused) {
            // console.log("Playing video");
            video.play().catch((error) => {
                // console.error("Error playing video:", error);
                setIsPlaying(false);
            });
            setIsPlaying(true);
        } else {
            // console.log("Pausing video");
            video.pause();
            setIsPlaying(false);
        }
    };

    return (
        <div className="sa54ssds">
            <div className="kj92kkad" >
                {!started && (
                    <div className="ak23mslp">
                        <button onClick={handleStart} className="xk9pbtn">
                            Play Video
                        </button>
                    </div>
                )}

                {loading && started && (
                    <div className="qlls00la">
                        {lastFrame ? (
                            <img src={lastFrame} alt="Last video frame" className="a8821f" />
                        ) : (
                            <div className="z66black" />
                        )}
                        <div className="ld88spin">
                            <div className="spin404"></div>
                        </div>
                    </div>
                )}

                <video
                    key={current}
                    ref={videoRef} poster={backPoster}
                    src={`/videos/output_${String(current).padStart(3, "0")}.mp4`}
                    playsInline
                    controls={false}
                    muted={!started}
                    className="vdoEl90"
                />

                <canvas ref={canvasRef} className="hidecanvas" />

                {started && (
                    <button
                        onClick={togglePlayPause}
                        className="ppbtn87"
                    >
                        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
                    </button>
                )}
            </div>
        </div>
    );
}
