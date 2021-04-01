<template >
  <div id="app">
    <img src="./assets/CoolClips_peop3452.png" align= "top" >
    <Destins arriver ='Paris' sortir='Montréal' date='23-06-2021'/>
  </div>
</template>

<script>

import Destins from './pages/Destin.vue'
export default {
  name: 'App',
  components: {
    Destins
  }
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
