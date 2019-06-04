import * as Scenarios from './scenario/scenarios'

const Game = {
  getScenario (index, decisions) {
    if (index === 1) {
      return Scenarios.Scenario1.get()
    } else if (index === 2) {
      return Scenarios.Scenario2.get()
    } else if (index === 3) {
      return Scenarios.Scenario3.get()
    } else if (index === 4) {
      return Scenarios.Scenario4.get()
    } else if (index === 5) {
      return Scenarios.Scenario5.get()
    } else if (index === 6) {
      return Scenarios.Scenario6.get(decisions)
    } else if (index === 7) {
      return Scenarios.Scenario7.get()
    } else if (index === 8) {
      return Scenarios.Scenario8.get(decisions)
    } else if (index === 9) {
      return Scenarios.Scenario9.get(decisions)
    }
  },

  getDefaultState () {
    return Scenarios.DefaultState.get()
  }
}

export default Game
