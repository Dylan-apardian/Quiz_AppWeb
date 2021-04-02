<template>
  <div class="destinDetails">
      <h1>Détails de la Destination</h1>
      <ul v-for=' destin in destins' :key=destin.arriver>
          <li>ID:{{ destin.arriver}}</li>
          <li>Durée:{{ destin.sortir}}</li>
          <li>Prix:{{ destin.date}}</li>
      </ul>
      <button @click='addDetail'> voir les Details </button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      destins: []
    }
  },
  props: ['destin'],
  methods: {
    addDetail () {
      this.destins.push({
        arriver: '1',
        sortir: 'Une semaine',
        date: '2000$/ personne'
      })
    }}
}
</script>

<style>
  div.destinDetails {
      display: inline-block;
      width: 40%;
  }
</style>
