import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className='header'>
      <Header />
      <Routes>
        
      </Routes>
      <Footer />
      </div>
    </div>
  );
}

export default App;
