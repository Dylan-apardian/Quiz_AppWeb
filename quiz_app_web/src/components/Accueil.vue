<template>
  <div class="Accueil">
      <app-header></app-header>
      <h1>Accueil</h1>
  </div>
</template>

<script>
// import your components here
import Header from './Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style scoped>
.Accueil {
  display: flex;
  flex-direction: column;
}
</style>
