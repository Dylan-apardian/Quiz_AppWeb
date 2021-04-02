<template>
  <div class="Reviews">
    <app-header></app-header>
    <h1>Reviews</h1>
    <center>
      <div class="commentaires">
    <div class="containerCommentaire">
      <div class="utilisateur">
        <img src="../assets/utilisateur-1.jpg" width="100" height="100px">
        <p><strong>Étienne B</strong> a écrit le 22 mars 2010</p>
      </div>
      <div class="commentaire">
        <h1>Éxpérience Extraordinaire</h1>
      <p>Cette visite était absolument fantastique. Le guide Hiria était vraiment incroyable. A montré un réel intérêt pour chaque personne. Nous a tous fait sentir les bienvenus. Une connaissance approfondie et une voix de chant époustouflante dans la grotte de la cathédrale. Quelle charmante dame.
Je recommande vivement de prendre le temps de voir tous les vers luisants lors du voyage en bateau.
Excellent.</p>
      </div>
    </div>

    <div class="containerCommentaire">
      <div class="utilisateur">
        <img src="../assets/utilisateur-2.jpg" width="100" height="100px">
        <p><strong>Ralph W</strong> a écrit le 30 février 2011</p>
      </div>
      <div class="commentaire">
        <h1>Soutenez notre industrie touristique</h1>
      <p>A pris nos enfants de 6 et 8 ans. Ils ont adoré, nous avons tellement appris. Le guide Shawny était adorable, nous a tous tenus engagés et très réceptifs à notre groupe. Un homme âgé avait mal aux genoux, elle l'aida d'abord à monter dans le bateau en s'assurant qu'il le faisait en toute sécurité. La visite était très informative ...</p>
      </div>
    </div>

    <div class="containerCommentaire">
      <div class="utilisateur">
        <img src="../assets/utilisateur-3.jpg" width="100" height="100px">
        <p><strong>Bianca J</strong> a écrit le 5 avril 2012</p>
      </div>
      <div class="commentaire">
        <h1>Expérience en famille</h1>
      <p>
C'était incroyable. Je recommande vraiment de le faire. Assez cher pour une famille mais nous avons appris et vu tellement de choses et notre guide était vraiment bon. Les vers luisants étaient géniaux!</p>
      </div>
    </div>

    <div class="containerCommentaire">
      <div class="utilisateur">
        <img src="../assets/utilisateur-4.jpg" width="100" height="100px">
        <p><strong>Geneviève B</strong> a écrit le 7 octobre 2013</p>
      </div>
      <div class="commentaire">
        <h1>Vaut bien une visite!</h1>
      <p>Nous venons de visiter les grottes, la première fois pour moi et mes enfants. Il est vraiment bien aménagé, avec des sentiers de randonnée doux à travers les grottes et un éclairage sous les pieds pour la première partie. Notre guide Shaunie était adorable, très instructif et un excellent guide. Ils ont gardé le meilleur pour durer et le voyage en bateau était magique. C'est le moment idéal pour visiter car de nombreux touristes ne peuvent pas arriver ici, donc le nombre de groupes est faible. Amenez les enfants!</p>
      </div>
    </div>
  </div>
    </center>
  </div>
</template>

<script>
// import your components here
import Header from './Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style scoped>
.Reviews {
  display: flex;
  flex-direction: column;
}

.utilisateur, .commentaire {
  border: 1px solid #1f1f1f;
  width: 300px;
  padding: 20px;
  margin: 0px 50px 0px 50px;
  box-shadow: 5px 10px #1f1f1f;
}

.commentaire {
  height: 400px;
}

.utilisateur img {
  border-radius: 50%;
}

.commentaires {
  display: flex;
  align-content: space-between;
}
</style>
