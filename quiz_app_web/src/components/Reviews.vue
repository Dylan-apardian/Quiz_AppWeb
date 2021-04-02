<template>
  <div class="Reviews">
    <app-header></app-header>
    <h1>Reviews</h1>
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
.Reviews {
  display: flex;
  flex-direction: column;
}
</style>
