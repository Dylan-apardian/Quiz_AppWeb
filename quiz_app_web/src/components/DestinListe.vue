<template>
   <div>
     <ul v-for=' destin in destins' :key=destin.arriver >
       <li>{{destin.arriver}}</li>
       <li>{{destin.sortir}}</li>
       <li>{{destin.date}}</li>
       <button @click='selectDestin(destin)'> Voir les Détails </button>
     </ul>
     <button @click='addDestination'> Add Destination </button>
     <p> Nombre de Destin choisis : {{compt}}</p>
   </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)
export default {
  name: 'Destin',
  data () {
    return {
      destins: []
    }
  },
  http: {
    root: ' http://localhost:3000' },
  methods: {
    selectDestin (destin) {
      this.$emit('selected', destin)
    }
  },
  computed: {
    compt () {
      return this.destins.length
    }
  },
  mounted: {}
}
</script>
<style lang="css">
</style>
