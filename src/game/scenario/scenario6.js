const Scenario2 = {
  get (decisions) {
    console.log(decisions);

    let lastDecision = decisions[decisions.length - 1]

    return {
      text : 'Will you accept?: A) A Portugese student visiting universities with her family, B) A group of staff from Exeter wanting a night out, or C) A group of individuals needing somewhere to stay for the night between campaigns.',
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
    return []
  },

  getAdditionalYesConfirmedBookings () {
    return []
  },

  getAdditionalNoConfirmedBookings () {
    return []
  }
}

export default Scenario2
