<template>
  <div class="project-card fade-in">
    <div class="project-header">
      <div class="project-icon">{{ card.icon }}</div>
      <div v-if="card.production" class="project-status">Production</div>
      <a v-if="card.link" :href="card.link" class="project-demo"
        >Voir la démo →</a
      >
    </div>
    <h3 class="project-title">{{ card.title }}</h3>
    <div class="project-description">
      <ContentRenderer :value="card" />
    </div>
    <TechBadge :tags="card.techno" small type="secondary" />
  </div>
</template>

<script setup lang="ts">
import type { ProjetCollectionItem } from "@nuxt/content";

const props = defineProps<{
  card: ProjetCollectionItem;
}>();
</script>

<style lang="css">
.project-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.project-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  transform: scaleX(0);
  transition: transform 0.4s ease;
}

.project-card:hover {
  border-color: var(--primary);
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 255, 136, 0.15);
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-icon {
  font-size: 2.5rem;
  filter: grayscale(0.3);
}

.project-status {
  background: rgba(0, 255, 136, 0.1);
  color: var(--primary);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  border: 1px solid rgba(0, 255, 136, 0.3);
}

.project-demo {
  color: var(--secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.project-demo:hover {
  color: var(--primary);
  transform: translateX(5px);
}

.project-title {
  font-family: "Syne", sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text);
}

.project-description {
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .project-title {
    font-size: 1.2rem;
  }
  .project-description{
    font-size: 1rem;
  }
}
</style>
