<template>
    <div class="entete">
        <header>
            <h1>{{page.nomSite}}</h1>
                <nav>
                    <ul>
                        <li><router-link to="/">{{page.accueil}}</router-link></li>
                        <li><router-link to="destination">{{page.destinations}}</router-link></li>
                        <li><router-link to="reviews">{{page.reviews}}</router-link></li>
                        <li><router-link to="apropos">{{page.aPropos}}</router-link></li>
                    </ul>
                </nav>
        </header>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      page: {
        nomSite: 'DhafVoyage',  
        accueil: 'Accueil',
        destinations: 'Destinations',
        reviews: 'Reviews',
        aPropos: 'À Propos'
      }
    }
  }
}
</script>

<style scoped>
header h1 {
     float: left;
     margin-top: 20px;
     font-size: 40px;
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

</style>
