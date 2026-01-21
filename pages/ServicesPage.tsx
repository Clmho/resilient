
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocalization } from '../hooks/useLocalization';
import { Service } from '../types';
import PageHero from '../components/PageHero';

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const { t } = useLocalization();
  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 border-t-4 border-transparent hover:border-accent flex flex-col">
        <h3 className="text-2xl font-bold font-heading mb-3 text-primary">{service.title}</h3>
        <p className="text-slate-600 mb-6 flex-grow">{service.summary}</p>
        <Link to={`/servicos/${service.id}`} className="text-secondary font-bold hover:text-accent transition-colors duration-300 self-start">
            {t.services.cta} &rarr;
        </Link>
    </div>
  );
};


const ServicesPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <>
      <PageHero 
        title={t.services.title}
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{t.services.intro}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {t.servicesList.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
