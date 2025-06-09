import React, { useState, useEffect, useRef } from "react";
import { portfolioData } from "../data/data";
import { useNavigation } from "../hooks/useNavigation";
import Sidebar from "./SideBar/Sidebar";
import MainContent from "./Content/MainContent";
import OpeningPage from "./Opening";

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { activeItem, handleNavigationClick } = useNavigation();
  const particleContainerRef = useRef(null);
  const particleSystemRef = useRef(null);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading && activeItem !== "resume" && particleContainerRef.current) {
      particleSystemRef.current = new ParticleWave(
        particleContainerRef.current
      );

      return () => {
        if (particleSystemRef.current) {
          particleSystemRef.current.destroy();
        }
      };
    }

    if (activeItem === "resume" && particleSystemRef.current) {
      particleSystemRef.current.destroy();
      particleSystemRef.current = null;
    }
  }, [isLoading, activeItem]);

  return (
    <div style={styles.container}>
      <style dangerouslySetInnerHTML={{ __html: portfolioStyles }} />

      {!isLoading && activeItem !== "resume" && (
        <div
          ref={particleContainerRef}
          style={styles.particleContainer}
          className='particle-container'
        />
      )}

      {isLoading ? (
        <OpeningPage onComplete={handleLoadingComplete} />
      ) : (
        <div style={styles.portfolioEnter}>
          <Sidebar
            profile={portfolioData.profile}
            navigation={portfolioData.navigation}
            activeItem={activeItem}
            onNavigationClick={handleNavigationClick}
          />

          <MainContent
            activeItem={activeItem}
            projects={portfolioData.projects}
            simpleProjects={portfolioData.simpleProjects}
            faqData={portfolioData.faqData}
            profile={portfolioData.profile}
            navigation={portfolioData.navigation}
            onNavigationClick={handleNavigationClick}
          />
        </div>
      )}
    </div>
  );
};

class ParticleWave {
  constructor(container) {
    this.container = container;
    this.particles = [];
    this.particleCount = 120;
    this.time = 0;
    this.animationId = null;

    this.init();
    this.animate();
    this.handleResize();
  }

  init() {
    for (let i = 0; i < this.particleCount; i++) {
      this.createParticle(i);
    }
  }

  createParticle(index) {
    const particle = document.createElement("div");
    particle.className = "particle";

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    const size = Math.random() * 2.5 + 0.8;
    const speed = Math.random() * 0.4 + 0.1;
    const amplitude = Math.random() * 80 + 40;
    const frequency = Math.random() * 0.015 + 0.005;
    const phase = Math.random() * Math.PI * 2;
    const opacity = Math.random() * 0.4 + 0.15;

    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: rgba(255, 255, 255, ${opacity});
      border-radius: 50%;
      pointer-events: none;
      will-change: transform;
    `;

    this.container.appendChild(particle);

    this.particles.push({
      element: particle,
      baseX: x,
      baseY: y,
      x: x,
      y: y,
      speed: speed,
      amplitude: amplitude,
      frequency: frequency,
      phase: phase,
      size: size,
      opacity: opacity,
    });
  }

  animate() {
    this.time += 0.016;

    this.particles.forEach((particle, index) => {
      const waveX =
        Math.sin(this.time * particle.frequency + particle.phase) *
        particle.amplitude;
      const waveY =
        Math.cos(this.time * particle.frequency * 0.6 + particle.phase) *
        particle.amplitude *
        0.4;

      particle.baseX += particle.speed;
      particle.baseY += Math.sin(this.time * 0.001 + index) * 0.15;

      if (particle.baseX > window.innerWidth + 50) {
        particle.baseX = -50;
        particle.baseY = Math.random() * window.innerHeight;
      }

      if (particle.baseY > window.innerHeight + 50) {
        particle.baseY = -50;
      } else if (particle.baseY < -50) {
        particle.baseY = window.innerHeight + 50;
      }

      particle.x = particle.baseX + waveX;
      particle.y = particle.baseY + waveY;

      particle.element.style.transform = `translate3d(${particle.x}px, ${particle.y}px, 0)`;

      const pulseOpacity =
        particle.opacity + Math.sin(this.time * 0.002 + particle.phase) * 0.1;
      particle.element.style.opacity = Math.max(0.05, pulseOpacity);
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  handleResize() {
    this.resizeHandler = () => {
      this.particles.forEach((particle) => {
        if (particle.baseX > window.innerWidth) {
          particle.baseX = Math.random() * window.innerWidth;
        }
        if (particle.baseY > window.innerHeight) {
          particle.baseY = Math.random() * window.innerHeight;
        }
      });
    };

    window.addEventListener("resize", this.resizeHandler);
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }

    if (this.resizeHandler) {
      window.removeEventListener("resize", this.resizeHandler);
    }

    this.particles.forEach((particle) => {
      if (particle.element && particle.element.parentNode) {
        particle.element.parentNode.removeChild(particle.element);
      }
    });

    this.particles = [];
  }
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#000000",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',
    position: "relative",
  },
  portfolioEnter: {
    minHeight: "100vh",
    animation: "fadeIn 0.8s ease-out",
    position: "relative",
    zIndex: 1,
  },
  particleContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    pointerEvents: "none",
    zIndex: 0,
    overflow: "hidden",
  },
};

// CSS keyframes, background noise pattern, and scrollbar hiding
const portfolioStyles = `
  .bg-noise {
    background-image: 
      radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
      radial-gradient(circle at 70% 50%, white 1px, transparent 1px);
    background-size: 3px 3px, 5px 5px;
    background-position: 0 0, 2px 2px;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Hide scrollbar for webkit browsers (Chrome, Safari, Edge) */
  *::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE and Edge legacy */
  * {
    -ms-overflow-style: none;
  }

  /* Hide scrollbar for Firefox */
  * {
    scrollbar-width: none;
  }

  /* Ensure scrolling still works */
  html, body {
    overflow-x: hidden;
  }

  /* Alternative approach - target specific containers if needed */
  .scrollable-content::-webkit-scrollbar {
    display: none;
  }
  
  .scrollable-content {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  /* Particle container styles */
  .particle-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;
    z-index: 0;
    overflow: hidden;
  }
`;

export default Portfolio;
