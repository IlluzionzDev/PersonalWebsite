import About from "@components/home/About";
import Projects from "@components/home/Projects";
import Skills from "@components/home/Skills";
import Footer from "components/navigation/Footer";
import Nav from "components/navigation/Nav";
import type { NextPage } from "next";
import Hero from "../components/home/Hero";
import Head from 'next/head';

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
          <Head>
              <title>Jamin Stratford</title>
              <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
              />
              <meta name="description" content="Personal Website for Jamin Stratford"></meta>
          </Head>
          <Nav />
          <Hero />
          <About />
          <Projects />
          <Skills skills={skills} />
          <Footer />
      </div>
  )
};

export default Home;
