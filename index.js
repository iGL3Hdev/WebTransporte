// Configuración de partículas que se adapta al tema
let particlesInstance;
let particlesBackgroundInstance;

function initParticles() {
  // Detectar si está en modo claro (dark-mode class = claro visualmente)
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  // Configuración para partículas de FONDO (fuera del wrapper)
  const bgParticleColor = isDarkMode ? "#333333" : "#ffffff";
  const bgLinkColor = isDarkMode ? "#aa5e08" : "#ffffff";
  const bgOpacity = isDarkMode ? 0.6 : 0.7;
  const bgLinkOpacity = isDarkMode ? 0.5 : 0.4;
  
  // Configuración para partículas DENTRO del wrapper (colores más visibles)
  const wrapperParticleColor = isDarkMode ? "#333333" : "#333333";
  const wrapperLinkColor = isDarkMode ? "#666666" : "#666666";
  const wrapperOpacity = isDarkMode ? 0.7 : 0.8;
  const wrapperLinkOpacity = isDarkMode ? 0.5 : 0.6;
  
  // Configuración base
  const baseConfig = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 80,
        density: { enable: true, area: 800 }
      },
      shape: { type: "circle" },
      size: { value: 3, random: true },
      move: { 
        enable: true, 
        speed: 2, 
        direction: "none", 
        random: false, 
        straight: false, 
        outModes: "out" 
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          links: { opacity: 1 }
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true
  };
  
  // Configuración para FONDO
  const bgConfig = {
    ...baseConfig,
    particles: {
      ...baseConfig.particles,
      color: { value: bgParticleColor },
      opacity: { 
        value: bgOpacity, 
        random: true, 
        anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } 
      },
      links: { 
        enable: true, 
        distance: 150, 
        color: bgLinkColor, 
        opacity: bgLinkOpacity, 
        width: 1 
      }
    }
  };
  
  // Configuración para DENTRO del wrapper
  const wrapperConfig = {
    ...baseConfig,
    particles: {
      ...baseConfig.particles,
      color: { value: wrapperParticleColor },
      opacity: { 
        value: wrapperOpacity, 
        random: true, 
        anim: { enable: true, speed: 1, opacity_min: 0.4, sync: false } 
      },
      links: { 
        enable: true, 
        distance: 150, 
        color: wrapperLinkColor, 
        opacity: wrapperLinkOpacity, 
        width: 1 
      }
    }
  };
  
  // Cargar partículas en el fondo (fuera del wrapper)
  tsParticles.load("particles-background", bgConfig).then(container => {
    if (particlesBackgroundInstance) {
      particlesBackgroundInstance.destroy();
    }
    particlesBackgroundInstance = container;
  });
  
  // NO cargar partículas dentro del wrapper (comentado)
  // tsParticles.load("particles", wrapperConfig).then(container => {
  //   if (particlesInstance) {
  //     particlesInstance.destroy();
  //   }
  //   particlesInstance = container;
  // });
}

// Esperar a que se cargue todo
window.addEventListener('load', function() {
  setTimeout(() => {
    initParticles();
  }, 100);
});

// Detectar cambio de tema con el botón
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  
  if (themeToggle) {
    themeToggle.addEventListener('click', function() {
      setTimeout(() => {
        initParticles();
      }, 100);
    });
  }
});