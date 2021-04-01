<template >
  <div id="app">
    <img src="./assets/CoolClips_peop3452.png" align= "top" >
    <Destins arriver ='Paris' sortir='Montréal' date='23-06-2021'/>
    <Header/>
    <HelloWorld/>
    <Destin/>
  </div>
</template>

<script>

import Destins from './pages/Destin.vue'
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
