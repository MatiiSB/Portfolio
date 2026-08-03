# REFACTOR_PLAN.md — Portfolio de Matías San Blas

> Documento de arquitectura y diseño generado en la **Fase 1 — Análisis y Planificación**.
> No se ha escrito código de implementación. Este plan queda **pendiente de aprobación**.

---

## 1. Estado actual

### Stack técnico detectado
- **React 19.1** + **Vite 6** + JavaScript (JSX, sin TypeScript)
- **Tailwind CSS 4** instalado, pero **prácticamente no usado** — todo el estilado vive en `src/styles/global.css` (1165 líneas) y `navbar.css`. El `tailwind.config.js` define una paleta indigo/teal (`#6366F1`, `#14B8A6`) que **no coincide** con la paleta real del CSS (violeta `#160336` / `#E0AAFF`). Tailwind es, hoy, peso muerto.
- **framer-motion 12** — usado únicamente en un wrapper `FadeInWhenVisible`.
- **react-icons 5** — usado en varias secciones.
- **react-scroll-parallax 3.4** — `ParallaxProvider` envuelve toda la app en `App.jsx` pero **no se usa ningún componente `<Parallax>`**. Peso muerto.
- **react-tsparticles + tsparticles** — instalados pero **no referenciados en ningún archivo**. Dependencias muertas y pesadas.
- **PostCSS + autoprefixer**.

### Estructura actual
```
src/
  App.jsx
  main.jsx
  assets/        Foto_Nueva_Sonrisa.jpeg (185 KB), react.svg (sin usar)
  components/    FadeInWhenVisible, Navbar, ScrollToTopButton, Section
  sections/      Home, About, Studies, Experience, Skills, Contact
  styles/        global.css (1165 líneas), navbar.css
public/          favicon.svg (vacío), vite.svg
```

### Fortalezas
- **Base moderna y sana**: Vite 6 + React 19, arranque rápido, HMR.
- **Separación inicial** `components/` vs `sections/` razonable.
- **Componente `Section` reutilizable** aplicado de forma consistente en todas las secciones.
- **Accesibilidad básica presente**: `lang="es"`, `aria-label` en el botón hamburguesa, `aria-expanded`/`aria-controls`, cierre del menú con `Escape`, bloqueo de scroll del body, `rel="noopener noreferrer"` en enlaces externos.
- **Metadatos SEO mínimos** correctos: `description`, `author`, Open Graph básico.
- **Modo claro/oscuro** implementado vía `body.light-mode` y variables CSS.
- **Scroll-to-top** con botón flotante y `aria-label`.
- **Contenido real** coherente (Huawei Cloud, COELSA, UADE) — la materia prima narrativa es buena.
- **`FadeInWhenVisible`** con `viewport={{ once: true }}` — patrón correcto.

### Debilidades
- **`global.css` es un monolito de 1165 líneas** con 5 bloques `@media` (768, 670, 576, 480 px) que **repiten las mismas reglas** con variaciones mínimas. `.about-photo` y `.about-photo img` se redefinen 4 veces; `.skills-grid` se redeclara varias veces dentro del mismo breakpoint.
- **Sin sistema de diseño**: no hay primitivas UI (Card, Button, Tag, Badge, IconWrapper). Los estilos de tarjeta (`.skill-card`, `.study-card`, `.timeline-card`, `.about-card`, `.contact-card`) se repiten con `border: 2px solid var(--text-main)` y `box-shadow` manual una y otra vez.
- **Datos hardcoded dentro de componentes**: `jobs`, `skills`, `estudios` viven dentro de `Experience.jsx`, `Skills.jsx`, `Studies.jsx`. No hay carpeta `data/`.
- **Colores mágicos sueltos**: `#a21ba7`, `#c7000a`, `#00B4D8`, `#8B5CF6`, `#6366F1`, `#7c3aed` esparcidos por JSX y CSS en lugar de tokens.
- **Fuentes muertas**: `index.html` carga `Inter` (usada en el `body`), pero `global.css` importa `Martel` + `Poiret One` vía `@import` **que no se aplican a ningún elemento**. Render-blocking innecesario.
- **Doble import de CSS**: `main.jsx` y `App.jsx` ambos importan `global.css`.
- **`favicon.svg` vacío** y `react.svg` (asset de plantilla Vite) sin usar.
- **`README.md`** sigue siendo el de plantilla Vite por defecto.
- **`FadeInWhenVisible`** tiene un `// eslint-disable-next-line` sin motivo.
- **`ScrollToTopButton`** usa estilos inline y muta `style.boxShadow` en `onMouseEnter/Leave` — inconsistente con el resto basado en variables CSS.

