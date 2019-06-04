const Scenario2 = {
  get () {
    return {
      text : 'An aspiring chef is attaining a cookery course in London for 5 days from Tuesday to Saturday, and he needs a place to stay. He is desperate and willing to pay full price.',
      popover: false,
      popoverText: '',
      potentialBookings: [
        {
          roomIndex: 0,
          dayIndex: 1,
          rate: 100
        },
        {
          roomIndex: 0,
          dayIndex: 2,
          rate: 100
        },
        {
          roomIndex: 0,
          dayIndex: 3,
          rate: 100
        },
        {
          roomIndex: 0,
          dayIndex: 4,
          rate: 100
        },
        {
          roomIndex: 0,
          dayIndex: 5,
          rate: 100
        }
      ],
      additionalConfirmedBookings: []
    }
  }
}

export default Scenario2
