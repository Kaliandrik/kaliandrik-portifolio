import React, { useState } from 'react';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from './Reveal'; // Importando o componente de animação

const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const limits = {
    name: 40,
    email: 60,
    message: 500
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length <= limits[name]) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    
    const dataToSend = { ...formData, access_key: import.meta.env.VITE_WEB3FORMS_KEY };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dataToSend)
      }).then((res) => res.json());

      if (res.success) {
        setIsSent(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      }
    } catch (error) {
      console.log("Erro ao enviar:", error);
    } finally {
      setLoading(false);
    }
  };

  const CharCounter = ({ current, max }) => (
    <span className="char-counter" style={{
      color: current >= max ? 'var(--primary)' : 'rgba(255,255,255,0.2)',
    }}>
      {current}/{max}
    </span>
  );

  return (
    <section id="contact" className="section">
      <div className="container contact-main-grid">
        
        {/* LADO ESQUERDO: INFO DE CONTATO */}
        <Reveal x={-40} y={0}>
          <div className="contact-info-text">
            <h2 className="contact-title">
              Vamos criar algo <span className="logo-text-sub anim-gradient">juntos?</span>
            </h2>
            <p style={{ color: 'var(--text-dim)', marginBottom: '2rem' }}>
              Estou aberto a oportunidades de estágio, projetos freelancer ou apenas para trocar uma ideia.
            </p>
            
            <div className="contact-methods">
              <a href="mailto:kaliandriksouza@gmail.com" className="method">
                <Mail size={20} /> kaliandriksouza@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/kaliandrik-azevedo-768b07387/" target="_blank" rel="noreferrer" className="method">
                <Linkedin size={20} /> linkedin.com/in/kaliandrik
              </a>
              <a href="https://github.com/Kaliandrik" target="_blank" rel="noreferrer" className="method">
                <Github size={20} /> github.com/Kaliandrik
              </a>
            </div>
          </div>
        </Reveal>

        {/* LADO DIREITO: FORMULÁRIO */}
        <Reveal x={40} y={0} delay={0.2}>
          <form onSubmit={handleSubmit} className="contact-simple-form">
            <div className="input-group">
              
              <div className="input-wrapper">
                <input 
                  type="text" name="name" placeholder="Seu Nome" required 
                  value={formData.name} onChange={handleChange}
                />
                <CharCounter current={formData.name.length} max={limits.name} />
              </div>

              <div className="input-wrapper">
                <input 
                  type="email" name="email" placeholder="Seu E-mail" required 
                  value={formData.email} onChange={handleChange}
                />
                <CharCounter current={formData.email.length} max={limits.email} />
              </div>
              
              <div className="input-wrapper">
                <textarea 
                  name="message" placeholder="Sua Mensagem" rows="5" required 
                  value={formData.message} onChange={handleChange}
                ></textarea>
                <CharCounter current={formData.message.length} max={limits.message} />
              </div>
              
              <button type="submit" className="cta-button primary" disabled={loading || isSent}>
                <AnimatePresence mode="wait">
                  {isSent ? (
                    <motion.span 
                      key="sent"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      Enviado! <CheckCircle size={18} />
                    </motion.span>
                  ) : loading ? (
                    <motion.span key="loading">Enviando...</motion.span>
                  ) : (
                    <motion.span 
                      key="idle"
                      style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                    >
                      Enviar Mensagem <Send size={18} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </form>
        </Reveal>

      </div>
    </section>
  );
};

export default Contact;