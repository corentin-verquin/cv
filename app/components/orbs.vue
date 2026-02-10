<template>
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
</template>

<style lang="css" scoped>
.orb {
  position: fixed;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  pointer-events: none;
  z-index: 0;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, var(--primary) 0%, transparent 70%);
  top: -200px;
  left: -200px;
  animation: float 15s ease-in-out infinite;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, var(--secondary) 0%, transparent 70%);
  bottom: -250px;
  right: -250px;
  animation: float 20s ease-in-out infinite reverse;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(100px, 100px);
  }
}
</style>
