import { useState } from "react";

import { close, logo, menu } from "../assets/index";
import { navLinks } from "../constants/index";

export default function Navbar() {

  const [toggle, setToggle]= useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Logo" className="w-[134px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((links, index) => (
          <li
            key={links.id}
            className={`font-pop font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }  text-white `}
          >
            {" "}
            <a href={`#${links.id}`}>{links.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle?close:menu}  alt="" className="w-[28px] h-[28] object-contain" onClick={()=>setToggle((prev)=>!prev)} />

        <div  className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
        {navLinks.map((links, index) => (
          <li
            key={links.id}
            className={`font-pop font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mb-0" : "mb-5"
            }  text-white `}
          >
            {" "}
            <a href={`#${links.id}`}>{links.title}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
  );
}
