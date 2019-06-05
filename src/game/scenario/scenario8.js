// template Scenario file
const Scenario8 = {

  holderConfirmedBookings : [],
  clashes : [],

  get (decisions) {

    this.handleScenario7(decisions)
    this.handleAdditionalBookings(decisions)
    this.handleClashes(decisions)

    return {
      text: '8) More people have booked rooms, and now you have three options. You can either accept a small request at maximum room price, a large request with rooms on special offer, or both. Choose carefully.',
      popover: this.getModal(decisions),
      popoverText: 'Luckily for you, some people in other rooms on the same day as your overbooking cancel, and you have enough room to slot them in. Your risk payed off!',
      potentialBookings: this.clashes,
      additionalConfirmedBookings: this.holderConfirmedBookings,
      multiChoiceOptions: ["Small", "Large", "Both"],
      multiChoice: true
    }
  },

  handleAdditionalBookings (decisions) {
    let decision5 = decisions[4]

    if (decision5 === 0) {
      this.holderConfirmedBookings.push(
        {
          roomIndex: 11,
          dayIndex: 0,
          rate: 90
        },
        {
          roomIndex: 12,
          dayIndex: 0,
          rate: 90
        },
        {
          roomIndex: 1,
          dayIndex: 1,
          rate: 100
        },
        {
          roomIndex: 1,
          dayIndex: 2,
          rate: 100
        },
        {
          roomIndex: 1,
          dayIndex: 3,
          rate: 100
        },
        {
          roomIndex: 13,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 14,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 15,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 16,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 17,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 8,
          dayIndex: 13,
          rate: 95
        }
        ,
        {
          roomIndex: 9,
          dayIndex: 13,
          rate: 95
        }
        ,
        {
          roomIndex: 10,
          dayIndex: 13,
          rate: 95
        }
        ,
        {
          roomIndex: 17,
          dayIndex: 7,
          rate: 90
        }
        ,
        {
          roomIndex: 5,
          dayIndex: 2,
          rate: 100
        }
        ,
        {
          roomIndex: 6,
          dayIndex: 2,
          rate: 100
        }
        ,
        {
          roomIndex: 2,
          dayIndex: 5,
          rate: 95
        }
        ,
        {
          roomIndex: 3,
          dayIndex: 5,
          rate: 95
        }
      )
    } else {
      this.holderConfirmedBookings.push(
        {
          roomIndex: 8,
          dayIndex: 5,
          rate: 0
        },
        {
          roomIndex: 8,
          dayIndex: 10,
          rate: 0
        },
        {
          roomIndex: 13,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 14,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 15,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 16,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 17,
          dayIndex: 13,
          rate: 90
        },
        {
          roomIndex: 11,
          dayIndex: 0,
          rate: 90
        },
        {
          roomIndex: 12,
          dayIndex: 0,
          rate: 90
        },
        {
          roomIndex: 13,
          dayIndex: 0,
          rate: 90
        },
        {
          roomIndex: 14,
          dayIndex: 0,
          rate: 90
        },
        {
          roomIndex: 2,
          dayIndex: 1,
          rate: 100
        },
        {
          roomIndex: 2,
          dayIndex: 2,
          rate: 100
        },
        {
          roomIndex: 2,
          dayIndex: 3,
          rate: 100
        },
        {
          roomIndex: 10,
          dayIndex: 6,
          rate: 95
        },
        {
          roomIndex: 10,
          dayIndex: 7,
          rate: 95
        },
        {
          roomIndex: 10,
          dayIndex: 8,
          rate: 95
        },
        {
          roomIndex: 11,
          dayIndex: 9,
          rate: 75
        },
        {
          roomIndex: 11,
          dayIndex: 10,
          rate: 75
        },
        {
          roomIndex: 11,
          dayIndex: 11,
          rate: 75
        },
        {
          roomIndex: 11,
          dayIndex: 12,
          rate: 75
        },
        {
          roomIndex: 8,
          dayIndex : 13,
          rate:  75
        },
        {
          roomIndex: 9,
          dayIndex : 13,
          rate:  75
        },
        {
          roomIndex: 10,
          dayIndex : 13,
          rate:  75
        },
        {
          roomIndex: 11,
          dayIndex : 13,
          rate:  75
        },
        {
          roomIndex: 15,
          dayIndex : 6,
          rate:  75
        },
        {
          roomIndex: 15,
          dayIndex : 7,
          rate:  75
        },
        {
          roomIndex: 16,
          dayIndex : 6,
          rate:  75
        },
        {
          roomIndex: 16,
          dayIndex : 7,
          rate:  75
        }
      )
    }
  },

  handleClashes (decisions) {
    let decision5 = decisions[4]

    if (decision5 === 0) {
      this.clashes.push(
        {
          roomIndex: 7,
          dayIndex: 4,
          rate: 100,
          group: 'A'
        },
        {
          roomIndex: 7,
          dayIndex: 5,
          rate: '<span class="groupABorder">75</span> or <span class="groupBBorder">100</span>',
          group: 'AB'
        },
        {
          roomIndex: 7,
          dayIndex: 6,
          rate: '<span class="groupABorder">75</span> or <span class="groupBBorder">100</span>',
          group: 'AB'
        },
        {
          roomIndex: 7,
          dayIndex: 7,
          rate: 75,
          group: 'B'
        },
        {
          roomIndex: 7,
          dayIndex: 8,
          rate: 75,
          group: 'B'
        },
        {
          roomIndex: 7,
          dayIndex: 9,
          rate: 75,
          group: 'B'
        }
      )
    } else {
      this.clashes.push(
        {
          roomIndex: 8,
          dayIndex: 5,
          rate: 100,
          group: 'A'
        },
        {
          roomIndex: 8,
          dayIndex: 6,
          rate: '<span class="groupABorder">75</span> or <span class="groupBBorder">100</span>',
          group: 'AB'
        },
        {
          roomIndex: 8,
          dayIndex: 7,
          rate: '<span class="groupABorder">75</span> or <span class="groupBBorder">100</span>',
          group: 'AB'
        },
        {
          roomIndex: 8,
          dayIndex: 8,
          rate: 75,
          group: 'B'
        },
        {
          roomIndex: 8,
          dayIndex: 9,
          rate: 75,
          group: 'B'
        },
        {
          roomIndex: 8,
          dayIndex: 10,
          rate: 75,
          group: 'B'
        }
      )
    }
  },

  handleScenario7 (decisions) {
    let decision7 = decisions[6]

    if (decision7 === 0) {
      this.holderConfirmedBookings.push(
        {
          dayIndex: 12,
          roomIndex: 0,
          rate: 100
        },
        {
          dayIndex: 12,
          roomIndex: 1,
          rate: 100
        },
        {
          dayIndex: 12,
          roomIndex: 2,
          rate: 100
        },
        {
          dayIndex: 12,
          roomIndex: 3,
          rate: 100
        },
        {
          dayIndex: 12,
          roomIndex: 4,
          rate: 100
        },
        {
          dayIndex: 12,
          roomIndex: 5,
          rate: 100
        },
        {
          dayIndex: 12,
          roomIndex: 6,
          rate: 100
        },
        {
          dayIndex: 13,
          roomIndex: 0,
          rate: 100
        },
        {
          dayIndex: 13,
          roomIndex: 1,
          rate: 100
        },
        {
          dayIndex: 13,
          roomIndex: 2,
          rate: 100
        },
        {
          dayIndex: 13,
          roomIndex: 3,
          rate: 100
        },
        {
          dayIndex: 13,
          roomIndex: 4,
          rate: 100
        },
        {
          dayIndex: 13,
          roomIndex: 5,
          rate: 100
        },
        {
          dayIndex: 13,
          roomIndex: 6,
          rate: 100
        }
      )
    }
  },

  getModal (decisions) {
    let decision5 = decisions[4]
    let decision6 = decisions[5]

    if (decision5 === 1 && decision6.includes('A')) {

      this.holderConfirmedBookings.push(
        {
          dayIndex: 2,
          roomIndex: 5,
          rate: 75
        },
        {
          dayIndex: 2,
          roomIndex: 6,
          rate: 75
        },
        {
          dayIndex: 2,
          roomIndex: 7,
          rate: 75
        },
        {
          dayIndex: 3,
          roomIndex: 5,
          rate: 75
        },
        {
          dayIndex: 3,
          roomIndex: 6,
          rate: 75
        },
        {
          dayIndex: 3,
          roomIndex: 7,
          rate: 75
        })

      return true
    } else {
      return false
    }
  }
}

export default Scenario8
