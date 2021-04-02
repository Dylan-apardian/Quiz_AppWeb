<template>
  <div class="Apropos">
      <app-header></app-header>
      <h1>A propos</h1>
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
.Apropos {
  display: flex;
  flex-direction: column;
}
</style>
