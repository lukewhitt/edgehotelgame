<template>
  <div class="row justify-content-md-center align-items-center h-100 min-vh-100 no-margin">
    <div class="col-md-6">
      <h1 class="subtitle-color"></h1>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12 text-left">
              <p class="failTruthText">You Lose! You try to tell them the truth and reassure them that it won't happen again. You even offer
                their money back, but they are very annoyed and keep arguing with you. You keep trying to explain that you made a mistake
                but your mistake cost them shelter for the night, and only telling them that you haven't got a room will not help them.
                Because of this, a bad review is left on the hotel's website and you lose a few points off your overall rating.</p>
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
  .failTruthText {
    font-size: 40px;
    font-weight: 300;
  }
</style>
