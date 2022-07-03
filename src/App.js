
import './App.css';
import About from './components/About';
import Contact from './components/Contact';

import Home from './components/Home';
import Navbar from './components/Navbar';

import Skills from './components/Skills';

function App() {
  return (
    <div className="text-gray-400 bg-body body-font">
      <Navbar />
    
      <Home />
      <About />
     
   {/* <Projects /> */}
   <Skills />
<Contact />
    </div>
  );
}

export default App;
