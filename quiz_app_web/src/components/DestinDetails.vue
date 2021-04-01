<template>
  <div class="destinDetails">
      <h1>Détails de la Destination</h1>
      <ul>
          <li>{{ destin.arriver}}</li>
          <li>{{ destin.sortir}}</li>
          <li>{{ destin.date}}</li>
      </ul>
    </div>
</template>

<script>
export default {
  props: ['destin']
}
</script>

<style>
  div.destinDetails {
      display: inline-block;
      width: 40%;
  }
</style>
