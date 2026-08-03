import { SiHuawei } from 'react-icons/si';
import { FaGoogle, FaAws, FaCloudscale, FaCode } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';

// Certificaciones. TODO: verificar nombres exactos, fechas y URLs de verificación.
export const certificates = [
  {
    title: 'HCCDA-TE — Huawei Cloud Certified Developer Associate - Tech Essencials',
    issuer: 'Huawei Cloud',
    year: '2025',
    icon: SiHuawei,
    color: '#FF0000',
    url: null, // TODO: enlace de verificación
  },
  {
    title: 'Google Ads Search',
    issuer: 'Google',
    year: '2024',
    icon: FaGoogle,
    color: '#4285F4',
    url: null,
  },
  {
    title: 'Google Ads Display',
    issuer: 'Google',
    year: '2024',
    icon: FaGoogle,
    color: '#34A853',
    url: null,
  },
  {
    title: 'Tecnico en Computación',
    issuer: 'Cursa',
    year: '2024',
    icon: FaComputer,
    color: '#FF9900',
    url: null, // TODO: confirmar
  }
];
