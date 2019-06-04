// template Scenario file
const Scenario9 = {
  get (decisions) {

    let choseBothStr = decisions[decisions.length - 1]
    console.log(choseBothStr)
    console.log(decisions)
    let choseBoth = choseBothStr.includes('Both')

    return {
      text: this.getText(choseBoth),
      popover: false,
      popoverText: '',
      potentialBookings: this.getPotentialBookings(choseBoth),
      additionalConfirmedBookings: [
        {
          dayIndex: 2,
          roomIndex: 18,
          rate: 0
        },
        {
          dayIndex: 2,
          roomIndex: 19,
          rate: 0
        }
      ],
      multiChoiceOptions: [],
      multiChoice: false
    }
  },

  getText (choseBoth) {
    if (choseBoth) {
      return 'Unfortunately you have two rooms which are double booked! Click either button to try and resolve the issue'
    } else {
      return 'You are faced with one final request. You are called late by a man who would like to purchase seven rooms on Thursday for £50 each. Do you accept his offer?'
    }
  },

  getPotentialBookings (choseBoth) {
    if (choseBoth) {
      return []
    } else {
      return [
        {
          dayIndex: 2,
          roomIndex: 4,
          rate: 50
        },
        {
          dayIndex: 2,
          roomIndex: 5,
          rate: 50
        },
        {
          dayIndex: 2,
          roomIndex: 6,
          rate: 50
        },
        {
          dayIndex: 2,
          roomIndex: 13,
          rate: 50
        },
        {
          dayIndex: 2,
          roomIndex: 14,
          rate: 50
        },
        {
          dayIndex: 2,
          roomIndex: 18,
          rate: 50
        },
        {
          dayIndex: 2,
          roomIndex: 19,
          rate: 50
        }
      ]
    }
  }
}

export default Scenario9
