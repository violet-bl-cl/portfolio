import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom';

//Pages
import Home from './pages/home';
import Projects from './pages/projects';
import LineArt from './pages/lineArt';
import MeshArt from './pages/meshArt';
import Contact from './pages/contact';
import Error from './pages/error';

function App() {
  return (
   <Router>
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/lineArt" element={<LineArt/>}/>
        <Route path="/meshArt" element={<MeshArt/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
     </Routes>
   </Router>
  );
}

export default App;
