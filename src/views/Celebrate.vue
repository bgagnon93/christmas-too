<template>
  <div class="celebrate-page">
    <h1>How To <span class="celebrate-text">Celebrate</span></h1>
    
    <div class="content-grid">
      <div class="celebration-card">
        <div class="card-icon">
          <span class="icon">🥃</span>
        </div>
        <h3>Drink</h3>
        <p>The Christmas Too tradition starts with a toast to Chunbau. Share drinks with friends during the coldest time of year.</p>
        <div class="recipe">
          <h4>The Chunbau's Console</h4>
          <ul>
            <li>2 oz whiskey</li>
            <li>1/2 oz maple syrup</li>
            <li>3 dashes bitters</li>
            <li>Garnish with icicle (or ice)</li>
          </ul>
        </div>
      </div>
      
      <div class="celebration-card">
        <div class="card-icon">
          <span class="icon">🎭</span>
        </div>
        <h3>Gather</h3>
        <p>Invite friends and family during the barren stretch between holidays. Retell the tale of the first Christmas Too.</p>
        <div class="tip">
          <h4>Traditional Greeting</h4>
          <p>"May your console always be full"</p>
          <p>Response: "And your surge pricing low"</p>
        </div>
      </div>
      
      <div class="celebration-card">
        <div class="card-icon">
          <span class="icon">🎁</span>
        </div>
        <h3>Give</h3>
        <p>Small token gifts wrapped in neon paper or accented with LED lights. Cyberpunk meets 1950s nostalgia.</p>
        <div class="gift-ideas">
          <h4>Gift Ideas</h4>
          <ul>
            <li>Retro-futuristic ornaments</li>
            <li>Neon-colored scarves (for the cold)</li>
            <li>Digital gift cards in physical form</li>
            <li>Anything that glows</li>
          </ul>
        </div>
      </div>
      
      <div class="celebration-card">
        <div class="card-icon">
          <span class="icon">🙏</span>
        </div>
        <h3>Remember</h3>
        <p>Recite the Sacrament at exactly 60:00. Remember Chunbau, the kindly driver who braved the storm.</p>
        <div class="memory-ritual">
          <button @click="toggleMemory" class="memory-button">{{ memoryButtonText }}</button>
          <div v-if="showMemory" class="memory-text">
            <p>Light a single blue candle at 60:00. Pass around a bottle of water, but no one drinks. Place it in the center of your gathering.</p>
            <p class="whisper-text">"His fingers blackened with the bite of frost..."</p>
          </div>
        </div>
      </div>
    </div>
    
    <div class="date-reminder">
      <h2>February 25th</h2>
      <p>Mark your calendar. Set a reminder. Christmas Too waits for no one.</p>
    </div>
    
    <div class="hidden-message" ref="hiddenImage"><!-- Easter egg --></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showMemory = ref(false)
const memoryButtonText = ref('Reveal Ritual')
const hiddenImage = ref(null)

function toggleMemory() {
  showMemory.value = !showMemory.value
  memoryButtonText.value = showMemory.value ? 'Hide Ritual' : 'Reveal Ritual'
}

onMounted(() => {
  // Easter egg: Konami code reveals hidden image
  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
  let konamiIndex = 0
  
  document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
      konamiIndex++
      
      if (konamiIndex === konamiCode.length) {
        // Reveal easter egg
        if (hiddenImage.value) {
          hiddenImage.value.innerHTML = `
            <div class="easter-egg-reveal">
              <img src="https://placehold.co/800x300/232323/00ffff?text=The+Real+Chunbau" alt="The real Chunbau" />
              <p class="easter-egg-text">You found the secret! Share this with no one.</p>
            </div>
          `
        }
        konamiIndex = 0
      }
    } else {
      konamiIndex = 0
    }
  })
})
</script>

<style scoped>
.celebrate-page {
  min-height: 100vh;
  padding: 3rem 1rem;
  background: linear-gradient(to bottom, #1a0022, #000000);
  color: #e4e4e4;
  font-family: 'Courier New', monospace;
}

h1 {
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
  text-shadow: 0 0 10px #ff0066, 0 0 20px #ff0066;
}

.celebrate-text {
  color: #00ffff;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 4rem auto;
}

.celebration-card {
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ffff;
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.celebration-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: #ff0066;
}

.celebration-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 255, 255, 0.2);
}

.card-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  margin: 0 auto 1.5rem auto;
  background: rgba(255, 0, 102, 0.2);
  border: 2px solid #ff0066;
}

.icon {
  font-size: 2rem;
}

.celebration-card h3 {
  text-align: center;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

.celebration-card p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.recipe, .tip, .gift-ideas, .memory-ritual {
  background: rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  border-radius: 5px;
  border-left: 3px solid #00ffff;
}

.recipe h4, .tip h4, .gift-ideas h4 {
  color: #00ffff;
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

ul li::before {
  content: '>';
  position: absolute;
  left: 0;
  color: #ff0066;
}

.memory-button {
  background: linear-gradient(45deg, #0a0a0a, #333333);
  color: #00ffff;
  border: 1px solid #00ffff;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-family: 'Courier New', monospace;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  width: 100%;
}

.memory-button:hover {
  background: #00ffff;
  color: #000000;
}

.memory-text {
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 5px;
  animation: fadeIn 1s;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.whisper-text {
  font-style: italic;
  color: #a0a0a0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.date-reminder {
  text-align: center;
  margin: 4rem auto;
  padding: 2rem;
  max-width: 500px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ff0066;
  border-radius: 10px;
  box-shadow: 0 0 25px rgba(255, 0, 102, 0.3);
}

.date-reminder h2 {
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #ff0066;
}

.hidden-message {
  min-height: 10px;
}

.easter-egg-reveal {
  margin: 3rem auto;
  max-width: 800px;
  text-align: center;
  animation: glowPulse 2s infinite;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
}

.easter-egg-text {
  margin-top: 1rem;
  color: #ff0066;
  font-style: italic;
}

@keyframes glowPulse {
  0%, 100% { box-shadow: 0 0 10px rgba(0, 255, 255, 0.5); }
  50% { box-shadow: 0 0 25px rgba(0, 255, 255, 0.8); }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
  
  .celebration-card {
    padding: 1.5rem;
  }
  
  .content-grid {
    grid-template-columns: 1fr;
  }
}
</style>