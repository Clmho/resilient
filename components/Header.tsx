
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLocalization } from '../hooks/useLocalization';

const Header: React.FC = () => {
  const { t, setLanguage, language } = useLocalization();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { to: '/', text: t.nav.home },
    { to: '/sobre-nos', text: t.nav.about },
    { to: '/servicos', text: t.nav.services },
    { to: '/consultores', text: t.nav.consultants },
    { to: '/contato', text: t.nav.contact },
  ];
  
  const linkClasses = "text-slate-600 hover:text-accent transition-colors duration-300 py-2 font-medium";
  const activeLinkClasses = "text-primary font-bold";

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold font-heading text-primary">
          Resilient
        </Link>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : ''}`}
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <button onClick={() => setLanguage('pt')} className={`p-1 rounded-full transition-all duration-300 ${language === 'pt' ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'}`}>
            <img src="https://hatscripts.github.io/circle-flags/flags/br.svg" alt="Português (Brasil)" className="w-7 h-7" />
          </button>
          <button onClick={() => setLanguage('es')} className={`p-1 rounded-full transition-all duration-300 ${language === 'es' ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'}`}>
            <img src="https://hatscripts.github.io/circle-flags/flags/es.svg" alt="Español" className="w-7 h-7" />
          </button>
        </div>

        <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary focus:outline-none">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
            </button>
        </div>
      </div>
       {isMenuOpen && (
            <div className="lg:hidden bg-white py-4 shadow-inner">
                <nav className="flex flex-col items-center space-y-4">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setIsMenuOpen(false)}
                            className={({ isActive }) => `${linkClasses} text-lg ${isActive ? activeLinkClasses : ''}`}
                        >
                            {link.text}
                        </NavLink>
                    ))}
                    <div className="flex items-center space-x-4 pt-4">
                        <button onClick={() => { setLanguage('pt'); setIsMenuOpen(false); }} className={`p-1 rounded-full transition-all duration-300 ${language === 'pt' ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'}`}>
                           <img src="https://hatscripts.github.io/circle-flags/flags/br.svg" alt="Português (Brasil)" className="w-7 h-7" />
                        </button>
                        <button onClick={() => { setLanguage('es'); setIsMenuOpen(false); }} className={`p-1 rounded-full transition-all duration-300 ${language === 'es' ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'}`}>
                           <img src="https://hatscripts.github.io/circle-flags/flags/es.svg" alt="Español" className="w-7 h-7" />
                        </button>
                    </div>
                </nav>
            </div>
        )}
    </header>
  );
};

export default Header;
