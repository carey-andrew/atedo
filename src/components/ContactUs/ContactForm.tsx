"use client";

import { useState } from "react";

import ClientSide from "@/components/clientSide/ClientSide";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>({ name: "", email: "", phone: "", company: "", message: "" });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      console.log(JSON.stringify({ message: "Message" }));
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // console.log("Email sent successfully");
      } else {
        // console.error("Failed to send email");
      }
    } catch (error) {
      // console.error("An error occurred:", error);
    }
  };

  return (
    <div>
      <ClientSide>
        <form onSubmit={sendContact}>
          <div className="flex flex-wrap justify-center m-auto w-4/5 max-w-[1000px]">
            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <label htmlFor="Name">Name</label>
              <input type="text" 
                     className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark mr-2" 
                     onChange={handleChange} 
                     value={formData.name} 
                     name="name" />
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <label htmlFor="Email">Email</label>
              <input type="email" 
                     className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" 
                     onChange={handleChange} 
                     value={formData.email} 
                     name="email" />
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <label htmlFor="Phone">Phone</label>
              <input type="text" 
                     className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark mr-2" 
                     onChange={handleChange} 
                     value={formData.phone} 
                     name="phone" />
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <label htmlFor="Company">Company</label>
              <input type="text" 
                     className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" 
                     onChange={handleChange} 
                     value={formData.company} 
                     name="company" />
            </div>

            <div className="flex flex-col w-full mt-3">
              <label htmlFor="Company">Message</label>
              <textarea className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" 
                        onChange={handleChange} 
                        value={formData.message} 
                        name="message" />
            </div>

            <button 
              className="p-3 w-[160px] mt-8 rounded-full bg-secondary-dark dark:bg-secondary-light text-primary-dark dark:text-primary-light dark:hover:button-shadow-light hover:button-shadow-dark !important"
            >
              Send Message
            </button>
          </div>
        </form>
      </ClientSide>
    </div>
  );
};

export default ContactForm;
