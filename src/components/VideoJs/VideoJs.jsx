import React, { useState, useRef } from "react";
import { VideoIcon } from "../../assets/Img";

export const VideoJS = ({ src, poster }) => {
	const [isPlaying, setIsPlaying] = useState(false);
	const videoRef = useRef(null);

	const playVideo = () => {
		if (!isPlaying) {
			videoRef.current.play();
		}
	};

	const handlePlay = () => {
		setIsPlaying(true);
	};

	const handlePause = () => {
		setIsPlaying(false);
	};

	return (
		<div className='video-container'>
			<video
				ref={videoRef}
				controls
				src={src}
				width='640'
				height='360'
				onPlay={handlePlay}
				onPause={handlePause}
			/>
			<button>
				{isPlaying ? (
					""
				) : (
					<img
						width='100%'
						height='100%'
						onClick={playVideo}
						src={VideoIcon}
						alt='video-icon'
					/>
				)}
			</button>
		</div>
	);
};

export default VideoJS;
