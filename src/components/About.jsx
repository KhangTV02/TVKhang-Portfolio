import React from "react";

const About = () => {
  return (
    <div name = "about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
        <p className="text-6xl font-bold inline border-b-4 border-gray-500"
          >About Me</p>
        </div>
        <p className="text-xl mt-5">
        Hello there! 👋 I'm Tran Vinh Khang, a fourth-year student at Can Tho University, pursuing my passion for web development and 2D game programming. <br /> <br />
        Beyond my academic journey, I love exploring new technologies and electronic devices.
        </p>

        <br />

        <p className="text-xl">
        I find joy in staying on the pulse of emerging technologies. Whether it's experimenting with the newest gadgets, exploring the possibilities of augmented reality, or delving into the intricacies of smart devices, I love the dynamic nature of the tech world. <br /> <br />
        I've spent three months at UTA Solution, gaining hands-on experience and contributing to real-world projects. My work style is characterized by diligence, seriousness, and honesty. <br /> <br />
        
        </p>
      </div>
    </div>
  );
};

export default About;
