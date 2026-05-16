"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Code2,
  Filter,
  Mail,
  MessageCircle,
  MonitorSmartphone,
  Rocket,
  Search,
  Sparkles,
  WandSparkles,
  Zap,
} from "lucide-react";

type ProjectCategory = "Todos" | "Apps" | "Webs" | "Ecommerce" | "Automatización";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, "Todos">;
  image: string;
  alt: string;
  description: string;
  challenge: string;
  result: string;
  tags: string[];
  accent: string;
  demoUrl?: string;
};

type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

const projects: Project[] = [
  {
    id: "north-security",
    title: "North Security",
    subtitle: "Landing comercial para seguridad",
    category: "Webs",
    image: "/images/proyecto-north-security.png",
    alt: "Landing page de North Security para servicios de seguridad",
    description:
      "Landing page para una empresa de seguridad, enfocada en transmitir confianza, explicar servicios, mostrar planes y facilitar el contacto.",
    challenge:
      "Crear una presencia digital seria para un servicio donde la confianza visual es clave desde el primer vistazo.",
    result:
      "Hero potente, servicios claros, planes comerciales, formulario de contacto y estructura responsive lista para mostrar a clientes.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive", "Formulario"],
    accent: "from-sky-400 to-blue-500",
    demoUrl: "https://north-security-demo.vercel.app",
  },
  {
    id: "clinica-dental",
    title: "Clínica Dental Sagrada Familia",
    subtitle: "Landing profesional de salud",
    category: "Webs",
    image: "/images/proyecto-clinica-dental.png",
    alt: "Landing page de Clínica Dental Sagrada Familia",
    description:
      "Página web para una clínica dental, diseñada para generar confianza, presentar servicios y facilitar la solicitud de atención.",
    challenge:
      "Diseñar una web de salud que se vea profesional, cercana y clara, sin sentirse genérica o saturada.",
    result:
      "Sitio responsive con estética limpia, secciones de servicios, llamados a la acción y contacto visible para pacientes.",
    tags: ["HTML", "CSS", "JavaScript", "Salud", "Responsive"],
    accent: "from-cyan-300 to-blue-500",
    demoUrl: "https://clinicadental-s-f-demo.vercel.app",
  },
  {
    id: "ferreteria",
    title: "Ferretería Coyhaique",
    subtitle: "Web comercial para ferretería",
    category: "Webs",
    image: "/images/proyecto-ferreteria.png",
    alt: "Página web comercial de Ferretería Coyhaique",
    description:
      "Sitio web para ferretería, pensado para mostrar categorías, productos destacados, confianza local y contacto rápido.",
    challenge:
      "Convertir un negocio tradicional en una presencia digital más clara, ordenada y fácil de contactar desde celular.",
    result:
      "Página visualmente comercial, responsive, con estructura de productos, beneficios y contacto directo.",
    tags: ["HTML", "CSS", "JavaScript", "Comercio", "Responsive"],
    accent: "from-amber-300 to-orange-500",
    demoUrl: "https://ferreteria-6h2v.vercel.app",
  },
  {
    id: "centro-negocios",
    title: "Centro de Negocios Uribe",
    subtitle: "Landing corporativa local",
    category: "Webs",
    image: "/images/proyecto-centro-negocios.png",
    alt: "Landing page de Centro de Negocios Uribe",
    description:
      "Landing page corporativa para un centro de negocios en Antofagasta, enfocada en ubicación, confianza y contacto.",
    challenge:
      "Crear una página sobria y profesional para un negocio local que necesitaba proyectar mayor presencia digital.",
    result:
      "Diseño moderno con foco en ubicación, rating, contacto por WhatsApp y una presentación clara para clientes potenciales.",
    tags: ["HTML", "CSS", "JavaScript", "Negocio local", "Responsive"],
    accent: "from-yellow-200 to-amber-500",
    demoUrl: "https://centrodenegocios-demo.vercel.app",
  },
];

const categories: ProjectCategory[] = ["Todos", "Webs"];

