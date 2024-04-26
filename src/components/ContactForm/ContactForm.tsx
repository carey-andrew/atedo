"use client";

import React from "react";

const ContactForm = () => {
  const emailSubject = `Received a contact request from Atedo Website: ${new Date()}`;

  const sendContact = async () => {
    try {
      console.log(JSON.stringify({ emailTo: "Email to address", subject: "subject", message: "Message" }));
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailTo: "Email to address", subject: "subject", message: "Message" }),
      });
      if (response.ok) {
        console.log("Email sent successfully");
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <form>
        <div className="flex flex-wrap justify-center m-auto w-4/5 max-w-[1000px]">
          <div className="flex flex-col w-full md:w-1/2 mt-3">
            <label htmlFor="Nam">Nam</label>
            <input type="text" className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark mr-2" name="Nam" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 mt-3">
            <label htmlFor="Emai">Emai</label>
            <input type="email" className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" name="Emai" />
          </div>

          <div className="flex flex-col w-full md:w-1/2 mt-3">
            <label htmlFor="Phon">Phon</label>
            <input type="text" className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark mr-2" name="Phon" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 mt-3">
            <label htmlFor="Company">Company</label>
            <input type="text" className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" name="Company" />
          </div>

          <div className="flex flex-col w-full mt-3">
            <label htmlFor="Company">Message</label>
            <textarea className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" name="Message" />
          </div>

          <button className="p-3 w-[160px] mt-8 rounded-full bg-secondary-dark dark:bg-secondary-light text-red-500 dark:text-red-500 dark:hover:text-green-500 hover:text-green-500 !important" onClick={sendContact}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
