import { useState, useCallback } from 'react';
import { LoadingScreen } from './LoadingScreen.jsx';
import NavBar from './NavBar';
import { Home } from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoaded = useCallback(() => setIsLoading(false), []);

  return (
    <div>
      {isLoading ? (
        <LoadingScreen onComplete={handleLoaded} />
      ) : (
        <>
          <NavBar />
          <main>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
