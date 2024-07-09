import Header from "./components/Header/Header";
import "./App.css"
import Hero from "./components/Hero/Hero";
import Divider from "./components/Divider/Divider";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import projects from "./data/projects.json"
import Footer from "./components/Footer/Footer";

export default function App() {
  const mainProjects = projects.filter(project => project.category === "main");
  const freelanceProjects = projects.filter(project => project.category === "freelance");
  const earlyProjects = projects.filter(project => project.category === "early");

  return (
    <>
      <Header />
      <Hero />
      <Divider />
      <Skills />
      <Divider />
      <Projects heading="Main Projects" projects={mainProjects} />
      <Projects heading="Freelance Work" projects={freelanceProjects} />
      <Projects heading="Early Projects" projects={earlyProjects} />
      <Footer />
    </>
  )
}