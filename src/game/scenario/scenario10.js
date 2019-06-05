// template Scenario file
const Scenario10 = {
  get () {
    return {
      text: 'You have been caught out - Both guests arrive on the day ready to be roomed, and there isn\'t enough space for both of them as you have overbooked! What do you do? Select an option by clicking on the letter.',
      popover: false,
      popoverText: '',
      potentialBookings: [],
      additionalConfirmedBookings: [],
      multiChoiceOptions: ['A - Call a neighbouring hotel to try and fix the problem.',
        'B - Tell the guests paying the least amount of money that there must have been a mistake and deny any knowledge that they were coming.',
        'C - Apologise politely and tell the guests the truth - You\'ve overbooked and in doing so you have run out of rooms.'],
      multiChoice: true
    }
  }
}

export default Scenario10
