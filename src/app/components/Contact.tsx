import { contactInfo } from "@/app/constant";

function Contact() {
  return (
    <section className="mt-8 px-3 py-10 text-white text-center">
      <div className="flex justify-center gap-2 mt-8 text-4xl font-semibold">
        <h3>Contact</h3>
        <h3 className="text-cyan-600">Me</h3>
      </div>
      <p className="text-center text-gray-400 font-semibold">Get in touch</p>

      <div className="mt-16 mx-auto p-2 md:p-6 flex flex-col md:flex-row gap-6 max-w-5xl bg-gray-800 rounded-lg">
        <form className="flex flex-col flex-1 gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-2 bg-gray-600 rounded-md border-none text-2xl placeholder-slate-500"
          />
          <input
            type="text"
            placeholder="Your Email Address"
            className="p-2 bg-gray-600 rounded-md border-none text-2xl placeholder-slate-500"
          />
          <textarea
            placeholder="Your Message"
            rows={10}
            className="p-2 bg-gray-600 rounded-md border-none text-2xl placeholder-slate-500"
          ></textarea>
          <button className="btn-primary w-fit"> Send Message</button>
        </form>
        <ul className="flex flex-col gap-7 list-none">
          {contactInfo.map((item, index) => (
            <li
              className="flex items-center flex-wrap gap-4 text-left"
              key={index}
            >
              <div className=" flex justify-center items-center min-w-[3.5rem] min-h-[3.5rem] text-3xl text-white bg-cyan-600 rounded-full">
                {item.icon}
              </div>
              <div className="text-sm md:text-base break-words">
                {item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
