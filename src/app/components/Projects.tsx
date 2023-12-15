import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import { projects } from "@/app/constant";
function Projects() {
  return (
    <section>
      <div className="flex justify-center gap-2 mt-8 text-4xl font-semibold">
        <h3>My</h3>
        <h3 className="text-cyan-600">Projects</h3>
      </div>
      <p className="text-center text-gray-400 font-semibold">My awesome work</p>

      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{ 768: { slidesPerView: 2 } }}
        modules={[Pagination, Autoplay]}
        className="mx-auo px-5 flex justify-center items-center gap-6 w-full max-w-3xl lg:w-2/3"
      >
        {projects.map((project, i) => (
          <SwiperSlide
            className="p-4 w-full h-fit bg-slate-700 rounded-xl"
            key={i}
          >
            <Image src={project.img} alt="" className="rounded-xl" />
            <h3 className="text-lg py-4">{project.name}</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-3">
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 w-32 text-center rounded-full bg-gray-800 text-cyan-600"
              >
                GitHub
              </a>
              <a
                href={project.live_link}
                target="_blank"
                rel="noreferrer"
                className="px-2 py-1 w-32 text-center rounded-full bg-gray-800 text-cyan-600"
              >
                Live Demo
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Projects;
