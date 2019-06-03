<template>
  <div class="game">
    <div class="row">

      <div class="col-md-4">
        <img :src="require('../assets/logo-game.png')"/>
      </div>
      <div class="col-md-5">
        <div class="card">
          <div class="card-header">
            <h1>Scenario 1</h1>
          </div>
          <div class="card-body">
            <p>There is a party on Tuesday, and the guests need somewhere to stay the night before. 10 rooms on a special offer is perfect for them. Will you accept their booking?</p>
            <button class="btn btn-success" @click="test">Yes</button>
            <button class="btn btn-danger">No</button>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    <div class="row">
      <div class="col-md-9">
        <table class="table table-hover main-table table-sm table-bordered">
          <thead>
            <tr>
              <th scope="col" v-for="day in days">
                {{day}}
              </th>
            </tr>
          </thead>
          <tbody>
          <tr style="height:25px;" v-for="(row, idx1) in calendar">
            <th scope="row" style="width:110px;">{{row.name}}</th>
            <td v-for="(col, idx2) in row.bookings" v-bind:class="{ tableleftdivider : idx2 === 0, 'badge-success' : col.confirmed === false}">
              <span v-if="col.rate > 0">£{{col.rate.toFixed(2)}}</span>
            </td>
          </tr>
          <tr>
            <td><strong>REVPAR</strong></td>
            <td v-for="(rev) in revparDaily">
              <strong>£{{rev.toFixed(2)}}</strong>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-3">
        <div class="row align-items-end">
          <div class="col-md-12 text-left">
            <h1>Prices</h1>
            <table class="table table-borderless">
              <tr>
                <td>Maximum price for a room:</td>
                <td><strong>£100.00</strong></td>
              </tr>
              <tr>
                <td>Price for a room <strong>without</strong> a travel agency:</td>
                <td><strong>£95.00</strong></td>
              </tr>
              <tr>
                <td>Price for a room with a promo code:</td>
                <td><strong>£90.00</strong></td>
              </tr>
              <tr>
                <td>Price for a room with a special offer:</td>
                <td><strong>£75.00</strong></td>
              </tr>
            </table>
          </div>
          <hr class="my-4"/>
          <div class="col-md-12 text-left ">
            <h1>Stats</h1>
            <div class="row">
              <div class="col-md-4 text-center">
                <h3>Total Funds</h3>
                <h4>£{{totalFunds}}</h4>
              </div>
              <div class="col-md-4 text-center">
                <h4>Room Occupancy</h4>
                <h5>{{occupancy}}%</h5>
              </div>
              <div class="col-md-4 text-center">
                <h4>Overall REVPAR</h4>
                <h5>£{{revparTotal}}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default {
    data: function () {
      return {
        calendar: [
          {name: 'Room 1', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}]},
          {name: 'Room 2', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}]},
          {name: 'Room 3', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}]},
          {name: 'Room 4', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}]},
          {name: 'Room 5', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}]},
          {name: 'Room 6', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}]},
          {name: 'Room 7', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}]},
          {name: 'Room 8', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0}]},
          {name: 'Room 9', bookings:  [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 10', bookings: [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 11', bookings: [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 12', bookings: [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 75.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 75.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 13', bookings: [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 75.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 75.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 14', bookings: [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 75.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 75.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 15', bookings: [{confirmed: true, rate: 0.0},   {confirmed: true, rate: 75.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 0.0},   {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 16', bookings: [{confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 17', bookings: [{confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 18', bookings: [{confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 19', bookings: [{confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 0.0},   {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]},
          {name: 'Room 20', bookings: [{confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 0.0}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 90.00}, {confirmed: true, rate: 95.00}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 100.0}, {confirmed: true, rate: 0.0}]}
        ],
        days: ["", "Mon","Tue","Wed","Thur","Fri","Sat","Sun","Mon","Tue","Wed","Thur","Fri","Sat","Sun"]
      }
    },
    methods: {
      test: function (){
        let room = this.calendar[1]
        room.bookings[1].rate = 100;
        room.bookings[1].confirmed = false
        //Vue.set(this.calendar[1].bookings.rate, 1, 1000)
        //this.calendar[1].bookings[1] = 100.00;
      }
    },
    computed: {
      totalFunds: function () {
        let tally = 0
        this.calendar.forEach(cal => cal.bookings.forEach(booking => tally = tally + booking.rate))

        return tally
      },
      revparDaily: function () {
        let holding = new Array()
        for (let i = 0; i < 14; i++) {
          let tally = 0;
          let count = 0;
          this.calendar.forEach(cal => {
            if (cal.bookings[i].rate > 0) {
              tally = tally + cal.bookings[i].rate
              count++
            }
          })
          if (count === 0) {
            let res = 0
            holding[i] = res
          } else {
            let avg = tally / count
            holding[i] = avg
            count = 0
          }
        }

        return holding
      },
      revparTotal: function () {
        let revpar = 0
        this.revparDaily.forEach(revpard => revpar = revpar + revpard)
        revpar = revpar / 14
        return revpar.toFixed(2)
      },
      occupancy: function () {
        let count = 0;
        this.calendar.forEach(cal => cal.bookings.forEach(booking => {
          if (booking.rate > 0) {
            count++
          }
        }))

        let res = (count / 280) * 100
        return res.toFixed(2)
      }
    }
  }
</script>
<style>
  .game {
    max-width: 100%;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 10px;
  }

  .table {
    border-color: #ccc;
  }

  .tableleftdivider {
    border-left: 2px solid #bbb;
  }

  .main-table {
    background: #eee;
  }

  .table td, .table thead th, .table th {
    border-color: #bbb;
  }
</style>
