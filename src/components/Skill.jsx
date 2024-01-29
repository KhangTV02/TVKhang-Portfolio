import React from "react";
import GitHub from "../Assets/GitHub.png";
import Python from "../Assets/Python.png";
import C from "../Assets/C.png";
import Reacts from "../Assets/Creact.jpg";
import Csharp from "../Assets/Csharp.png";
import Css from "../Assets/css.png";
import HTML from "../Assets/html.png";
import MongoDB from "../Assets/MongoDB.png";
import Sql from "../Assets/sql.png"
const Skill = () => {

    const techs =[
        {
            id:1,
            src: HTML,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src: Css,
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src: GitHub,
            title:'GitHub',
            style:'shadow-gray-500'
        },
        {
            id:4,
            src: Reacts,
            title:'React JS',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src: C,
            title:'C',
            style:'shadow-purple-500'
        },
        {
            id:6,
            src: Csharp,
            title:'C#',
            style:'shadow-purple-500'
        },
        {
            id:7,
            src: Python,
            title:'Python',
            style:'shadow-yellow-500'
        },
        {
            id:8,
            src: MongoDB,
            title:'MongoDB',
            style:'shadow-green-500'
        },
        {
            id:9,
            src: Sql,
            title:'SQL Server',
            style:'shadow-red-500'
        },
    ]

  return (
   <div name="skills" 
   className="bg-gradient-to-b from-gray-800 
   to-black w-full h-screen pt-80">

    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        
        <div className="pb-8 text-center">
            <p className="text-6xl font-bold inline border-b-4 border-gray-500">Skills</p>
        </div>


        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {
                techs.map(({id, src,title,style}) => (
                    <div key={id} 
                    className={`shadow-md hover:scale-105 duration-500
                    py-2 rounded-lg ${style}`}>
                       <img src={src} alt="" className=" w-32 h-32 mx-auto object-cover" />
                       <p className="mt-4 font-bold">{title}</p>
                   </div>
             ))
            }
           
        </div>
    </div>
  </div>
 )
};

export default Skill;
