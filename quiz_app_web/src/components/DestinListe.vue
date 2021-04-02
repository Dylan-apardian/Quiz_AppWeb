<template>
   <div>
     <ul v-for=' destin in destins' :key=destin.arriver >
       <li>Arrive: {{destin.arriver}}</li>
       <li>Sortir de: {{destin.sortir}}</li>
       <li>Date:{{destin.date}}</li>
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
  data () {
    return {
      destins: []
    }
  },
  http: {
    root: 'http://localhost:3000'
  },
  methods: {
    addDestination () {
      this.destins.push({
        arriver: 'Pris',
        sortir: 'Montreal',
        date: '23-06-2021'
      })
    },
    selectDestin (destin) {
      this.$emit('selected', destin)
    }
  },
  computed: {
    compt () {
      return this.destins.length
    }
  },
  mounted () {
    this.$resource('destins')
      .get()
      .then(
        response => {
          this.destins = response.data
        },
        response => {
          console.log('erreur', response)
        }
      )
  }
}
</script>