### Problemas de UX
- **Posicionamiento contradictorio con el objetivo del usuario**: la sección *Skills* presenta "Desarrollo Web (React, JS, HTML/CSS)", "Backend (Node, Express, Python, Java)", "Bases de Datos (MongoDB, SQL Server, Cassandra)" — esto es el perfil de un **desarrollador fullstack**, exactamente lo que el usuario **no** quiere proyectar. No hay mención de Cloud, arquitectura, automatización ni IA como skills.
- **Home genérico**: "SOY MATIAS SAN BLAS" + "Bienvenido a mi portfolio". Sin tagline de rol, sin especialidades, sin call-to-action. No comunica *Cloud Solution Architect / AI Engineer*.
- **Navbar solo hamburguesa**: en desktop no hay barra de navegación visible — el usuario siempre debe abrir un overlay. Poco habitual y menos descubierto para un portfolio profesional.
- **Sin secciones de Projects, Certificados ni Architecture Gallery** — vacíos narrativos clave para un arquitecto cloud.
- **Sin métricas/stats** (años de experiencia, certificaciones, proyectos, clientes) que den credibilidad rápida.
- **Hero sin fondo animado** a pesar de tener `tsparticles` instalado — oportunidad visual desperdiciada.
- **Modo claro con paleta inconsistente** (cian `#CAF0F8`) frente al tema oscuro violeta — se siente como otro producto.

### Problemas de UI
- **Bordes `2px solid #fff`** en todas las tarjetas — look pesado y "caja", sin jerarquía visual.
- **Sin glassmorphism real** (el `backdrop-filter` de `.skill-card` está comentado).
- **Sin sistema de espaciado** — paddings mágicos (`2.5rem 2rem`, `100px 20px`).
- **Tipografía sin escala**: `6rem`, `3rem`, `2.5rem`, `1.7rem`, `1.3rem` sin relación modular.
- **Sin gradientes coherentes** — solo uno suelto en el timeline y otro en `ScrollToTopButton`.
- **Foto de perfil ocultada con hack** (`visibility: hidden; width: 1px; height: 1px`) en mobile en vez de `display: none`.

### Problemas de arquitectura
- **Sin `data/`** — contenido mezclado con presentación.
- **Sin `hooks/`** — lógica de scroll/tema duplicable.
- **Sin `lib/` ni `utils/`** — sin helpers centralizados.
- **Sin `layouts/`** — `App.jsx` actúa de layout sin separación.
- **Sin primitivas UI** — todo es `section` + `div` + clases ad-hoc.
- **Dependencias muertas** (`react-tsparticles`, `tsparticles`, `react-scroll-parallax`) que inflan el bundle.
- **Tailwind instalado pero inerte** y con paleta desincronizada del CSS real.
- **`Section.jsx` demasiado rígido**: fuerza `min-height: 100dvh`, centrado vertical y `<h2>` — no permite heroes a pantalla completa ni layouts asimétricos.

