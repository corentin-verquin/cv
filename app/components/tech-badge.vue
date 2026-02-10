<template>
  <div :class="[' tech-stack', { 'tech-stack--small': props.small }]">
    <span
      v-for="tag in tags"
      :key="tag"
      :class="[
        'tech-tag',
        {
          'tech-tag--small': props.small,
          'tech-tag--primary': props.type === 'primary',
          'tech-tag--secondary': props.type === 'secondary',
        },
      ]"
      >{{ tag }}</span
    >
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  tags: string[];
  small?: boolean;
  type?: "primary" | "secondary";
}>();
</script>

<style lang="css" scoped>
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.tech-stack--small {
  gap: 0.5rem;
  margin-top: 1rem;
}

.tech-tag {
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  cursor: default;
}

.tech-tag--small {
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  border-radius: 6px;
}

.tech-tag:hover {
  border-color: var(--primary);
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 255, 136, 0.2);
}

.tech-tag--primary {
  background: rgba(0, 255, 136, 0.1);
  color: var(--primary);
  border: 1px solid rgba(0, 255, 136, 0.3);
}

.tech-tag--secondary {
  background: rgba(0, 212, 255, 0.1);
  color: var(--secondary);
  border: 1px solid rgba(0, 212, 255, 0.2);
}

.tech-tag--secondary:hover {
  background: rgba(0, 212, 255, 0.2);
  border-color: var(--secondary);
}
</style>
