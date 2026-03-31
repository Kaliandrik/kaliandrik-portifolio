import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Layout, Server, Settings2, Binary, Database, Box, CheckCircle2, Cpu } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Desenvolvimento Frontend",
      type: "client",
      icon: <Layout className="icon-main icon-purple" />,
      // Usamos objetos para cada skill para ter ícones específicos
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
        { name: "Noções de Spring", icon: <Box size={16} /> }
      ]
    }
  ];

  // Configuração de Animação do Framer Motion
  // Container pai para orquestrar os filhos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3, // Atraso antes de começar a animar os filhos
        staggerChildren: 0.1 // Atraso entre cada filho (card e depois li)
      }
    }
  };

  // Variantes para os CardsBrota
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  // Variantes para os itens da lista (a animação "Foda")
  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120 }
    }
  };

  return (
    <section id="skills" className="section-skills">
      <div className="container">
        {/* TÍTULO DA SEÇÃO ANIMADO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header-skills"
        >
          <h2 className="section-title">
            <Terminal size={32} className="icon-purple-glow" /> 
            Minhas <span className="logo-text-sub">Skills</span>
          </h2>
        </motion.div>
        
        {/* GRID PRINCIPAL (Container orquestrador) */}
        <motion.div 
          className="skills-grid-improved"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Anima quando 20% da seção está visível
        >
          {categories.map((cat, catIndex) => (
            <motion.div 
              key={cat.title}
              className={`skill-category-card-premium ${cat.type === 'client' ? 'glow-client' : 'glow-server'}`}
              variants={cardVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            >
              <div className="card-glass-effect-skills"></div>
              
              <div className="category-header-skills">
                <div className="icon-wrapper-main">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              
              {/* LISTA DE SKILLS ANIMADAS */}
              <ul className="skills-list-improved">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.li 
                    key={skill.name}
                    className="skill-item-premium"
                    variants={skillItemVariants}
                  >
                    {/* Ícone da Skill que "ativa" */}
                    <div className="skill-icon-status">
                      {skill.icon}
                    </div>
                    
                    {/* Nome da Skill */}
                    <span className="skill-name">{skill.name}</span>
                    
                    {/* Ícone de Check Ativo no Final */}
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