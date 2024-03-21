//add footer that contains ready to get in touch - contact us which is an email link
// a section with icon links to instagram and tiktok and an email icon
// include a quick link back to top of page called home, a link to the projects section, where the videos are, a gallery link and an about section

import React from 'react';
import ScrollIntoView from '../scrollIntoView/ScrollIntoView';

const Footer = () => {
  return (
    <footer className="footer">
      <ScrollIntoView>
        <h2 className="footer__heading">ATEDO.</h2>
      </ScrollIntoView>
      <section className="footer__section">
        <a href="mailto: />" className="footer__link">Contact Us</a>
        </section>
        <section className="footer__section">
        <a href="https://www.instagram.com/" className="footer__link">Instagram</a>
        <a href="https://www.tiktok.com/" className="footer__link">TikTok</a>
        <a href="mailto: />" className="footer__link">Email</a>
        </section>
        <section className="footer__section">
        <a href="#home" className="footer__link">Home</a>
        <a href="#projects" className="footer__link">Projects</a>
        <a href="#gallery" className="footer__link">Gallery</a>
        <a href="#about" className="footer__link">About</a>
        </section>
    </footer>
    );
}

export default Footer;
