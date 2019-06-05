<template>
  <div class="row justify-content-md-center align-items-center h-100 min-vh-100 no-margin">
    <div class="col-md-6">
      <h1 class="subtitle-color">INFORMATION</h1>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12 text-left">
              <p class="failLieText">You Lose! You deny their booking and tell them it was never on the system. You argue back and forth until they storm out
                unhappily. The next day, an extremely negative complaint is left on the hotel's website, and your name is mentioned. You
                know there will be consequences for lying about the overbookings.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      navigateToResult() {
        this.$router.push('game')
      }
    }
  }
</script>
<style>
  .failLieText {
    font-size: 40px;
    font-weight:300;
  }
</style>
