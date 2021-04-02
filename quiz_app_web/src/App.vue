<template >
  <div id="app">
    <img src="./assets/CoolClips_peop3452.png" >
    <Destin arriver ='Paris' sortir='Montreal' date='23-06-2021'/>
  </div>
</template>

<script>

import Destin from './pages/Destin'
export default {
  name: 'App',
  components: { Destin }
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
