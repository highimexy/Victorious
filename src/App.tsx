import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { Works } from "./components/Works";
import { ParticlesBackground } from "./components/ParticlesBackground";

function App() {
  return (
    <>
      <ParticlesBackground />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navigation />
        <Home />
        <Works />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}

export default App;