### Problemas de rendimiento
- **`react-tsparticles` + `tsparticles`** en `dependencies` sin uso → cientos de KB en `node_modules` y riesgo de import accidental.
- **Google Fonts render-blocking**: `<link>` a Inter en `index.html` sin `font-display=swap`, y `@import` de Martel/Poiret One en CSS (los `@import` bloquean el critical CSS).
- **Imagen de perfil de 185 KB** importada directamente, sin `width`/`height` (CLS), sin `loading="lazy"`, sin versionado responsive (`srcset`).
- **Sin code-splitting / lazy loading** de secciones.
- **`framer-motion`** cargado para un único fade-in — se puede lograr con CSS/IntersectionObserver.
- **`Home.jsx`** hace `setOffsetY(window.scrollY)` en cada frame de scroll → re-render constante del hero.

### Problemas de accesibilidad
- **No existe `<h1>`** en todo el documento — el hero usa `<h2>`. Falta jerarquía de encabezados y mal para SEO.
- **Items del menú son `<li role="button" tabIndex={0}>`** — semánticamente deberían ser `<a href="#id">` o `<button>`. No hay navegación real por URL.
- **Sin focus trap** en el overlay del menú (`role="dialog" aria-modal="true"` sin trap ni restauración de foco al cerrar).
- **Sin "skip to content"**.
- **`alt="Foto de perfil"`** genérico, no descriptivo.
- **Contraste de acentos** (`#E0AAFF` violeta claro sobre fondo violeta oscuro) borderline en texto pequeño.
- **Animaciones sin `prefers-reduced-motion`** — el gradiente animado y el fade-in ignoran la preferencia del usuario.

### Problemas de responsive
- **5 breakpoints manuales** con reglas duplicadas — frágil y difícil de mantener.
- **`max-width: 70%`** en tarjetas móviles deja márgenes incómodos.
- **Timeline de 2 columnas** colapsa con hacks de `visibility: hidden` en vez de un layout mobile-first real.
- **Sin enfoque mobile-first**: los estilos base asumen desktop y luego se sobreescriben.

### Componentes reutilizables (hoy)
- `Section` — contenedor de sección (usado en todas las secciones).
- `FadeInWhenVisible` — wrapper de animación on-scroll.
- `Navbar` — menú overlay + toggle de tema.
- `ScrollToTopButton` — botón flotante.

### Componentes que deberían eliminarse o reescribirse
- `react.svg` (asset de plantilla, sin uso).
- `FadeInWhenVisible` tal cual → reemplazar por un sistema de animación unificado (CSS + IntersectionObserver o framer-motion variants).
- `Section.jsx` → refactorizar a un `SectionLayout` flexible que no fuerce `<h2>` ni centrado.
- `Navbar.jsx` → reescribir con nav desktop + mobile drawer.
- `ScrollToTopButton` → mover a estilos basados en tokens, no inline.
- Dependencias `react-tsparticles`, `tsparticles`, `react-scroll-parallax` → desinstalar (o reemplazar por un fondo animado deliberado y ligero).

---

## 2. Objetivos

Reposicionar el portfolio para presentar a **Matías San Blas** como:

| Rol | Narrativa |
|---|---|
| **Cloud Solution Architect** | Diseño de arquitecturas cloud escalables, resilientes y cost-optimizadas para clientes LATAM. |
| **AI Engineer** | Integración de modelos de IA en soluciones productivas, RAG, automatización inteligente. |
| **Cloud Automation Specialist** | IaC (Terraform), CI/CD, pipelines, automatización de operaciones y despliegues. |
| **Huawei Cloud Specialist** | Experiencia concreta en servicios Huawei Cloud (ECS, OBS, RDS, VPC, IAM, ModelArts, etc.). |

**No** como desarrollador frontend. El portfolio debe leerse como el de un **arquitecto de soluciones** que usa código como medio, no como fin.

