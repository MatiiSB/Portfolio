// Diagramas SVG de arquitecturas cloud. Minimalistas y responsive.
const MultiRegion = ({ accent }) => {
  const bg = 'rgba(255,255,255,0.04)';
  const st = 'rgba(255,255,255,0.16)';
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label="Arquitectura multi-región 3-tier">
      <defs>
        <marker id="ar1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={accent} />
        </marker>
      </defs>
      <text x="160" y="18" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#7A7599">ELB</text>
      <rect x="120" y="24" width="80" height="22" rx="6" fill={bg} stroke={accent} strokeWidth="1.5" />
      <text x="160" y="39" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">ECS ×2</text>
      <line x1="160" y1="46" x2="90" y2="70" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar1)" />
      <line x1="160" y1="46" x2="230" y2="70" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar1)" />
      <rect x="40" y="70" width="100" height="22" rx="6" fill={bg} stroke={st} strokeWidth="1.5" />
      <text x="90" y="85" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">Región A</text>
      <rect x="180" y="70" width="100" height="22" rx="6" fill={bg} stroke={st} strokeWidth="1.5" />
      <text x="230" y="85" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">Región B</text>
      <rect x="40" y="110" width="100" height="22" rx="6" fill={bg} stroke={st} strokeWidth="1.5" />
      <text x="90" y="125" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">RDS</text>
      <rect x="180" y="110" width="100" height="22" rx="6" fill={bg} stroke={st} strokeWidth="1.5" />
      <text x="230" y="125" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">RDS réplica</text>
      <line x1="90" y1="92" x2="90" y2="110" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar1)" />
      <line x1="230" y1="92" x2="230" y2="110" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar1)" />
      <rect x="120" y="150" width="80" height="20" rx="6" fill={bg} stroke={st} strokeWidth="1.5" />
      <text x="160" y="164" textAnchor="middle" fontSize="11" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">OBS</text>
    </svg>
  );
};

const CicdTerraform = ({ accent }) => {
  const bg = 'rgba(255,255,255,0.04)';
  const st = 'rgba(255,255,255,0.16)';
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label="Pipeline CI/CD con Terraform">
      <defs>
        <marker id="ar2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={accent} />
        </marker>
      </defs>
      {['Git', 'CI/CD', 'Terraform', 'Huawei Cloud'].map((label, i) => {
        const x = 30 + i * 72;
        return (
          <g key={label}>
            <rect x={x} y="70" width="60" height="40" rx="8" fill={bg} stroke={i === 2 ? accent : st} strokeWidth="1.5" />
            <text x={x + 30} y="93" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">{label}</text>
          </g>
        );
      })}
      {[90, 162, 234].map((x) => (
        <line key={x} x1={x} y1="90" x2={x + 12} y2="90" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar2)" />
      ))}
      <text x="160" y="40" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#7A7599">dev → staging → prod</text>
      <text x="160" y="140" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#7A7599">IaC declarativo</text>
    </svg>
  );
};

const RagIa = ({ accent }) => {
  const bg = 'rgba(255,255,255,0.04)';
  const st = 'rgba(255,255,255,0.16)';
  return (
    <svg viewBox="0 0 320 180" role="img" aria-label="Arquitectura RAG con ModelArts">
      <defs>
        <marker id="ar3" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={accent} />
        </marker>
      </defs>
      <rect x="20" y="30" width="70" height="28" rx="6" fill={bg} stroke={st} strokeWidth="1.5" />
      <text x="55" y="48" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">Docs</text>
      <rect x="125" y="30" width="70" height="28" rx="6" fill={bg} stroke={st} strokeWidth="1.5" />
      <text x="160" y="48" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">Embeddings</text>
      <rect x="230" y="30" width="70" height="28" rx="6" fill={bg} stroke={accent} strokeWidth="1.5" />
      <text x="265" y="48" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">Vector DB</text>
      <line x1="90" y1="44" x2="125" y2="44" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar3)" />
      <line x1="195" y1="44" x2="230" y2="44" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar3)" />
      <rect x="125" y="100" width="70" height="28" rx="6" fill={bg} stroke={accent} strokeWidth="1.5" />
      <text x="160" y="118" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">ModelArts</text>
      <rect x="125" y="140" width="70" height="28" rx="6" fill={bg} stroke={st} strokeWidth="1.5" />
      <text x="160" y="158" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono, monospace" fill="#F4F2FF">Respuesta</text>
      <line x1="265" y1="58" x2="195" y2="100" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar3)" />
      <line x1="160" y1="128" x2="160" y2="140" stroke={accent} strokeWidth="1.5" markerEnd="url(#ar3)" />
    </svg>
  );
};

const ArchitectureDiagram = ({ id, accent }) => {
  const props = { accent };
  switch (id) {
    case 'multi-region':
      return <MultiRegion {...props} />;
    case 'cicd-terraform':
      return <CicdTerraform {...props} />;
    case 'rag-ia':
      return <RagIa {...props} />;
    default:
      return null;
  }
};

export default ArchitectureDiagram;
