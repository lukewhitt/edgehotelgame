<template>
  <div class="row justify-content-md-center">
    <div class="col-md-6">
      <h1 class="display-4">How to play</h1>

      <div class="card">
        <div class="card-body">
          <p>This game follows the basic principles of the decision whether to accommodate guests or not depending on the factors
            surrounding them, for example the amount of nights they are staying for and the prices they are willing to pay.</p>
          <p>The basic rules of the game are that a request will pop up on the right, showing the factors mentioned and a brief description
            of their motives. If you wish to accommodate them, click
            <button class="btn btn-sm btn-success">Yes</button>
            , and if you don't then click
            <button class="btn btn-sm btn-danger">No</button>
            .
          </p>
          <p>The table on the left represents the overall bookings you have agreed to, with the current requests being highlighted in green.
            It is spread over a fortnight, with 20 empty rooms that need to be filled up with guests. Your job is to fill as many rooms as
            you can for the best price and to win the game you need to make all the best decisions.</p>
          <p>Your total funds will be shown in the bottom right of the screen, so you can see your progress. This changes all the time from
            accepting requests and from people cancelling their bookings. There is also the possibility that bookings overlap so make sure
            you are careful when choosing whether or not to accept an offer.</p>
          <p>If at any point you feel the need to restart, just click
            <button class="btn btn-sm btn-info">restart</button>
            in the top left. It will redirect you to the homepage. The time of day is also shown in the top right. This should influence
            your decisions.
          </p>
        </div>
        <div class="card-footer">
          <button class="btn-lg btn btn-secondary" @click="navigateToAbout">Click here to play. Good Luck!</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      navigateToAbout (){
        this.$router.push('about')
      }
    }
  }
</script>
