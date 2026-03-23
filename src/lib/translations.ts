export type Language = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      profile: 'Perfil',
      trajectory: 'Trajetória',
      achievements: 'Conquistas',
      services: 'Serviços',
      contact: 'Contato',
      mentorship: 'Mentoria',
      authority: 'Direito Internacional & Autoridade'
    },
    hero: {
      ods: 'Paz, Justiça & Instituições Eficazes',
      title: 'Liderança Jurídica',
      subtitle: 'Internacional.',
      description: 'Comprometida com o 16º ODS da ONU. Visiting Professional na Corte Penal Internacional e mentora de carreiras globais de excelência.',
      cta_services: 'Serviços de Mentoria',
      cta_trajectory: 'Ver Trajetória'
    },
    profile: {
      badge: 'O Perfil',
      title: 'Líder Brasileira com Atuação Global',
      p1: 'Mariana Almeida é uma líder brasileira comprometida com o 16º Objetivo de Desenvolvimento Sustentável da ONU: Paz, Justiça e Instituições Eficazes.',
      p2: 'Advogada qualificada pela OAB com 5 anos de experiência profissional em tempo integral, Mariana construiu uma ponte sólida entre o sistema jurídico brasileiro e as cortes internacionais mais prestigiadas.',
      exp_title: 'Experiência',
      exp_desc: '5 anos de prática jurídica plena em órgãos de cúpula.',
      scholarships_title: 'Bolsas',
      scholarships_desc: 'Mais de 8 bolsas internacionais de excelência conquistadas.',
      quote: '"Justiça global exige excelência local."'
    },
    trajectory: {
      title: 'Experiência',
      subtitle: 'Institucional',
      description: 'Uma trajetória marcada pela atuação em órgãos de justiça de alto nível, tanto no Brasil quanto no exterior.',
      items: [
        {
          title: "International Criminal Court (ICC)",
          location: "Holanda",
          role: "Visiting Professional",
          period: "2023/2024",
          desc: "Atuação financiada na Corte Penal Internacional, contribuindo para processos de justiça global."
        },
        {
          title: "Tribunal de Justiça (Câmara de Apelação)",
          location: "Brasil",
          role: "Assessoria Jurídica",
          period: "Anterior",
          desc: "Trabalho na Câmara de Apelações, lidando com o sistema recursal complexo."
        },
        {
          title: "Ministério Público",
          location: "Brasil",
          role: "Atuação Ministerial",
          period: "Anterior",
          desc: "Experiência sólida no Ministério Público, fortalecendo a base do Direito Público."
        }
      ]
    },
    achievements: {
      badge: 'Achievements',
      title: 'Conquistas & Bolsas de Estudo',
      stat_label: 'Reconhecimentos Globais'
    },
    services: {
      badge: 'Services',
      title: 'Mentoria &',
      subtitle: 'Consultoria',
      description: 'Orientação estratégica baseada em uma trajetória real de sucesso nas instituições mais competitivas do mundo.',
      how_to_proceed: 'Como Proceder',
      steps: [
        { step: "01", text: "Envie um e-mail para mariana.europeanjourney@gmail.com especificando o serviço desejado." },
        { step: "02", text: "Para revisões, anexe o link da oportunidade (bolsa/vaga) e o documento se já houver rascunho." },
        { step: "03", text: "Você receberá uma resposta sobre disponibilidade e detalhes bancários (IBAN)." },
        { step: "04", text: "Após o envio do comprovante, o serviço é agendado ou o prazo de revisão inicia." }
      ],
      packages_title: 'Pacotes Promocionais',
      packages_note: '* Para beneficiar-se dos preços promocionais, a contratação e o pagamento devem ser feitos integralmente de uma vez.',
      disclaimer: 'PLEASE NOTE: A contratação dos serviços não garante a aceitação no processo seletivo desejado.',
      cta_meeting: 'Candidatar-se à Mentoria',
      cta_review: 'Solicitar Revisão',
      serviceList: [
        {
          title: "Sessão de vídeo",
          price: "R$280",
          duration: "1 hora",
          desc: "Sessão individual para aconselhamento estratégico sobre cursos, eventos, candidaturas e carreira internacional. Ideal para melhoria de LinkedIn, discussão de cartas de motivação ou prática para entrevistas.",
          note: "Caso já possua um documento rascunhado para discussão, é obrigatória a contratação da revisão de documento."
        },
        {
          title: "Correção de documento",
          price: "R$310",
          duration: "8 dias úteis",
          desc: "Revisão detalhada de um documento (carta de motivação, carta de referência, CV) com comentários críticos e sugestões de melhoria. Foco em estrutura e impacto estratégico.",
          note: "Não inclui reescrita ou correção gramatical/ortográfica. Taxa extra disponível para urgência."
        },
        {
          title: "Follow up de correção de documento",
          price: "R$140",
          duration: "Variável",
          desc: "Revisão de uma nova versão do documento após a implementação dos comentários da revisão inicial.",
          note: "Disponível apenas para clientes que já realizaram a revisão inicial."
        }
      ],
      packageList: [
        { name: "2 correções de documento", price: "R$550" },
        { name: "3 correções de documento", price: "R$830" },
        { name: "1 correção de documento + 1 sessão de vídeo", price: "R$520" },
        { name: "2 correções de documento + 1 sessão de vídeo", price: "R$800" },
        { name: "3 correções de documento + 1 sessão de vídeo", price: "R$990" },
      ]
    },
    footer: {
      description: 'Advogada Criminal Internacional e Mentora Acadêmica. Trajetória de excelência nas instituições mais prestigiadas do mundo.',
      nav_title: 'Navegação',
      contact_title: 'Contato',
      rights: '© 2026 Mariana Almeida. Todos os direitos reservados.',
      ods_commit: 'Comprometida com o 16º ODS da ONU'
    },
    scholarships: [
      { title: "University of Oxford (Magister Juris)", detail: "Aceita com bolsa de £10,000", year: "2022" },
      { title: "Erasmus Mundus Joint Master (ILGSPD)", detail: "Bolsa integral (mensalidade + auxílio)", year: "2022" },
      { title: "International Criminal Court", detail: "Cargo financiado de Visiting Professional", year: "2023/2024" },
      { title: "University of Cambridge (LLM)", detail: "Candidata Aceita", year: "2022" },
      { title: "LSE (Master of Laws)", detail: "Candidata Aceita", year: "2022" },
      { title: "Munich Advanced Course in International Law", detail: "Bolsa integral (LMU München)", year: "2023" },
      { title: "European Forum Alpbach", detail: "Bolsa integral (Seminar Assistant)", year: "2023" },
      { title: "Nuremberg Moot Court", detail: "Classificada entre as 16 melhores equipes", year: "2023" },
      { title: "Youth for Reviving Humanity (Egito)", detail: "Bolsa integral (World Youth Forum)", year: "2023" },
      { title: "International Student Festival (Noruega)", detail: "Bolsa integral (Trondheim)", year: "2023" },
      { title: "VU Amsterdam Summer School", detail: "Bolsa de Excelência Acadêmica", year: "2022" },
      { title: "Lucerne Academy for Human Rights", detail: "Premiada com bolsa parcial", year: "2022" },
    ]
  },
  en: {
    nav: {
      profile: 'Profile',
      trajectory: 'Trajectory',
      achievements: 'Achievements',
      services: 'Services',
      contact: 'Contact',
      mentorship: 'Mentorship',
      authority: 'International Law & Authority'
    },
    hero: {
      ods: 'Peace, Justice & Strong Institutions',
      title: 'International Legal',
      subtitle: 'Leadership.',
      description: 'Committed to the 16th UN Sustainable Development Goal. Visiting Professional at the International Criminal Court and mentor for global careers of excellence.',
      cta_services: 'Mentorship Services',
      cta_trajectory: 'View Trajectory'
    },
    profile: {
      badge: 'The Profile',
      title: 'Brazilian Leader with Global Impact',
      p1: 'Mariana Almeida is a Brazilian leader committed to the 16th UN Sustainable Development Goal: Peace, Justice, and Strong Institutions.',
      p2: 'A qualified lawyer by the OAB with 5 years of full-time professional experience, Mariana has built a solid bridge between the Brazilian legal system and the most prestigious international courts.',
      exp_title: 'Experience',
      exp_desc: '5 years of full legal practice in top-tier institutions.',
      scholarships_title: 'Scholarships',
      scholarships_desc: 'More than 8 international scholarships of excellence awarded.',
      quote: '"Global justice requires local excellence."'
    },
    trajectory: {
      title: 'Institutional',
      subtitle: 'Experience',
      description: 'A trajectory marked by work in high-level justice bodies, both in Brazil and abroad.',
      items: [
        {
          title: "International Criminal Court (ICC)",
          location: "The Netherlands",
          role: "Visiting Professional",
          period: "2023/2024",
          desc: "Funded position at the International Criminal Court, contributing to global justice processes."
        },
        {
          title: "Court of Justice (Appeals Chamber)",
          location: "Brazil",
          role: "Legal Advisor",
          period: "Previous",
          desc: "Work in the Appeals Chamber, dealing with the complex appellate system."
        },
        {
          title: "Prosecution Service",
          location: "Brazil",
          role: "Ministerial Role",
          period: "Previous",
          desc: "Solid experience in the Prosecution Service, strengthening the foundation of Public Law."
        }
      ]
    },
    achievements: {
      badge: 'Achievements',
      title: 'Scholarships & Achievements',
      stat_label: 'Global Recognitions'
    },
    services: {
      badge: 'Services',
      title: 'Mentorship &',
      subtitle: 'Consulting',
      description: 'Strategic guidance based on a real successful trajectory in the most competitive institutions in the world.',
      how_to_proceed: 'How to Proceed',
      steps: [
        { step: "01", text: "Send an email to mariana.europeanjourney@gmail.com specifying which service you want to buy." },
        { step: "02", text: "For reviews, attach the link of the opportunity (scholarship/job) and the document if there is a draft." },
        { step: "03", text: "You will receive a response about availability and bank details (IBAN)." },
        { step: "04", text: "After payment, the meeting is scheduled or the 8-day review deadline starts." }
      ],
      packages_title: 'Sale Packages',
      packages_note: '* To benefit from the package sale price, you must hire and pay for everything at once.',
      disclaimer: 'PLEASE NOTE: Hiring my services does not guarantee acceptance in the desired selection process.',
      cta_meeting: 'Apply for Mentorship',
      cta_review: 'Request Review',
      serviceList: [
        {
          title: "Online Meeting",
          price: "50 EUR",
          duration: "1 hour",
          desc: "Individual session for strategic advice on courses, events, applications and international career. Ideal for LinkedIn improvement, motivation letter discussion or interview practice.",
          note: "If you already have a drafted document for discussion, hiring a document review is mandatory."
        },
        {
          title: "Document Review",
          price: "50 EUR",
          duration: "8 working days",
          desc: "Detailed review of a document (motivation letter, reference letter, CV) with critical comments and suggestions for improvement. Focus on structure and strategic impact.",
          note: "Does not include rewriting or grammatical/spelling correction. Extra fee available for urgency."
        },
        {
          title: "Follow-up Review",
          price: "20 EUR",
          duration: "Variable",
          desc: "Review of a new version of the document after implementing the comments from the initial review.",
          note: "Available only for clients who have already performed the initial review."
        }
      ],
      packageList: [
        { name: "2-Document Review", price: "80 EUR" },
        { name: "3-Document Review", price: "110 EUR" },
        { name: "1-Doc Review + Meeting", price: "85 EUR" },
        { name: "2-Doc Review + Meeting", price: "110 EUR" },
        { name: "3-Doc Review + Meeting", price: "150 EUR" },
      ]
    },
    footer: {
      description: 'International Criminal Lawyer and Academic Mentor. Trajectory of excellence in the most prestigious institutions in the world.',
      nav_title: 'Navigation',
      contact_title: 'Contact',
      rights: '© 2026 Mariana Almeida. All rights reserved.',
      ods_commit: 'Committed to the 16th UN SDG'
    },
    scholarships: [
      { title: "University of Oxford (Magister Juris)", detail: "Accepted with £10,000 scholarship", year: "2022" },
      { title: "Erasmus Mundus Joint Master (ILGSPD)", detail: "Full-scholarship (tuition + living expenses)", year: "2022" },
      { title: "International Criminal Court", detail: "Funded Visiting Professional position", year: "2023/2024" },
      { title: "University of Cambridge (LLM)", detail: "Accepted Candidate", year: "2022" },
      { title: "LSE (Master of Laws)", detail: "Accepted Candidate", year: "2022" },
      { title: "Munich Advanced Course in International Law", detail: "Full-scholarship (LMU München)", year: "2023" },
      { title: "European Forum Alpbach", detail: "Full-scholarship (Seminar Assistant)", year: "2023" },
      { title: "Nuremberg Moot Court", detail: "Classified among last 16 teams (out of 125)", year: "2023" },
      { title: "Youth for Reviving Humanity (Egypt)", detail: "Full-scholarship (World Youth Forum)", year: "2023" },
      { title: "International Student Festival (Norway)", detail: "Full-scholarship (Trondheim)", year: "2023" },
      { title: "VU Amsterdam Summer School", detail: "Academic Excellence Scholarship", year: "2022" },
      { title: "Lucerne Academy for Human Rights", detail: "Awarded partial scholarship", year: "2022" },
    ]
  }
};
