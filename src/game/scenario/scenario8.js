// template Scenario file
const Scenario8 = {

  holderConfirmedBookings : [],

  get (decisions) {

    return {
      text: '8) More people have booked rooms, and now you have three options. You can either accept a small request at maximum room price, a large request with rooms on special offer, or both. Choose carefully.',
      popover: this.getModal(decisions),
      popoverText: 'Luckily for you, some people in other rooms on the same day as your overbooking cancel, and you have enough room to slot them in. Your risk payed off!',
      potentialBookings: [],
      additionalConfirmedBookings: this.holderConfirmedBookings,
      multiChoiceOptions: ["Small", "Large", "Both"],
      multiChoice: true
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
