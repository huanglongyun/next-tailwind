import { useState, useEffect } from "react";
import menuLinks from "@/app/constant/MenuLinks";
import { BiMenu } from "react-icons/bi";
const Navbar = () => {
  let [open, setOpen] = useState(false);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between">
        <h4 className="text-xl mx-7 my-3 font-bold">LOGO</h4>
        <ul className="hidden md:flex bg-white text-gray-900 text-lg font-medium rounded-bl-full px-10 py-5 gap-16 items-center">
          {menuLinks.map((menu, index) => (
            <li key={index} className="hover:text-cyan-600">
              <a href={menu.link}>{menu.name}</a>
            </li>
          ))}
        </ul>
        <BiMenu
          onClick={() => {
            setOpen(!open);
          }}
          className={`text-3xl m-5 z-[999] md:hidden ${
            open ? "text-gray-900" : "text-gray-100"
          }`}
        />
        <ul
          className={`flex flex-col justify-center items-center gap-10 absolute top-0 px-7 h-screen w-2/3 bg-white text-lg font-medium text-gray-900 md:hidden ${
            open ? "right-0" : "right-[999px]"
          }`}
        >
          {menuLinks.map((item, index) => (
            <li
              onClick={() => {
                setOpen(!open);
              }}
              className="hover:text-cyan-100"
              key={index}
            >
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
