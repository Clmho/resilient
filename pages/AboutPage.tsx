
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import PageHero from '../components/PageHero';

const AboutPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <>
      <PageHero 
        title={t.about.title}
        imageUrl="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
      />
      <div className="bg-white">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto space-y-16 text-slate-700">
            <section>
              <p className="text-xl leading-relaxed text-center">{t.about.history}</p>
            </section>

            <section className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-light p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-3 text-secondary">{t.about.mission.title}</h2>
                <p>{t.about.mission.text}</p>
              </div>
              <div className="bg-light p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-3 text-secondary">{t.about.vision.title}</h2>
                <p>{t.about.vision.text}</p>
              </div>
              <div className="bg-light p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold font-heading mb-3 text-secondary">{t.about.values.title}</h2>
                <p>{t.about.values.text}</p>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold font-heading mb-4 text-primary">Posicionamento Estratégico</h2>
              <p className="leading-relaxed max-w-3xl mx-auto">{t.about.positioning}</p>
            </section>

            <section className="text-center">
              <h2 className="text-3xl font-bold font-heading mb-4 text-primary">Atuação Nacional e Internacional</h2>
              <p className="leading-relaxed max-w-3xl mx-auto">{t.about.globalReach}</p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
