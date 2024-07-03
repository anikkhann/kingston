import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}  exact/>
        <Route path="/contact" element={<Contact />}  exact/>
        <Route path="*" element={<NotFound />}  exact/>
      </Routes>
    </>
  );
}

export default App;
