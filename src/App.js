import Navbar from './components/navbar/navbar'
import Intro from './components/Intro/Intro';
import Service from './components/Services/Services';
import Experience from './components/Experience/Experience';
import './App.css'
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonial/Testimonial';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <Works/>
      <Portfolio/>
      <Testimonial/>
    </div>
  );
}

export default App;
