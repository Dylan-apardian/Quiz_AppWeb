<template>
  <div class="Accueil" :style="{backgroundImage: `url(${backgroundUrl}) ` }">
    <app-header></app-header>
    <h2>{{message}}</h2>
                <router-link to="destination" id="orange">En savoir plus</router-link>

        <footer>
            <h1>{{nomSite}}</h1>
            <div id="copyright">{{copyright}}</div>
        </footer>
  </div>
</template>

<script>
import backgroundUrl from '../assets/paysage.jpg'
import Header from './Header.vue'
export default {
  name: 'Header',
  data () {
    return {
      backgroundUrl,
      nomSite: 'DhafVoyage', 
      message: 'Explorez le meilleur site de tourisme jamais conçu',
      copyright: 'Copyright © 2021. Tous droits réservés.'
    };
  },
  components: {
    'app-header': Header
  } 
}
</script>

<style scoped>
* {
  margin: 10 auto;
  padding: 0 10px;
}

.Accueil {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: no-repeat center;
  background-size:cover;
  height: 789px;
  width: 1580px;
}

h2 {
    font-weight: normal;
    font-size: 32px;
    text-transform: uppercase;
    text-align: center;
    padding: 150px 0 40px 0;
    margin: 20px;
}

#orange {
    display: block;
    width: 130px;
    height: 50px;
    background: #ff7a00;
    color: white;
    font-size: 20px;
    margin: 0 auto;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
}

#orange:hover {
    background: #02b8dd;
}

footer
{
    height: 180px;
    background-color:lightgray;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    border-style:solid;
}

footer h1
{
    text-align: center;
    padding-top: 40px;
}

.copyright
{
    text-align: center;
    font-weight: bold;
    padding-top: 30px;
}
</style>
