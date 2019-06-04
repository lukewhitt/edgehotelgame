<template>
  <div class="game">
    <div class="row">
      <div class="col-md-4 col-sm-12">
        <img class="float-left" :src="require('../assets/logo-game.png')"/>
      </div>
      <div class="col-md-5 col-sm-12">
        <div class="card">
          <div class="card-header text-left">
            <h1>Scenario {{currentScenario}}</h1>
          </div>
          <div class="card-body text-left">
            <div class="row">
              <div class="col-md-8 col-sm-12">
                <p v-html="currentScenarioObj.text">{{currentScenarioObj.text}}</p>
              </div>
              <div v-if="multiChoice" class="col-md-4">
                <b-form-group label="Please select at least 1 option">
                  <b-form-checkbox-group id="multiChoiceGroup" v-model="multiChoiceSelection" :state="state">
                    <b-form-invalid-feedback :state="state">{{multiSelectText}}</b-form-invalid-feedback>
                    <b-form-valid-feedback :state="state">Press submit when you are ready</b-form-valid-feedback>
                    <b-form-checkbox switch v-for="choice in multiChoiceOptions" :value="choice"
                                     v-bind:class="{'groupA' : (choice === 'A' || choice === 'Small'),
                                                   'groupB' : (choice === 'B' || choice === 'Large'),
                                                   'groupC' : choice === 'C'}">
                      {{choice}}
                    </b-form-checkbox>
                  </b-form-checkbox-group>
                </b-form-group>
                <button :disabled="multiChoiceSelection.length === 0" class="btn btn-success btn-block" @click="actionMultiChoice">Submit</button>
              </div>
              <div v-else class="col-md-4 col-sm-12">
                <button id="yesbtn" :disabled="conflicts === true ? true : false" class="btn btn-success btn-block"
                        @click="actionResponse(1)">Yes
                </button>
                <button id="nobtn" class="btn btn-danger btn-block" @click="actionResponse(0)">No</button>
                <div :class="conflicts === true ? '' : 'hidden'">You cannot accept this offer as you'll be overbooked.</div>
              </div>
            </div>
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
            <td v-for="(col, idx2) in row.bookings"
                v-bind:class="{ 'badge-success' : col.rate > 0 && col.confirmed === 'false',
                                'tableleftdivider': idx2 === 0,
                                'badge-danger' : col.rate > 0 && col.confirmed === 'conflicted',
                                'groupABorder' : col.rate > 0 && col.group === 'A',
                                'groupBBorder' : col.rate > 0 && col.group === 'B',
                                'groupCBorder' : col.rate > 0 && col.group === 'C'}">
              <span v-if="col.rate > 0">£{{col.rate.toFixed(2)}}</span>
            </td>
          </tr>
          <tr>
            <td><strong>ADR</strong></td>
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
                <h4>Overall ADR</h4>
                <h5>£{{revparTotal}}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <b-modal size="xl" centered id="Scenario6Modal">
      <h2>{{modalText}}</h2>
      <div class="p-2 border-top-0" slot="modal-footer" slot-scope="{ ok }">
        <b-button size="lg" variant="secondary" @click="ok()">OK</b-button>
      </div>
    </b-modal>
  </div>
