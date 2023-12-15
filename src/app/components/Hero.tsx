import img from "@/app/assets/images/photo.png";
import hero from "@/app/assets/images/hero.png";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
function Hero() {
  const socialMedia = [
    { icon: <FaInstagram /> },
    { icon: <FaFacebook /> },
    { icon: <FaLinkedin /> },
    { icon: <FaTwitter /> },
  ];
  return (
    <section className="min-h-screen px-7 py-10 flex flex-col  md:flex-row items-center gap-10">
      {/* <Image
        src={hero}
        alt=""
        className="md:w-11/12 object-cover flex-1 flex justify-center items-center h-full"
      /> */}
      <div className="flex-1">
        <h1 className="text-cyan-600 text-5xl md:text-6xl">Hello !</h1>
        <h1 className="text-2xl md:text-5xl leading-10 md:leading-normal text-white font-bold">
          my name is P
        </h1>
        <h4 className="mt-4 text-lg md:text-2xl leading-5 md:leading-normal text-gray-600 font-bold">
          developer
        </h4>

        <a className="inline-block mt-8 bg-cyan-600 px-6 py-3 rounded-full cursor-pointer">
          Contact Me
        </a>

        <ul className="flex gap-5 text-gray-600 mt-8 text-3xl">
          {socialMedia.map((icon, i) => (
            <li className="hover:text-white cursor-pointer" key={i}>{icon?.icon}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Hero;
