import './App.css';
import Header from './Components/Header/Header';
import About from './Components/about/About';
import Home from './Components/home/Home';
import ProjectSection from './Components/project/project';
import Qualification from './Components/qualification/Qualification';
import Skills from './Components/skills/Skills';
import Contact from './Components/Contact/contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <ProjectSection />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
