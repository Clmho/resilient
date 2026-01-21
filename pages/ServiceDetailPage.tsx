
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLocalization } from '../hooks/useLocalization';
import PageHero from '../components/PageHero';

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { t } = useLocalization();
  const service = t.servicesList.find(s => s.id === serviceId);

  if (!service) {
    return <Navigate to="/servicos" replace />;
  }

  const { details } = service;

  return (
    <>
      <PageHero 
        title={details.heroTitle}
        imageUrl="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="bg-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto space-y-12">
            <section>
              <h2 className="text-3xl font-bold font-heading mb-4 text-primary">Descrição Detalhada</h2>
              <p className="text-slate-700 leading-relaxed text-lg">{details.description}</p>
            </section>

            <section className="grid md:grid-cols-2 gap-10">
                <div className="bg-light p-6 rounded-lg">
                    <h3 className="text-2xl font-bold font-heading mb-3 text-primary">Problemas que Resolve</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                        {details.problems.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
                <div className="bg-light p-6 rounded-lg">
                    <h3 className="text-2xl font-bold font-heading mb-3 text-primary">Benefícios</h3>
                    <ul className="list-disc list-inside space-y-2 text-slate-700">
                        {details.benefits.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold font-heading mb-4 text-primary">Metodologia</h2>
              <p className="text-slate-700 leading-relaxed text-lg">{details.methodology}</p>
            </section>

            <section className="text-center pt-12 border-t mt-12">
                 <h2 className="text-3xl font-bold font-heading mb-6 text-primary">Interessado neste serviço?</h2>
                <Link to="/contato" className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-secondary transition-colors transform hover:scale-105 shadow-lg text-lg">
                    Fale Conosco
                </Link>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
