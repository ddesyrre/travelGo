import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destinos from './pages/destinos/Destinos';
import Dicas from './pages/dicas/Dicas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh] space-y-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/destinos' element={<Destinos />} />
            <Route path='/dicas' element={<Dicas />} />

          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );

}

export default App
