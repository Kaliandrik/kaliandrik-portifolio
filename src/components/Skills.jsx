import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Settings2, Binary, Database, Box, CheckCircle2, Cpu } from 'lucide-react';
import Reveal from './Reveal';

const Skills = () => {
  const categories = [
    {
      title: "Desenvolvimento Frontend",
      type: "client",
      icon: <Layout className="icon-main icon-purple" />,
      skills: [
        { name: "React.js & Hooks", icon: <Cpu size={16} /> },
        { name: "JavaScript ES6+", icon: <Binary size={16} /> },
        { name: "HTML5 & CSS3", icon: <Settings2 size={16} /> },
        { name: "Tailwind / Responsive Design", icon: <Layout size={16} /> }
      ]
    },
    {
      title: "Arquitetura Backend",
      type: "server",
      icon: <Server className="icon-main icon-blue" />,
      skills: [
        { name: "Java (POO)", icon: <Cpu size={16} /> },
        { name: "SQL / MySQL", icon: <Database size={16} /> },
        { name: "Lógica de Programação", icon: <Terminal size={16} /> },
        { name: "Integrações de API", icon: <Box size={16} /> }
      ]
    }
  ];

  // Orquestração de entrada ultra-leve (Performance Mode)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08 // Cascata rápida para fluidez no scroll
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      willChange: "transform, opacity" // Prepara a GPU
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: "easeOut",
        type: "tween" // Mais leve que animações de física (spring)
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="section-skills">
      <div className="container">
        
        {/* Título com Reveal Padrão */}
        <Reveal y={20}>
          <div className="section-header-skills">
            <h2 className="section-title">
              <Terminal size={32} className="icon-purple-glow" /> 
              Minhas <span className="logo-text-sub">Skills</span>
            </h2>
          </div>
        </Reveal>
        
        {/* Grid de Skills com Efeito Cascata */}
        <motion.div 
          className="skills-grid-improved"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat) => (
            <motion.div 
              key={cat.title}
              className={`skill-category-card-premium ${cat.type === 'client' ? 'glow-client' : 'glow-server'}`}
              variants={cardVariants}
              whileHover={{ 
                translateY: -5,
                transition: { duration: 0.2, ease: "linear" } 
              }}
            >
              <div className="card-glass-effect-skills"></div>
              
              <div className="category-header-skills">
                <div className="icon-wrapper-main">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              
              <ul className="skills-list-improved">
                {cat.skills.map((skill) => (
                  <motion.li 
                    key={skill.name}
                    className="skill-item-premium"
                    variants={skillItemVariants}
                  >
                    <div className="skill-icon-status">
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                    <CheckCircle2 size={16} className="skill-check-active" />
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;