import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Database, 
  ShieldCheck, 
  Layout, 
  Code2, 
  ExternalLink, 
  Github,
  ChevronLeft,
  ChevronRight,
  Car
} from 'lucide-react';
import Reveal from './Reveal';

const Projects = () => {
  const allProjects = [
    {
      id: 1,
      title: "Carros Populares Brasil",
      badge: "Novo Projeto",
      description: "Um mergulho no mundo automotivo brasileiro focado em UI e interatividade.",
      longDescription: "Desenvolvido para aperfeiçoar habilidades de CSS avançado, este projeto apresenta modelos icônicos como Onix, Celta e Corolla com uma interface moderna, fluida e totalmente responsiva.",
      techs: ["React", "CSS3", "Framer Motion", "Responsive"],
      features: ["Animações Fluidas", "Design Moderno", "Mobile First", "Assets Otimizados"],
      link: "https://luxury-cars-liard.vercel.app/", 
      repo: "https://github.com/Kaliandrik/luxury-cars",
      logo: "/logocarros.png",
      icon: <Car size={18} />
    },
    {
      id: 2,
      title: "Bolso Inteligente",
      badge: "Projeto Principal",
      description: "Decidi resolver meus gastos criando minha própria solução de controle financeiro!",
      longDescription: "Uma solução completa utilizando Firebase para autenticação e banco de dados em tempo real, garantindo que seus dados estejam sempre seguros e acessíveis de qualquer lugar.",
      techs: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      features: ["Integração Firebase", "Segurança (.env)", "Tailwind Responsive", "TypeScript Typed"],
      link: "https://bolso-inteligente-xi.vercel.app/",
      repo: "https://github.com/Kaliandrik/bolso-inteligente",
      logo: "/logobolsainteligente.png",
      icon: <Database size={18} />
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const project = allProjects[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === allProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? allProjects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="section-projects-compact">
      <div className="container">
        
        <Reveal y={20}>
          <h2 className="section-title">
            <Rocket /> Projetos em Destaque
          </h2>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="featured-project-card"
          >
            <div className="project-info">
              <div className="project-badge">{project.badge}</div>
              <h3>{project.title}</h3>
              <p className="project-intro">{project.description}</p>
              <p className="project-details">{project.longDescription}</p>

              <div className="project-features-grid">
                {project.features.map((feature, i) => (
                  <div className="feature-item" key={i}>
                    {i === 0 ? project.icon : i === 1 ? <ShieldCheck size={18} /> : i === 2 ? <Layout size={18} /> : <Code2 size={18} />}
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="project-tags">
                {project.techs.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.link} target="_blank" rel="noreferrer" className="cta-button primary">
                  <ExternalLink size={18} /> Ver Online
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer" className="cta-button secondary">
                  <Github size={18} /> Repositório
                </a>
              </div>
            </div>
            
            <div className="project-visual">
               <motion.img 
                 src={project.logo} 
                 alt={`Logo ${project.title}`} 
                 className="project-logo-large"
                 animate={{ y: [-10, 10, -10] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               />
            </div>
          </motion.div>
        </AnimatePresence>

        <Reveal y={10} delay={0.2}>
          <div className="projects-navigation-bottom-compact">
            <button onClick={prevProject} className="nav-arrow-btn"><ChevronLeft /></button>
            <div className="project-counter">
              <span className="current">{currentIndex + 1}</span>
              <span className="total">/ {allProjects.length}</span>
            </div>
            <button onClick={nextProject} className="nav-arrow-btn"><ChevronRight /></button>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Projects;