
import { Content } from '../types';

export const content: Content = {
  pt: {
    nav: {
      home: 'Home',
      about: 'Sobre Nós',
      services: 'Serviços',
      consultants: 'Consultores',
      contact: 'Contato',
    },
    home: {
      hero: {
        headline: 'Estratégia e Ação para o Desenvolvimento do seu Negócio',
        subheadline: 'Consultoria e assessoria empresarial que transformam desafios em oportunidades de crescimento sustentável.',
        cta: 'Fale com um especialista',
      },
      about: {
        title: 'Quem Somos',
        text: 'A Resilient é uma consultoria especializada em desenvolvimento de negócios, com foco em estratégias de internacionalização e otimização através de centrais de negócios. Nossa missão é impulsionar o crescimento de empresas com soluções inovadoras e personalizadas.',
        link: 'Conheça nossa história',
      },
      services: {
        title: 'Nossas Soluções',
        cta: 'Mais informações',
      },
      differentiators: {
        title: 'Nossa Proposta de Valor',
        items: [
          { title: 'Expertise Comprovada', text: 'Anos de experiência em mercados nacionais e internacionais, garantindo estratégias eficazes.' },
          { title: 'Metodologia Própria', text: 'Abordagem estruturada que combina análise de dados, planejamento estratégico e execução ágil.' },
          { title: 'Resultados Mensuráveis', text: 'Foco em entregar valor tangível, com indicadores de sucesso claros e acompanhamento contínuo.' },
        ],
      },
      consultants: {
        title: 'Nosso Time de Especialistas',
        link: 'Conheça os consultores',
      },
      cta: {
        title: 'Pronto para levar seu negócio ao próximo nível?',
        button: 'Vamos conversar',
      },
    },
    about: {
        title: "Sobre a Resilient",
        history: "Fundada com o propósito de catalisar o crescimento empresarial, a Resilient nasceu da união de consultores experientes, apaixonados por transformar desafios em resultados concretos. Nossa trajetória é marcada por projetos bem-sucedidos em diversos setores, consolidando nossa reputação como parceiros estratégicos confiáveis.",
        mission: { title: "Missão", text: "Desenvolver negócios de forma sustentável, aplicando conhecimento estratégico e soluções inovadoras para gerar valor aos nossos clientes, parceiros e à sociedade." },
        vision: { title: "Visão", text: "Ser a consultoria de referência em internacionalização e modelos colaborativos de negócios, reconhecida pela excelência, ética e capacidade de entregar resultados transformadores." },
        values: { title: "Valores", text: "Compromisso com o cliente, excelência na execução, inovação constante, integridade e colaboração são os pilares que guiam todas as nossas ações." },
        positioning: "Nos posicionamos como um parceiro estratégico, que atua lado a lado com nossos clientes para entender suas dores e construir soluções customizadas que endereçam os desafios específicos de cada negócio, desde o planejamento até a implementação.",
        globalReach: "Com uma rede de parceiros globais e uma profunda compreensão das dinâmicas dos mercados internacionais, estamos preparados para apoiar empresas brasileiras em sua expansão global e auxiliar companhias estrangeiras a prosperar no Brasil."
    },
    services: {
        title: "Nossos Serviços",
        intro: "Oferecemos soluções estratégicas e personalizadas para empresas que buscam crescimento, eficiência e expansão de mercado.",
        cta: "Mais informações"
    },
    consultants: {
        title: "Nossos Consultores",
    },
    contact: {
        title: "Entre em Contato",
        form: {
            name: "Nome Completo",
            company: "Empresa",
            email: "E-mail",
            phone: "Telefone",
            message: "Mensagem",
            submit: "Enviar Mensagem",
            success: "Mensagem enviada com sucesso! Entraremos em contato em breve."
        },
        info: {
            title: "Informações de Contato"
        }
    },
    footer: {
        description: "Estratégia e Ação para o Desenvolvimento do seu Negócio.",
        contact: "Contato"
    },
    servicesList: [
      {
        id: 'internacionalizacao',
        title: 'Internacionalização',
        summary: 'Guiamos sua empresa no processo de expansão para mercados globais, desde o planejamento até a operação.',
        details: {
          heroTitle: 'Expansão Global Estratégica',
          description: 'Nosso serviço de internacionalização é desenhado para empresas que desejam levar seus produtos e serviços além das fronteiras. Oferecemos um suporte completo que abrange análise de mercado, planejamento estratégico, adaptação de produtos, aspectos regulatórios e construção de canais de venda internacionais.',
          problems: ['Falta de conhecimento sobre mercados externos', 'Complexidade regulatória e tributária', 'Dificuldade em encontrar parceiros locais confiáveis', 'Adaptação cultural e de produto'],
          benefits: ['Acesso a novos mercados e clientes', 'Diversificação de receita e redução de riscos', 'Aumento da competitividade e valor da marca', 'Aproveitamento de oportunidades globais'],
          methodology: 'Utilizamos uma metodologia faseada: Diagnóstico e Análise de Viabilidade, Planejamento Estratégico, Implementação e Acompanhamento. Cada etapa é customizada para as necessidades e o perfil da sua empresa, garantindo uma entrada segura e bem-sucedida no mercado-alvo.'
        }
      },
      {
        id: 'centrais-de-negocios',
        title: 'Centrais de Negócios',
        summary: 'Estruturamos e otimizamos modelos colaborativos que aumentam o poder de compra e a competitividade.',
        details: {
          heroTitle: 'O Poder da Colaboração',
          description: 'As Centrais de Negócios são uma ferramenta poderosa para empresas que buscam ganhar escala, reduzir custos e aumentar sua competitividade. Nosso serviço auxilia na formatação, gestão e expansão de redes e centrais de compras, otimizando processos e gerando benefícios tangíveis para todos os associados.',
          problems: ['Baixo poder de negociação com fornecedores', 'Custos operacionais elevados', 'Dificuldade em competir com grandes players', 'Falta de acesso a tecnologias e melhores práticas'],
          benefits: ['Redução de custos através de compras conjuntas', 'Melhora nas condições comerciais e de pagamento', 'Acesso a novos fornecedores e produtos', 'Fortalecimento de mercado e troca de experiências'],
          methodology: 'Nossa abordagem inclui a análise de sinergias entre os potenciais membros, a definição do modelo de governança, o desenvolvimento de processos de negociação e compra, e a implementação de ferramentas de gestão. Acompanhamos a operação para garantir a sustentabilidade e o crescimento da central.'
        }
      },
    ],
    consultantsList: [
      { id: '1', name: 'João Silva', photoUrl: 'https://picsum.photos/seed/joao/400/400', bio: 'Especialista em estratégia de mercado e expansão internacional com mais de 20 anos de experiência.', specialties: ['Estratégia', 'Internacionalização', 'M&A'], socials: [{ network: 'linkedin', url: '#' }] },
      { id: '2', name: 'Maria Oliveira', photoUrl: 'https://picsum.photos/seed/maria/400/400', bio: 'Consultora sênior focada em otimização de operações e estruturação de centrais de negócios.', specialties: ['Operações', 'Centrais de Negócios', 'Supply Chain'], socials: [{ network: 'linkedin', url: '#' }] },
      { id: '3', name: 'Carlos Pereira', photoUrl: 'https://picsum.photos/seed/carlos/400/400', bio: 'Com vasta experiência em finanças corporativas, apoia empresas em reestruturação e captação de recursos.', specialties: ['Finanças', 'Reestruturação', 'Planejamento'], socials: [{ network: 'linkedin', url: '#' }] },
      { id: '4', name: 'Ana Costa', photoUrl: 'https://picsum.photos/seed/ana/400/400', bio: 'Especialista em marketing digital e estratégias de entrada em novos mercados B2B.', specialties: ['Marketing Digital', 'Go-to-Market', 'Inovação'], socials: [{ network: 'linkedin', url: '#' }] },
    ],
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Nosotros',
      services: 'Servicios',
      consultants: 'Consultores',
      contact: 'Contacto',
    },
    home: {
      hero: {
        headline: 'Estrategia y Acción para el Desarrollo de su Negocio',
        subheadline: 'Consultoría y asesoría empresarial que transforman desafíos en oportunidades de crecimiento sostenible.',
        cta: 'Hable con un especialista',
      },
      about: {
        title: 'Quiénes Somos',
        text: 'Resilient es una consultoría especializada en desarrollo de negocios, con enfoque en estrategias de internacionalización y optimización a través de centrales de negocios. Nuestra misión es impulsar el crecimiento de empresas con soluciones innovadoras y personalizadas.',
        link: 'Conozca nuestra historia',
      },
      services: {
        title: 'Nuestras Soluciones',
        cta: 'Más información',
      },
      differentiators: {
        title: 'Nuestra Propuesta de Valor',
        items: [
          { title: 'Expertise Comprobada', text: 'Años de experiencia en mercados nacionales e internacionales, garantizando estrategias eficaces.' },
          { title: 'Metodología Propia', text: 'Enfoque estructurado que combina análisis de datos, planificación estratégica y ejecución ágil.' },
          { title: 'Resultados Medibles', text: 'Enfoque en entregar valor tangible, con indicadores de éxito claros y seguimiento continuo.' },
        ],
      },
      consultants: {
        title: 'Nuestro Equipo de Especialistas',
        link: 'Conozca a los consultores',
      },
      cta: {
        title: '¿Listo para llevar su negocio al siguiente nivel?',
        button: 'Vamos a conversar',
      },
    },
    about: {
        title: "Sobre Resilient",
        history: "Fundada con el propósito de catalizar el crecimiento empresarial, Resilient nació de la unión de consultores experimentados, apasionados por transformar desafíos en resultados concretos. Nuestra trayectoria está marcada por proyectos exitosos en diversos sectores, consolidando nuestra reputación como socios estratégicos confiables.",
        mission: { title: "Misión", text: "Desarrollar negocios de forma sostenible, aplicando conocimiento estratégico y soluciones innovadoras para generar valor a nuestros clientes, socios y a la sociedad." },
        vision: { title: "Visión", text: "Ser la consultoría de referencia en internacionalización y modelos colaborativos de negocios, reconocida por la excelencia, ética y capacidad de entregar resultados transformadores." },
        values: { title: "Valores", text: "Compromiso con el cliente, excelencia en la ejecución, innovación constante, integridad y colaboración son los pilares que guían todas nuestras acciones." },
        positioning: "Nos posicionamos como un socio estratégico, que actúa codo a codo con nuestros clientes para entender sus dolores y construir soluciones personalizadas que abordan los desafíos específicos de cada negocio, desde la planificación hasta la implementación.",
        globalReach: "Con una red de socios globales y una profunda comprensión de las dinámicas de los mercados internacionales, estamos preparados para apoyar a empresas brasileñas en su expansión global y asistir a compañías extranjeras a prosperar en Brasil."
    },
    services: {
        title: "Nuestros Servicios",
        intro: "Ofrecemos soluciones estratégicas y personalizadas para empresas que buscan crecimiento, eficiencia y expansión de mercado.",
        cta: "Más información"
    },
    consultants: {
        title: "Nuestros Consultores",
    },
    contact: {
        title: "Póngase en Contacto",
        form: {
            name: "Nombre Completo",
            company: "Empresa",
            email: "Correo Electrónico",
            phone: "Teléfono",
            message: "Mensaje",
            submit: "Enviar Mensaje",
            success: "¡Mensaje enviado con éxito! Nos pondremos en contacto en breve."
        },
        info: {
            title: "Información de Contacto"
        }
    },
    footer: {
        description: "Estrategia y Acción para el Desarrollo de su Negocio.",
        contact: "Contacto"
    },
    servicesList: [
      {
        id: 'internacionalizacao',
        title: 'Internacionalización',
        summary: 'Guiamos a su empresa en el proceso de expansión a mercados globales, desde la planificación hasta la operación.',
        details: {
          heroTitle: 'Expansión Global Estratégica',
          description: 'Nuestro servicio de internacionalización está diseñado para empresas que desean llevar sus productos y servicios más allá de las fronteras. Ofrecemos un soporte completo que abarca análisis de mercado, planificación estratégica, adaptación de productos, aspectos regulatorios y construcción de canales de venta internacionales.',
          problems: ['Falta de conocimiento sobre mercados externos', 'Complejidad regulatoria y tributaria', 'Dificultad para encontrar socios locales confiables', 'Adaptación cultural y de producto'],
          benefits: ['Acceso a nuevos mercados y clientes', 'Diversificación de ingresos y reducción de riesgos', 'Aumento de la competitividad y valor de la marca', 'Aprovechamiento de oportunidades globales'],
          methodology: 'Utilizamos una metodología por fases: Diagnóstico y Análisis de Viabilidad, Planificación Estratégica, Implementación y Seguimiento. Cada etapa se personaliza para las necesidades y el perfil de su empresa, garantizando una entrada segura y exitosa en el mercado objetivo.'
        }
      },
      {
        id: 'centrais-de-negocios',
        title: 'Centrales de Negocios',
        summary: 'Estructuramos y optimizamos modelos colaborativos que aumentan el poder de compra y la competitividad.',
        details: {
          heroTitle: 'El Poder de la Colaboración',
          description: 'Las Centrales de Negocios son una herramienta poderosa para empresas que buscan ganar escala, reducir costos y aumentar su competitividad. Nuestro servicio ayuda en la formación, gestión y expansión de redes y centrales de compras, optimizando procesos y generando beneficios tangibles para todos los asociados.',
          problems: ['Bajo poder de negociación con proveedores', 'Costos operativos elevados', 'Dificultad para competir con grandes jugadores', 'Falta de acceso a tecnologías y mejores prácticas'],
          benefits: ['Reducción de costos a través de compras conjuntas', 'Mejora en las condiciones comerciales y de pago', 'Acceso a nuevos proveedores y productos', 'Fortalecimiento del mercado e intercambio de experiencias'],
          methodology: 'Nuestro enfoque incluye el análisis de sinergias entre los miembros potenciales, la definición del modelo de gobernanza, el desarrollo de procesos de negociación y compra, y la implementación de herramientas de gestión. Acompañamos la operación para garantizar la sostenibilidad y el crecimiento de la central.'
        }
      },
    ],
    consultantsList: [
      { id: '1', name: 'João Silva', photoUrl: 'https://picsum.photos/seed/joao/400/400', bio: 'Especialista en estrategia de mercado y expansión internacional con más de 20 años de experiencia.', specialties: ['Estrategia', 'Internacionalización', 'M&A'], socials: [{ network: 'linkedin', url: '#' }] },
      { id: '2', name: 'Maria Oliveira', photoUrl: 'https://picsum.photos/seed/maria/400/400', bio: 'Consultora senior enfocada en la optimización de operaciones y estructuración de centrales de negocios.', specialties: ['Operaciones', 'Centrales de Negocios', 'Supply Chain'], socials: [{ network: 'linkedin', url: '#' }] },
      { id: '3', name: 'Carlos Pereira', photoUrl: 'https://picsum.photos/seed/carlos/400/400', bio: 'Con vasta experiencia en finanzas corporativas, apoya a empresas en reestructuración y captación de recursos.', specialties: ['Finanzas', 'Reestructuración', 'Planificación'], socials: [{ network: 'linkedin', url: '#' }] },
      { id: '4', name: 'Ana Costa', photoUrl: 'https://picsum.photos/seed/ana/400/400', bio: 'Especialista en marketing digital y estrategias de entrada en nuevos mercados B2B.', specialties: ['Marketing Digital', 'Go-to-Market', 'Innovación'], socials: [{ network: 'linkedin', url: '#' }] },
    ],
  },
};