<template>
  <section v-if="hero" class="hero">
    <div class="hero-content">
      <div class="status-badge">
        <span class="status-dot"></span>
        Disponible pour de nouveaux défis
      </div>
      <h1>{{ hero.title }}</h1>
      <div class="subtitle">
        <ContentRenderer :value="hero" />
      </div>

      <TechBadge :tags="hero.skills" />
    </div>
  </section>
</template>

<script lang="ts" setup>
const hero = await queryCollection("hero").path("/hero").first();
</script>

<style lang="css" scoped>
.hero {
  padding: 8rem 0 6rem;
  animation: fadeInUp 1s ease-out 0.3s both;
}

@keyframes fadeInUp {
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.hero-content {
  max-width: 900px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(0, 255, 136, 0.1);
  border: 1px solid var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  margin-bottom: 2rem;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    box-shadow: 0 0 0 0 rgba(0, 255, 136, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(0, 255, 136, 0);
  }
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--primary);
  border-radius: 50%;
  animation: blink 1.5s ease-in-out infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

h1 {
  font-family: "Syne", sans-serif;
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--text) 0%, var(--primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  font-weight: 300;
}

@media (max-width: 768px) {
  .hero {
    padding: 2rem 0 1rem;
  }
  h1 {
    font-size: 2rem;
  }
  .subtitle {
    font-size: 1rem;
  }
  .status-badge{
    display: none;
  }
}
</style>
