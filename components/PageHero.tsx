
import React from 'react';

interface PageHeroProps {
  title: string;
  imageUrl: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, imageUrl }) => {
  return (
    <section className="relative bg-primary text-white bg-cover bg-center h-80 flex items-center justify-center" style={{ backgroundImage: `url('${imageUrl}')` }}>
      <div className="absolute inset-0 bg-primary opacity-70"></div>
      <div className="relative container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-heading">{title}</h1>
      </div>
    </section>
  );
};

export default PageHero;
