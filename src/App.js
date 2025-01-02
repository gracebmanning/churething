import './App.css';
import { Routes, Route } from 'react-router';
import Home from './components/Home/home';
import Nav from './components/Nav/nav';
import Archive from './components/Archive/archive';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import JCS from './components/JCS-Collection/jcs';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/archive' element={<Archive/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/jcs-collection' element={<JCS/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