### Principios de diseño
1. **Autoridad técnica** — el sitio debe transmitir "esta persona diseña sistemas en producción", no "esta persona sabe React".
2. **Cloud-first visual** — estética de consola, diagramas de arquitectura, gradientes profundos, glassmorphism sutil.
3. **Contenido > chrome** — la jerarquía y los datos (certificaciones, proyectos, arquitecturas) deben dominar.
4. **Performance real** — LCP < 2.5s, CLS ~0, bundle mínimo.
5. **Accesibilidad AA** — contraste, foco, `prefers-reduced-motion`, skip-link.
6. **SEO de persona** — JSON-LD `Person`, OG completo, h1 único.

---

## 3. Nueva arquitectura

```
src/
  main.jsx                  # Entry (sin doble import de CSS)
  App.jsx                   # Composición de layout + secciones

  layouts/
    RootLayout.jsx          # <Navbar/> + <main> + <Footer/> + <ScrollToTopButton/>

  components/
    ui/                     # Primitivas de diseño (design system)
      Card.jsx
      Button.jsx
      Badge.jsx             # tags / pills
      IconBadge.jsx         # círculo con ícono
      SectionHeading.jsx    # eyebrow + título + subtítulo
      GlassPanel.jsx        # contenedor glassmorphism
      Divider.jsx
    layout/
      Navbar.jsx            # nav desktop + drawer mobile + theme toggle
      Footer.jsx
      ScrollToTopButton.jsx
      ScrollProgress.jsx    # barra de progreso de lectura
      AnimatedBackground.jsx # fondo sutil (gradientes/canvas ligero)
    Section.jsx             # wrapper flexible (variantes: hero, centered, full)
    FadeIn.jsx              # animación on-scroll (CSS + IntersectionObserver)

  sections/
    Hero.jsx                # reemplaza Home — h1, tagline, CTA, especialidades
    About.jsx
    Stats.jsx               # NUEVA — métricas clave
    Experience.jsx          # timeline
    Skills.jsx              # reorientada a Cloud / AI / Automation
    ArchitectureGallery.jsx # NUEVA — diagramas de soluciones cloud
    Projects.jsx            # NUEVA — casos/proyectos
    Certificates.jsx        # NUEVA — certificaciones (Huawei, cloud, IA)
    Contact.jsx

  hooks/
    useTheme.js             # tema claro/oscuro persistido
    useScrollProgress.js
    useActiveSection.js     # resaltar nav según sección visible
    usePrefersReducedMotion.js

  lib/
    motion.js               # variants de framer-motion centralizadas
    constants.js            # nav items, enlaces sociales

  data/
    profile.js              # nombre, rol, bio, foto, contacto, social
    experience.js           # jobs
    skills.js               # categorías cloud-first
    studies.js
    certificates.js
    projects.js
    architecture.js         # galería de arquitecturas
    stats.js

  utils/
    cn.js                   # clsx helper

  assets/
    foto-perfil.webp        # imagen optimizada (webp + width/height)
    logos/                  # logos de certificaciones / cloud providers
    diagrams/               # SVG de arquitecturas

  styles/
    tokens.css              # variables CSS (color, spacing, typography, radius, shadow)
    base.css                # reset + tipografía + utilidades
    global.css              # solo imports @layer (slim)
```

### Por qué
- **`data/` separado** permite editar contenido sin tocar presentación y facilita futuro CMS/headless.
- **`components/ui/`** crea un design system real: cada primitiva se testa una vez y se compone.
- **`hooks/`** centraliza lógica de tema/scroll y evita duplicación.
- **`lib/`** para constantes y variants de animación compartidas.
- **`styles/tokens.css`** como única fuente de verdad de diseño — reemplaza los colores mágicos y los 5 breakpoints duplicados.
- **`layouts/RootLayout`** saca la composición estructural de `App.jsx`.
- **Mobile-first + tokens** elimina el CSS monolítico y los hacks de `visibility:hidden`.

---

## 4. Componentes

