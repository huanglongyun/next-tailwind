import { Info } from "@/app/constant/index";

function About() {
  return (
    <section className="py-10 text-white">
      <div className="flex justify-center gap-2 mt-8 text-4xl font-semibold">
        <h3>About</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-center text-gray-400 font-semibold">My introduction</p>
      <div>
        <p className="mx-auto w-11/12 text-justify leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia
          delectus qui voluptatibus dolorum similique! Enim neque ipsum
          molestias delectus mollitia, qui labore assumenda at dicta cumque quis
          excepturi dolorum? At excepturi ducimus nostrum totam quod debitis,
          tempora nam iusto, quisquam eum expedita minus necessitatibus
          perferendis! Nostrum iure sapiente tempora earum pariatur, numquam
          placeat ad, vero, modi libero incidunt ea! Sequi illum deleniti atque
          soluta maiores veniam velit, minus quaerat totam aliquam ullam at
          libero accusamus! Nulla saepe illum blanditiis necessitatibus illo,
          earum quis rerum sunt excepturi deserunt beatae sint.
        </p>

        <ul className="mt-10 flex justify-center items-center gap-6 md:gap-48 ">
          {Info.map((item, i) => (
            <li key={i} className="">
              {/* <div> */}
                <div className="flex">
                  <h3 className="text-2xl md:text-4xl font-semibold text-white">{item.count}</h3>
                  <h3 className="text-2xl font-bold text-cyan-600">+</h3>
                </div>
                <div className="text-xs md:text-base">{item.text}</div>
              {/* </div> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default About;
