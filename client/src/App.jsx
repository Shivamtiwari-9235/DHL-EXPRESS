import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseSection from './components/WhyChooseSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import ThankYouPage from './pages/ThankYouPage';

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <FAQSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
