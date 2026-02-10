<template>
  <header>
    <div class="logo">&lt;DevOps/&gt;</div>

    <button
      class="burger-btn"
      @click="isMenuOpen = !isMenuOpen"
      aria-label="Toggle menu"
    >
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </button>

    <nav :class="{ open: isMenuOpen }">
      <a
        v-for="link in links?.links"
        :key="link.name"
        :href="link.url"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
      </a>
    </nav>
  </header>
</template>

<script lang="ts" setup>
const { data: links } = await useAsyncData("links", () => {
  return queryCollection("links").first();
});

const isMenuOpen = ref(false);
</script>

<style lang="css" scoped>
header {
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  animation: slideDown 0.8s ease-out;
}

@keyframes slideDown {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.logo {
  font-family: "Syne", sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
nav {
  display: flex;
  gap: 2rem;
}

nav a {
  color: var(--text-muted);
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  position: relative;
}

nav a::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

nav a:hover {
  color: var(--primary);
}

nav a:hover::after {
  width: 100%;
}

.burger-btn {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1001;
}

.burger-btn span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--primary);
  transition: all 0.3s ease;
  border-radius: 3px;
}

.burger-btn span.open:nth-child(1) {
  transform: rotate(45deg) translate(7px, 7px);
}

.burger-btn span.open:nth-child(2) {
  opacity: 0;
}

.burger-btn span.open:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -7px);
}

@media (max-width: 768px) {
  .logo {
    font-size: 1rem;
  }

  .burger-btn {
    display: flex;
  }

  nav {
    position: fixed;
    top: 0;
    right: -100%;
    height: 100%;
    width: 70%;
    max-width: 300px;
    background: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    transition: right 0.3s ease;
    z-index: 1000;
    border-left: 1px solid rgba(255, 255, 255, 0.1);
  }

  nav.open {
    left: 0;
  }

  nav a {
    font-size: 1.2rem;
  }

  nav a::after {
    bottom: -8px;
  }
}
</style>
