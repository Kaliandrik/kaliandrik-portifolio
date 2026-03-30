import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    // 1. Check se é mobile (Touch screen)
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth <= 768);
    };

    checkMobile(); // Executa ao montar

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [mouseX, mouseY, isMobile]);

  // Se for mobile, não renderiza nada (retorna null)
  if (isMobile) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x: mouseX,
        y: mouseY,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '20px',
        height: '20px',
        backgroundColor: '#7c3aed', 
        borderRadius: '50%',
        pointerEvents: 'none', 
        zIndex: 9999,
        mixBlendMode: 'difference', 
        boxShadow: '0 0 15px rgba(124, 58, 237, 0.5)'
      }}
    />
  );
};

export default CustomCursor;