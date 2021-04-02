<template>
    <div class="entete" :style="{backgroundImage: `url(${backgroundUrl}) ` }">  
        <header>
            <h1>{{nomSite}}</h1>
                <nav>
                    <ul>
                        <li>{{page.accueil}}</li>
                        <li>{{page.destinations}}</li>
                        <li>{{page.reviews}}</li>
                        <li>{{page.aPropos}}</li>
                    </ul>
                </nav> 
        </header>    
        
        <h2>{{message}}</h2>
                <a>En savoir plus</a>

        <footer>
            <h1>{{nomSite}}</h1>
            <div id="copyright">{{copyright}}</div>
        </footer>
    </div>
</template>

<script>
import backgroundUrl from "../assets/paysage.jpg";
export default {
  name: 'Header',
  data () {
    return {
      backgroundUrl,
      page: {
          accueil:'Accueil',
          destinations:'Destinations',
          reviews:'Reviews',
          aPropos:'À Propos',
      },
      message: 'Explorez le meilleur site de tourisme jamais conçu',
      nomSite: 'DhafVoyage',
      copyright: 'Copyright © 2021. Tous droits réservés.'
    }
  }
}
</script>

<style scoped>
* {
    margin: 10 auto;
    padding: 0 10px;
}

.entete {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background: no-repeat center;
    background-size:cover;
    height: 789px;
    width: 1580px;
}
header h1 {
     float: left;
     margin-top: 20px;
     font-size: 40px;
}

h2 {
    font-weight: normal;
    font-size: 32px;
    text-transform: uppercase;
    text-align: center;
    padding: 150px 0 40px 0;
    margin: 70px;
    
}

a {
    display: block;
    width: 140px;
    height: 50px;
    background: #ff7a00;
    color: white;
    font-size: 20px;
    margin: 0 auto;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
}

a:hover {
    background: #02b8dd;
}

nav {
    margin-top: 20px;
    float: right;
}

nav ul li {
    display: inline-block; 
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 80px; 
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