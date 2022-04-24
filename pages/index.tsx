import Projects from "@components/home/Projects";
import Skills from "@components/home/Skills";
import Footer from "components/navigation/Footer";
import Nav from "components/navigation/Nav";
import type { NextPage } from "next";
import Hero from "../components/home/Hero";

let skills = [
  "NextJS",
  "Java",
  "Kotlin",
  "SQL",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Python",
  "Linux",
  "SpigotMC",
];

const Home: NextPage = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Projects />
      <Skills skills={skills} />
      <Footer />
    </div>
  );
};

export default Home;
