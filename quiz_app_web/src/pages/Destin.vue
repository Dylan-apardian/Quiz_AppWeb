<template>
  <div class="page">
    <div class="content">
      <DestinListe v-on:selected='setSelected($event)'/>
      <DestinDetails :destin='selectDestin'/>
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
  components: { DestinListe, DestinDetails },

  methods: {
    setSelected (_selectDestin) {
      this.selectedDestin = _selectDestin
    }
  }
}
</script>
