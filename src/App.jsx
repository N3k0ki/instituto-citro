import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';

import Hero from './sections/heroSection.jsx';
import Initiave from './sections/initiativesSection.jsx';
import Theory from './sections/theorySection.jsx';
import EssenceSection from './sections/essenceSection.jsx';
import QuoteSection from './sections/quoteSection.jsx';
import ParticipateSection from './sections/participateSection.jsx';
import Atuacao from './pages/atuacao.jsx';

import Territorio from './pages/territorio.jsx';
import './index.css';

function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Initiave />
      <Theory />
      <EssenceSection />
      <QuoteSection />
      <ParticipateSection />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col justify-between font-sans text-slate-800">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/territorio" element={<Territorio />} />
            <Route path="/atuacao" element={<Atuacao />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;