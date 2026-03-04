import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Coffee, 
  Globe, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Menu, 
  X,
  ChevronRight,
  GraduationCap,
  Award
} from 'lucide-react';

// Componente de Partículas OTIMIZADO
const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const initialParticles = [];
    for (let i = 0; i < 25; i++) {
      initialParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 20 + 15,
        size: Math.random() * 4 + 2
      });
    }
    setParticles(initialParticles);
    return () => {};
  }, []);

  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            top: '-5%',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animation: `particleFloatSoft ${particle.duration}s linear ${particle.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Bolinhas roxas - AGORA COM MAIS OPACIDADE */}
      <div className="background-balls">
        <div className="ball ball-1"></div>
        <div className="ball ball-2"></div>
        <div className="ball ball-3"></div>
        <div className="ball ball-4"></div>
        <div className="ball ball-5"></div>
        <div className="ball ball-6"></div>
        <div className="ball ball-7"></div>
        <div className="ball ball-8"></div>
        <div className="ball ball-9"></div>
        <div className="ball ball-10"></div>
      </div>
      <Particles />

      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="nav-container">
          <motion.div 
            className="logo" 
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">&lt;KA /&gt;</span>
          </motion.div>

          <div className="nav-links-desktop">
            {['home', 'about', 'skills', 'contact'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}
          </div>

          <motion.button 
            className="menu-button" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <motion.div 
          className={`nav-links-mobile ${isMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          {['home', 'about', 'skills', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`nav-link-mobile ${activeSection === item ? 'active' : ''}`}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </motion.div>
      </nav>

      {/* Home Section */}
      {/* Home Section */}
<section id="home" className="section home-section">
  <div className="container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="home-content"
    >
      <motion.div 
        className="profile-image"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
  src="/kaliandrik.jpeg" 
  alt="Kaliandrik Azevedo" 
  className="profile-photo"
/>
      </motion.div>
      
      <motion.h1 
        className="home-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Kaliandrik Azevedo
      </motion.h1>
      
      <motion.p 
        className="home-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Desenvolvedor Full Stack em Formação
      </motion.p>

      <motion.div 
        className="tech-stack"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <motion.span className="tech-item" whileHover={{ y: -3 }}>
          <Coffee size={16} /> Java
        </motion.span>
        <motion.span className="tech-item" whileHover={{ y: -3 }}>
          <Code2 size={16} /> React
        </motion.span>
        <motion.span className="tech-item" whileHover={{ y: -3 }}>
          <Globe size={16} /> HTML & CSS
        </motion.span>
      </motion.div>

      <motion.button 
        onClick={() => scrollToSection('contact')} 
        className="cta-button"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        Vamos conversar <ChevronRight size={18} />
      </motion.button>
    </motion.div>
  </div>
</section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">
              <GraduationCap className="section-icon" />
              Sobre Mim
            </h2>
            
            <div className="about-grid">
              <motion.div 
                className="about-content"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="about-text">
                  👋 Olá! Sou Kaliandrik Azevedo, um desenvolvedor apaixonado por tecnologia 
                  e em constante evolução. Estou concluindo meu <span className="highlight">Curso Técnico em Desenvolvimento de Sistemas</span>, 
                  onde adquiri uma base sólida em programação e desenvolvimento de software.
                </p>
                
                <p className="about-text">
                  🚀 Atualmente, estou em <span className="highlight">busca de oportunidades</span> para aplicar e expandir meus 
                  conhecimentos. Acredito que a melhor forma de aprender é colocando a mão no 
                  código e enfrentando desafios reais.
                </p>
                
                <p className="about-text">
                  📚 Meu compromisso é com o <span className="highlight">aprendizado contínuo</span>. Estou sempre explorando 
                  novas tecnologias, participando de comunidades e construindo projetos que 
                  me ajudem a evoluir como desenvolvedor.
                </p>
              </motion.div>

              <motion.div 
                className="about-card"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Award size={32} className="card-icon" />
                <h3>Formação</h3>
                <p className="formation-title">Técnico em Desenvolvimento de Sistemas</p>
                <p className="formation-desc">
                  Curso completo com ênfase em desenvolvimento web e mobile, 
                  abrangendo as principais tecnologias do mercado.
                </p>
                <div className="formation-highlights">
                  <span>Lógica de Programação</span>
                  <span>Banco de Dados</span>
                  <span>Desenvolvimento Web</span>
                  <span>Programação Orientada a Objetos</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">
              <Code2 className="section-icon" />
              Minhas Habilidades
            </h2>
            
            <div className="skills-grid">
              {[
                {
                  icon: <Coffee size={40} />,
                  title: "Java",
                  description: "Desenvolvimento backend com Java, Spring Boot, APIs REST e integração com bancos de dados.",
                  level: 80,
                  color: "#f89820"
                },
                {
                  icon: <Code2 size={40} />,
                  title: "React",
                  description: "Criação de interfaces modernas com React, Hooks, e gerenciamento de estado.",
                  level: 75,
                  color: "#61dafb"
                },
                {
                  icon: <Globe size={40} />,
                  title: "HTML & CSS",
                  description: "Construção de páginas web semânticas, responsivas e com animações CSS.",
                  level: 85,
                  color: "#38bdf8"
                }
              ].map((skill, index) => (
                <motion.div 
                  key={index}
                  className="skill-card"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="skill-icon" style={{ background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)` }}>
                    {skill.icon}
                  </div>
                  <h3>{skill.title}</h3>
                  <p>{skill.description}</p>
                  <div className="skill-level">
                    <div className="skill-level-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="section-title">
              <Mail className="section-icon" />
              Entre em Contato
            </h2>
            
            <div className="contact-grid">
              {[
                { icon: <Mail />, title: "Email", value: "kaliankali001@email.com", link: "mailto:kaliankali001@email.com" },
                { icon: <Phone />, title: "Telefone", value: "(88) 99819-2669", link: "tel:+5588998192669" },
                { icon: <Linkedin />, title: "LinkedIn", value: "/in/kaliandrik", link: "https://www.linkedin.com/in/kaliandrik-azevedo-768b07387/" },
                { icon: <Github />, title: "GitHub", value: "/kaliandrik", link: "https://github.com/Kaliandrik" }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.link}
                  className="contact-item"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    {contact.icon}
                  </div>
                  <div className="contact-details">
                    <h4>{contact.title}</h4>
                    <span>{contact.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div 
              className="contact-message"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p>
                📢 Estou aberto a novas oportunidades e conexões! 
                Se você tem um projeto em mente ou quer trocar uma ideia sobre tecnologia, 
                ficarei feliz em conversar.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p>© 2026 Kaliandrik Azevedo. Todos os direitos reservados.</p>
            <p className="footer-heart">
              Desenvolvido com <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >❤️</motion.span> usando React
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}

export default App;     