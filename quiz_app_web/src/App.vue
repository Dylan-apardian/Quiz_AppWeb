<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/> 
    <Destin/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Destin from './components/Destin.vue'
export default {
  
  components: { HelloWorld,Destin },
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
  margin-top: 60px;
}
</style>
