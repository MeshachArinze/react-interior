import React from 'react';
import "../src/Globalcss.css";
import Header from "../src/components/Header/Header";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Projects from "./components/Projects/Projects";
import Contact from './components/Contact/Contact';
import Account from './components/Account/Account';

const App = () => {
    const style = {
    texts: ["Blog", "Code", "Web"],
    count: 0,
    index: 0,
    letter: "",
    currentTexts: "",
  };
  return (
    <>
      <Header/>
      <Nav home="Home"
       about="About"
        services="Services"
         projects="Projects"
          careers="Careers"
           contacts="Contacts"/>
      <Home />
      <About {...style}/>
      <Services />
      <Projects />
      <Contact />
      <Account home="Home"
       about="About"
        services="Services"
         projects="Projects"
          careers="Careers"
           contacts="Contacts" />
    </>
  )
}

export default App;