import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, x = 0, y = 50 }) => {
  return (
    <motion.div
      // Estado inicial: Invisível e deslocado (padrão 50px para baixo)
      initial={{ opacity: 0, x: x, y: y }}
      
      // Estado quando entra na visualização (Scroll)
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      
      // Configurações do gatilho
      viewport={{ 
        once: true,    // Anima apenas uma vez (não repete ao subir o scroll)
        amount: 0.2    // Começa quando 20% do elemento está visível
      }}
      
      // Suavidade da animação
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Um "ease" mais elegante que o padrão
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;