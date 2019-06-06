const Scenario3 = {
  get () {
    return {
      text: 'A couple are spending their 10 year anniversary in London, and are looking for a nice hotel to stay in for 1 Monday night; they want the best room so they are using a promotional code.',
      popover: false,
      popoverText: '',
      potentialBookings: [
        {
          roomIndex:10,
          dayIndex:0,
          rate: 90
        }
      ],
      additionalConfirmedBookings: [],
      multiChoiceOptions: [],
      multiChoice: false
    }
  }
}

export default Scenario3
