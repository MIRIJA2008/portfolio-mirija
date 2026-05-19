import React, { useState, useEffect } from 'react';
import { 
  Sun, Moon, Mail, Phone, MapPin, Code, Smartphone, Database, 
  Server, FileText, ExternalLink, Briefcase, GraduationCap, 
  Layers, CheckCircle, Target, Award, Heart, Globe 
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const projets = [
    {
      titre: "Plateforme Participative Citoyenne",
      tech: "ASP.NET Core MVC, EF Core, SQL Server, Bootstrap",
      desc: "Développement d’une plateforme web permettant aux citoyens de proposer et suivre des initiatives locales.",
      features: ["Authentification sécurisée", "Gestion des rôles", "CRUD complet", "Tableau de bord", "Statistiques", "Interface responsive"]
    },
    {
      titre: "Application d’Alerte de Danger Personnel",
      tech: "Flutter, Firebase",
      desc: "Application mobile permettant d’envoyer rapidement une alerte en situation de danger.",
      features: ["Géolocalisation", "Envoi d’alertes", "Interface mobile moderne", "Notifications"]
    },
    {
      titre: "Application Météo Mobile",
      tech: "React Native, API météo",
      desc: "Création d’un application météo avec géolocalisation automatique.",
      features: ["Affichage météo en temps réel", "Icônes météo dynamiques", "Géolocalisation automatique", "Fond dynamique"]
    },
    {
      titre: "Portail de Carrière en Ligne",
      tech: "ASP.NET Core MVC, SQL Server",
      desc: "Développement d’un portail de recrutement destiné au secteur public.",
      features: ["Gestion des offres", "Gestion des candidatures", "Interface admin", "Gestion des utilisateurs"]
    },
    {
      titre: "Projet Hackathon",
      tech: "Angular, Node.js, NestJS, MongoDB",
      desc: "Participation à un hackathon avec développement d’une solution web collaborative.",
      features: ["API REST", "Interface dynamique", "Gestion des données", "Travail en équipe"]
    }
  ];

  const services = [
    "Création de sites web modernes", "Développement d’applications mobiles", 
    "Création d’API REST", "Intégration frontend/backend", 
    "Gestion de bases de données", "Interfaces responsive", 
    "Authentification sécurisée", "CRUD complet"
  ];

  return (
    <>
      <div className="background-animation">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="container">
        
        {/* Header */}
        <header style={styles.header}>
          <div style={styles.logo}>MIRIJA<span style={{color: 'var(--violet-primaire)'}}>.GL</span></div>
          <button onClick={toggleTheme} style={styles.themeBtn}>
            {theme === 'light' ? <Moon size={20} color="var(--violet-primaire)" /> : <Sun size={20} color="var(--violet-secondaire)" />}
          </button>
        </header>

        {/* Hero Section */}
        <section style={styles.hero}>
          <div style={styles.heroText}>
            <span style={styles.badge}>Développeur Full Stack Junior | Mobile & Web</span>
            <h1 style={styles.nom}>Mirija GL</h1>
            <p style={styles.description}>
              Je suis un développeur passionné par les technologies web et mobiles. 
              Je conçois des applications modernes, performantes et intuitives. 
              Motivé par la résolution de problèmes, l’apprentissage continu et la création de solutions numériques utiles.
            </p>
            <div style={styles.btnGroup}>
              <a href="#projets" style={styles.btnPrimary}>Voir mes projets</a>
              <a href="#" style={styles.btnSecondary}><FileText size={18}/> Télécharger mon CV</a>
              <a href="#contact" style={styles.btnOutline}>Me contacter</a>
            </div>
          </div>
          
          {/* Section Photo de Profil */}
          <div style={styles.avatarContainer}>
            <div style={styles.avatarBorder}>
              <div style={styles.avatarPlaceholder}>
                <img 
                  src="mirija.JPG" 
                  alt="Mirija GL" 
                  style={styles.avatarImg}
                  onError={(e) => {
                    // Si l'image ne charge pas, on affiche une icône par défaut
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = '<div style="color:var(--violet-primaire)">📷</div>';
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* À Propos & Services */}
        <section style={styles.sectionGap}>
          <div style={styles.twoColumnGrid}>
            <div style={styles.carte}>
              <h3 style={styles.carteTitre}><Heart size={20} color="var(--violet-primaire)" style={{marginRight:8}}/> À propos de moi</h3>
              <p style={styles.carteTexte}>
                Je suis étudiant en informatique et développeur full stack junior basé à Madagascar. 
                Je possède des compétences solides en développement frontend, backend et en gestion de bases de données.
              </p>
            </div>
            <div style={styles.carte}>
              <h3 style={styles.carteTitre}><Layers size={20} color="var(--violet-primaire)" style={{marginRight:8}}/> Services offerts</h3>
              <div style={styles.servicesGrid}>
                {services.map((s, i) => (
                  <span key={i} style={styles.serviceTag}><CheckCircle size={14} color="var(--violet-primaire)" /> {s}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compétences Techniques */}
        <section style={styles.sectionGap}>
          <h2 style={styles.sectionTitre}>Compétences Techniques</h2>
          <div style={styles.gridCompetences}>
            <div style={styles.carte}>
              <div style={styles.iconContainer}><Code color="var(--violet-primaire)"/></div>
              <h4 style={styles.carteTitre}>Frontend</h4>
              <ul style={styles.skillsList}>
                <li><span style={styles.techIcon}>🌐</span> HTML5 / CSS3</li>
                <li><span style={styles.techIcon}>📜</span> JavaScript / TypeScript</li>
                <li><span style={styles.techIcon}>🅰️</span> Angular</li>
                <li><span style={styles.techIcon}>🐦</span> Flutter</li>
                <li><span style={styles.techIcon}>⚛️</span> React Native</li>
              </ul>
            </div>

            <div style={styles.carte}>
              <div style={styles.iconContainer}><Server color="var(--violet-primaire)"/></div>
              <h4 style={styles.carteTitre}>Backend</h4>
              <ul style={styles.skillsList}>
                <li><span style={styles.techIcon}>🍃</span> Spring Boot</li>
                <li><span style={styles.techIcon}>⚙️</span> ASP.NET Core MVC</li>
                <li><span style={styles.techIcon}>🟢</span> Node.js</li>
                <li><span style={styles.techIcon}>🐱</span> NestJS</li>
              </ul>
            </div>

            <div style={styles.carte}>
              <div style={styles.iconContainer}><Database color="var(--violet-primaire)"/></div>
              <h4 style={styles.carteTitre}>Bases de données</h4>
              <ul style={styles.skillsList}>
                <li><span style={styles.techIcon}>🐬</span> MySQL</li>
                <li><span style={styles.techIcon}>🍃</span> MongoDB</li>
                <li><span style={styles.techIcon}>🛢️</span> SQL Server</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projets */}
        <section id="projets" style={styles.sectionGap}>
          <h2 style={styles.sectionTitre}>Mes Projets Réalisés</h2>
          <div style={styles.gridProjets}>
            {projets.map((p, index) => (
              <div key={index} style={styles.projetCarte}>
                <span style={styles.projetTech}>{p.tech}</span>
                <h4 style={styles.projetTitre}>{p.titre}</h4>
                <p style={styles.projetDesc}>{p.desc}</p>
                <div style={styles.featuresContainer}>
                  {p.features.map((f, fi) => (
                    <span key={fi} style={styles.featureBadge}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={styles.sectionGap}>
          <div style={{...styles.carte, textAlign: 'center', padding: '40px 20px'}}>
            <h3 style={{fontSize: 24, fontWeight: 700, marginBottom: 10}}>Restons en contact !</h3>
            <div style={{display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginTop: 20}}>
              <a href="mailto:mirija2008mrj@gmail.com" style={styles.contactLink}><Mail size={18}/> mirija2008mrj@gmail.com</a>
              <a href="tel:0340367737" style={styles.contactLink}><Phone size={18}/> 034 03 677 37</a>
              <a href="https://github.com/MIRIJA2008" target="_blank" rel="noreferrer" style={styles.contactLink}><Globe size={18}/> GitHub: MIRIJA2008</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={{fontWeight: 500, fontSize: 16, color: 'var(--texte-principal)'}}>“Transformer des idées en solutions numériques innovantes.”</p>
          <p style={{marginTop: 10, color: 'var(--texte-secondaire)', fontSize: 14}}>© 2026 Mirija GL — Tous droits réservés.</p>
        </footer>

      </div>
    </>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0', marginBottom: '40px' },
  logo: { fontSize: '22px', fontWeight: 'bold', letterSpacing: '1px' },
  themeBtn: { background: 'var(--bg-carte)', border: '1px solid var(--bordure)', padding: '10px', borderRadius: '50%', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  hero: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap-reverse', margin: '40px 0' },
  heroText: { flex: '1 1 500px' },
  badge: { background: 'var(--violet-transparent)', color: 'var(--violet-primaire)', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: '600', display: 'inline-block', marginBottom: '15px' },
  nom: { fontSize: '56px', fontWeight: '800', letterSpacing: '-1px', background: 'linear-gradient(45deg, var(--violet-primaire), var(--violet-secondaire))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '15px' },
  description: { color: 'var(--texte-secondaire)', fontSize: '17px', lineHeight: '1.6', maxWidth: '600px', marginBottom: '30px' },
  btnGroup: { display: 'flex', gap: '15px', flexWrap: 'wrap' },
  btnPrimary: { background: 'var(--violet-primaire)', color: '#fff', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' },
  btnSecondary: { background: 'var(--bg-carte)', color: 'var(--texte-principal)', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '15px', border: '1px solid var(--bordure)', display: 'inline-flex', alignItems: 'center', gap: '8px' },
  btnOutline: { border: '1px solid var(--violet-primaire)', color: 'var(--violet-primaire)', padding: '12px 24px', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' },
  avatarContainer: { flex: '1 1 250px', display: 'flex', justifyContent: 'center' },
  avatarBorder: { padding: '10px', borderRadius: '30px', background: 'linear-gradient(135deg, var(--violet-primaire), transparent)' },
  avatarPlaceholder: { width: '220px', height: '220px', borderRadius: '22px', backgroundColor: 'var(--bg-carte)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bordure)', overflow: 'hidden' },
  avatarImg: { width: '100%', height: '100%', objectFit: 'cover' },
  sectionGap: { marginTop: '70px' },
  sectionTitre: { fontSize: '26px', fontWeight: '700', marginBottom: '30px' },
  twoColumnGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '25px' },
  carte: { background: 'var(--bg-carte)', border: '1px solid var(--bordure)', padding: '30px', borderRadius: '18px' },
  carteTitre: { fontSize: '19px', fontWeight: '600', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' },
  carteTexte: { color: 'var(--texte-secondaire)', fontSize: '15px', lineHeight: '1.6' },
  servicesGrid: { display: 'flex', flexWrap: 'wrap', gap: '10px' },
  serviceTag: { display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'var(--bg-body)', padding: '8px 14px', borderRadius: '8px', fontSize: '14px', color: 'var(--texte-principal)', border: '1px solid var(--bordure)' },
  gridCompetences: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' },
  iconContainer: { background: 'var(--violet-transparent)', width: '40px', height: '40px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' },
  skillsList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' },
  techIcon: { marginRight: '8px', fontSize: '16px' },
  gridProjets: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '25px' },
  projetCarte: { background: 'var(--bg-carte)', border: '1px solid var(--bordure)', padding: '30px', borderRadius: '20px' },
  projetTech: { fontSize: '11px', fontWeight: '700', color: 'var(--violet-primaire)', textTransform: 'uppercase' },
  projetTitre: { fontSize: '20px', fontWeight: '600', margin: '10px 0' },
  projetDesc: { color: 'var(--texte-secondaire)', fontSize: '14px', lineHeight: '1.5' },
  featuresContainer: { display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '15px' },
  featureBadge: { background: 'var(--violet-transparent)', color: 'var(--violet-primaire)', padding: '4px 10px', borderRadius: '6px', fontSize: '12px' },
  contactLink: { display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--texte-principal)', textDecoration: 'none', fontSize: '15px', background: 'var(--bg-body)', padding: '12px 20px', borderRadius: '10px', border: '1px solid var(--bordure)' },
  footer: { marginTop: '100px', borderTop: '1px solid var(--bordure)', padding: '40px 0', textAlign: 'center' }
};