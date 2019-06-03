<template>
  <div class="jumbotron jumbotron-fluid">
    <h1 class="display-4">The Hotel Reservations Game</h1>
    <img :src="require('../assets/logo-intro.png')"/>
    <p><button type="button" class="btn btn-lg btn-secondary" @click="navigateToHow">Play</button></p>
  </div>
</template>
<script>
  export default {
    methods: {
      navigateToHow () {
        this.$router.push('HowToPlay')
      }
    }
  }
</script>
<style>

</style>
