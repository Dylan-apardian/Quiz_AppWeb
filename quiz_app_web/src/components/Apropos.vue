<template>
  <div class="Apropos">
      <app-header></app-header>
      <div class="contenu">
        <h1 class='titre'>Notre mission</h1>
        <h2 class="desc">Offrir des voyages à nos clients au meilleur prix sur le marché</h2>
        <h1 class='titre'>A propos de nous</h1>
        <h2 class="desc">Depuis 2012, DhafVoyage est leader mondial du marché des agences de voyages et de tourisme. Nous nous efforçons de satisfaire nos clients lors de leurs déplacements. Le client vient toujours en premier pour nous. Lorsque vous voyagez avec nous, nous garantissons votre satisfaction sinon vous êtes remboursées.</h2>
        <h1 class='titre'>Nos clients satisfaits</h1>
        <div class="photos">
            <img class="image" src="../assets/famille1.png"/>
            <img class="image" src="../assets/famille2.png"/>
            <img class="image" src="../assets/famille3.png"/>
        </div>
        <div class="photos">
            <img class="image" src="../assets/famille4.png"/>
            <img class="image" src="../assets/famille5.png"/>
            <img class="image" src="../assets/famille6.png"/>
        </div>
      </div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style scoped>
.Apropos {
  display: flex;
  flex-direction: column;
}
.contenu{
    align-self: center;
    background-color: rgb(231, 231, 231);
    margin-left: 10%;
    margin-right: 10%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
}
.titre{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.desc{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
}
.photos{
    margin-bottom: 5%;
    align-self: center;
    display: flex;
    flex-direction: row;
}
.image{
    width: 300px;
    height: auto;
    padding: 10px;
}
</style>
