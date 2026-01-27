import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  speed?: number;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, speed = 30, className = '' }) => {
  const [display, setDisplay] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';

  useEffect(() => {
    let iteration = 0;
    let interval: any = null;

    const startAnimation = () => {
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplay((prev) => 
          text
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3; 
      }, speed);
    };

    startAnimation();

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={`${className}`}>{display}</span>;
};

export default GlitchText;