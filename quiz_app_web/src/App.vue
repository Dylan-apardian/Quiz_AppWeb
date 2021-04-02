<template >
  <div id="app">
<<<<<<< HEAD
    <img src="./assets/CoolClips_peop3452.png" >
    <Destin arriver ='Paris' sortir='Montreal' date='23-06-2021'/>
=======
    <router-view/>
>>>>>>> main
  </div>
</template>

<script>
<<<<<<< HEAD

import Destin from './pages/Destin'
export default {
  name: 'App',
  components: { Destin }
=======
import Header from './components/Header.vue'
import Apropos from './components/Apropos.vue'
export default {
  components: {Header, Apropos},
  name: 'App'
>>>>>>> main
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
