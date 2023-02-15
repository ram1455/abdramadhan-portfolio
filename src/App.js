// import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Main/>
    </div>
  );
}

export default App;
