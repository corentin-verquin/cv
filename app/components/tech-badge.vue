<template>
  <div class="tech-stack">
    <span v-for="tag in tags" :key="tag" class="tech-tag">{{ tag }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tags: string[];
}>();
</script>

<style lang="css" scoped>
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.tech-tag {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 136, 0.2);
}
</style>
