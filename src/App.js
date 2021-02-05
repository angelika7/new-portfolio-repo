import React, { useState, useEffect } from 'react';

import Layout from './containers/Layout/Layout';
import Header from './components/Header/Header';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Stack from './components/Stack/Stack';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Toolbar from './components/Navigation/Toolbar/Toolbar';

const useWindowSize = () => {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
  // Handler to call on window resize
  const handleResize = () => {
    // Set window width/height to state
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }
  
  // Add event listener
  window.addEventListener("resize", handleResize);
  
  // Call handler right away so state gets updated with initial window size
  handleResize();
  
  // Remove event listener on cleanup
  return () => window.removeEventListener("resize", handleResize);
}, []); // Empty array ensures that effect is only run on mount

return windowSize;
}

function App() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  
  const size = useWindowSize();


  useEffect(() => {

    if(size.width <= 850) {
      setVisible(true)
    }
  }, [size.width])

  return (
    <React.Fragment>
      <Layout>
        <Toolbar onClick={() => {setOpen(!open)}} open={open} isVisible={visible}/>
        <Header />
        <main>
          <About/>
          <Projects />
          <Stack />
          <Contact />
        </main>
        <Footer />
      </Layout>
    </React.Fragment>  
  
  );
}

export default App;
