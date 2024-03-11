import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

const TopBannerVideo = () => {
  return (
    <div className="flex mt-5 w-4/5 flex-col">
      <div className="relative">
        <VideoPlayer src="/video/atedo_banner.mp4" />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center pt-[15%]">
          <h1 className="text-white text-6xl lg:text-9xl md:text-8xl">ATEDO.</h1>
        </div>
      </div>
    </div>
  );
};

export default TopBannerVideo;