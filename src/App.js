import './styles/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
