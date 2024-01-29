import React from "react";
import {FaInstagram, FaFacebook, FaLine, FaSkype } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLink = () => {
  const links = [
   {
    id:1,

    child: (
      <>
        Instagram <FaInstagram size={30}/>
      </>
    ),
   href:'https://www.instagram.com/khang.t.v.2002/',
   style: 'rounded-tr-md  bg-pink-500'
  },
  {
    id:2,

    child: (
      <>
        Facebook <FaFacebook size={30}/>
      </>
    ),
   href:'https://www.facebook.com/profile.php?id=100016866243156',
   style: 'rounded-tr-md bg-blue-700'
  },
  {
    id:3,

    child: (
      <>
        Skype <FaSkype size={30}/>
      </>
    ),
   href:'https://www.skype.com/en/',
   style: 'rounded-tr-md bg-blue-500'
  },
  {
    id:4,

    child: (
      <>
        Line <FaLine size={30}/>
      </>
    ),
   href:'https://line.me/en/',
   style: 'rounded-tr-md bg-green-500'
  },
  {
    id:5,

    child: (
      <>
        Mail <HiOutlineMail size={30}/>
      </>
    ),
   href:'mailto:khangtv.work@gmail.com',
   style: 'rounded-br-md bg-red-500'
  },
  ]
  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style}) =>(
          <li key={id} className={`mb-5 flex justify-between rounded-xl items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${style}` }>
          <a
            href={href}
            className="flex justify-between items-center w-full text-white"
          >
            {child}
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLink;
