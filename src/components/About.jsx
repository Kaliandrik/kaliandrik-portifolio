import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, Target, Terminal as TerminalIcon } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-about">
      <div className="container">
        {/* CABEÇALHO DA SEÇÃO */}
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

        <div className="about-grid-improved">
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
              Minha experiência em competições de programação moldou minha forma de pensar: busco eficiência, trabalho bem em equipe e vejo problemas complexos como oportunidades de aprendizado.
            </p>

            <div className="about-status">
              <div className="status-item">
                <Target size={18} className="icon-purple" />
                <span>Foco atual: Full Stack & Cloud</span>
              </div>
            </div>
          </motion.div>

          {/* LADO DIREITO: O TERMINAL ANIMADO */}
          <motion.div
            className="about-terminal-container"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-window">
              {/* Barra de Título */}
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <span className="btn-close"></span>
                  <span className="btn-minimize"></span>
                  <span className="btn-maximize"></span>
                </div>
                <div className="terminal-title">
                  <TerminalIcon size={14} /> <span>kaliandrik@dev:~</span>
                </div>
              </div>

              {/* Corpo do Terminal */}
              <div className="terminal-body">
                <div className="terminal-prompt">
                  <span className="prompt-user">kaliandrik</span>
                  <span className="prompt-at">@</span>
                  <span className="prompt-host">dev</span>
                  <span className="prompt-path">:~$</span>
                  <span className="terminal-command"> cat profile.json</span>
                </div>
                
                <pre className="terminal-code-typing">
                  <span className="syntax-bracket">{`{`}</span>{`\n`}
                  {`  `}
                  <span className="syntax-key">"formacao"</span>
                  <span className="syntax-bracket">{`:`}</span>
                  {` `}
                  <span className="syntax-bracket">{`{`}</span>{`\n`}
                  {`    `}
                  <span className="syntax-key">"curso"</span>
                  <span className="syntax-bracket">{`:`}</span>
                  {` `}
                  <span className="syntax-string">"Técnico em Desenv. de Sistemas"</span>
                  <span className="syntax-bracket">{`,`}</span>{`\n`}
                  {`    `}
                  <span className="syntax-key">"foco"</span>
                  <span className="syntax-bracket">{`:`}</span>
                  {` `}
                  <span className="syntax-string">"Técnico & Prático"</span>{`\n`}
                  {`  `}
                  <span className="syntax-bracket">{`}`}</span>
                  <span className="syntax-bracket">{`,`}</span>{`\n`}
                  {`  `}
                  <span className="syntax-key">"objetivo"</span>
                  <span className="syntax-bracket">{`:`}</span>
                  {` `}
                  <span className="syntax-bracket">{`{`}</span>{`\n`}
                  {`    `}
                  <span className="syntax-key">"stack"</span>
                  <span className="syntax-bracket">{`:`}</span>
                  {` `}
                  <span className="syntax-bracket">{`[`}</span>
                  <span className="syntax-string">"Modernas"</span>
                  <span className="syntax-bracket">{`,`}</span>
                  {` `}
                  <span className="syntax-string">"Alto Impacto"</span>
                  <span className="syntax-bracket">{`]`}</span>
                  <span className="syntax-bracket">{`,`}</span>{`\n`}
                  {`    `}
                  <span className="syntax-key">"perfil"</span>
                  <span className="syntax-bracket">{`:`}</span>
                  {` `}
                  <span className="syntax-string">"Crescimento Profissional"</span>{`\n`}
                  {`  `}
                  <span className="syntax-bracket">{`}`}</span>{`\n`}
                  <span className="syntax-bracket">{`}`}</span>
                  
                  <span className="terminal-cursor-final">_</span>
                </pre>
              </div>
            </div>
            
            {/* Brilho de fundo do terminal */}
            <div className="terminal-glow-background"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;