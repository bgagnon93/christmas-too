<template>
  <div class="origins-page">
    <div class="snow-overlay"></div>
    <div class="christmas-decoration-left"></div>
    <div class="christmas-decoration-right"></div>
    
    <div class="origins-container">
      <h1>The Origins</h1>
      
      <div class="timeline">
        <div class="timeline-event">
          <div class="timeline-date">February 15</div>
          <div class="timeline-content">
            <h3>Alex Cullen's 30th Birthday</h3>
            <p>The first Christmas Too occurred on this day.</p>
            <div class="image-placeholder">
              <img src="https://placehold.co/600x400/232323/ff0066?text=The+Beginning" alt="Symbolic beginning" />
              <span class="glitch-text">No faces shown</span>
            </div>
          </div>
        </div>
        
        <div class="timeline-event">
          <div class="timeline-date">The Night</div>
          <div class="timeline-content">
            <h3>The Brookline Snowstorm</h3>
            <p>Alex, Reilly, Brian, and Gabe were trapped in a horrific snowstorm in Brookline, unable to get home to Foxborough.</p>
            <div class="image-placeholder snowstorm-image">
              <img src="../assets/brookline_streets.jpg" alt="Snowy Brookline streets" />
              <div class="location-marker">BROOKLINE</div>
              <div class="condition-marker">WHITEOUT</div>
              <div class="detail-marker">STRANDED</div>
            </div>
          </div>
        </div>
        
        <div class="timeline-event">
          <div class="timeline-date">60:00</div>
          <div class="timeline-content">
            <h3>The Savior Arrives</h3>
            <p>A lone Uber driver, Chunbau, braved the storm to rescue the stranded friends.</p>
            <div class="image-placeholder pickup-image">
              <img src="../assets/the_pickup.jpg" alt="Chunbau's car approaching in the snowstorm" />
              <div class="cyberpunk-badge">SURGE PRICING ACTIVE</div>
              <div class="time-marker">60:00</div>
              <div class="location-marker">BROOKLINE</div>
            </div>
          </div>
        </div>
        
        <div class="timeline-event">
          <div class="timeline-date">Aftermath</div>
          <div class="timeline-content">
            <h3>A New Tradition</h3>
            <p>Thus, Christmas Too was born - now celebrated annually on February 25th.</p>
            <div class="neo-crucifix">✝</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Easter egg: Click on timeline events to reveal hidden messages
import { onMounted } from 'vue'

onMounted(() => {
  const timelineEvents = document.querySelectorAll('.timeline-event')
  
  timelineEvents.forEach((event, index) => {
    event.addEventListener('click', () => {
      const messages = [
        "The time on the dashboard read 60:00",
        "His fingers were blackened with frost",
        "The console water remained untouched",
        "February 25th: Mark it on your calendar"
      ]
      
      // Show a fleeting message
      const message = document.createElement('div')
      message.className = 'hidden-message'
      message.textContent = messages[index % messages.length]
      event.appendChild(message)
      
      setTimeout(() => {
        message.classList.add('show')
      }, 100)
      
      setTimeout(() => {
        message.classList.remove('show')
        setTimeout(() => {
          message.remove()
        }, 500)
      }, 3000)
    })
  })
})
</script>

<style scoped>
.origins-page {
  min-height: 100vh;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 100%);
  color: #e4e4e4;
  position: relative;
  overflow: hidden;
}

/* Christmas decorations on sides */
.christmas-decoration-left,
.christmas-decoration-right {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 80vh;
  z-index: 2;
  background-repeat: repeat-y;
  pointer-events: none;
  opacity: 0.6;
}

