//add footer that contains ready to get in touch - contact us which is an email link
// a section with icon links to instagram and tiktok and an email icon
// include a quick link back to top of page called home, a link to the projects section, where the videos are, a gallery link and an about section

import React from "react";
import ScrollIntoView from "@/animations/scrollIntoView/ScrollIntoView";
// import EmailIcon from "./EmailIcon";
import ContactCard from "../ContactUs/ContactForm";

const Footer = () => {
  return (
    <footer className="footer mx-auto px-4">
      <ScrollIntoView>
        <section className="flex flex-row items-center justify-center text-xl space-x-10 mt-8 pb-8">
          <a href="/" className="my-2">
            Home
          </a>
          <a href="#showreels" className="my-2">
            Projects
          </a>
          <a href="/gallery" className="my-2">
            Gallery
          </a>
          <a href="#about" className="my-2">
            About
          </a>
        </section>
      </ScrollIntoView>
    </footer>
  );
};

export default Footer;
