/** @format */

import Header from "./components/Header";
import "./styles/pages/page.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";
import NavBar1 from './components/NavBar1';

export default function App() {
  return (
    <div className="main_container">
      <Header />
      <NavBar />
      <About />
      <NavBar1/>
      <Skills />
    </div>
  );
}
