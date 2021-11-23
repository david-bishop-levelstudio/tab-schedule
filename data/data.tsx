
export const TEAM1 = "dbishop"
export const TEAM2 = "sbishop"
export const TEAM3 = "chiggins"
export const TEAM4 = "tnickerson"
export const TEAM5 = "jhartenberger"
export const TEAM6 = "wdeeker"
export const TEAM7 = "abitchell"
export const TEAM8 = "sam"
export const TEAM9 = "simon"
export const TEAM10 = "jsolomon"
export const TEAM11 = "chorwill"
export const TEAM12 = "alawson"

export const matchup_outcomes = ["unknown", "win", "loss"]

export const data = [
  { id: TEAM1, coach: "D. Bishop", wins: 6, possibleWins: 6, schedule: [{ opponent: TEAM9, result: "unknown" }, { opponent: TEAM2, result: "unknown" }, { opponent: TEAM12, result: "unknown" }] },
  { id: TEAM2, coach: "S. Bishop", wins: 7, possibleWins: 7, schedule: [{ opponent: TEAM12, result: "unknown" }, { opponent: TEAM1, result: "unknown" }, { opponent: TEAM9, result: "unknown" }] },
  { id: TEAM3, coach: "Higgins", wins: 8, possibleWins: 8, schedule: [{ opponent: TEAM7, result: "unknown" }, { opponent: TEAM4, result: "unknown" }, { opponent: TEAM11, result: "unknown" }] },
  { id: TEAM4, coach: "Nickerson", wins: 6, possibleWins: 6, schedule: [{ opponent: TEAM11, result: "unknown" }, { opponent: TEAM3, result: "unknown" }, { opponent: TEAM7, result: "unknown" }] },
  { id: TEAM5, coach: "Hartenberger", wins: 5, possibleWins: 5, schedule: [{ opponent: TEAM6, result: "unknown" }, { opponent: TEAM10, result: "unknown" }, { opponent: TEAM8, result: "unknown" }] },
  { id: TEAM6, coach: "Deeker", wins: 3, possibleWins: 3, schedule: [{ opponent: TEAM5, result: "unknown" }, { opponent: TEAM8, result: "unknown" }, { opponent: TEAM10, result: "unknown" }] },
  { id: TEAM7, coach: "Bitchell", wins: 3, possibleWins: 3, schedule: [{ opponent: TEAM3, result: "unknown" }, { opponent: TEAM11, result: "unknown" }, { opponent: TEAM4, result: "unknown" }] },
  { id: TEAM8, coach: "Sa. Evans", wins: 5, possibleWins: 5, schedule: [{ opponent: TEAM10, result: "unknown" }, { opponent: TEAM6, result: "unknown" }, { opponent: TEAM5, result: "unknown" }] },
  { id: TEAM9, coach: "Si. Evans", wins: 6, possibleWins: 6, schedule: [{ opponent: TEAM1, result: "unknown" }, { opponent: TEAM12, result: "unknown" }, { opponent: TEAM2, result: "unknown" }] },
  { id: TEAM10, coach: "Solomon", wins: 6, possibleWins: 6, schedule: [{ opponent: TEAM8, result: "unknown" }, { opponent: TEAM5, result: "unknown" }, { opponent: TEAM6, result: "unknown" }] },
  { id: TEAM11, coach: "Horwill", wins: 6, possibleWins: 6, schedule: [{ opponent: TEAM4, result: "unknown" }, { opponent: TEAM7, result: "unknown" }, { opponent: TEAM3, result: "unknown" }] },
  { id: TEAM12, coach: "Lawson", wins: 6, possibleWins: 6, schedule: [{ opponent: TEAM2, result: "unknown" }, { opponent: TEAM9, result: "unknown" }, { opponent: TEAM1, result: "unknown" }] },
]

export const getCoachByID = (id: string) => data.filter(coach => coach.id === id)[0]

export const getOppositionOutcome = (coachOutcome: string) => {
  switch (coachOutcome) {
    case matchup_outcomes[0]:
      return matchup_outcomes[0]
    case matchup_outcomes[1]:
      return matchup_outcomes[2]
    case matchup_outcomes[2]:
      return matchup_outcomes[1]
    default:
      return matchup_outcomes[0]
  }
}

export const getColorByResult = (result: string) => {
  switch (result) {
    case "win":
      return "rgb(134,255,134)"

    case "loss":
      return "rgb(255, 89, 107)"

    default:
      return "white"
  }
}