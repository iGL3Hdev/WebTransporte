tsParticles.load("particles", {
  fpsLimit: 60,
  particles: {
    number: {
      value: 80,
      density: { enable: true, area: 800 }
    },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.7, random: true, anim: { enable: true, speed: 1, opacity_min: 0.3, sync: false } },
    size: { value: 3, random: true },
    links: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
    move: { enable: true, speed: 2, direction: "none", random: false, straight: false, outModes: "out" }
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: true, mode: "grab" },  // partículas se conectan con líneas al pasar el ratón
      onClick: { enable: true, mode: "push" },  // añade partículas al click
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
});