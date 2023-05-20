
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import About from'./components/Pages/About';
import Resume from './components/Pages/Resume'
import Projects from './components/Pages/Projects'
import EducationAndCertificate from './components/Pages/EducationAndCertificate';
import Contact from './components/Pages/Contact'
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/resume" element={<Resume/>}/>
        <Route exact path="/projects" element={<Projects/>}/>
        <Route exact path="/EducationAndCertificate" element={<EducationAndCertificate/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
