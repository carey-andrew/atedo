"use client";

import { gsap } from "@/components/gsap/gsap";
import { useEffect } from "react";
import HireUs from "@/components/HireUs/HireUs";
import MissionStatement from "@/components/MissionStatement/MissionStatement";
import Showreels from "@/components/Showreels/Showreels";
import Navbar from "@/components/navbar/Navbar";
import TopBannerVideo from "@/components/TopBannerVideo/TopBannerVideo";
import ClientLogos from "@/components/ClientCard/ClientCard";
import toggleDarkMode from "@/functions/toggleDarkMode";

export default function Home() {
  useEffect(() => {
    const element = document.querySelector("body");


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "center center",
        end: "bottom center",
        scrub: true,
        // markers: true, // For debugging
        onEnter: () => toggleDarkMode(),
        onLeaveBack: () => toggleDarkMode(), 
        // onUpdate: (self) => {
        //   console.log("in onUpdate");
        //   console.log("")
        //   // const progress = self.progress;
        //   // Interpolate the background color from white to black based on scroll progress
        //   // const colorValue = Math.floor(255 * (1 - progress)); // Inverse progress for white to black
        //   // const backgroundColor = `rgb(${colorValue},${colorValue},${colorValue})`;
        //   // gsap.to(element, { backgroundColor: backgroundColor, immediateRender: false });
        // },
      },
    });

    return () => {
      // Cleanup
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
      tl.kill();
    };
  }, []);

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
        <ClientLogos />
        <div className="h-20"></div>
      </main>
    </>
  );
}