| Componente | Responsabilidad |
|---|---|
| **Hero** | `<h1>` con nombre, tagline de rol ("Cloud Solution Architect · AI Engineer"), especialidades animadas, CTA a Contact/Projects, fondo animado. Pantalla completa. |
| **Navbar** | Nav horizontal en desktop (con indicador de sección activa), drawer en mobile, toggle de tema, logo/marca. Accessible: focus trap, `Escape`, skip-link. |
| **AnimatedBackground** | Fondo sutil y ligero (gradientes en movimiento o canvas mínimo) que respeta `prefers-reduced-motion`. Reemplaza el uso pretendido de tsparticles sin su peso. |
| **Stats** | Métricas clave (certificaciones, proyectos, años en cloud, clientes LATAM) en una fila de KPIs. |
| **Timeline** | Línea de tiempo vertical de experiencia. Refactor del timeline actual a un componente data-driven con `data/experience.js`. |
| **SkillsGrid** | Grid de skills **reorientado**: Cloud Platforms, IaC/Automation, AI/ML, Networking/Security — no "Desarrollo Web / Backend / BDD". |
| **ArchitectureGallery** | **NUEVA y diferenciadora**: tarjetas con diagramas SVG de arquitecturas cloud diseñadas (ej. "App 3-tier en Huawei Cloud", "Pipeline CI/CD con Terraform", "RAG con ModelArts"). Es la prueba visual de "soy arquitecto". |
| **Projects** | Casos/proyectos destacados con problema → solución → stack → impacto. |
| **Experience** | Sección que orquesta `Timeline` + `data/experience.js`. |
| **Certificates** | Grid de certificaciones (Huawei Cloud, etc.) con logo, emisor, fecha, enlace de verificación. |
| **Footer** | Marca, enlaces sociales, navegación secundaria, copyright. |
| **Contact** | Tarjeta de contacto + CTA + enlaces sociales. |
| **Card / Button / Badge / GlassPanel / SectionHeading** | Primitivas del design system, usadas por todo lo anterior. |
| **ScrollProgress** | Barra superior de progreso de lectura. |
| **ScrollToTopButton** | Refactor a estilos por tokens. |

---

## 5. Diseño

### Tipografía
- **Display / títulos**: `Space Grotesk` o `Sora` (geométrica, técnica, moderna) — transmite "tech/cloud".
- **Cuerpo**: `Inter` (ya cargada, excelente legibilidad).
- **Mono** (acento para etiquetas, "code-like"): `JetBrains Mono` o `Geist Mono` — usado en eyebrows, tags de stack, métricas.
- **Escala modular**: base 1rem, ratio ~1.25 — `--text-xs … --text-5xl` como tokens.
- Cargar fuentes con `font-display: swap` y `preload` de la display.

### Paleta (tokens)
Tema oscuro (principal):
- `--bg-base: #0B0A1A` (negro violeta profundo)
- `--bg-surface: #14122B` (tarjetas)
- `--bg-elevated: #1C1A3A`
- `--text-primary: #F4F2FF`
- `--text-secondary: #B8B4D8`
- `--text-muted: #7A7599`
- `--accent-primary: #7C5CFC` (violeta)
- `--accent-secondary: #22D3EE` (cian — guiño cloud)
- `--accent-tertiary: #A78BFA`
- `--border-subtle: rgba(255,255,255,0.08)`
- Gradientes: `linear-gradient(135deg, #7C5CFC, #22D3EE)` y variaciones.

Tema claro: derivado con `--bg-base: #F6F5FF`, `--text-primary: #0B0A1A`, acentos conservados. **Coherente** con el oscuro (mismo violeta/cian), no paleta cian suelta.

### Espaciados
Escala 4px: `--space-1: 4px` … `--space-16: 64px`, `--space-24`, `--space-32`. Radios: `--radius-sm 8`, `--radius-md 16`, `--radius-lg 24`, `--radius-full 999`. Sombras: 3 niveles elevación.

