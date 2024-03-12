"use client";

import useAutoplayVideo from "@/customHooks/useAutoplayVideo";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useAutoplayVideo();

  return (
    <div className="aspect-w-16 aspect-h-9 max-w-full">
      <video ref={videoRef} className="w-full h-auto" controls autoPlay muted loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
