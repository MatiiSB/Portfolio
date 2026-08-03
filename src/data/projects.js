import { FaProjectDiagram, FaCogs, FaBrain, FaDatabase } from 'react-icons/fa';

// Proyectos destacados. TODO: completar con detalles reales (impacto, enlaces).
export const projects = [
  {
    title: 'Arquitectura cloud multi-región para cliente LATAM',
    problem: 'Necesidad de alta disponibilidad y baja latencia para usuarios distribuidos en LATAM.',
    solution:
      'Diseño de arquitectura multi-región en Huawei Cloud con balanceo de carga, OBS para estáticos y RDS replicado.',
    stack: ['Huawei Cloud', 'ECS', 'OBS', 'RDS', 'VPC', 'Arquitectura'],
    icon: FaProjectDiagram,
  },
  {
    title: 'Automatización de procesos bancarios',
    problem: 'Tareas operativas manuales y repetitivas en corridas bancarias.',
    solution:
      'Automatización con Python y SQL sobre bases de datos existentes, reduciendo intervención manual y tickets.',
    stack: ['Python', 'SQL', 'Automatización', 'COELSA'],
    icon: FaCogs,
  },
  {
    title: 'Integración de IA con RAG para pre-venta',
    problem: 'Demora en generar documentación técnica personalizada para clientes.',
    solution:
      'Prueba de concepto de RAG con LLMs sobre documentación de soluciones cloud para acelerar respuestas de pre-venta.',
    stack: ['LLMs', 'RAG', 'Python', 'ModelArts'],
    icon: FaBrain,
  },
  {
    title: 'Pipeline CI/CD con Infrastructure as Code',
    problem: 'Despliegues manuales propensos a error y sin reproducibilidad.',
    solution:
      'Pipeline de CI/CD con Terraform para aprovisionamiento declarativo y despliegues consistentes.',
    stack: ['Terraform', 'CI/CD', 'Git', 'Huawei Cloud'],
    icon: FaDatabase,
  },
];
