<template>
  <div class="row justify-content-md-center align-items-center h-100 min-vh-100 no-margin">
    <div class="col-md-6">
      <h1 class="subtitle-color">INFORMATION</h1>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-12 text-left">
              <p class="failLieText">You made the right decision! You call a nearby hotel and offer them a room for two nights for a higher
                price the guests payed to stay at your hotel, due to the law saying that if you overbook and send guests to another hotel,
                the quality must be equal or better, and all of the equal rooms in the hotel had been taken. You make a loss, but at least
                the guests are satisfied at how you fixed the mistake and leave a 5* review on the hotel's website</p>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-lg btn-secondary" @click="navigateToResult">Click here to continue</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        finalTotal: 0,
        finalOccupancy: 0,
        finalRevpar: 0
      }
    },
    methods: {
      navigateToResult() {
        this.finalTotal = this.finalTotal - 500
        this.$router.push({
          name: 'Results',
          params: {finalTotal: this.finalTotal, finalOccupancy: this.finalOccupancy, finalRevpar: this.finalRevpar}
        })
      }
    },
    created: function () {
      this.finalTotal = this.$route.params.finalTotal
      this.finalOccupancy = this.$route.params.finalOccupancy
      this.finalRevpar = this.$route.params.finalRevpar
    }
  }
</script>
<style>
  .failLieText {
    font-size: 40px;
    font-weight: 300;
  }
</style>
