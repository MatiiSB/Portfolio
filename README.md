# Matías San Blas — Portfolio

Portfolio profesional de **Cloud Solution Architect & AI Engineer**.
Construido con React 19 + Vite.

## Stack

- **React 19** + **Vite 6**
- **framer-motion** (animaciones on-scroll)
- **react-icons** (iconografía)
- CSS puro con **design tokens** (sin Tailwind)

## Arquitectura

```
src/
  components/ui/      Design system (Card, Button, Badge, ...)
  components/layout/  Navbar, Footer, ScrollProgress, AnimatedBackground
  sections/           Hero, About, Stats, Experience, Skills, ...
  hooks/              useTheme, useScrollProgress, useActiveSection, ...
  data/               Contenido separado de presentación
  lib/                constants, motion variants
  styles/             tokens.css, base.css, components.css
```

## Scripts

```bash
npm install      # dependencias
npm run dev      # desarrollo
npm run build    # producción
npm run preview  # preview del build
```

## TODOs pendientes (verificar antes de deploy)

- `data/certificates.js`: nombres exactos, fechas y URLs de verificación.
- `data/projects.js` y `data/architecture.js`: refinar con detalles reales.
- `data/stats.js`: ajustar métricas a valores confirmados.
- `public/og-image.png`: generar imagen 1200×630 para previews sociales.
- `public/cv.pdf` y `profile.resumeUrl`: añadir CV descargable.
- Convertir `Foto_Nueva_Sonrisa.jpeg` a `.webp` con `srcset` responsive.
