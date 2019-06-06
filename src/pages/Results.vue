<template>
  <div class="row justify-content-md-center align-items-center h-100 min-vh-100 logo-bg no-margin">
    <div class="col-md-6">
      <div class="card finish-card">
        <div class="card-body text-left">
          <div class="row">
            <div class="col-md-6">
              <h2>Thank you for playing Revenue Management!</h2>
              <table class="table table-borderless">
                <tr>
                  <td>Ranking</td>
                  <td><strong>{{ranking}}</strong></td>
                </tr>
                <tr>
                  <td>Occupancy %</td>
                  <td><strong>{{finalOccupancy}} %</strong></td>
                </tr>
                <tr>
                  <td>Overall Income</td>
                  <td><strong>£{{finalTotal}}</strong></td>
                </tr>
                <tr>
                  <td>Overall Costing</td>
                  <td><strong>£{{costing.toFixed(2)}}</strong></td>
                </tr>
                <tr>
                  <td>Profit</td>
                  <td><strong>£{{profit.toFixed(2)}}</strong></td>
                </tr>
              </table>
              <p>For more information on hospitality careers and education:</p>
              <p><a href="http://www.myhospitalitylife.com">www.myhospitalitylife.com</a></p>
              <p><a href="http://www.essex.ac.uk/departments/edge-hotel-school">www.essex.ac.uk/departments/edge-hotel-school</a></p>
            </div>
            <div class="col-md-6 align-items-center h-100">
              <img :src="require('../assets/hotel1.jpg')" class="img-fluid"/>
            </div>
          </div>
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
    computed: {
      occupancyRooms: function () {
        let res = (this.finalOccupancy / 100) * 244
        return res
      },
      costing: function () {
        return this.occupancyRooms * 10
      },
      profit: function () {
        return this.finalTotal - this.costing
      },
      ranking: function () {
        if (this.finalOccupancy > 88) {
          return '1st'
        } else if (this.finalOccupancy >= 87) {
          return '2nd'
        } else if (this.finalOccupancy >= 86) {
          return '3rd'
        } else if (this.finalOccupancy >= 85) {
          return '4th'
        } else if (this.finalOccupancy >= 84) {
          return '5th'
        } else if (this.finalOccupancy >= 83) {
          return '6th'
        } else if (this.finalOccupancy >= 82) {
          return '7th'
        } else if (this.finalOccupancy >= 81) {
          return '8th'
        } else if (this.finalOccupancy >= 90) {
          return '9th'
        }




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
  .finish-card {
    background-color: #cbba92 !important;
  }

  a {
    color: #212529 !important;
  }

  .logo-bg {
    background-image: url("../assets/logo-bg.png");
    background-position: bottom right;
    background-repeat: no-repeat;
  }
</style>