### Sistema de tarjetas
`Card` con variantes: `default` (surface + border subtle), `glass` (glassmorphism: `backdrop-filter: blur(16px)` + fondo translúcido + border sutil), `outline`. Hover: elevación + glow de acento. Una sola implementación usada por Skills, Certificates, Projects, Stats.

### Sistema de botones
`Button` con variantes `primary` (gradiente), `secondary` (outline), `ghost`, tamaños `sm`/`md`/`lg`, soporte `as` (renderiza `<a>`). Estados hover/active/focus visibles.

### Animaciones
- **On-scroll**: fade + translate, vía `IntersectionObserver` + CSS (o framer-motion variants centralizadas en `lib/motion.js`).
- **Hover**: elevación + glow, transiciones `cubic-bezier(0.4,0,0.2,1)`.
- **Hero**: tagline con rotación sutil de especialidades, fondo con gradientes en movimiento.
- **`prefers-reduced-motion`**: todo movimiento no esencial se desactiva.

### Glassmorphism
`GlassPanel`: `background: rgba(255,255,255,0.04)`, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255,255,255,0.08)`. Usado en Navbar, tarjetas destacadas, hero overlay.

### Gradientes
Acento principal `135deg, violeta→cian`. Texto gradient para el nombre en hero. Bordes gradient en tarjetas destacadas. Consistente y definido una sola vez en tokens.

### Responsive
**Mobile-first**. Breakpoints tokens: `--bp-sm 640`, `--bp-md 768`, `--bp-lg 1024`, `--bp-xl 1280`. Una sola pasada de media queries, sin duplicación. Layouts: 1 col mobile → 2 col tablet → 3-4 col desktop.

### Inspiración visual
- **Vercel / Linear / Resend** — minimalismo técnico, tipografía geométrica, dark-first, glassmorphism sutil.
- **AWS / Google Cloud console** — guiños de "consola" (mono, badges de servicio).
- **Huawei Cloud** — paleta violeta/cian alineada con la marca del empleador.

---

## 6. Roadmap

| Fase | Entregable | Detalle |
|---|---|---|
| **F1** | Refactor de estructura | Crear `data/`, `hooks/`, `lib/`, `utils/`, `layouts/`, `components/ui/`. Mover datos a `data/`. Eliminar dependencias muertas (`tsparticles`, `react-tsparticles`, `react-scroll-parallax`). Desinstalar o consolidar Tailwind. Slim `global.css` a tokens + base. |
| **F2** | Design system | `tokens.css`, primitivas `Card`, `Button`, `Badge`, `GlassPanel`, `SectionHeading`, `Divider`. Tipografía final. |
| **F3** | Layout + Navbar | `RootLayout`, `Navbar` desktop+drawer, `Footer`, `ScrollProgress`, `ScrollToTopButton`, skip-link, `useTheme` persistido. |
| **F4** | Hero | `Hero` con `<h1>`, tagline de rol, especialidades, CTA, `AnimatedBackground`. |
| **F5** | About + Stats | `About` refactorizado, `Stats` nueva. |
| **F6** | Experience / Timeline | `Timeline` data-driven + `data/experience.js`. |
| **F7** | Skills (cloud-first) | `SkillsGrid` reorientado a Cloud/AI/Automation + `data/skills.js`. |
| **F8** | Architecture Gallery | `ArchitectureGallery` + diagramas SVG + `data/architecture.js`. |
| **F9** | Projects | `Projects` + `data/projects.js`. |
| **F10** | Certificates | `Certificates` + `data/certificates.js` + logos. |
| **F11** | Contact | `Contact` refactorizado con primitivas. |
| **F12** | SEO + a11y | JSON-LD `Person`, OG completo, twitter cards, sitemap, h1 único, focus traps, `prefers-reduced-motion`, audit axe. |
| **F13** | Optimización | Imagen webp + `srcset` + `width/height`, preload fonts, lazy-load secciones, Lighthouse pass, bundle check. |

---

## 7. Riesgos

| Riesgo | Impacto | Mitigación |
|---|---|---|
| **Romper el contenido real** (Huawei/COELSA/experiencia) al mover datos a `data/` | Alto — es el valor del portfolio | Mover **primero** los arrays tal cual, sin editar texto, y verificar render. Editar redacción solo después. |
| **Desinstalar `tsparticles`/`parallax` que algo importe ocultamente** | Bajo (verificado: no se usan) | `grep` final antes de `npm uninstall`; build de smoke test. |
| **Tailwind desincronizado** | Medio — confusión | Decidir: adoptar Tailwind v4 de verdad **o** eliminarlo. Recomendado: eliminarlo y usar tokens CSS puros (el proyecto ya vive en CSS custom). |
| **Cambio de tipografía** puede alterar métricas/CLS | Medio | `font-display: swap`, `size-adjust`, reservar espacio en hero. |
| **Refactor de `Section`** puede romper el `scrollIntoView` por id | Alto — navegación | Mantener ids de sección estables (`home`, `about`, …) durante todo el refactor. |
| **Modo claro** puede quedar inconsistente durante fases intermedias | Bajo | Asegurar tokens de tema claro desde la F2. |
| **Diagramas SVG de arquitectura** requieren tiempo/diseño | Medio | Empezar con 2-3 diagramas simples y ampliar. |
| **Contenido nuevo** (Projects, Certificates, Architecture) puede no existir | Medio | Usar placeholders realistas y marcar `// TODO: verificar` para que el usuario confirme datos reales antes de deploy. |
| **SEO/JSON-LD** con datos incorrectos | Bajo | Validar con schema.org validator antes de cerrar F12. |

