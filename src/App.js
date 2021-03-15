/** @format */

import Header from "./components/Header";
import "./styles/pages/page.css";
import NavBar1 from "./components/NavBar1";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="main_container">
      <Header />
      <NavBar1 />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
