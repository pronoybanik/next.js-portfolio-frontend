import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Services from "@/components/Service";
import Skill from "@/components/Skill";
import Projects from "./project/page";

const Home = () => {
  return (
    <div>
      <Header id="home" />
      <Services id="services" />
      <Projects id="project" />
      <Skill id="skill" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