---

## 8. Checklist

### F1 — Estructura
- [ ] Crear carpetas `data/`, `hooks/`, `lib/`, `utils/`, `layouts/`, `components/ui/`, `assets/logos/`, `assets/diagrams/`
- [ ] Mover `jobs` → `data/experience.js`
- [ ] Mover `skills` → `data/skills.js`
- [ ] Mover `estudios` → `data/studies.js`
- [ ] Crear `data/profile.js`, `data/certificates.js`, `data/projects.js`, `data/architecture.js`, `data/stats.js`
- [ ] `npm uninstall react-tsparticles tsparticles react-scroll-parallax`
- [ ] Eliminar `ParallaxProvider` de `App.jsx`
- [ ] Decidir Tailwind: eliminar `tailwind.config.js`, `postcss.config.js` y deps, o adoptarlo (recomendado: eliminar)
- [ ] Quitar doble import de `global.css` en `main.jsx`
- [ ] Eliminar `react.svg`, reemplazar `favicon.svg` vacío
- [ ] Slim `global.css` → `tokens.css` + `base.css`

### F2 — Design system
- [ ] Definir `tokens.css` (color, spacing, typography, radius, shadow, breakpoints) para tema oscuro y claro
- [ ] Componente `Card` (variantes default/glass/outline)
- [ ] Componente `Button` (variantes primary/secondary/ghost, tamaños, `as`)
- [ ] Componente `Badge`
- [ ] Componente `IconBadge`
- [ ] Componente `GlassPanel`
- [ ] Componente `SectionHeading` (eyebrow + título + subtítulo)
- [ ] Componente `Divider`
- [ ] Cargar tipografía final con `font-display: swap`

### F3 — Layout + Navbar
- [ ] `RootLayout.jsx`
- [ ] `Navbar` desktop horizontal + drawer mobile
- [ ] `useTheme` con persistencia (localStorage) y `prefers-color-scheme`
- [ ] `useActiveSection` (scroll spy)
- [ ] `Footer`
- [ ] `ScrollProgress`
- [ ] `ScrollToTopButton` refactor (tokens)
- [ ] Skip-link "Saltar al contenido"
- [ ] Focus trap en drawer

