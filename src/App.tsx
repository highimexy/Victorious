import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navigation } from "./components/Navigation";
import { Works } from "./components/Works";

function App() {
  return (
    <>
      <Navigation />
      <div>
        <Home />
      </div>
      <div>
        <Works />
      </div>
      <div>
        <AboutMe />
      </div>
      <div>
        <Contact />
      </div>
    </>
  );
}

export default App;
