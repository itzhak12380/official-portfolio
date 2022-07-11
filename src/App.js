import Navbar from './components/navbar/navbar'
import Intro from './components/Intro/Intro';
import Service from './components/Services/Services';
import Experience from './components/Experience/Experience';
import './App.css'
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { themContext } from './context/contaxt'
import { useContext } from 'react';
function App() {
  const them = useContext(themContext)
  const darkMode = them.state.darkMode
  return (
    <div className="App" style={{
      background: darkMode ? 'black' : '',
      color: darkMode ? 'white' : '',
    }}>
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Works />
      <Portfolio />
      {/* <Testimonial /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
