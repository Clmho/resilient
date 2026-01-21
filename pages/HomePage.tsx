
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../hooks/useLocalization';
import { Consultant, Service } from '../types';

const HeroSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="relative bg-primary text-white bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')" }}>
            <div className="absolute inset-0 bg-primary opacity-80"></div>
            <div className="relative container mx-auto px-6 py-32 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold font-heading mb-4 leading-tight">{t.home.hero.headline}</h1>
                <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto mb-8">{t.home.hero.subheadline}</p>
                <Link to="/contato" className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-light transition-colors transform hover:scale-105 shadow-lg text-lg">
                    {t.home.hero.cta}
                </Link>
            </div>
        </section>
    );
};

const AboutSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl font-bold font-heading mb-4 text-primary">{t.home.about.title}</h2>
                        <p className="text-slate-600 mb-6 text-lg">{t.home.about.text}</p>
                        <Link to="/sobre-nos" className="text-secondary font-bold hover:text-accent transition-colors duration-300">
                            {t.home.about.link} &rarr;
                        </Link>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" alt="Business meeting" className="rounded-lg shadow-2xl"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const { t } = useLocalization();
    return (
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-transparent hover:border-accent flex flex-col">
            <h3 className="text-2xl font-bold font-heading mb-3 text-primary">{service.title}</h3>
            <p className="text-slate-600 mb-6 flex-grow">{service.summary}</p>
            <Link to={`/servicos/${service.id}`} className="text-secondary font-bold hover:text-accent transition-colors duration-300 self-start">
                {t.home.services.cta} &rarr;
            </Link>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="py-24 bg-light">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold font-heading text-center mb-16 text-primary">{t.home.services.title}</h2>
                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {t.servicesList.map(service => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const DifferentiatorsSection: React.FC = () => {
    const { t } = useLocalization();
    const icons = [
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 10h6" /></svg>,
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ];
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold font-heading text-center mb-16 text-primary">{t.home.differentiators.title}</h2>
                <div className="grid md:grid-cols-3 gap-10">
                    {t.home.differentiators.items.map((item, index) => (
                        <div key={index} className="text-center p-6">
                            <div className="flex justify-center mb-4">{icons[index]}</div>
                            <h3 className="text-xl font-bold font-heading mb-2 text-secondary">{item.title}</h3>
                            <p className="text-slate-600">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ConsultantAvatar: React.FC<{ consultant: Consultant }> = ({ consultant }) => (
    <div className="flex flex-col items-center text-center group">
        <img src={consultant.photoUrl} alt={consultant.name} className="w-40 h-40 rounded-full mb-4 object-cover shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105" />
        <h4 className="font-bold text-lg font-heading text-primary">{consultant.name}</h4>
    </div>
);


const ConsultantsSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="py-24 bg-light">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold font-heading mb-16 text-primary">{t.home.consultants.title}</h2>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {t.consultantsList.slice(0, 3).map(consultant => (
                        <ConsultantAvatar key={consultant.id} consultant={consultant} />
                    ))}
                </div>
                <div className="mt-16">
                    <Link to="/consultores" className="text-secondary font-bold hover:text-accent transition-colors duration-300">
                        {t.home.consultants.link} &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
};

const CtaSection: React.FC = () => {
    const { t } = useLocalization();
    return (
        <section className="bg-secondary text-white">
            <div className="container mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold font-heading mb-6">{t.home.cta.title}</h2>
                <Link to="/contato" className="bg-white text-secondary font-bold py-4 px-10 rounded-full hover:bg-light transition-colors transform hover:scale-105 shadow-lg text-lg">
                    {t.home.cta.button}
                </Link>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <DifferentiatorsSection />
            <ConsultantsSection />
            <CtaSection />
        </>
    );
};

export default HomePage;