const skillGroups: SkillGroup[] = [
  {
    title: "Base principal",
    description: "Tecnologías que uso con más seguridad para construir páginas web.",
    items: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "En proyectos",
    description: "Herramientas modernas que estoy aplicando en productos y prácticas reales.",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    title: "Herramientas",
    description: "Flujo de trabajo, publicación y organización.",
    items: ["VS Code", "GitHub", "Vercel", "Figma básico"],
  },
  {
    title: "Otros entornos",
    description: "Ecommerce, automatización y soluciones de productividad.",
    items: ["Shopify", "Liquid básico", "Google Apps Script", "Google Sheets", "Gmail"],
  },
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Página web One Page",
    text: "Sitio moderno de una sola vista para mostrar servicios, beneficios, ubicación, contacto y confianza.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp + formulario",
    text: "Estructura pensada para que tus clientes entiendan tu oferta y puedan contactarte rápido.",
  },
  {
    icon: WandSparkles,
    title: "Diseño responsive",
    text: "Experiencia adaptada a celular, tablet y escritorio, cuidando lectura, orden visual y claridad.",
  },
];

const process = [
  {
    step: "01",
    title: "Entiendo tu negocio",
    text: "Reviso qué ofreces, a quién vendes y qué acción debe realizar el cliente.",
  },
  {
    step: "02",
    title: "Ordeno el contenido",
    text: "Defino secciones, mensajes, beneficios, llamados a la acción y flujo visual.",
  },
  {
    step: "03",
    title: "Diseño y desarrollo",
    text: "Construyo una página moderna, responsive y enfocada en claridad.",
  },
  {
    step: "04",
    title: "Ajusto y preparo entrega",
    text: "Pulimos textos, versión móvil, contacto, detalles visuales y publicación.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("Todos");
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 25 });

  const filteredProjects = useMemo(() => {
    if (activeCategory === "Todos") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const activeProject = useMemo(() => {
    return projects.find((project) => project.id === activeProjectId) ?? projects[0];
  }, [activeProjectId]);

  return (
    <main
      className="min-h-screen overflow-hidden bg-[#050608] text-white"
      onMouseMove={(event) => {
        mouseX.set(event.clientX);
        mouseY.set(event.clientY);
      }}
    >
      <Background />

      <motion.div
        className="pointer-events-none fixed z-10 hidden size-[520px] rounded-full bg-emerald-400/10 blur-3xl lg:block"
        style={{
          left: smoothX,
          top: smoothY,
          x: "-50%",
          y: "-50%",
        }}
      />

      <Header />

      <section className="relative z-20 mx-auto grid min-h-[calc(100vh-80px)] w-[min(1220px,calc(100%_-_32px))] items-center gap-10 pt-24 pb-8 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.7 }}>
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100 shadow-[0_0_60px_rgba(34,255,115,.08)]">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_22px_rgba(34,255,115,.8)]" />
            Disponible para páginas web.
          </div>

          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-emerald-400">
            Desarrollo web · Landing pages · Diseño responsive
          </p>

          <h1 className="max-w-4xl text-[clamp(2.75rem,5.4vw,5.25rem)] font-black leading-[0.9] tracking-[-0.075em]">
            Tu proyecto merece una{" "}
            <span className="bg-gradient-to-r from-white via-emerald-200 to-emerald-400 bg-clip-text text-transparent">
              web que se vea a la altura.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/64 sm:text-lg">
            Soy Yeico Zúñiga. Diseño páginas web modernas y responsive para marcas, servicios, emprendimientos y proyectos que necesitan una presencia digital clara, profesional y fácil de contactar.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <MagneticLink href="#proyectos" variant="primary">
              Ver proyectos
              <ArrowUpRight className="size-4" />
            </MagneticLink>

            <MagneticLink href="#contacto" variant="secondary">
              Hablemos
            </MagneticLink>
          </div>

          <div className="mt-7 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              ["Webs", "para negocios"],
              ["Mobile", "diseño responsive"],
              ["Contacto", "WhatsApp + formulario"],
            ].map(([value, label]) => (
              <motion.div
                key={label}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-white/10 bg-white/[0.055] p-4 shadow-2xl backdrop-blur-xl"
              >
                <strong className="block text-xl font-black">{value}</strong>
                <span className="mt-1 block text-sm text-white/50">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative"
        >
          <HeroVisual />
        </motion.div>
      </section>

      <Section id="proyectos">
        <SectionTitle
          kicker="Proyectos"
          title="Proyectos publicados que puedes abrir y revisar."
          text="Una selección de páginas web reales y demos publicadas online. Cada proyecto muestra cómo transformo una idea en una página clara, responsive y lista para presentar."
        />

        <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 px-2 text-sm font-black text-white/70">
            <Filter className="size-4 text-emerald-400" />
            Filtrar proyectos
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-black transition ${
                  activeCategory === category
                    ? "bg-emerald-400 text-black"
                    : "border border-white/10 bg-black/25 text-white/60 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.86fr_1.14fr]">
          <motion.aside
            layout
            className="rounded-[2.5rem] border border-white/10 bg-white/[0.055] p-4 shadow-[0_30px_90px_rgba(0,0,0,.48)] backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center gap-3 rounded-3xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-black text-white/60">
              <Search className="size-4 text-emerald-400" />
              Selecciona un proyecto
            </div>

            <div className="grid gap-3">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.button
                    layout
                    type="button"
                    key={project.id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    onClick={() => setActiveProjectId(project.id)}
                    className={`group rounded-3xl border p-3 text-left transition ${
                      activeProject.id === project.id
                        ? "border-emerald-400/35 bg-emerald-400/10"
                        : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.05]"
                    }`}
                  >
                    <div className="flex gap-4">
                      <div className="relative h-20 w-28 flex-none overflow-hidden rounded-2xl bg-black">
                        <Image
                          src={project.image}
                          alt={project.alt}
                          width={300}
                          height={200}
                          className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-300/90">
                          {project.category}
                        </p>
                        <h3 className="mt-1 truncate text-base font-black text-white">
                          {project.title}
                        </h3>
                        <p className="mt-1 text-sm leading-5 text-white/45">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </AnimatePresence>
            </div>
          </motion.aside>

          <ProjectShowcase project={activeProject} />
        </div>
      </Section>

      <Section id="servicios">
        <SectionTitle
          kicker="Servicios"
          title="Páginas web para negocios que necesitan verse profesionales desde el primer clic."
          text="Creo sitios claros, modernos y adaptados a celular para negocios que quieren presentar mejor sus servicios y recibir más consultas por WhatsApp o formulario."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="group rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl transition hover:border-emerald-400/30"
              >
                <div className="mb-7 flex items-center justify-between">
                  <div className="grid size-14 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                    <Icon className="size-6" />
                  </div>
                  <span className="text-sm font-black text-white/25">0{index + 1}</span>
                </div>

                <h3 className="text-2xl font-black tracking-[-0.04em]">{service.title}</h3>
                <p className="mt-4 leading-7 text-white/55">{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </Section>

      <Section id="proceso">
        <SectionTitle
          kicker="Proceso"
          title="Un proceso simple para convertir tu idea en una página lista para publicar."
        />

        <div className="grid gap-4">
          {process.map((item, index) => (
            <motion.article
              key={item.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="grid gap-5 rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl md:grid-cols-[120px_1fr]"
            >
              <span className="text-5xl font-black tracking-[-0.08em] text-emerald-400">
                {item.step}
              </span>
              <div>
                <h3 className="text-2xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-2 max-w-3xl leading-7 text-white/55">{item.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="stack">
        <SectionTitle
          kicker="Stack"
          title="Tecnologías organizadas por uso real."
          text="Trabajo con una base sólida en HTML, CSS y JavaScript, y estoy aplicando herramientas modernas como React, Next.js, TypeScript, Tailwind CSS y Supabase en proyectos reales."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.article
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="rounded-[2.2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl"
            >
              <h3 className="text-2xl font-black tracking-[-0.04em]">{group.title}</h3>
              <p className="mt-3 leading-7 text-white/55">{group.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-black text-white/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section id="sobre-mi">
        <SectionTitle
          kicker="Sobre mí"
          title="Estoy construyendo mi camino como desarrollador web con proyectos reales y mentalidad de producto."
          text="Me interesa crear interfaces que se vean bien, funcionen rápido y ayuden a que un negocio comunique mejor su oferta. Actualmente trabajo en páginas web, ecommerce, automatizaciones y una app propia en desarrollo."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          <InfoCard
            icon={<Sparkles className="size-6" />}
            title="Diseño con intención"
            text="Cada sección debe cumplir una función: informar, generar confianza o llevar al contacto."
          />
          <InfoCard
            icon={<Code2 className="size-6" />}
            title="Código y aprendizaje constante"
            text="Trabajo con tecnologías web base y sigo aplicando herramientas modernas en proyectos reales."
          />
          <InfoCard
            icon={<Rocket className="size-6" />}
            title="Enfoque comercial"
            text="No solo busco que una página se vea bien; busco que ayude a presentar mejor un negocio."
          />
        </div>
      </Section>

      <section id="contacto" className="relative z-20 mx-auto w-[min(1220px,calc(100%_-_32px))] py-28">
        <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(34,255,115,.17),transparent_32%),radial-gradient(circle_at_90%_20%,rgba(139,92,246,.16),transparent_28%),linear-gradient(135deg,rgba(255,255,255,.09),rgba(255,255,255,.035))] p-8 shadow-[0_30px_100px_rgba(0,0,0,.55)] backdrop-blur-xl lg:flex lg:items-end lg:justify-between lg:p-12">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-emerald-400">
              Contacto
            </p>
            <h2 className="max-w-3xl text-[clamp(2.3rem,4.6vw,4.4rem)] font-black leading-[0.94] tracking-[-0.07em]">
              ¿Tienes un negocio o una oportunidad donde pueda aportar?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/58">
              Puedo ayudarte a crear una página moderna, clara y adaptada a celular. También
              estoy abierto a práctica profesional, roles trainee y proyectos donde pueda seguir
              desarrollándome.
            </p>
          </div>

          <div className="mt-9 flex flex-col gap-4 lg:mt-0">
            <a
              href="https://wa.me/56933326249"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 font-black text-black transition hover:-translate-y-1"
            >
              <MessageCircle className="size-5" />
              WhatsApp
            </a>

            <a
              href="mailto:yeicomarcelo2@gmail.com"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 font-black transition hover:-translate-y-1"
            >
              <Mail className="size-5" />
              Email
            </a>
          </div>
        </div>
      </section>

      <footer className="relative z-20 mx-auto flex w-[min(1220px,calc(100%_-_32px))] flex-col gap-3 border-t border-white/10 py-8 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Yeico Zúñiga. Portfolio desarrollado con Next.js.</p>
        <p>Diseño · Web · Producto · Vercel</p>
      </footer>
    </main>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 w-[min(1220px,calc(100%_-_32px))] items-center justify-between">
        <a href="#" className="flex items-center gap-3 font-black tracking-tight">
          <span className="grid size-11 place-items-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-emerald-400">
            YZ
          </span>
          <span className="hidden sm:inline">Yeico Zúñiga</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-semibold text-white/60 md:flex">
          <a className="transition hover:text-white" href="#proyectos">
            Proyectos
          </a>
          <a className="transition hover:text-white" href="#servicios">
            Servicios
          </a>
          <a className="transition hover:text-white" href="#proceso">
            Proceso
          </a>
          <a className="transition hover:text-white" href="#stack">
            Stack
          </a>
          <a className="transition hover:text-white" href="#sobre-mi">
            Sobre mí
          </a>
          <a
            className="rounded-full bg-emerald-400 px-5 py-3 font-black text-black transition hover:scale-[1.03]"
            href="#contacto"
          >
            Contactar
          </a>
        </div>

        <a
          href="#contacto"
          className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-black md:hidden"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[3rem] border border-white/10 bg-[radial-gradient(circle_at_70%_18%,rgba(34,255,115,.18),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(139,92,246,.16),transparent_32%),linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.025))] shadow-[0_40px_120px_rgba(0,0,0,.6)] lg:min-h-[560px] xl:min-h-[600px]">
      <div className="absolute inset-5 rounded-[2.4rem] border border-white/10" />

      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-2, -1, -2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-5 top-8 w-[74%] overflow-hidden rounded-3xl border border-emerald-400/20 bg-black/65 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
          <span className="size-3 rounded-full bg-red-400" />
          <span className="size-3 rounded-full bg-yellow-400" />
          <span className="size-3 rounded-full bg-emerald-400" />
          <span className="ml-3 text-xs font-black text-white/35">landing-page.tsx</span>
        </div>

        <pre className="p-5 text-xs leading-6 text-emerald-100/85 sm:text-sm">
{`const servicio = {
  tipo: "Landing Page",
  objetivo: "generar consultas",
  enfoque: "mobile-first",
  contacto: "WhatsApp"
};`}
        </pre>
      </motion.div>

      <Image
        src="/images/yeico-cutout.png"
        alt="Yeico Zúñiga, desarrollador web en formación"
        width={780}
        height={920}
        priority
        className="absolute bottom-[42px] left-[-78px] z-10 w-[98%] max-w-[585px] drop-shadow-[0_36px_60px_rgba(0,0,0,.62)] sm:left-[-48px] sm:w-[88%] lg:bottom-[54px] lg:left-[-34px] lg:w-[84%] xl:bottom-[64px]"
      />

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-5 top-5 z-20 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 text-xs font-black backdrop-blur-xl sm:left-7 sm:top-7 sm:text-sm"
      >
        Frontend Developer Trainee
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 right-7 z-20 rounded-2xl border border-white/10 bg-black/55 px-4 py-3 text-xs font-black backdrop-blur-xl sm:text-sm"
      >
        HTML · CSS · JS · React
      </motion.div>

      <div className="absolute bottom-7 left-7 z-20 hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-black text-emerald-100 backdrop-blur-xl sm:block">
        Disponible para proyectos
      </div>
    </div>
  );
}

function ProjectShowcase({ project }: { project: Project }) {
  return (
    <motion.article
      key={project.id}
      initial={{ opacity: 0, y: 24, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-[2.8rem] border border-white/10 bg-white/[0.055] shadow-[0_30px_90px_rgba(0,0,0,.5)] backdrop-blur-xl"
    >
      <div className="relative min-h-[360px] overflow-hidden bg-black/30 p-4">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-10`} />

        <Image
          src={project.image}
          alt={project.alt}
          width={1400}
          height={900}
          className="relative h-full min-h-[360px] w-full rounded-[2rem] object-cover object-top shadow-2xl"
        />
      </div>

      <div className="p-7 lg:p-9">
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-black text-emerald-100">
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 bg-black/25 px-3 py-1 text-xs font-black text-white/55">
            {project.subtitle}
          </span>
        </div>

        <h3 className="text-[clamp(2rem,4vw,3.8rem)] font-black leading-[0.95] tracking-[-0.07em]">
          {project.title}
        </h3>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">{project.description}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <MiniInsight title="Desafío" text={project.challenge} icon={<Zap className="size-5" />} />
          <MiniInsight title="Resultado" text={project.result} icon={<BadgeCheck className="size-5" />} />
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-black text-white/75"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.demoUrl ? (
          <div className="mt-8">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 font-black text-black shadow-[0_18px_50px_rgba(34,255,115,.25)] transition hover:-translate-y-1"
            >
              Ver página
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}

function MiniInsight({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
      <div className="mb-3 flex items-center gap-3 text-emerald-300">
        {icon}
        <h4 className="font-black text-white">{title}</h4>
      </div>
      <p className="leading-7 text-white/52">{text}</p>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
      className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl transition hover:border-emerald-400/30"
    >
      <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-emerald-400/10 text-emerald-400">
        {icon}
      </div>
      <h3 className="text-2xl font-black tracking-[-0.04em]">{title}</h3>
      <p className="mt-3 leading-7 text-white/55">{text}</p>
    </motion.article>
  );
}

function Section({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative z-20 mx-auto w-[min(1220px,calc(100%_-_32px))] py-24">
      {children}
    </section>
  );
}

function SectionTitle({
  kicker,
  title,
  text,
}: {
  kicker: string;
  title: string;
  text?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.65 }}
      className="mb-12 max-w-5xl"
    >
      <p className="mb-4 text-xs font-black uppercase tracking-[0.24em] text-emerald-400">
        {kicker}
      </p>
      <h2 className="text-[clamp(2.3rem,5vw,4.5rem)] font-black leading-[0.94] tracking-[-0.075em]">
        {title}
      </h2>
      {text ? <p className="mt-6 max-w-3xl text-lg leading-8 text-white/58">{text}</p> : null}
    </motion.div>
  );
}

function MagneticLink({
  href,
  variant,
  children,
}: {
  href: string;
  variant: "primary" | "secondary";
  children: ReactNode;
}) {
  const className =
    variant === "primary"
      ? "group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-400 px-6 font-black text-black shadow-[0_18px_50px_rgba(34,255,115,.25)] transition hover:-translate-y-1"
      : "inline-flex h-14 items-center justify-center rounded-2xl border border-white/15 bg-white/[0.04] px-6 font-black text-white transition hover:-translate-y-1 hover:border-white/30";

  return (
    <motion.a href={href} whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.025 }} className={className}>
      {children}
    </motion.a>
  );
}

function Background() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(34,255,115,0.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(126,87,255,0.16),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(0,200,255,0.08),transparent_32%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none fixed left-[-180px] top-[240px] size-[460px] rounded-full bg-emerald-400/20 blur-[120px]" />
      <div className="pointer-events-none fixed bottom-[120px] right-[-160px] size-[460px] rounded-full bg-violet-500/20 blur-[120px]" />
    </>
  );
}