<template>
  <div class="experience-card fade-in">
    <div class="company-header">
      <div>
        <div class="company-name">{{ card.companyName }}</div>
        <div class="job-title">{{ card.jobTitle }}</div>
        <div class="location">📍 {{ card.location }}</div>
      </div>
      <div class="duration">
        {{ formatDate(card.startDate) }} -
        {{ card.endDate ? formatDate(card.endDate) : "Aujourd'hui" }} ·
        {{ calculateDuration(card.startDate, card.endDate) }}
      </div>
    </div>
    <div class="description" :class="{ expanded: isExpanded }">
      <ContentRenderer :value="card" />
    </div>
    <button
      v-if="isMobile && card.body.value.length > 0"
      class="toggle-btn"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? "Voir moins" : "Voir plus" }}
      <span class="arrow" :class="{ rotated: isExpanded }">▼</span>
    </button>
    <TechBadge
      v-if="card.skills && card.skills.length > 0"
      :tags="card.skills"
      small
      type="primary"
    />
  </div>
</template>

<script setup lang="ts">
import type { ExperienceCollectionItem } from "@nuxt/content";

const props = defineProps<{
  card: ExperienceCollectionItem;
}>();

const isExpanded = ref(false);
const isMobile = ref(false);

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});

function checkMobile() {
  isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) {
    isExpanded.value = false;
  }
}

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    year: "numeric",
  };
  return date.toLocaleDateString("fr-FR", options);
}

function calculateDuration(start: string, end?: string) {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();
  if (months < 0) {
    years--;
    months += 12;
  }

  const yearStr = years > 0 ? `${years} an${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} mois` : "";
  if (yearStr && monthStr) return `${yearStr} ${monthStr}`;
  return yearStr || monthStr || "moins d'un mois";
}
</script>

<style lang="css">
.experience-card {
  position: relative;
  background: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.experience-card::before {
  content: "";
  position: absolute;
  left: -3rem;
  top: 2rem;
  width: 12px;
  height: 12px;
  background: var(--primary);
  border-radius: 50%;
  border: 3px solid var(--darker);
  box-shadow: 0 0 0 4px var(--card-bg);
}

.experience-card:hover {
  border-color: var(--primary);
  transform: translateX(10px);
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.1);
}

.company-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.company-name {
  font-family: "Syne", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.job-title {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.duration {
  font-size: 0.85rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.05);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  white-space: nowrap;
}

.location {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.description [data-content-id] p,
.description [data-content-id] ul {
  color: var(--text-muted);
  margin-bottom: 1rem;
  line-height: 1.8;
}

.toggle-btn {
  display: none;
}

@media (max-width: 768px) {
  .company-header {
    flex-direction: column;
    flex-flow: column-reverse;
  }
  .company-name {
    font-size: 1.1rem;
  }
  .job-title {
    font-size: 0.9rem;
  }
  .location {
    font-size: 0.7rem;
  }
  .duration {
    font-size: 0.5rem;
    margin-bottom: 1.2rem;
  }
  .description {
    font-size: 0.8rem;
    max-height: 150px;
    overflow: hidden;
    position: relative;
    transition: max-height 0.3s ease;
  }

  .description:not(.expanded)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    background: linear-gradient(transparent, var(--card-bg));
    pointer-events: none;
  }

  .description.expanded {
    max-height: none;
  }

  .description.expanded::after {
    display: none;
  }

  .toggle-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    color: var(--primary);
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    font-size: 0.8rem;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
    width: 100%;
    justify-content: center;
  }

  .arrow {
    transition: transform 0.3s ease;
    font-size: 0.7rem;
  }

  .arrow.rotated {
    transform: rotate(180deg);
  }

  .experience-card:hover{
    border-color: var(--card-bg);;
  }
}
</style>
