import HireUs from "@/components/HireUs/HireUs";
import MissionStatement from "@/components/MissionStatement/MissionStatement";
import Showreels from "@/components/Showreels/Showreels";
import Navbar from "@/components/navbar/Navbar";
import TopBannerVideo from "@/components/TopBannerVideo/TopBannerVideo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screenjustify-center flex-col items-center">
        <TopBannerVideo />
        <div className="h-20"></div>
        <MissionStatement />
        <div className="h-20"></div>
        <Showreels />
        <div className="h-20"></div>
        <HireUs />
        <div className="h-20"></div>
      </main>
    </>
  );
}
