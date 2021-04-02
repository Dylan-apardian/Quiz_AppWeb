<template>
  <div class="page">
    <div class="content">
      <DestinListe v-on:selected='setSelected($event)'/>
      <DestinDetails :destin='selectedDestin'/>
    </div>
  </div>
</template>

<script>
import DestinListe from '../components/DestinListe.vue'
import DestinDetails from '../components/DestinDetails.vue'

export default {
  data () {
    return {
      selectedDestin: {}
    }
  },
  components: {DestinListe, DestinDetails},

  methods: {
    setSelected (_selectedDestin) {
      this.selectedDestin = _selectedDestin
    }
  }
}
</script>
