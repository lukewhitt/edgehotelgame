<template>
  <div class="row h-100 min-vh-100 justify-content-center align-items-center no-margin">
    <form class="col-12">
      <img :src="require('../assets/logo-intro.png')"/>
      <h1 class="display-4">HOTEL REVENUE MANAGEMENT</h1>
      <p class="subtitle">A FINANCIAL PERFORMANCE SCENARIO FOR HOTELS</p>
      <p>
        <button type="button" class="btn btn-lg btn-secondary" @click="navigateToHow">Continue</button>
      </p>
    </form>
  </div>

</template>
<script>
  export default {
    methods: {
      navigateToHow() {
        this.$router.push('HowToPlay')
      }
    }
  }
</script>
<style>
.subtitle {
  font-size: 25px;
  color: #8c6720;
}
</style>
