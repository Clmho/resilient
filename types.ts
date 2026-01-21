
export type Language = 'pt' | 'es';

export interface Service {
  id: string;
  title: string;
  summary: string;
  details: {
    heroTitle: string;
    description: string;
    problems: string[];
    benefits: string[];
    methodology: string;
  };
}

export interface Consultant {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  specialties: string[];
  socials?: {
    network: 'linkedin' | 'twitter' | 'instagram';
    url: string;
  }[];
}

export interface LocaleContent {
  nav: {
    home: string;
    about: string;
    services: string;
    consultants: string;
    contact: string;
  };
  home: {
    hero: {
      headline: string;
      subheadline: string;
      cta: string;
    };
    about: {
      title: string;
      text: string;
      link: string;
    };
    services: {
      title: string;
      cta: string;
    };
    differentiators: {
      title: string;
      items: {
        title: string;
        text: string;
      }[];
    };
    consultants: {
      title: string;
      link: string;
    };
    cta: {
      title: string;
      button: string;
    };
  };
  about: {
    title: string;
    history: string;
    mission: { title: string; text: string; };
    vision: { title: string; text: string; };
    values: { title: string; text: string; };
    positioning: string;
    globalReach: string;
  };
  services: {
    title: string;
    intro: string;
    cta: string;
  };
  consultants: {
    title: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      company: string;
      email: string;
      phone: string;
      message: string;
      submit: string;
      success: string;
    };
    info: {
      title: string;
    };
  };
  footer: {
    description: string;
    contact: string;
  };
  servicesList: Service[];
  consultantsList: Consultant[];
}

export interface Content {
  pt: LocaleContent;
  es: LocaleContent;
}