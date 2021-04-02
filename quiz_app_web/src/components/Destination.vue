<template>
  <div class="Destination">
      <app-header></app-header>
      <h1 >Destination</h1>
     <center><img src="../assets/CoolClips_peop3452.png" width="500" ></center>
    <destin arriver ='Paris' sortir='Montreal' date='23-06-2021'/>
  </div>
</template>

<script>
// import your components here
import Header from './Header.vue'
import Destin from '../pages/Destin.vue'
export default {
  components: {
    'app-header': Header,
    'destin': Destin
  },
  Destin
}
</script>

<style scoped>
.Destination {
  display: flex;
  flex-direction: column;
}
img {
  display: flex;
  align-items: center;
}
</style>
