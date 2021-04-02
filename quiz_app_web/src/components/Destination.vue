<template>
  <div class="Destination">
      <app-header></app-header>
      <h1>Destination</h1>
      <img src="./assets/CoolClips_peop3452.png" >
    <destin arriver ='Paris' sortir='Montreal' date='23-06-2021'/>
  </div>
</template>

<script>
import Destin from './Destin.vue'
// import your components here
import Header from './Header.vue'
import Destin from './pages/Destin'
export default {
  components: {
    'app-header': Header , 
    'destin': Destin 
  }
  ,
    Destin
}
</script>

<style scoped>
.Destination {
  display: flex;
  flex-direction: column;
}
</style>
