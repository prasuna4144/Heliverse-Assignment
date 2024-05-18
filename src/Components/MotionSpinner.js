import React, { useEffect, useRef } from 'react';
import './Header.css';
import { gsap } from 'gsap';


const MotionSpinner = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      const color = colors[Math.floor(Math.random() * colors.length)];
      createFireParticle(container, clientX, clientY, color);
    };

    const createFireParticle = (container, x, y, color) => {
      const particle = document.createElement('div');
      particle.classList.add('fire-particle');
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.backgroundColor = color;

      const size = Math.random() * 20 + 10; // Random size between 10 and 30
      const opacity = Math.random() * 0.5 + 0.2; // Random opacity between 0.2 and 0.7

      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity;

      container.appendChild(particle);

      gsap.to(particle, {
        duration: 0.5,
        opacity: 0,
        scale: 0,
        onComplete: () => {
          container.removeChild(particle);
        }
      });
    };

    document.addEventListener('mousemove', onMouseMove);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div ref={containerRef} className="fire-container"></div>;
};

export default MotionSpinner;
