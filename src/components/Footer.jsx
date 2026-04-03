import React from 'react';
import { Heart, Code2, MapPin } from 'lucide-react';
import Reveal from './Reveal'; // Importando seu componente de animação

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-premium">
      {/* Linha de brilho no topo do footer */}
      <div className="footer-glow-line"></div>

      <div className="container footer-content">
        <Reveal y={10} delay={0.1}>
          <div className="footer-left">
            <p className="footer-copyright">
              © {currentYear} <span className="logo-text-sub">Kaliandrik Azevedo</span>
            </p>
            <div className="footer-location">
              <MapPin size={14} className="icon-purple" />
              <span>Tianguá - CE</span>
            </div>
          </div>
        </Reveal>

        <Reveal y={10} delay={0.3}>
          <div className="footer-right">
            <p className="footer-stack">
              <Code2 size={16} /> 
              Feito com <Heart size={14} className="heart-icon" /> usando 
              <strong> React</strong> & <strong>Framer Motion</strong>
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;