.christmas-decoration-left {
  left: 10px;
  background-image: linear-gradient(transparent 0%, transparent 40%, transparent 60%, transparent 100%), 
                    radial-gradient(circle at center, #ff0066 8px, transparent 8px),
                    radial-gradient(circle at center, #00ffff 8px, transparent 8px),
                    radial-gradient(circle at center, #ffcc00 8px, transparent 8px);
  background-size: 100% 150px;
  animation: decorations-move 10s linear infinite;
}

.christmas-decoration-right {
  right: 10px;
  background-image: linear-gradient(transparent 0%, transparent 40%, transparent 60%, transparent 100%), 
                    radial-gradient(circle at center, #ffcc00 8px, transparent 8px),
                    radial-gradient(circle at center, #ff0066 8px, transparent 8px),
                    radial-gradient(circle at center, #00ffff 8px, transparent 8px);
  background-size: 100% 150px;
  animation: decorations-move 10s linear infinite reverse;
}

@keyframes decorations-move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 150px;
  }
}

.snow-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><circle cx="10" cy="10" r="1" fill="%23ffffff" opacity="0.3"/></svg>');
  background-repeat: repeat;
  pointer-events: none;
  animation: snow 20s linear infinite;
  z-index: 1;
}

@keyframes snow {
  0% { background-position: 0 0; }
  100% { background-position: 500px 1000px; }
}

.origins-container {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

h1 {
  text-align: center;
  font-size: 3.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
  text-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff;
  font-family: 'Courier New', monospace;
}

.timeline {
  position: relative;
  padding: 2rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, transparent, #00ffff, #ff0066, transparent);
  transform: translateX(-50%);
}

.timeline-event {
  display: flex;
  margin-bottom: 4rem;
  position: relative;
  cursor: pointer;
}

.timeline-event:nth-child(odd) {
  flex-direction: row-reverse;
}

.timeline-date {
  width: 120px;
  padding: 1rem;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #ff0066;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  color: #00ffff;
  margin: 0 2rem;
  position: relative;
  z-index: 2;
  box-shadow: 0 0 10px rgba(255, 0, 102, 0.3);
}

.timeline-content {
  flex: 1;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid #00ffff;
  border-radius: 5px;
  position: relative;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px rgba(0, 255, 255, 0.2);
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 255, 255, 0.4);
}

.timeline-content h3 {
  color: #ffffff;
  margin-bottom: 1rem;
  border-bottom: 1px dashed #666;
  padding-bottom: 0.5rem;
  font-family: 'Courier New', monospace;
}

.image-placeholder {
  margin-top: 1.5rem;
  position: relative;
  overflow: hidden;
}

.image-placeholder img {
  width: 100%;
  height: auto;
  border-radius: 5px;
  transition: all 0.5s ease;
}

.image-placeholder:hover img {
  transform: scale(1.05);
}

.cyberpunk-badge {
  position: absolute;
  bottom: 15px;
  right: 15px;
  background: rgba(255, 0, 102, 0.8);
  color: #ffffff;
  padding: 5px 10px;
  font-size: 0.8rem;
  font-weight: bold;
  border-radius: 3px;
  animation: blink 2s infinite;
}

.pickup-image, .snowstorm-image {
  position: relative;
  border: 2px solid #00ffff;
}

.pickup-image img, .snowstorm-image img {
  filter: saturate(1.2) contrast(1.1);
}

.condition-marker {
  position: absolute;
  bottom: 15px;
  left: 15px;
  background: rgba(255, 255, 255, 0.7);
  color: #000000;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

.detail-marker {
  position: absolute;
  bottom: 55px;
  left: 15px;
  background: rgba(255, 0, 102, 0.7);
  color: #ffffff;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

.time-marker {
  position: absolute;
  top: 15px;
  left: 15px;
  background: rgba(0, 255, 255, 0.7);
  color: #000000;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

.location-marker {
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 204, 0, 0.7);
  color: #000000;
  padding: 5px 10px;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 3px;
  font-family: 'Courier New', monospace;
}

@keyframes blink {
  0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100% {
    opacity: 1;
  }
  20%, 21.999%, 63%, 63.999%, 65%, 69.999% {
    opacity: 0.3;
  }
}

.neo-crucifix {
  font-size: 5rem;
  text-align: center;
  margin: 2rem 0;
  color: #ffcc00;
  text-shadow: 0 0 15px #ffcc00;
}

.glitch-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
  font-family: monospace;
  font-weight: bold;
  mix-blend-mode: difference;
  text-transform: uppercase;
  pointer-events: none;
  animation: glitchEffect 3s infinite;
}

@keyframes glitchEffect {
  0%, 100% { transform: translate(-50%, -50%); opacity: 0.8; }
  92% { transform: translate(-52%, -50%); opacity: 0.8; }
  94% { transform: translate(-50%, -53%); opacity: 0.8; }
  96% { transform: translate(-51%, -48%); opacity: 0.8; }
  98% { transform: translate(-49%, -50%); opacity: 0.8; }
}

.hidden-message {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  background: #ff0066;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 0.9rem;
  opacity: 0;
  transition: all 0.5s ease;
  box-shadow: 0 0 10px rgba(255, 0, 102, 0.5);
  pointer-events: none;
}

.hidden-message.show {
  opacity: 1;
  top: -70px;
}

@media (max-width: 768px) {
  .timeline::before {
    left: 30px;
  }
  
  .timeline-event,
  .timeline-event:nth-child(odd) {
    flex-direction: column;
    margin-left: 40px;
  }
  
  .timeline-date {
    width: auto;
    margin: 0 0 1rem 0;
    align-self: flex-start;
  }
  
  h1 {
    font-size: 2.5rem;
  }
}
</style>