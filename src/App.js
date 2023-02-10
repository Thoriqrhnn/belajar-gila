import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import PortoPage from './pages/PortoPage';
import ContactPage from './pages/ContactPage';
// import Tes from './components/Tes';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/porto' element={<PortoPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </Router>
    </>
    // <Tes></Tes>
  );
}

export default App;