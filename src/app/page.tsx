"use client";

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import About from "@/app/components/About";
import Skill from "@/app/components/Skill";
import Projects from "@/app/components/Projects";
import Contact from "@/app/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </main>
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    // </main>
  );
}
