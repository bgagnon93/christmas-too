<template>
  <div class="app">
    <div class="retro-overlay"></div>
    <div class="glitch-overlay"></div>
    <div class="snow-container">
      <div class="snow"></div>
      <div class="snow"></div>
      <div class="snow"></div>
    </div>

    <div class="tinsel-container">
      <div class="tinsel tinsel-top">
        <img src="./assets/tinsel.png" alt="Tinsel decoration" />
      </div>
      <div class="tinsel tinsel-left">
        <img src="./assets/tinsel.png" alt="Tinsel decoration" />
      </div>
      <div class="tinsel tinsel-right">
        <img src="./assets/tinsel.png" alt="Tinsel decoration" />
      </div>
      <div class="tinsel tinsel-bottom">
        <img src="./assets/tinsel.png" alt="Tinsel decoration" />
      </div>
    </div>

    <header>
      <div class="nav-container">
        <div class="logo" @click="navigateHome">
          <span class="neon-text">CHRISTMAS</span>
          <span class="neon-text-alt">2</span>
        </div>

        <nav>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/sacrament" class="nav-link">Sacrament</router-link>
          <router-link to="/origins" class="nav-link">Origins</router-link>
          <router-link to="/celebrate" class="nav-link">Celebrate</router-link>
        </nav>
      </div>
    </header>

    <main>
      <router-view v-slot="{ Component }">
        <transition name="page-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer>
      <div class="footer-content">
        <p>Christmas 2 | February 25th</p>
        <p class="footer-sacrament">60:00</p>
        <p class="copyright">Est. On Alex Cullen's 30th Birthday</p>
        <div class="christmas-ornament">
          <img src="./assets/ornament_1.png" alt="Christmas ornament" class="ornament-img" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function navigateHome() {
  router.push('/')
}
</script>

<style>
/* Global styles */
:root {
  --neon-pink: #ff0066;
  --neon-blue: #00ffff;
  --neon-yellow: #ffcc00;
  --dark-bg: #0a0a0a;
  --darker-bg: #000000;
  --tinsel-color1: var(--neon-pink);
  --tinsel-color2: var(--neon-blue);
  --tinsel-color3: var(--neon-yellow);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Courier New', monospace;
  background-color: var(--darker-bg);
  color: #e4e4e4;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

/* Retro/cyberpunk overlays */
.retro-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(0deg,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.1) 2px,
      transparent 2px,
      transparent 4px);
  pointer-events: none;
  z-index: 10;
  opacity: 0.3;
}

.glitch-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at center,
      transparent 0%,
      rgba(0, 255, 255, 0.05) 100%);
  pointer-events: none;
  z-index: 11;
  opacity: 0.5;
}

/* Snow effect */
.snow-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 12;
  overflow: hidden;
}

.snow {
  position: absolute;
  top: -100px;
  width: 100%;
  height: 100%;
  background-image:
    radial-gradient(4px 4px at 10% 10%, rgba(255, 255, 255, 0.8) 50%, transparent 0%),
    radial-gradient(3px 3px at 20% 50%, rgba(255, 255, 255, 0.7) 50%, transparent 0%),
    radial-gradient(2px 2px at 30% 20%, rgba(255, 255, 255, 0.6) 50%, transparent 0%),
    radial-gradient(4px 4px at 40% 70%, rgba(255, 255, 255, 0.7) 50%, transparent 0%),
    radial-gradient(2px 2px at 50% 40%, rgba(255, 255, 255, 0.6) 50%, transparent 0%),
    radial-gradient(3px 3px at 60% 80%, rgba(255, 255, 255, 0.7) 50%, transparent 0%),
    radial-gradient(2px 2px at 70% 10%, rgba(255, 255, 255, 0.6) 50%, transparent 0%),
    radial-gradient(4px 4px at 80% 30%, rgba(255, 255, 255, 0.7) 50%, transparent 0%),
    radial-gradient(3px 3px at 90% 60%, rgba(255, 255, 255, 0.6) 50%, transparent 0%);
  background-size: 800px 800px;
  animation: snow 15s linear infinite;
}

.snow:nth-child(2) {
  background-position: 100px 100px;
  animation-delay: -3s;
  animation-duration: 13s;
  opacity: 0.7;
}

.snow:nth-child(3) {
  background-position: 200px 200px;
  animation-delay: -6s;
  animation-duration: 17s;
  opacity: 0.5;
}

@keyframes snow {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(100vh);
  }
}

/* Tinsel effect */
.tinsel-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 20;
}

.tinsel {
  position: absolute;
  z-index: 15;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.7));
}

.tinsel img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tinsel-top {
  top: 0;
  left: 0;
  width: 100%;
  height: 30px;
  overflow: hidden;
}

.tinsel-top img {
  width: 100%;
  height: auto;
}

.tinsel-bottom {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  overflow: hidden;
}

.tinsel-bottom img {
  width: 100%;
  height: auto;
  transform: rotate(180deg);
}

.tinsel-left {
  top: 0;
  left: 0;
  width: 30px;
  height: 100%;
  overflow: hidden;
}

.tinsel-left img {
  width: auto;
  height: 100%;
  transform: rotate(-90deg);
}

.tinsel-right {
  top: 0;
  right: 0;
  width: 30px;
  height: 100%;
  overflow: hidden;
}

.tinsel-right img {
  width: auto;
  height: 100%;
  transform: rotate(90deg);
}

/* Header styles */
header {
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid var(--neon-blue);
  box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
  position: relative;
  z-index: 5;
  margin-top: 15px;
  /* Accounting for tinsel */
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.neon-text {
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 0 0 5px var(--neon-pink), 0 0 10px var(--neon-pink);
  letter-spacing: 2px;
}

.neon-text-alt {
  font-size: 1.8rem;
  font-weight: bold;
  font-style: italic;
  color: var(--neon-blue);
  text-shadow: 0 0 5px var(--neon-blue), 0 0 10px var(--neon-blue);
}

nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  padding: 0.3rem 0;
  transition: all 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--neon-pink);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--neon-pink);
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active {
  color: var(--neon-blue) !important;
}

.router-link-active::after {
  background: var(--neon-blue);
  width: 100%;
}

/* Main content area */
main {
  flex: 1;
  background: linear-gradient(135deg, var(--dark-bg) 0%, #1a0022 100%);
  position: relative;
  z-index: 2;
  margin: 0 15px;
  /* Accounting for tinsel */
  min-height: calc(100vh - 150px);
  /* Ensuring main content fits with tinsel */
}

/* Footer styles */
footer {
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.8);
  border-top: 1px solid var(--neon-pink);
  position: relative;
  z-index: 5;
  margin-bottom: 15px;
  /* Accounting for tinsel */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: #777;
}

.footer-sacrament {
  color: var(--neon-blue);
  cursor: help;
}

.footer-sacrament:hover {
  text-shadow: 0 0 5px var(--neon-blue);
}

.copyright {
  opacity: 0.7;
}

.christmas-ornament {
  position: absolute;
  right: 30px;
  top: -30px;
  width: 60px;
  height: 60px;
  transform-origin: center 0;
  animation: swing 3s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(255, 0, 102, 0.6));
}

.ornament-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@keyframes swing {

  0%,
  100% {
    transform: rotate(-5deg);
  }

  50% {
    transform: rotate(5deg);
  }
}

/* Page transitions */
.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-transition-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-transition-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Media queries */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  nav {
    width: 100%;
    justify-content: space-between;
  }

  .footer-content {
    justify-content: center;
    text-align: center;
  }

  .footer-content p {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}
</style>