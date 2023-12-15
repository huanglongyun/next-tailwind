import { FaCss3, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";

import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";
import project4 from "../assets/images/project4.jpg";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillEnvironment,
} from "react-icons/ai";

export const Info = [
  { text: "Years experience", count: "01" },
  { text: "projects completed", count: "10" },
  { text: "Companies Work", count: "06" },
];
export const skills = [
  { icon: <FaCss3 />, level: "Advance" },
  { icon: <FaHtml5 />, level: "Expert" },
  { icon: <FaNodeJs />, level: "Intermidate" },
  { icon: <FaReact />, level: "Beginner" },
];

export const projects = [
  {
    img: project1,
    name: "Multi Page App",
    github_link: "https://github.com",
    live_link: "www.google.com",
  },
  {
    img: project2,
    name: "Dental App",
    github_link: "https://github.com",
    live_link: "www.google.com",
  },
  {
    img: project3,
    name: "Crypto App",
    github_link: "https://github.com",
    live_link: "www.google.com",
  },
  {
    img: project4,
    name: "Admin Dashboard",
    github_link: "https://github.com",
    live_link: "www.google.com",
  },
];

export const contactInfo = [
  { icon: <AiOutlineMail />, text: "yourname@gmail.com" },
  { icon: <AiOutlinePhone />, text: "1233455" },
  { icon: <AiFillEnvironment />, text: "yourlocation" },
];
