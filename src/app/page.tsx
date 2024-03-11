import HireUs from "@/components/HireUs/HireUs";
import TopBannerVideo from "@/components/TopBannerVideo/TopBannerVideo";

export default function Home() {
  return (
    <main className="flex min-h-screenjustify-center flex-col items-center">
      <TopBannerVideo />
      <div className="h-20"></div>
      <HireUs />
      <div className="h-20"></div>
    </main>
  );
}
