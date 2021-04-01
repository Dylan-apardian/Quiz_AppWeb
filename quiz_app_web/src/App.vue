<template >
  <div id="app">
    <Header/>
    <HelloWorld/>
    <Destin/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Destin from './components/Destin.vue'
import Header from './components/Header.vue'
export default {
  components: {HelloWorld, Destin, Header},
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
