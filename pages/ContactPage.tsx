
import React, { useState } from 'react';
import { useLocalization } from '../hooks/useLocalization';
import PageHero from '../components/PageHero';

const ContactPage: React.FC = () => {
  const { t } = useLocalization();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
  };

  const contactInfo = [
    { 
        icon: <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
        title: "Email",
        content: "contato@resilient.com.br",
        href: "mailto:contato@resilient.com.br"
    },
    { 
        icon: <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>,
        title: "Telefone",
        content: "+55 (11) 99999-9999",
        href: "tel:+5511999999999"
    },
    { 
        icon: <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
        title: "Endereço",
        content: "São Paulo, SP, Brasil",
        href: "#"
    },
  ];

  return (
    <>
      <PageHero 
        title={t.contact.title}
        imageUrl="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="bg-light">
        <div className="container mx-auto px-6 py-24">
            
            {/* Full-width Intro */}
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-4xl font-bold font-heading text-primary mb-4">
                    {t.contact.info.title}
                </h2>
                <p className="text-slate-600 text-xl leading-relaxed">
                    Estamos prontos para ouvir sobre seus desafios e explorar como podemos ajudar. Use o formulário abaixo ou entre em contato por um dos nossos canais diretos.
                </p>
            </div>

            {/* Two-column Layout */}
            <div className="grid lg:grid-cols-5 gap-12 items-start max-w-7xl mx-auto">
                
                {/* Left Column: Contact Info Card */}
                <div className="lg:col-span-2 space-y-8 bg-secondary text-white p-8 md:p-12 rounded-lg shadow-xl h-full">
                    <h3 className="text-3xl font-bold font-heading text-white">Nossos Canais</h3>
                    <p className="text-slate-200 text-lg">
                        Para um contato ágil e direto, utilize um dos canais abaixo. Nossa equipe está pronta para atendê-lo.
                    </p>
                    <div className="space-y-8">
                        {contactInfo.map((item) => (
                             <div key={item.title} className="flex items-center space-x-4">
                                <div className="flex-shrink-0 flex justify-center items-center bg-white/10 rounded-full h-14 w-14">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-accent uppercase tracking-wider">{item.title}</h4>
                                    <a href={item.href} className="text-slate-100 hover:text-white transition-colors text-lg">{item.content}</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Form Card */}
                <div className="lg:col-span-3 bg-white p-8 md:p-12 rounded-lg shadow-xl">
                    {isSubmitted ? (
                    <div className="text-center py-10 flex flex-col items-center">
                        <svg className="w-16 h-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h3 className="text-2xl font-bold font-heading text-primary">{t.contact.form.success}</h3>
                    </div>
                    ) : (
                    <>
                    <h3 className="text-3xl font-bold font-heading text-center mb-8 text-primary">Envie sua Mensagem</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.form.name}</label>
                                <input type="text" name="name" id="name" required className="block w-full px-4 py-3 bg-light border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.name} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.form.email}</label>
                                <input type="email" name="email" id="email" required className="block w-full px-4 py-3 bg-light border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.email} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.form.company}</label>
                                <input type="text" name="company" id="company" className="block w-full px-4 py-3 bg-light border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.company} onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.form.phone}</label>
                                <input type="tel" name="phone" id="phone" className="block w-full px-4 py-3 bg-light border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.phone} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.form.message}</label>
                            <textarea name="message" id="message" rows={5} required className="block w-full px-4 py-3 bg-light border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary" value={formData.message} onChange={handleChange}></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-4 rounded-md hover:bg-secondary transition-colors duration-300 text-lg">
                            {t.contact.form.submit}
                            </button>
                        </div>
                    </form>
                    </>
                    )}
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
