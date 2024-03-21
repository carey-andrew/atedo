//page with atedo. logo in top corner then a contact us section with ability to enter name, email phone number and message

//beneath this a "Send us an email" header

//it will need a submit button

import Navbar from "@/components/navbar/Navbar";
import ScrollIntoView from "@/components/scrollIntoView/ScrollIntoView";

const ContactForm = () => {
  return (
    <>
      <Navbar />
      <ScrollIntoView>
        <h2 className="text-left text-8xl clipped-text">ATEDO.</h2>
        <h3 className="text-4xl clipped-text mx-auto p-5">Send us an email</h3>
        <section className="flex flex-col items-center w-[80%]">
    <form className="flex flex-col items-start w-full max-w-[80%]">
        <div className="flex flex-wrap w-full mb-3">
            <div className="w-full md:w-1/2 md:pr-2 mb-3 md:mb-0">
                <label htmlFor="name" className="mb-2 block">Name:</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-800" />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
                <label htmlFor="phone" className="mb-2 block">Phone:</label>
                <input type="tel" id="phone" name="phone" className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-800" />
            </div>
        </div>
        <div className="w-full mb-3">
            <label htmlFor="email" className="mb-2 block">Email:</label>
            <input type="email" id="phone" name="phone" className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-800" />
        </div>
        <div className="w-full mb-3">
            <label htmlFor="message" className="mb-2 block">Message:</label>
            <textarea id="message" name="message" className="w-full border border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:border-blue-800"></textarea>
        </div>
        <button type="submit" className="bg-white text-white font-semibold px-4 py-2 rounded-md transition duration-300 ease-in-out hover:bg-gray-200 mx-auto">
            <h2 className="text-center text-4xl clipped-text mt-4">
                Send
            </h2>
        </button>
    </form>
</section>

      </ScrollIntoView>
    </>
  );
};

export default ContactForm;
