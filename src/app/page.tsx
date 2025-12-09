import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Services from "@/components/Service";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Education from "@/components/Education";

const Home = () => {
  return (
    <div>
      <Header id="home" />
      <Education id="education" />
      <Services id="services" />
      <Projects id="projects" />
      <Skill id="skills" />
      <Blog id="blog" />
      <Contact id="contact" />
    </div>
  );
};

export default Home;
