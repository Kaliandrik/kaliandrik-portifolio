import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Database, 
  ShieldCheck, 
  Layout, 
  Code2, 
  ExternalLink, 
  Github 
} from 'lucide-react';
import Reveal from './Reveal'; // Importando o nosso padrão de scroll

const Projects = () => {
  const project = {
    title: "Bolso Inteligente",
    description: "Recentemente percebi que estava gastando muito com besteira e decidi resolver isso do jeito que um desenvolvedor faz: criando minha própria solução!",
    longDescription: "Uma solução completa para controle de gastos, utilizando Firebase para autenticação e banco de dados em tempo real, garantindo que seus dados estejam sempre seguros e acessíveis.",
    techs: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    link: "https://bolso-inteligente-xi.vercel.app/",
    repo: "https://github.com/Kaliandrik/bolso-inteligente"
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Título da Seção com Reveal */}
        <Reveal y={20}>
          <h2 className="section-title">
            <Rocket /> Projetos em Destaque
          </h2>
        </Reveal>

        {/* Card do Projeto com Reveal Lateral */}
        <Reveal y={40} delay={0.2}>
          <div className="featured-project-card">
            
            {/* COLUNA DO TEXTO (Esquerda) */}
            <div className="project-info">
              <div className="project-badge">Projeto Principal</div>
              <h3>{project.title}</h3>
              <p className="project-intro">{project.description}</p>
              <p className="project-details">{project.longDescription}</p>

              <div className="project-features-grid">
                <div className="feature-item">
                  <Database size={18} /> <span>Integração Firebase</span>
                </div>
                <div className="feature-item">
                  <ShieldCheck size={18} /> <span>Segurança (.env)</span>
                </div>
                <div className="feature-item">
                  <Layout size={18} /> <span>Tailwind Responsive</span>
                </div>
                <div className="feature-item">
                  <Code2 size={18} /> <span>TypeScript Typed</span>
                </div>
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
            
            {/* COLUNA DA LOGO (Direita) */}
            <div className="project-visual">
               <motion.img 
                 src="/logobolsainteligente.png" 
                 alt="Logo do projeto Bolso Inteligente" 
                 className="project-logo-display"
                 
                 // Mantemos a flutuação infinita aqui dentro
                 animate={{
                   y: [-10, 10, -10], 
                 }}
                 transition={{
                   duration: 4, 
                   repeat: Infinity, 
                   ease: "easeInOut"
                 }}
               />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Projects;