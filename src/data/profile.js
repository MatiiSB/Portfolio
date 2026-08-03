import fotoPerfil from '../assets/perfil_cuerpo.jpeg';

// Datos personales y profesionales de Matías San Blas.
export const profile = {
  name: 'Matías San Blas',
  roles: [
    'Cloud Solution Architect',
    "Licenciado en Sistemas"
  ],
  tagline:
    'Diseño arquitecturas cloud escalables, automatizo infraestructura e integro IA en soluciones productivas.',
  currentRole: 'Cloud Solution Architect · Huawei Cloud',
  bio: [
    'Actualmente me desempeño como Cloud Solution Architect en Huawei Cloud, donde diseño e implemento soluciones cloud para clientes, participando en proyectos de arquitectura, automatización, inteligencia artificial y ciberseguridad.',
    'Soy Licenciado en Gestión de Tecnologías de la Información de la UADE y me apasiona explorar nuevas tecnologías que generen impacto real en las organizaciones. Disfruto enfrentar desafíos técnicos, aprender de forma continua y transformar problemas complejos en soluciones simples, escalables y eficientes.',
    'Mi objetivo es seguir creciendo como Cloud Solution Architect, especializándome en arquitecturas cloud, inteligencia artificial y tecnologías que impulsen la transformación digital.',
  ],
  photo: fotoPerfil,
  location: 'Buenos Aires, Argentina',
  email: 'matiassanblas@gmail.com',
  phone: '+54 11 4408-2130',
  phoneHref: '+541144082130',
  social: {
    linkedin: 'https://www.linkedin.com/in/msanblas/',
    github: 'https://github.com/MatiiSB',
  },
  // Banner "trabajando ahora en..."
  now: 'Diseñando arquitecturas multi-región y soluciones de IA en Huawei Cloud para clientes LATAM.',
  // TODO: colocar un CV en public/cv.pdf y setear resumeUrl: '/cv.pdf'
  resumeUrl: null,
};
