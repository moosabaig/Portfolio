import { useState } from 'react';
import { LoadingScreen } from './LoadingScreen.jsx';
import NavBar from './NavBar';
import { Home } from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <NavBar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
