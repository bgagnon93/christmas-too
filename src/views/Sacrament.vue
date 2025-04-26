<template>
  <div class="sacrament-page">
    <div class="intense-snow"></div>
    <div class="sacrament-container">
      <h1>The Sacrament</h1>
      
      <div class="sacrament-text" ref="sacramentText">
        <p>It was a Boston. It was a whiteout. It was exactly 60:00.</p>
        <p class="highlight">Chunbau</p>
        <p>He pulled a water out of his console.</p>
        <p>He would not drink himself.</p>
        <p>Who could forget the warming of the anemic. The tips of his fingers blackened with the bite of frost.</p>
        <p>His comrades rejuvenated him with their kinship.</p>
        <p class="highlight">The virtues of Christmas 2.</p>
      </div>
      
      <div class="image-container">
        <img src="../assets/whiteout_1.jpg" alt="Chunbau the driver in whiteout conditions" class="driver-image" />
        <div class="image-overlay">
          <div class="overlay-text">Chunbau</div>
          <div class="overlay-subtext">60:00</div>
        </div>
        <p class="image-caption">The kindly driver who never saw a surge price he didn't like</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const sacramentText = ref(null)

onMounted(() => {
  // Add a neon glow effect to the text when the page loads
  if (sacramentText.value) {
    const paragraphs = sacramentText.value.querySelectorAll('p')
    let delay = 0
    
    paragraphs.forEach(p => {
      setTimeout(() => {
        p.classList.add('glow-text')
      }, delay)
      delay += 800
    })
  }
})
</script>

<style scoped>
.sacrament-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: radial-gradient(circle at center, #1a0022, #000000);
  color: #e4e4e4;
  position: relative;
  overflow: hidden;
}

/* Intense snow effect specific to the sacrament page */
.intense-snow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(3px 3px at 5% 10%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 10% 30%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(4px 4px at 15% 50%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 20% 70%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(3px 3px at 25% 90%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 30% 10%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(4px 4px at 35% 30%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 40% 50%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(3px 3px at 45% 70%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 50% 90%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(3px 3px at 55% 10%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 60% 30%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(4px 4px at 65% 50%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 70% 70%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(3px 3px at 75% 90%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 80% 10%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(4px 4px at 85% 30%, rgba(255, 255, 255, 0.9) 50%, transparent 0%),
    radial-gradient(2px 2px at 90% 50%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(3px 3px at 95% 70%, rgba(255, 255, 255, 0.9) 50%, transparent 0%);
  background-size: 1000px 1000px;
  animation: intense-snow 10s linear infinite;
  z-index: 1;
  opacity: 0.7;
}

@keyframes intense-snow {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(calc(100% + 100px));
  }
}

.sacrament-container {
  max-width: 800px;
  background: rgba(0, 0, 0, 0.7);
  padding: 3rem;
  border-radius: 10px;
  border: 1px solid #00ffff;
  box-shadow: 0 0 25px rgba(0, 255, 255, 0.3);
  position: relative;
  z-index: 2;
  backdrop-filter: blur(5px);
}

h1 {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #ffffff;
  text-shadow: 0 0 10px #ff0066, 0 0 20px #ff0066;
}

.sacrament-text {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: center;
}

.sacrament-text p {
  margin-bottom: 1.5rem;
  opacity: 0.3;
  transition: opacity 0.5s ease, text-shadow 0.5s ease;
}

.highlight {
  color: #00ffff;
  font-weight: bold;
  font-style: italic;
}

.glow-text {
  opacity: 1 !important;
  text-shadow: 0 0 5px currentColor;
}

.image-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  position: relative;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.image-container::before {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, 
    rgba(255, 0, 102, 0.2),
    rgba(0, 255, 255, 0.2),
    rgba(255, 204, 0, 0.2),
    rgba(255, 0, 102, 0.2));
  z-index: -1;
  border-radius: 10px;
  animation: gradient-rotate 10s linear infinite;
}

@keyframes gradient-rotate {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

.driver-image {
  max-width: 100%;
  height: auto;
  border: 2px solid #ff0066;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(255, 0, 102, 0.6);
  position: relative;
  z-index: 1;
  filter: saturate(1.2) contrast(1.1);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  z-index: 2;
  pointer-events: none;
}

.overlay-text {
  font-family: 'Courier New', monospace;
  font-size: 3rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 
    0 0 10px #00ffff,
    0 0 20px #00ffff,
    0 0 30px #00ffff;
  mix-blend-mode: screen;
  letter-spacing: 2px;
}

.overlay-subtext {
  font-family: 'Courier New', monospace;
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-shadow: 
    0 0 8px #ff0066,
    0 0 16px #ff0066;
  mix-blend-mode: screen;
  letter-spacing: 1px;
  margin-top: 5px;
}

.image-caption {
  margin-top: 1rem;
  font-style: italic;
  color: #a0a0a0;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .sacrament-container {
    padding: 1.5rem;
  }
  
  h1 {
    font-size: 2rem;
  }
  
  .sacrament-text {
    font-size: 1.2rem;
  }
}
</style>