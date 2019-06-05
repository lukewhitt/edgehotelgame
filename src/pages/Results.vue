<template>
  <div class="row justify-content-md-center align-items-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-body text-left">
          <h1>Congratulations</h1>
          <p>Stats:</p>
          <p>Total: {{finalTotal}}</p>
          <p>Occupancy: {{finalOccupancy}}</p>
          <p>ADR: {{finalRevpar}}</p>
          <p><strong>// TODO - add in leaderboard</strong></p>
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
    created: function () {
      this.finalTotal = this.$route.params.finalTotal
      this.finalOccupancy = this.$route.params.finalOccupancy
      this.finalRevpar = this.$route.params.finalRevpar
    }
  }
</script>
