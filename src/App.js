import Navbar from './components/navbar/navbar'
import Intro from './components/Intro/Intro';
import Service from './components/Services/Services';
import './App.css'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
    </div>
  );
}

export default App;
