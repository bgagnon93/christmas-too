<template>
  <div class="home">
    <div class="hero">
      <div class="cyber-tree-container">
        <div class="cyber-tree">
          <div class="tree-star"></div>
          <div class="tree-top"></div>
          <div class="tree-middle"></div>
          <div class="tree-bottom"></div>
          <div class="tree-trunk"></div>
          <div class="tree-ornament tree-ornament-1">
            <img src="../assets/ornament_2.png" alt="Gold ornament" class="real-ornament" />
          </div>
          <div class="tree-ornament tree-ornament-2"></div>
          <div class="tree-ornament tree-ornament-3">
            <img src="../assets/ornament_1.png" alt="Red ornament" class="real-ornament" />
          </div>
          <div class="tree-ornament tree-ornament-4"></div>
          <div class="tree-ornament tree-ornament-5">
            <img src="../assets/ornament_2.png" alt="Gold ornament" class="real-ornament" />
          </div>
          <div class="tree-ornament tree-ornament-6"></div>
          <div class="tree-lights"></div>
          <!-- Presents under the tree -->
          <div class="presents-container">
            <div class="present present-1"></div>
            <div class="present present-2"></div>
            <div class="present present-3"></div>
          </div>
        </div>
      </div>
      <h1>CHRISTMAS <span class="too">TOO</span></h1>
      <p class="tagline">The sequel to Christmas. February 25th.</p>
      <div class="countdown" v-if="daysUntil !== null">
        <h2>{{ daysUntil }} days until Christmas Too</h2>
      </div>
    </div>
    
    <div class="description">
      <p>Fill the gap between New Years and Easter. Gather with friends and family to laugh, drink, and celebrate life during the coldest time of the year.</p>
    </div>
    
    <div class="cta-section">
      <router-link to="/sacrament" class="cta-button">Read the Sacrament</router-link>
      <router-link to="/origins" class="cta-button">The Origins</router-link>
      <div class="easter-egg"><!-- Remember the lone driver --></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const daysUntil = ref(null)

function calculateDaysUntil() {
  const today = new Date()
  const currentYear = today.getFullYear()
  
  // Christmas Too is February 25th
  let christmasToo = new Date(currentYear, 1, 25) // Month is 0-indexed
  
  // If Christmas Too has already passed this year, calculate for next year
  if (today > christmasToo) {
    christmasToo = new Date(currentYear + 1, 1, 25)
  }
  
  // Calculate difference in days
  const diffTime = christmasToo - today
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  
  return diffDays
}

onMounted(() => {
  daysUntil.value = calculateDaysUntil()
  
  // Easter egg: Console message
  console.log('He pulled a water out of his console. He would not drink himself.')
  
  // Animate tree lights
  animateTreeLights()
})

function animateTreeLights() {
  const colors = ['#ff0066', '#00ffff', '#ffcc00']
  const ornaments = document.querySelectorAll('.tree-ornament:not(:has(img))')
  
  // Initial random colors
  ornaments.forEach(ornament => {
    ornament.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  })
  
  // Change colors periodically
  setInterval(() => {
    ornaments.forEach(ornament => {
      setTimeout(() => {
        ornament.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      }, Math.random() * 500)
    })
  }, 2000)
  
  // Add glowing effect to real ornaments
  const realOrnaments = document.querySelectorAll('.real-ornament')
  setInterval(() => {
    realOrnaments.forEach(ornament => {
      const brightness = 1 + Math.random() * 0.3
      ornament.style.filter = `drop-shadow(0 0 5px rgba(255, 255, 255, 0.6)) brightness(${brightness})`
    })
  }, 1000)
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: #e4e4e4;
  font-family: 'Courier New', monospace;
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 5px;
  border: 1px solid #00ffff;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.5);
  position: relative;
}

/* Cyber Christmas Tree */
.cyber-tree-container {
  position: relative;
  height: 300px;
  margin: 0 auto 2rem;
  width: 100%;
  max-width: 300px;
}

.cyber-tree {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.tree-star {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: #ffcc00;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
  z-index: 5;
  box-shadow: 0 0 15px #ffcc00, 0 0 30px #ffcc00;
  animation: star-pulse 2s infinite alternate;
}

@keyframes star-pulse {
  0% {
    opacity: 0.7;
    box-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00;
  }
  100% {
    opacity: 1;
    box-shadow: 0 0 20px #ffcc00, 0 0 40px #ffcc00;
  }
}

.tree-top {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: #00ffff;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  z-index: 4;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
}

.tree-middle {
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 80px;
  background: #00ffff;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  z-index: 3;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
}

.tree-bottom {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 100px;
  background: #00ffff;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  z-index: 2;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.7);
}

.tree-trunk {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 50px;
  background: #ff0066;
  z-index: 1;
  box-shadow: 0 0 10px rgba(255, 0, 102, 0.7);
}

.tree-ornament {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  z-index: 6;
  box-shadow: 0 0 8px currentColor;
  transition: background-color 0.5s ease;
}

.real-ornament {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.6));
}

