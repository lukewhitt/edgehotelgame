<template>
  <div class="row justify-content-md-center align-items-center h-100 min-vh-100">
    <div class="col-md-6">
      <h1 class="subtitle-color">INFORMATION</h1>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-6 text-left">
              <p><strong>Address:</strong> Wivenhoe Park, Colchester, CO4 3SQ</p>
              <p><strong>Rating:</strong>
                <font-awesome-icon icon="star"></font-awesome-icon>
                <font-awesome-icon icon="star"></font-awesome-icon>
                <font-awesome-icon icon="star"></font-awesome-icon>
                <font-awesome-icon icon="star"></font-awesome-icon>
              </p>
              <p><strong>Reviews:</strong>
                <font-awesome-icon icon="star"></font-awesome-icon>
                <font-awesome-icon icon="star"></font-awesome-icon>
                <font-awesome-icon icon="star"></font-awesome-icon>
                <font-awesome-icon icon="star"></font-awesome-icon>
              </p>
              <hr class="my-4"/>
              <p>"The plush, colourful rooms feature flat-screen TVs, en suite bathrooms and free WiFi, as well as tea and coffeemaking
                equipment. Some rooms also have private balconies, while suites add separate living areas.
                Amenities include 3 conference rooms, a brasserie restaurant and a guest lounge serving afternoon tea."</p>
            </div>
            <div class="col-md-6">
              <img :src="require('../assets/hotel1.jpg')" class="img-fluid"/>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn btn-lg btn-secondary" @click="navigateToGame">Click here to continue</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      navigateToGame (){
        this.$router.push('game')
      }
    }
  }
</script>
