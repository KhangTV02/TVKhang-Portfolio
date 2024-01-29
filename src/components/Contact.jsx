import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen sm:h-screen sm:pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="mt-4">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/7975719c-8c12-4ca3-9cf4-98dcac8f6fa2" method="POST" className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-2xl
                    text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-7 p-2 bg-transparent border-2 rounded-2xl
              text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-2xl
              text-white focus:outline-none"
            ></textarea>
            <button className=" text-white bg-gradient-to-b from-cyan-300 to-blue-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 focus:ring focus:outline-none focus:bg-gradient-to-b focus:from-cyan-500 focus:to-orange-500">
              Send your message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
