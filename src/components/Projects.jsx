import React from "react";
import MangaStoreLogo from "../Assets/MangaStoreLogo.jpg";
import MarioLogo from "../Assets/MarioLogo.png";
import twoDImg from "../Assets/ninja.png";
const Projects = () => {
    const Projects =[
        {
            id:1,
            title: 'Manga Online Store',
            link:'https://github.com/khangpl',
            src: MangaStoreLogo
        },
        {
            id:2,
            title: 'Super Mario Remake',
            link:'https://github.com/khangpl',
            src: MarioLogo
        },
        {
          id:3,
          title: 'Ninja Killer',
          link:'https://github.com/khangpl',
          src: twoDImg,
          
      },
    ]

    return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-80"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-6xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
        </div>

        <div className="grid sm:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 px-12 sm:px-0 mt-10">
        {
        Projects.map(({id, title, link, src, style})=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg flex flex-col items-center gap-2 mx-5 md:pb-2 sm:pb-2">
            <img src={src} alt="" className={`rounded-md duration-200 hover:scale-105 mb-1 w-48 h-48 object-cover`} />{title}
            <div className="flex justify-center items-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
          <button className=" w-44 px-6 py-3 m-4 text-center duration-200 hover:scale-105 bg-gray-400 rounded-xl hover:bg-cyan-400">View more</button>
        </a>
            </div>
            
          </div>
        ))
       }
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
