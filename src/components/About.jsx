import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Rocket, Sparkles, Target, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2 className="section-title">
            <GraduationCap size={32} className="icon-title" />
            Sobre <span className="logo-text-sub">Mim</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* LADO ESQUERDO: TEXTO PRINCIPAL */}
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-highlight-badge">
              <Sparkles size={14} className="icon-sparkle" />
              <span>Desenvolvedor em constante evolução</span>
            </div>
            
            <h3 className="about-subtitle">
              Transformando lógica em <span className="text-gradient">experiências digitais</span>.
            </h3>
            
            <p className="description-p">
              Sou aluno do curso <strong>Técnico em Desenvolvimento de Sistemas</strong> e apaixonado por transformar lógica em soluções reais. Minha jornada na tecnologia começou cedo, e desde então, foco em construir uma base sólida em arquitetura de software e boas práticas.
            </p>
            
            <p className="description-p dim">
              Minha experiência em competições de programação moldou minha forma de pensar: busco sempre o caminho mais eficiente, trabalho bem em equipe e não vejo problemas complexos como obstáculos, mas como oportunidades de aprendizado.
            </p>

            <div className="about-status">
              <div className="status-item">
                <Target size={18} className="icon-purple" />
                <span>Foco atual: Full Stack & Cloud</span>
              </div>
            </div>
          </motion.div>

          {/* LADO DIREITO: CARDS DE FOCO */}
          <div className="about-cards-container">
            <motion.div 
              className="info-card-premium"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="card-glass-effect"></div>
              <div className="card-icon-bg">
                <Award className="icon-purple" />
              </div>
              <div className="card-info">
                <h4>Formação Acadêmica</h4>
                <p>Técnico em Desenv. de Sistemas</p>
                <small>Conhecimento técnico e prático</small>
              </div>
            </motion.div>

            <motion.div 
              className="info-card-premium"
              whileHover={{ y: -8, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <div className="card-glass-effect"></div>
              <div className="card-icon-bg">
                <Rocket className="icon-purple" />
              </div>
              <div className="card-info">
                <h4>Objetivo de Carreira</h4>
                <p>Crescimento Profissional</p>
                <small>Foco em dominar stacks modernas e contribuir em projetos de alto impacto.</small>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;