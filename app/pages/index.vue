<template>
  <Hero />
  <section id="experience" class="section">
    <h2 class="section-title">Expérience Professionnelle</h2>
    <div class="timeline">
      <ExperienceCard :card="goweb!" />
      <ExperienceCard v-for="exp in experiences" :key="exp.id" :card="exp" />
    </div>
  </section>
  <section id="formation" class="section">
    <h2 class="section-title">Formation</h2>
    <div class="education-grid">
      <FormationCard v-for="form in formations" :key="form.id" :card="form" />
    </div>
  </section>
  <section id="projects" class="section">
    <h2 class="section-title">Projets Personnels</h2>
    <div class="projects-grid">
      <ProjectCard v-for="proj in projects" :key="proj.id" :card="proj" />
    </div>
  </section>
  <Contact />
</template>

<script setup lang="ts">
const goweb = await queryCollection("experience")
  .where("companyName", "=", "Goweb")
  .first();
const experiences = await queryCollection("experience")
  .where("companyName", "<>", "Goweb")
  .order("startDate", "DESC")
  .all();

const formations = await queryCollection("formation")
  .order("date", "DESC")
  .all();

const projects = await queryCollection("projet").all();
</script>

<style lang="css" scoped>
.section {
  padding: 4rem 0;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.section-title {
  font-family: "Syne", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 2px;
}

.timeline {
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--primary) 0%, var(--secondary) 100%);
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .section {
    padding: 2rem 0;
  }
  .section-title {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
}
</style>
