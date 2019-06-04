const Scenario2 = {
  get (decisions) {

    let lastDecision = decisions[decisions.length - 1]

    return {
      text : 'Will you accept?: <br/><span class="groupA">A) A Portugese student visiting universities with her family</span><br/><span class="groupB">B) A group of staff from Exeter wanting a night out</span><br/><span class="groupC">C) A group of individuals needing somewhere to stay for the night between campaigns.</span>',
      popover: true,
      popoverText: 'Over time, more people book into your hotel, you accept and reject many different requests, and some people cancel on their bookings. Now you don’t have much room, and three requests come in at once. Your job is to decide which offer(s) to take, and whether or not you would like to overbook. However, make sure you are careful when doing so, as now you can no longer restart until the end. You MUST select at least one offer, or you will lose money.',
      potentialBookings: this.getPotentialBookings(lastDecision),
      additionalConfirmedBookings: this.getAdditionalConfirmedBookings(lastDecision),
      multiChoice: true,
      multiChoiceOptions: ['A','B','C']
    }
  },

  getAdditionalConfirmedBookings (decision) {
    if (decision === 1) {
      return this.getAdditionalYesConfirmedBookings()
    } else {
      return this.getAdditionalNoConfirmedBookings()
    }
  },

  getPotentialBookings (decision) {
    if (decision === 1) {
      return this.getPotentialYesBookings()
    } else {
      return this.getPotentialNoBookings()
    }
  },

  getPotentialNoBookings () {
    return [
      {
        dayIndex: 10,
        roomIndex: 7,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 10,
        roomIndex: 8,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 10,
        roomIndex: 9,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 11,
        roomIndex: 7,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 11,
        roomIndex: 8,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 11,
        roomIndex: 9,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 12,
        roomIndex: 7,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 12,
        roomIndex: 8,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 12,
        roomIndex: 9,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 13,
        roomIndex: 7,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 13,
        roomIndex: 8,
        rate: 75,
        group: 'A'
      },
      {
        dayIndex: 13,
        roomIndex: 9,
        rate: 75,
        group: 'A'
      },

      {
        dayIndex: 6,
        roomIndex: 15,
        rate: 95,
        group: 'B'
      },
      {
        dayIndex: 6,
        roomIndex: 16,
        rate: 90,
        group: 'B'
      },
      {
        dayIndex: 6,
        roomIndex: 17,
        rate: 90,
        group: 'B'
      },
      {
        dayIndex: 6,
        roomIndex: 18,
        rate: 95,
        group: 'B'
      },
      {
        dayIndex: 6,
        roomIndex: 19,
        rate: 95,
        group: 'B'
      },

      {
        dayIndex: 6,
        roomIndex: 11,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 6,
        roomIndex: 12,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 6,
        roomIndex: 13,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 6,
        roomIndex: 14,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 7,
        roomIndex: 11,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 7,
        roomIndex: 12,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 7,
        roomIndex: 13,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 7,
        roomIndex: 14,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 8,
        roomIndex: 11,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 8,
        roomIndex: 12,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 8,
        roomIndex: 13,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 8,
        roomIndex: 14,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 9,
        roomIndex: 11,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 9,
        roomIndex: 12,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 9,
        roomIndex: 13,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 9,
        roomIndex: 14,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 10,
        roomIndex: 11,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 10,
        roomIndex: 12,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 10,
        roomIndex: 13,
        rate: 90,
        group: 'C'
      },
      {
        dayIndex: 10,
        roomIndex: 14,
        rate: 90,
        group: 'C'
      }
    ]
  },

  getPotentialYesBookings () {
    return [
      {
        roomIndex: 5,
        dayIndex: 2,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 6,
        dayIndex: 2,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 7,
        dayIndex: 2,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 5,
        dayIndex: 3,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 6,
        dayIndex: 3,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 7,
        dayIndex: 3,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 5,
        dayIndex: 4,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 6,
        dayIndex: 4,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 7,
        dayIndex: 4,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 5,
        dayIndex: 5,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 6,
        dayIndex: 5,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 7,
        dayIndex: 5,
        rate: 75,
        group: 'A'
      },
      {
        roomIndex: 8,
        dayIndex: 10,
        rate: 95,
        group: 'B'
      },
      {
        roomIndex: 9,
        dayIndex: 10,
        rate: 90,
        group: 'B'
      },
      {
        roomIndex: 10,
        dayIndex: 10,
        rate: 90,
        group: 'B'
      },
      {
        roomIndex: 11,
        dayIndex: 10,
        rate: 95,
        group: 'B'
      },
      {
        roomIndex: 12,
        dayIndex: 10,
        rate: 95,
        group: 'B'
      },
      {
        roomIndex: 0,
        dayIndex: 4,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 1,
        dayIndex: 4,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 2,
        dayIndex: 4,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 3,
        dayIndex: 4,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 0,
        dayIndex: 5,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 1,
        dayIndex: 5,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 2,
        dayIndex: 5,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 3,
        dayIndex: 5,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 0,
        dayIndex: 6,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 1,
        dayIndex: 6,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 2,
        dayIndex: 6,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 3,
        dayIndex: 6,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 0,
        dayIndex: 7,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 1,
        dayIndex: 7,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 2,
        dayIndex: 7,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 3,
        dayIndex: 7,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 0,
        dayIndex: 8,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 1,
        dayIndex: 8,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 2,
        dayIndex: 8,
        rate: 90,
        group: 'C'
      },
      {
        roomIndex: 3,
        dayIndex: 8,
        rate: 90,
        group: 'C'
      }
    ]
  },

  getAdditionalYesConfirmedBookings () {
    return [
      {
        roomIndex: 0,
        dayIndex: 1,
        rate: 100
      },
      {
        roomIndex: 3,
        dayIndex: 1,
        rate: 75
      },
      {
        roomIndex: 4,
        dayIndex: 1,
        rate: 75
      },
      {
        roomIndex: 5,
        dayIndex: 1,
        rate: 75
      },
      {
        roomIndex: 8,
        dayIndex: 1,
        rate: 100
      },
      {
        roomIndex: 10,
        dayIndex: 1,
        rate: 90
      },
      {
        roomIndex: 0,
        dayIndex: 2,
        rate: 100
      },
      {
        roomIndex: 3,
        dayIndex: 2,
        rate: 75
      },
      {
        roomIndex: 4,
        dayIndex: 2,
        rate: 75
      },
      {
        roomIndex: 5,
        dayIndex: 2,
        rate: 75
      },
      {
        roomIndex: 6,
        dayIndex: 2,
        rate: 75
      },
      {
        roomIndex: 7,
        dayIndex: 2,
        rate: 75
      },
      {
        roomIndex: 8,
        dayIndex: 2,
        rate: 100
      },
      {
        roomIndex: 10,
        dayIndex: 2,
        rate: 90
      },
      {
        roomIndex: 11,
        dayIndex: 2,
        rate: 90
      },
      {
        roomIndex: 1,
        dayIndex: 3,
        rate: 75
      },
      {
        roomIndex: 3,
        dayIndex: 3,
        rate: 95
      },
      {
        roomIndex: 4,
        dayIndex: 3,
        rate: 95
      },
      {
        roomIndex: 5,
        dayIndex: 3,
        rate: 75
      },
      {
        roomIndex: 6,
        dayIndex: 3,
        rate: 75
      },
      {
        roomIndex: 7,
        dayIndex: 3,
        rate: 75
      },
      {
        roomIndex: 8,
        dayIndex: 3,
        rate: 100
      },
      {
        roomIndex: 1,
        dayIndex: 4,
        rate: 75
      },
      {
        roomIndex: 2,
        dayIndex: 4,
        rate: 75
      },
      {
        roomIndex: 3,
        dayIndex: 4,
        rate: 75
      },
      {
        roomIndex: 4,
        dayIndex: 4,
        rate: 75
      },
      {
        roomIndex: 1,
        dayIndex: 5,
        rate: 75
      },
      {
        roomIndex: 2,
        dayIndex: 5,
        rate: 75
      },
      {
        roomIndex: 3,
        dayIndex: 5,
        rate: 75
      },
      {
        roomIndex: 5,
        dayIndex: 5,
        rate: 0
      },
      {
        roomIndex: 6,
        dayIndex: 5,
        rate: 0
      },
      {
        roomIndex: 7,
        dayIndex: 5,
        rate: 0
      },
      {
        roomIndex: 0,
        dayIndex: 6,
        rate: 75
      },
      {
        roomIndex: 1,
        dayIndex: 6,
        rate: 75
      },
      {
        roomIndex: 2,
        dayIndex: 6,
        rate: 75
      },
      {
        roomIndex: 3,
        dayIndex: 6,
        rate: 75
      },
      {
        roomIndex: 4,
        dayIndex: 6,
        rate: 75
      },
      {
        roomIndex: 7,
        dayIndex: 6,
        rate: 75
      },
      {
        roomIndex: 12,
        dayIndex: 6,
        rate: 75
      },
      {
        roomIndex: 13,
        dayIndex: 6,
        rate: 75
      },
      {
        roomIndex: 14,
        dayIndex: 6,
        rate: 76
      },
      {
        roomIndex: 17,
        dayIndex: 6,
        rate: 90
      },
      {
        roomIndex: 0,
        dayIndex: 7,
        rate: 75
      },
      {
        roomIndex: 1,
        dayIndex: 7,
        rate: 75
      },
      {
        roomIndex: 2,
        dayIndex: 7,
        rate: 75
      },
      {
        roomIndex: 3,
        dayIndex: 7,
        rate: 75
      },
      {
        roomIndex: 10,
        dayIndex: 7,
        rate: 100
      },
      {
        roomIndex: 12,
        dayIndex: 7,
        rate: 75
      },
      {
        roomIndex: 13,
        dayIndex: 7,
        rate: 75
      },
      {
        roomIndex: 14,
        dayIndex: 7,
        rate: 75
      },
      {
        roomIndex: 17,
        dayIndex: 7,
        rate: 90
      },
      {
        roomIndex: 0,
        dayIndex: 8,
        rate: 75
      },
      {
        roomIndex: 1,
        dayIndex: 8,
        rate: 75
      },
      {
        roomIndex: 2,
        dayIndex: 8,
        rate: 75
      },
      {
        roomIndex: 3,
        dayIndex: 8,
        rate: 75
      },
      {
        roomIndex: 7,
        dayIndex: 8,
        rate: 100
      },
      {
        roomIndex: 10,
        dayIndex: 8,
        rate: 100
      },
      {
        roomIndex: 1,
        dayIndex: 9,
        rate: 95
      },
      {
        roomIndex: 2,
        dayIndex: 9,
        rate: 100
      },
      {
        roomIndex: 3,
        dayIndex: 9,
        rate: 100
      },
      {
        roomIndex: 7,
        dayIndex: 9,
        rate: 95
      },
      {
        roomIndex: 10,
        dayIndex: 9,
        rate: 100
      },
      {
        roomIndex: 1,
        dayIndex: 10,
        rate: 95
      },
      {
        roomIndex: 7,
        dayIndex: 10,
        rate: 95
      },
      {
        roomIndex: 0,
        dayIndex: 11,
        rate:75
      },
      {
        roomIndex: 1,
        dayIndex: 11,
        rate: 75
      },
      {
        roomIndex: 2,
        dayIndex: 11,
        rate: 75
      },
      {
        roomIndex: 7,
        dayIndex: 11,
        rate: 95
      },
      {
        roomIndex: 0,
        dayIndex: 12,
        rate: 75
      },
      {
        roomIndex: 1,
        dayIndex: 12,
        rate: 75
      },
      {
        roomIndex: 2,
        dayIndex: 12,
        rate: 75
      },
      {
        roomIndex: 7,
        dayIndex: 12,
        rate: 95
      },
    ]
  },

  getAdditionalNoConfirmedBookings () {
    return [
      {
        dayIndex: 1,
        roomIndex: 2,
        rate: 75
      },
      {
        dayIndex: 1,
        roomIndex: 3,
        rate: 90
      },
      {
        dayIndex: 1,
        roomIndex: 4,
        rate: 100
      },
      {
        dayIndex: 1,
        roomIndex: 5,
        rate: 100
      },
      {
        dayIndex: 1,
        roomIndex: 6,
        rate: 100
      },
      {
        dayIndex: 1,
        roomIndex: 7,
        rate: 100
      },
      {
        dayIndex: 1,
        roomIndex: 8,
        rate: 95
      },
      {
        dayIndex: 2,
        roomIndex: 2,
        rate: 75
      },
      {
        dayIndex: 2,
        roomIndex: 3,
        rate: 90
      },
      {
        dayIndex: 2,
        roomIndex: 8,
        rate: 95
      },
      {
        dayIndex: 2,
        roomIndex: 9,
        rate: 90
      },
      {
        dayIndex: 2,
        roomIndex: 10,
        rate: 90
      },
      {
        dayIndex: 2,
        roomIndex: 11,
        rate: 90
      },
      {
        dayIndex: 2,
        roomIndex: 12,
        rate: 90
      },
      {
        dayIndex: 3,
        roomIndex: 2,
        rate: 75
      },
      {
        dayIndex: 3,
        roomIndex: 3,
        rate: 95
      },
      {
        dayIndex: 3,
        roomIndex: 4,
        rate: 95
      },
      {
        dayIndex: 3,
        roomIndex: 5,
        rate: 95
      },
      {
        dayIndex: 3,
        roomIndex: 6,
        rate: 95
      },
      {
        dayIndex: 3,
        roomIndex: 8,
        rate: 95
      },
      {
        dayIndex: 4,
        roomIndex: 2,
        rate: 75
      },
      {
        dayIndex: 4,
        roomIndex: 3,
        rate: 95
      },
      {
        dayIndex: 4,
        roomIndex: 4,
        rate: 95
      },
      {
        dayIndex: 4,
        roomIndex: 5,
        rate: 95
      },
      {
        dayIndex: 4,
        roomIndex: 6,
        rate: 95
      },
      {
        dayIndex: 4,
        roomIndex: 11,
        rate: 0
      },
      {
        dayIndex: 4,
        roomIndex: 12,
        rate: 0
      },
      {
        dayIndex: 6,
        roomIndex: 9,
        rate: 90
      },
      {
        dayIndex: 6,
        roomIndex: 10,
        rate: 90
      },
      {
        dayIndex: 6,
        roomIndex: 11,
        rate: 100
      },
      {
        dayIndex: 6,
        roomIndex: 12,
        rate: 100
      },
      {
        dayIndex: 6,
        roomIndex: 13,
        rate: 100
      },
      {
        dayIndex: 6,
        roomIndex: 14,
        rate: 100
      },
      {
        dayIndex: 6,
        roomIndex: 15,
        rate: 95
      },
      {
        dayIndex: 6,
        roomIndex: 16,
        rate: 90
      },
      {
        dayIndex: 6,
        roomIndex: 17,
        rate: 90
      },
      {
        dayIndex: 6,
        roomIndex: 18,
        rate: 95
      },
      {
        dayIndex: 6,
        roomIndex: 19,
        rate: 95
      },
      {
        dayIndex: 7,
        roomIndex: 4,
        rate: 75
      },
      {
        dayIndex: 7,
        roomIndex: 5,
        rate: 75
      },
      {
        dayIndex: 7,
        roomIndex: 6,
        rate: 75
      },
      {
        dayIndex: 7,
        roomIndex: 9,
        rate: 95
      },
      {
        dayIndex: 7,
        roomIndex: 10,
        rate: 95
      },
      {
        dayIndex: 7,
        roomIndex: 11,
        rate: 100
      },
      {
        dayIndex: 7,
        roomIndex: 12,
        rate: 100
      },
      {
        dayIndex: 7,
        roomIndex: 13,
        rate: 100
      },
      {
        dayIndex: 7,
        roomIndex: 14,
        rate: 100
      },
      {
        dayIndex: 8,
        roomIndex: 4,
        rate: 75
      },
      {
        dayIndex: 8,
        roomIndex: 5,
        rate: 75
      },
      {
        dayIndex: 8,
        roomIndex: 6,
        rate: 75
      },
      {
        dayIndex: 8,
        roomIndex: 9,
        rate: 90
      },
      {
        dayIndex: 8,
        roomIndex: 10,
        rate: 95
      },
      {
        dayIndex: 8,
        roomIndex: 11,
        rate: 100
      },
      {
        dayIndex: 8,
        roomIndex: 12,
        rate: 100
      },
      {
        dayIndex: 8,
        roomIndex: 13,
        rate: 100
      },
      {
        dayIndex: 8,
        roomIndex: 14,
        rate: 100
      },
      {
        dayIndex: 8,
        roomIndex: 15,
        rate: 90
      },
      {
        dayIndex: 8,
        roomIndex: 16,
        rate: 90
      },
      {
        dayIndex: 8,
        roomIndex: 17,
        rate: 90
      },
      {
        dayIndex: 8,
        roomIndex: 18,
        rate: 90
      },
      {
        dayIndex: 8,
        roomIndex: 19,
        rate: 90
      },
      {
        dayIndex: 9,
        roomIndex: 4,
        rate: 75
      },
      {
        dayIndex: 9,
        roomIndex: 5,
        rate: 75
      },
      {
        dayIndex: 9,
        roomIndex: 6,
        rate: 75
      },
      {
        dayIndex: 9,
        roomIndex: 9,
        rate: 90
      },
      {
        dayIndex: 9,
        roomIndex: 10,
        rate: 95
      },
      {
        dayIndex: 9,
        roomIndex: 11,
        rate: 100
      },
      {
        dayIndex: 9,
        roomIndex: 12,
        rate: 100
      },
      {
        dayIndex: 9,
        roomIndex: 13,
        rate: 100
      },
      {
        dayIndex: 9,
        roomIndex: 14,
        rate: 100
      },
      {
        dayIndex: 9,
        roomIndex: 15,
        rate: 90
      },
      {
        dayIndex: 9,
        roomIndex: 16,
        rate: 90
      },
      {
        dayIndex: 9,
        roomIndex: 17,
        rate: 90
      },
      {
        dayIndex: 9,
        roomIndex: 18,
        rate: 90
      },
      {
        dayIndex: 9,
        roomIndex: 19,
        rate: 90
      },
      {
        dayIndex: 10,
        roomIndex: 4,
        rate: 75
      },
      {
        dayIndex: 10,
        roomIndex: 5,
        rate: 75
      },
      {
        dayIndex: 10,
        roomIndex: 6,
        rate: 75
      },
      {
        dayIndex: 10,
        roomIndex: 7,
        rate: 75
      },
      {
        dayIndex: 10,
        roomIndex: 8,
        rate: 75
      },
      {
        dayIndex: 10,
        roomIndex: 9,
        rate: 75
      },
      {
        dayIndex: 10,
        roomIndex: 11,
        rate: 100
      },
      {
        dayIndex: 10,
        roomIndex: 12,
        rate: 100
      },
      {
        dayIndex: 10,
        roomIndex: 13,
        rate: 100
      },
      {
        dayIndex: 10,
        roomIndex: 14,
        rate: 100
      },
      {
        dayIndex: 10,
        roomIndex: 16,
        rate: 95
      },
      {
        dayIndex: 10,
        roomIndex: 19,
        rate: 95
      },
      {
        dayIndex: 11,
        roomIndex: 4,
        rate: 75
      },
      {
        dayIndex: 11,
        roomIndex: 5,
        rate: 75
      },
      {
        dayIndex: 11,
        roomIndex: 6,
        rate: 75
      },
      {
        dayIndex: 11,
        roomIndex: 7,
        rate: 75
      },
      {
        dayIndex: 11,
        roomIndex: 8,
        rate: 75
      },
      {
        dayIndex: 11,
        roomIndex: 9,
        rate: 75
      },
      {
        dayIndex: 11,
        roomIndex: 10,
        rate: 100
      },
      {
        dayIndex: 11,
        roomIndex: 11,
        rate: 100
      },
      {
        dayIndex: 11,
        roomIndex: 12,
        rate: 100
      },
      {
        dayIndex: 11,
        roomIndex: 13,
        rate: 100
      },
      {
        dayIndex: 11,
        roomIndex: 14,
        rate: 100
      },
      {
        dayIndex: 11,
        roomIndex: 16,
        rate: 100
      },
      {
        dayIndex: 11,
        roomIndex: 17,
        rate: 100
      },
      {
        dayIndex: 11,
        roomIndex: 18,
        rate: 100
      },
      {
        dayIndex: 11,
        roomIndex: 19,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 0,
        rate: 0
      },
      {
        dayIndex: 12,
        roomIndex: 1,
        rate: 0
      },
      {
        dayIndex: 12,
        roomIndex: 2,
        rate: 0
      },
      {
        dayIndex: 12,
        roomIndex: 3,
        rate: 0
      },
      {
        dayIndex: 12,
        roomIndex: 10,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 11,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 12,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 13,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 14,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 16,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 17,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 18,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 19,
        rate: 100
      },
      {
        dayIndex: 12,
        roomIndex: 8,
        rate: 0
      },
      {
        dayIndex: 12,
        roomIndex: 9,
        rate: 0
      },
      {
        dayIndex: 6,
        roomIndex: 15,
        rate: 0
      },
      {
        dayIndex: 6,
        roomIndex: 16,
        rate: 0
      },
      {
        dayIndex: 6,
        roomIndex: 17,
        rate: 0
      },
      {
        dayIndex: 6,
        roomIndex: 18,
        rate: 0
      },
      {
        dayIndex: 6,
        roomIndex: 19,
        rate: 0
      }
    ]
  }
}

export default Scenario2
