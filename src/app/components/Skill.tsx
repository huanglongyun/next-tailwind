import { skills } from "@/app/constant";
function Skill() {
  return (
    <section className="mt-8 py-10 bg-gray-800 text-gray-100 text-center">
      <div className="flex justify-center gap-2 mt-8 text-4xl font-semibold">
        <h3>My</h3>
        <h3 className="text-cyan-600">Skills</h3>
      </div>
      <p className="text-center text-gray-400 font-semibold">My Knowledge</p>

      <ul className="mt-10 flex justify-center items-center gap-20 flex-wrap">
        {skills.map((item, i) => (
          <li key={i}>
            <div className="text-5xl flex justify-center items-center">
              {item.icon}
            </div>
            <div className="text-2xl">{item.level}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skill;
