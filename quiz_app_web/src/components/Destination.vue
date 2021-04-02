<template>
  <div class="Destination">
      <app-header></app-header>
      <h1>Destination</h1>
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
.Destination {
  display: flex;
  flex-direction: column;
}
</style>
