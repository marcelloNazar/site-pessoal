import { HomeContainer } from "@src/styles/HomeStyle";
import Aos from "aos";
import "aos/dist/aos.css";

import Header from "@src/screens/Header";
import HomePage from "@src/screens/Home";
import Services from "@src/screens/Services";
import Projects from "@src/screens/Projects";
import FormC from "@src/screens/FormC";
import Footer from "@src/screens/Footer";
import { useEffect } from "react";

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface HomeProps {
  projects: IProjeto[];
}

export default function HomeScreen({ projects }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <HomePage />
        <Services />
        <Projects projects={projects} />
        <FormC />
        <Footer />
      </main>
    </HomeContainer>
  );
}
