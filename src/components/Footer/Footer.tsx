//add footer that contains ready to get in touch - contact us which is an email link
// a section with icon links to instagram and tiktok and an email icon
// include a quick link back to top of page called home, a link to the projects section, where the videos are, a gallery link and an about section

import React from "react";
import ScrollIntoView from "../scrollIntoView/ScrollIntoView";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer mx-auto px-4">
      <ScrollIntoView>
        <h2 className="flex align-left text-3xl font-bold text-black mt-8 mb-4" 
        >READY TO GET IN TOUCH?</h2>
        <section className="links border-x-indigo-500">
          <a href="mailto: />" >Contact Us</a>
        </section>
        <section>
          <a href="https://www.instagram.com/">
            <Image
              src="/icons/instagram-light.png"
              alt="Instagram"
              width={30}
              height={30}
            />
          </a>
          <a href="https://www.tiktok.com/">
            <Image
              src="/icons/tiktok-light.png"
              alt="TikTok"
              width={30}
              height={30}
            />
          </a>
          <a href="mailto: />">
            <Image
              src="/icons/email-light.png"
              alt="Email"
              width={30}
              height={30}
            />
          </a>
        </section>
        <section className="flex space-x-2 justify-center">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
        </section>
      </ScrollIntoView>
    </footer>
  );
};

export default Footer;
