import './styles/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';
import GithubProfile from './pages/GitHubProfile';
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
        <Route path="/realisations" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notice" element={<LegalNotice />} />
        <Route path="/github" element={<GithubProfile />} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;
