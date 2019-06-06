const Scenario2 = {
  get() {
    return {
      text: 'An aspiring chef is attending a cookery course in London for 5 days from Tuesday to Saturday, and he needs a place to stay; he is desperate and willing to pay full price.',
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
      additionalConfirmedBookings: [],
      multiChoiceOptions: [],
      multiChoice: false
    }
  }
}

export default Scenario2
