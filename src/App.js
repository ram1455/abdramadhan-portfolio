// import logo from './logo.svg';
import './App.css';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
    <div id='home'></div>
      <Navbar/>
      <Hero/>
      <Main/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
