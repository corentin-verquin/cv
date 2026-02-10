<template>
  <div class="education-card fade-in">
    <div class="degree">{{ card.title }}</div>
    <div class="school">{{card.location}}</div>
    <div class="year">{{card.date}}</div>
    <div class="body">
        <ContentRenderer :value="card" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { FormationCollectionItem } from '@nuxt/content';

const props = defineProps<{
  card: FormationCollectionItem;
}>();
</script>

<style lang="css">
.education-card {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.education-card:hover {
  border-color: var(--secondary);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
}

.degree {
  font-family: "Syne", sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--secondary);
  margin-bottom: 0.5rem;
}

.school {
  font-size: 1rem;
  color: var(--text);
  margin-bottom: 0.5rem;
}

.year {
  font-size: 0.85rem;
  color: var(--text-muted);
}

.body [data-content-id] p{
  color: var(--text-muted);
  margin-bottom: 1rem;
  margin-top: 1rem;
  line-height: 1.8;
}
</style>