</template>
<script>
  import Game from '@/game/game'
  import Vue from 'vue'

  export default {
    data: function () {
      return {
        calendar: [],
        days: ["", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        decisions: [],
        currentScenario: 1,
        conflicts: false,
        modalText: '',
        multiChoice: false,
        multiChoiceOptions: [],
        multiChoiceSelection: []
      }
    },
    methods: {
      apply: function () {
        let potentialBookings = this.currentScenarioObj.potentialBookings
        let conflictFound = false;

        if (this.currentScenarioObj.additionalConfirmedBookings.length > 0) {
          console.log(this.currentScenarioObj.additionalConfirmedBookings.length)
          this.currentScenarioObj.additionalConfirmedBookings.forEach(booking => {
            let room = this.calendar[booking.roomIndex]
            room.bookings[booking.dayIndex].rate = booking.rate
            room.bookings[booking.dayIndex].confirmed = 'true'
          })
        }

        potentialBookings.forEach(pBooking => {
          let room = this.calendar[pBooking.roomIndex]

          if (room.bookings[pBooking.dayIndex].rate > 0) {
            room.bookings[pBooking.dayIndex].confirmed = 'conflicted'
            conflictFound = true
          } else {
            room.bookings[pBooking.dayIndex].confirmed = 'false'
          }

          room.bookings[pBooking.dayIndex].rate = pBooking.rate

          if (pBooking.group) {
            room.bookings[pBooking.dayIndex].group = pBooking.group
          }
        })
        this.conflicts = conflictFound;

        if (this.currentScenarioObj.popover) {
          this.modalText = this.currentScenarioObj.popoverText
          this.$bvModal.show('Scenario6Modal')
        }

        if (this.currentScenarioObj.multiChoice) {
          this.multiChoiceOptions = this.currentScenarioObj.multiChoiceOptions
          this.multiChoice = true
        } else {
          this.multiChoice = false
        }
      },
      actionResponse: function (response) {
        this.decisions.push(response)
        let potentialBookings = this.currentScenarioObj.potentialBookings
        potentialBookings.forEach(pBooking => {
          let room = this.calendar[pBooking.roomIndex]

          if (response === 1) {
            room.bookings[pBooking.dayIndex].confirmed = 'true'
          } else {
            let booking = {rate: 0, confirmed: 'false'}
            Vue.set(room.bookings, pBooking.dayIndex, booking)
          }
        })
        this.currentScenario++
        this.apply()
      },
      actionMultiChoice: function () {
        if (this.currentScenario === 6) {
          // to defer to another object
          let hasA = this.multiChoiceSelection.includes('A')
          let hasB = this.multiChoiceSelection.includes('B')
          let hasC = this.multiChoiceSelection.includes('C')

          let potentialBookings = this.currentScenarioObj.potentialBookings
          potentialBookings.forEach(pBooking => {
            let room = this.calendar[pBooking.roomIndex]
            let group = pBooking.group
            let decision5 = this.decisions[4]
            if (hasA && group === 'A') {
              if (decision5 === 1 && (pBooking.dayIndex === 2 && (pBooking.roomIndex === 5 || pBooking.roomIndex === 6 || pBooking.roomIndex === 7)) ||
                (pBooking.dayIndex === 3 && (pBooking.roomIndex === 5 || pBooking.roomIndex === 6 || pBooking.roomIndex === 7))) {
                room.bookings[pBooking.dayIndex].confirmed = 'conflicted'
                room.bookings[pBooking.dayIndex].group = ''
              } else {
                room.bookings[pBooking.dayIndex].confirmed = 'true'
                room.bookings[pBooking.dayIndex].group = ''
              }
            }
            else if (group === 'A') {
              let conflict = room.bookings[pBooking.dayIndex].confirmed === 'conflicted'
              if (conflict) {
                room.bookings[pBooking.dayIndex].rate = 90
              } else {
                room.bookings[pBooking.dayIndex].rate = 0
              }
              room.bookings[pBooking.dayIndex].confirmed = 'true'
              room.bookings[pBooking.dayIndex].group = ''
            }
            else if (hasB && group === 'B'){
              room.bookings[pBooking.dayIndex].confirmed = 'true'
              room.bookings[pBooking.dayIndex].group = ''
            }
            else if (group === 'B') {
              room.bookings[pBooking.dayIndex].rate = 0
              room.bookings[pBooking.dayIndex].confirmed = 'true'
              room.bookings[pBooking.dayIndex].group = ''
            }
            else if (hasC && group === 'C') {
              room.bookings[pBooking.dayIndex].confirmed = 'true'
              room.bookings[pBooking.dayIndex].group = ''
            }
            else if (group === 'C') {
              room.bookings[pBooking.dayIndex].rate = 75
              room.bookings[pBooking.dayIndex].confirmed = 'true'
              room.bookings[pBooking.dayIndex].group = ''
            }
          })

        } else if (this.currentScenario === 8) {

        }
        this.decisions.push(this.multiChoiceSelection.join(''))
        this.multiChoiceSelection = []
        this.currentScenario++;
        this.apply()
      }
    },
    computed: {
      state: function () {
        if (this.currentScenario === 6) {
          return this.multiChoiceSelection.length >= 1
        } else {
          return this.multiChoiceSelection.length === 1
        }
      },
      multiSelectText: function () {
        if (this.currentScenario === 6) {
          return 'Please select at least one'
        } else {
          return 'Please select only one'
        }
      },
      currentScenarioObj: function () {
        return Game.getScenario(this.currentScenario, this.decisions)
      },
      totalFunds: function () {
        let tally = 0
        this.calendar.forEach(cal => cal.bookings
          .filter(booking => booking.confirmed === 'true')
          .forEach(booking => tally = tally + booking.rate))

        return tally
      },
      revparDaily: function () {
        let holding = new Array()
        for (let i = 0; i < 14; i++) {
          let tally = 0;
          let count = 0;
          this.calendar
            .forEach(cal => {
              if (cal.bookings[i].rate > 0 && cal.bookings[i].confirmed === 'true') {
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
        this.calendar
          .forEach(cal => cal.bookings.filter(booking => booking.confirmed === 'true').forEach(booking => {
            if (booking.rate > 0) {
              count++
            }
          }))

        let res = (count / 280) * 100
        return res.toFixed(2)
      }
    },
    created: function () {
      this.calendar = Game.getDefaultState()
      this.apply()
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

  .card-header {
    background: #fff;
    border: none;
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

  .hidden {
    display: none;
  }

  .groupABorder {
    border: 3px solid #ff8c00 !important;
  }

  .groupA, .groupA > label {
    color: #ff8c00 !important;
  }

  .groupA > input:checked + label::before {
    border-color: #ff8c00 !important;
    background-color: #ff8c00 !important;
  }

  .groupA > input + label::before {
    border-color: #ff8c00 !important;
  }

  .groupCBorder {
    border: 3px solid #00a80e !important;
  }

  .groupB, .groupB > label {
    color: #0073ad !important;
  }

  .groupB > input:checked + label::before {
    border-color: #0073ad !important;
    background-color: #0073ad !important;
  }

  .groupB > input + label::before {
    border-color: #0073ad !important;
  }

  .groupC, .groupC > label {
    color: #00a80e !important;
  }

  .groupC > input:checked + label::before {
    border-color: #00a80e !important;
    background-color: #00a80e !important;
  }

  .groupC > input + label::before {
    border-color: #00a80e !important;
  }

  .groupBBorder {
    border: 3px solid #0073ad !important;
  }
</style>