### F4 — Hero
- [ ] `Hero` con `<h1>`
- [ ] Tagline de rol (Cloud Solution Architect · AI Engineer)
- [ ] Especialidades animadas
- [ ] CTA a Contact y Projects
- [ ] `AnimatedBackground` (respeta `prefers-reduced-motion`)

### F5 — About + Stats
- [ ] `About` refactorizado con primitivas
- [ ] `Stats` nueva con `data/stats.js`

### F6 — Experience / Timeline
- [ ] `Timeline` data-driven
- [ ] `data/experience.js` (preservar texto original)

### F7 — Skills (cloud-first)
- [ ] Reorientar `data/skills.js`: Cloud Platforms, IaC/Automation, AI/ML, Networking/Security
- [ ] `SkillsGrid` con primitivas

### F8 — Architecture Gallery
- [ ] `data/architecture.js`
- [ ] 2-3 diagramas SVG iniciales
- [ ] `ArchitectureGallery`

### F9 — Projects
- [ ] `data/projects.js`
- [ ] `Projects` (problema → solución → stack → impacto)

### F10 — Certificates
- [ ] `data/certificates.js`
- [ ] Logos en `assets/logos/`
- [ ] `Certificates` grid

### F11 — Contact
- [ ] `Contact` refactorizado con `Card`/`Button`/`Badge`

### F12 — SEO + a11y
- [ ] `<h1>` único, jerarquía de headings
- [ ] JSON-LD `Person`
- [ ] OG completo + `og:image` + Twitter cards
- [ ] `sitemap.xml`, `robots.txt`
- [ ] Audit axe-core / Lighthouse a11y
- [ ] `prefers-reduced-motion` en todas las animaciones
- [ ] `alt` descriptivo en imágenes

### F13 — Optimización
- [ ] Convertir foto a `.webp` + `srcset` + `width`/`height`
- [ ] `preload` de fuente display
- [ ] Lazy-load secciones fuera de fold
- [ ] Lighthouse: LCP < 2.5s, CLS ~0, bundle report
- [ ] Actualizar `README.md`

---

## 9. Mejoras adicionales

1. **Modo "consola cloud"**: un toggle opcional que cambia el acento a estética de terminal (mono, prompt `>`) en eyebrows y tags — guiño memorable a Cloud/AI sin romper legibilidad.
2. **Indicador de sección activa** en la navbar con animación de subrayado deslizante (scroll-spy).
3. **Microinteracciones**: cursor con glow sutil en desktop (opcional, desactivable), magnetic hover en botones primarios.
4. **Página/ruta de proyecto individual** (si se añade react-router) para deep-dive de cada arquitectura — opcional, fase futura.
5. **i18n es/en** preparado: aunque el portfolio arranque en español, estructurar `data/` para permitir un toggle EN sin refactor.
6. **Descarga de CV**: botón en Hero/Contact que sirva un PDF (generado o estático en `public/`).
7. **Sección "Ahora"**: banner tipo "currently working on…" (ej. "Diseñando arquitecturas multi-región en Huawei Cloud") — dinámico desde `data/profile.js`, da frescura.
8. **Open Graph image dinámica**: generar una `og:image` SVG/PNG con nombre + rol para previews sociales profesionales.
9. **Analytics ligero y privacy-first** (ej. Plausible) opcional — medir secciones más vistas sin cookies.
10. **CI de calidad**: GitHub Actions con lint + build + Lighthouse CI en cada PR para evitar regresiones.
11. **`prefers-color-scheme`** para tema inicial sin flash (script inline en `index.html` antes del paint).
12. **Diagramas de arquitectura interactivos**: hover/click en un nodo del SVG destaca su descripción — diferenciador fuerte para un arquitecto.

---

> **Estado: PLAN PENDIENTE DE APROBACIÓN.**
> No se ha escrito código de implementación.
> Responder con **"Comenzar implementación"** para iniciar la ejecución siguiendo estrictamente este plan.
