
import React from 'react';
import { useLocalization } from '../hooks/useLocalization';
import { Consultant } from '../types';
import PageHero from '../components/PageHero';

const SocialIcon: React.FC<{ network: string }> = ({ network }) => {
    if (network === 'linkedin') {
        return (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        );
    }
    return null;
};

const ConsultantCard: React.FC<{ consultant: Consultant }> = ({ consultant }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transition-shadow hover:shadow-xl h-full">
        <div className="p-6 flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 bg-light border-b border-slate-200">
            <img src={consultant.photoUrl} alt={consultant.name} className="w-24 h-24 rounded-full object-cover shadow-md flex-shrink-0"/>
            <div>
                <h3 className="text-2xl font-bold font-heading text-primary">{consultant.name}</h3>
                <div className="flex justify-center sm:justify-start mt-2 space-x-3">
                    {consultant.socials?.map(social => (
                        <a href={social.url} key={social.network} target="_blank" rel="noopener noreferrer" aria-label={social.network} className="text-slate-500 hover:text-accent transition-colors">
                            <SocialIcon network={social.network} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <p className="text-slate-600 mb-6 flex-grow">{consultant.bio}</p>
            <div className="flex flex-wrap gap-2">
                {consultant.specialties.map(spec => (
                    <span key={spec} className="bg-accent/20 text-blue-800 text-sm font-semibold mr-2 px-3 py-1 rounded-full">
                    {spec}
                    </span>
                ))}
            </div>
        </div>
    </div>
  );
};

const ConsultantsPage: React.FC = () => {
  const { t } = useLocalization();

  return (
    <>
      <PageHero 
        title={t.consultants.title}
        imageUrl="https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=2071&auto=format&fit=crop"
      />
      <div className="bg-light">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {t.consultantsList.map(consultant => (
              <ConsultantCard key={consultant.id} consultant={consultant} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultantsPage;