import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Services from "@/components/Service";
import Skill from "@/components/Skill";
import Works from "@/components/Works";

const Home = () => {
  return (
    <div>
      <Header id="home" />
      <Services id="services" />
      <Works id="works" />
      <Contact id="contact" />
      <Skill id="skill"/>
    </div>
  );
};

export default Home;
