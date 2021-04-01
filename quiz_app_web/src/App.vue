<template >
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Apropos from './components/Apropos.vue'
export default {
  components: {Header, Apropos},
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
