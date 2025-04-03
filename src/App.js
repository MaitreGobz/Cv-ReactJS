import './styles/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
