
import React from 'react';
import { HashRouter, Routes, Route, Outlet } from 'react-router-dom';
import { LocalizationProvider } from './context/LocalizationContext';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import ConsultantsPage from './pages/ConsultantsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTopButton from './components/ScrollToTopButton';
import WhatsAppButton from './components/WhatsAppButton';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-light font-sans text-slate-700">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
    </div>
  );
};

function App() {
  return (
    <LocalizationProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="sobre-nos" element={<AboutPage />} />
            <Route path="servicos" element={<ServicesPage />} />
            <Route path="servicos/:serviceId" element={<ServiceDetailPage />} />
            <Route path="consultores" element={<ConsultantsPage />} />
            <Route path="contato" element={<ContactPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </LocalizationProvider>
  );
}

export default App;