.tree-ornament-1 {
  top: 50px;
  left: 50%;
  transform: translateX(-30px);
}

.tree-ornament-2 {
  top: 65px;
  left: 50%;
  transform: translateX(15px);
}

.tree-ornament-3 {
  top: 100px;
  left: 50%;
  transform: translateX(-40px);
}

.tree-ornament-4 {
  top: 120px;
  left: 50%;
  transform: translateX(30px);
}

.tree-ornament-5 {
  top: 160px;
  left: 50%;
  transform: translateX(-60px);
}

.tree-ornament-6 {
  top: 180px;
  left: 50%;
  transform: translateX(45px);
}

.tree-lights {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 220px;
  background: linear-gradient(transparent, transparent), 
    radial-gradient(circle at 30% 40%, #ffcc00 1px, transparent 3px),
    radial-gradient(circle at 70% 60%, #ff0066 1px, transparent 3px),
    radial-gradient(circle at 45% 75%, #00ffff 1px, transparent 3px),
    radial-gradient(circle at 60% 25%, #ff0066 1px, transparent 3px),
    radial-gradient(circle at 20% 55%, #00ffff 1px, transparent 3px),
    radial-gradient(circle at 80% 45%, #ffcc00 1px, transparent 3px),
    radial-gradient(circle at 40% 90%, #ff0066 1px, transparent 3px);
  z-index: 5;
  opacity: 0.8;
  animation: lights-twinkle 3s infinite alternate;
}

@keyframes lights-twinkle {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

h1 {
  font-size: 5rem;
  margin-bottom: 1rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-shadow: 0 0 10px #ff0066, 0 0 20px #ff0066;
  color: #ffffff;
}

.too {
  color: #00ffff;
  font-style: italic;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
}

.tagline {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
}

.countdown {
  margin: 2rem 0;
  padding: 1rem;
  background: rgba(255, 0, 102, 0.2);
  border-radius: 5px;
  border: 1px dashed #ff0066;
}

.description {
  text-align: center;
  max-width: 800px;
  margin-bottom: 3rem;
  font-size: 1.2rem;
  line-height: 1.6;
  background: rgba(0, 0, 0, 0.6);
  padding: 2rem;
  border-radius: 5px;
}

.theme-elements {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.theme-pill {
  padding: 0.5rem 1rem;
  background: #ff0066;
  color: white;
  border-radius: 20px;
  font-weight: bold;
}

.cyberpunk {
  background: #00ffff;
  color: #000;
}

.faith {
  background: #ffcc00;
  color: #000;
}

.cta-section {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #ff0066, #ff3300);
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  text-transform: uppercase;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  overflow: hidden;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(255, 0, 102, 0.4);
}

.cta-button:hover::after {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255, 255, 255, 0.1);
  transform: rotate(30deg);
  pointer-events: none;
}

.easter-egg {
  width: 10px;
  height: 10px;
  position: fixed;
  bottom: 10px;
  right: 10px;
  cursor: help;
}

.easter-egg:hover::after {
  content: "Chunbau is watching";
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(0, 0, 0, 0.8);
  color: #00ffff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  white-space: nowrap;
}

/* Present styles */
.presents-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  z-index: 7;
}

.present {
  position: absolute;
  border-radius: 2px;
  box-shadow: 0 0 10px currentColor;
}

.present-1 {
  width: 40px;
  height: 35px;
  background: #ff0066;
  bottom: 0;
  left: 35px;
  z-index: 8;
}

.present-1::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 100%;
  background: #ffcc00;
  z-index: 9;
}

.present-1::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 10px;
  background: #ffcc00;
  z-index: 9;
}

.present-2 {
  width: 50px;
  height: 30px;
  background: #00ffff;
  bottom: 0;
  left: 85px;
  z-index: 7;
}

.present-2::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 100%;
  background: #ff0066;
  z-index: 9;
}

.present-2::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 10px;
  background: #ff0066;
  z-index: 9;
}

.present-3 {
  width: 30px;
  height: 25px;
  background: #ffcc00;
  bottom: 0;
  left: 10px;
  z-index: 6;
}

.present-3::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 100%;
  background: #00ffff;
  z-index: 9;
}

.present-3::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 6px;
  background: #00ffff;
  z-index: 9;
}

@media (max-width: 768px) {
  h1 {
    font-size: 3rem;
  }
  
  .tagline {
    font-size: 1.2rem;
  }
  
  .description {
    font-size: 1rem;
  }
  
  .cyber-tree-container {
    height: 250px;
  }
}
</style>