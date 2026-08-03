import { FaCloudscale, FaCogs, FaBrain, FaDocker, FaShieldAlt, FaDatabase } from 'react-icons/fa';
import { SiTerraform, SiHuawei } from 'react-icons/si';

// Skills reorientados a Cloud / IA / Automatización (no fullstack).
// TODO: verificar/ajustar los tags según experiencia real confirmada.
export const skills = [
  {
    icon: SiHuawei,
    title: 'Cloud Platforms & Services',
    tags: ['Huawei Cloud', 'ECS', 'OBS', 'RDS', 'VPC', 'IAM', 'WAF'],
  },
  {
    icon: SiTerraform,
    title: 'Infrastructure as Code & Automation',
    tags: ['Terraform', 'Python', 'Bash', 'CI/CD', 'Git'],
  },
  {
    icon: FaBrain,
    title: 'AI & Machine Learning',
    tags: ['ModelArts', 'LLMs', 'RAG', 'Prompt Engineering'],
  },
  {
    icon: FaDocker,
    title: 'Containers & Orchestration',
    tags: ['Docker', 'Kubernetes', 'Linux', 'Microservicios'],
  },
  {
    icon: FaDatabase,
    title: 'Data & Databases',
    tags: ['SQL Server', 'MongoDB', 'Cassandra'],
  },
  {
    icon: FaShieldAlt,
    title: 'Networking & Security',
    tags: ['VPC', 'Security Groups', 'IAM', 'Firewalls', 'Ciberseguridad'],
  },
];
