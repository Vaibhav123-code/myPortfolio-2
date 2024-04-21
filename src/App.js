import './App.css';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom"
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import ProjectPage from './Pages/ProjectPage';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/projects' element={ <Projects />} />
            <Route path='/about' element={ <About /> } />
            <Route path='/contact' element={ <Contact />} />
            <Route path='/projects/:id' element={ <ProjectPage /> } />
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
