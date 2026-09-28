import React, { useState, useEffect, useRef } from 'react';
import {
  Phone, Code, Database, Server, ExternalLink, Layers,
  CheckCircle, Globe, MessageCircle, MapPin, ArrowUpRight, Mail
} from 'lucide-react';
import './App.css';

export default function App() {
  const [zoom, setZoom] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    sectionRefs.current.forEach(el => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const addRef = el => { if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el); };

  const projets = [
    { titre: "Fanorona Godot", tech: "Godot 4 · GDScript",
      desc: "Implémentation complète du jeu traditionnel malgache Fanorona (plateau 9x5, Fanoron-Tsivy).",
      features: ["Captures par approche/retrait", "Captures en chaîne", "Mouvements Paika", "Tour et vainqueur"],
      git: "https://github.com/MIRIJA2008/fanorona-godot" },
    { titre: "Weather App Advance", tech: "Flutter · Provider · Geolocator",
      desc: "Application météo mobile avec détection automatique de la position de l'utilisateur.",
      features: ["Géolocalisation", "Provider", "Préférences locales", "Multiplateforme"],
      git: "https://github.com/MIRIJA2008/weather-app-advance" },
    { titre: "Tantsaha Market", tech: "Flutter · Riverpod · flutter_map · fl_chart",
      desc: "Application mobile Flutter pour le marché agricole malgache, carte interactive et graphiques.",
      features: ["Carte interactive", "Graphiques", "Riverpod", "Multiplateforme"],
      git: "https://github.com/MIRIJA2008/tantsaha-market" },
    { titre: "SkyFlow Weather", tech: "React Native · Expo",
      desc: "Application météo mobile avec géolocalisation, cartes météo et prévisions.",
      features: ["Expo Location", "Cartes météo", "Prévisions", "Icônes Lucide"],
      git: "https://github.com/MIRIJA2008/skyflow-weather" },
    { titre: "SafePal", tech: "React · Vite · Recharts · Framer Motion",
      desc: "Interface de tableau de bord de portefeuille avec liste d'actifs et graphiques.",
      features: ["Portefeuille", "Liste d'actifs", "Recharts", "Framer Motion"],
      git: "https://github.com/MIRIJA2008/safepal" },
    { titre: "PayMarket", tech: "React · TypeScript · Vite · Tailwind CSS",
      desc: "Application web de paiement mobile pour les commerçants informels à Madagascar.",
      features: ["Dashboard marchand", "Panneau admin", "QR codes", "PWA"],
      git: "https://github.com/MIRIJA2008/paymarket-web" }
  ];

  const services = [
    "Création de sites web modernes", "Développement d'applications mobiles",
    "Création d'API REST", "Intégration frontend/backend",
    "Gestion de bases de données", "Interfaces responsive",
    "Authentification sécurisée", "CRUD complet"
  ];

  const skills = [
    { icon: <Code size={22} />, titre: "Frontend",
      items: ["HTML5 / CSS3", "JavaScript / TypeScript", "Angular", "Flutter", "React Native"] },
    { icon: <Server size={22} />, titre: "Backend",
      items: ["Spring Boot", "ASP.NET Core MVC", "Node.js", "NestJS"] },
    { icon: <Database size={22} />, titre: "Bases de données",
      items: ["MySQL", "MongoDB", "SQL Server"] }
  ];

  /* langages en pilules animées (comme les boutons) */
  const stack = [
    "HTML / CSS", "JavaScript", "TypeScript", "Angular", "Flutter",
    "React Native", "Spring Boot", "ASP.NET", "Node.js", "NestJS",
    "MySQL", "MongoDB", "SQL Server", "Firebase"
  ];

  return (
    <>
      {/* ═══ ESPACE : ÉTOILES + FUSÉES ═══ */}
      <div className="space-bg">
        <div className="stars stars-1"></div>
        <div className="stars stars-2"></div>
        <div className="shoot s1"></div>
        <div className="shoot s2"></div>
        <span className="rocket r1">🚀</span>
        <span className="rocket r2">🚀</span>
        <span className="rocket r3">🚀</span>
        <span className="rocket r4">🚀</span>
      </div>

      {/* ═══ AVATAR EN GRAND (au clic) ═══ */}
      {zoom && (
        <div className="avatar-overlay" onClick={() => setZoom(false)}>
          <img src="/img.png" alt="Mirija GL" />
          <p>Cliquez pour fermer</p>
        </div>
      )}

      {/* ═══ NAV + ROND CLIQUABLE ═══ */}
      <nav className="nav">
        <div className="logo">Mirija<span>.GL</span></div>
        <div className="nav-links">
          <a href="#apropos">À propos</a>
          <a href="#competences">Compétences</a>
          <a href="#projets">Projets</a>
          <a href="#contact">Contact</a>
          <img className="avatar-top" src="/img.png" alt="Mirija GL" title="Cliquer pour agrandir" onClick={() => setZoom(true)} />
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <header className="hero">
        <div className="hero-content">
          <div className="badge-disponible">
            <span className="pulse-dot"></span>
            Disponible pour projets freelance · Madagascar
          </div>
          <h1 className="hero-name">
            MIRIJA
            <span className="gradient-name">GL</span>
          </h1>
          <p className="hero-role">Développeur Full Stack — Web &amp; Mobile</p>
          <p className="hero-desc">
            Je conçois des applications web et mobiles modernes, performantes et
            intuitives. Du pixel au déploiement, je transforme des idées en
            solutions numériques utiles.
          </p>
          <div className="hero-cta">
            <a href="#projets" className="btn-primary">View Work <ArrowUpRight size={16} /></a>
            <a href="https://canva.link/ikzvvoxfg6f70c70" target="_blank" rel="noreferrer" className="btn-secondary">Mon CV ↗</a>
          </div>
          <div className="trusted">
            <div className="faces">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" alt="" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" alt="" />
              <span className="plus">+12</span>
            </div>
            <p>Trusted by forward-thinking brands<br />worldwide</p>
          </div>
        </div>

        {/* cadre photo à droite (l'ancienne photo de fond) */}
        <div className="hero-photo">
          <img src="/mrj.jpeg" alt="Mirija GL" />
        </div>
      </header>

      {/* ═══ MARQUEE ═══ */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Flutter</span><span className="outline">React Native</span><span>Node.js</span>
          <span className="outline">Spring Boot</span><span>Angular</span><span className="outline">NestJS</span>
          <span>MySQL</span><span className="outline">MongoDB</span>
          <span>Flutter</span><span className="outline">React Native</span><span>Node.js</span>
          <span className="outline">Spring Boot</span><span>Angular</span><span className="outline">NestJS</span>
          <span>MySQL</span><span className="outline">MongoDB</span>
        </div>
      </div>

      {/* ═══ À PROPOS + SERVICES ═══ */}
      <section id="apropos" className="section reveal" ref={addRef}>
        <div className="section-head">
          <h2>À propos <em>&amp; services</em></h2>
          <p className="comment">// qui suis-je</p>
        </div>
        <div className="two-col">
          <div className="card">
            <h3><Layers size={19} /> Mon histoire</h3>
            <p>
              Étudiant en informatique et développeur full stack junior basé à
              Madagascar. Compétences solides en frontend, backend et gestion de
              bases de données. Motivé par la résolution de problèmes concrets —
              du marché agricole malgache aux jeux traditionnels comme le Fanorona.
            </p>
            <p className="location"><MapPin size={15} /> Antananarivo, Madagascar</p>
          </div>
          <div className="card">
            <h3><CheckCircle size={19} /> Services offerts</h3>
            <div className="tags">
              {services.map((s, i) => <span key={i} className="tag">{s}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ COMPÉTENCES + PILULES ANIMÉES ═══ */}
      <section id="competences" className="section reveal" ref={addRef}>
        <div className="section-head">
          <h2>Compétences <em>techniques</em></h2>
          <p className="comment">// mes langages</p>
        </div>

        <div className="stack-pills">
          {stack.map((t, i) => (
            <span key={i} className="stack-pill" style={{ animationDelay: (i * 0.12) + 's' }}>{t}</span>
          ))}
        </div>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <div key={i} className="card skill-card">
              <div className="skill-icon">{s.icon}</div>
              <h4>{s.titre}</h4>
              <ul>
                {s.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ PROJETS ═══ */}
      <section id="projets" className="section reveal" ref={addRef}>
        <div className="section-head">
          <h2>Projets <em>réalisés</em> <span className="count">({projets.length})</span></h2>
          <p className="comment">// selected works</p>
        </div>
        <div className="projects-grid">
          {projets.map((p, i) => (
            <article key={i} className="project-card">
              <span className="project-tech">{p.tech}</span>
              <h4>{p.titre}</h4>
              <p>{p.desc}</p>
              <div className="features">
                {p.features.map((f, fi) => <span key={fi} className="feature">{f}</span>)}
              </div>
              <a href={p.git} target="_blank" rel="noreferrer" className="github-link">
                <Globe size={14} /> Voir sur GitHub <ExternalLink size={12} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ═══ CONTACT ═══ */}
      <section id="contact" className="section contact-section reveal" ref={addRef}>
        <h2 className="contact-big">Travaillons<br /><em>ensemble</em></h2>
        <a href="mailto:mirija2008mrj@gmail.com" className="contact-mail">
          <Mail size={20} /> mirija2008mrj@gmail.com
        </a>
        <div className="contact-actions">
          <a href="mailto:mirija2008mrj@gmail.com" className="btn-primary">Book a Call ↗</a>
          <a href="tel:0340367737" className="contact-link"><Phone size={17} /> 034 03 677 37</a>
          <a href="https://wa.me/261331717177" target="_blank" rel="noreferrer" className="contact-link wa">
            <MessageCircle size={17} /> WhatsApp
          </a>
          <a href="https://github.com/MIRIJA2008" target="_blank" rel="noreferrer" className="contact-link">
            <Globe size={17} /> GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <p className="quote">"Transformer des idées en solutions numériques innovantes."</p>
        <p className="copy">© 2026 Mirija GL — Développé avec React + Vite</p>
      </footer>
    </>
  );
}