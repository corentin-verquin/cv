<template>
  <section id="contact" class="contact-section">
    <h2 class="contact-title">Travaillons ensemble</h2>
    <p class="contact-subtitle">
      Intéressé par mes compétences en Platform Engineering ? Discutons de votre
      prochain projet !
    </p>
    <div class="contact-buttons">
      <a
        v-for="link in links?.links"
        :key="link.name"
        :href="link.url"
        :class="['btn', link.primary ? 'btn-primary' : 'btn-secondary']"
      >
        {{ link.name }}
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { data: links } = await useAsyncData("contact", () => {
  return queryCollection("contact").first();
});
</script>

<style lang="css" scoped>
.contact-section {
  background: linear-gradient(
    135deg,
    var(--card-bg) 0%,
    rgba(0, 255, 136, 0.05) 100%
  );
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 24px;
  padding: 4rem;
  text-align: center;
  margin: 4rem 0;
}

.contact-title {
  font-family: "Syne", sans-serif;
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.contact-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .contact-title {
    font-size: 1.5rem;
  }
  .contact-subtitle {
    font-size: 1rem;
  }
  .contact-section {
    padding: 1rem;
  }
  .contact-buttons {
    flex-direction: column;
  }
}
</style>
