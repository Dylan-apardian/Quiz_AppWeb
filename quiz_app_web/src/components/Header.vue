<template>
  <div class="entete">
    <header>
      <h1>DhafVoyage</h1>
      <nav>
        <ul>
          <li><router-link to="/">Accueil</router-link></li>
          <li><router-link to="destination">Destinations</router-link></li>
          <li><router-link to="reviews">Reviews</router-link></li>
          <li><router-link to="apropos">A propos</router-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style scoped>
* {
  margin: 10 auto;
  padding: 0 10px;
}

#entete {
  background-color: gray;
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
}

h1 {
  float: left;
  margin-top: 0px;
  font-size: 32px;
}

nav {
  float: right;
}

nav ul li {
  display: inline-block;
  text-transform: uppercase;
  font-weight: bold;
  margin-right: 80px;
}
</style>
