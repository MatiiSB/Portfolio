// Galería de arquitecturas cloud diseñadas.
// Los diagramas se renderizan como SVG inline en el componente.
// TODO: refinar diagramas y descripciones con casos reales.
export const architectures = [
  {
    id: 'multi-region',
    title: 'App 3-tier Multi-Región',
    summary:
      'Aplicación web de 3 capas con alta disponibilidad en Huawei Cloud: ECS escalado, OBS para estáticos y RDS replicado entre regiones.',
    services: ['ECS', 'OBS', 'RDS', 'ELB', 'VPC'],
    accent: '#7C5CFC',
  },
  {
    id: 'cicd-terraform',
    title: 'Pipeline CI/CD con Terraform',
    summary:
      'Aprovisionamiento declarativo de infraestructura con Terraform y despliegue automatizado vía pipeline CI/CD, con entornos dev/staging/prod.',
    services: ['Terraform', 'CI/CD', 'Git', 'ECS'],
    accent: '#22D3EE',
  },
  {
    id: 'rag-ia',
    title: 'RAG con ModelArts',
    summary:
      'Solución de Retrieval-Augmented Generation sobre documentación de soluciones cloud, usando ModelArts y embeddings para respuestas técnicas precisas.',
    services: ['ModelArts', 'LLMs', 'RAG', 'OBS'],
    accent: '#A78BFA',
  },
];
