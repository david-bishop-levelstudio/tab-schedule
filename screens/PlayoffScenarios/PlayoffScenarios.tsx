import React, { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import colors from '../../colors';
import StyledText from '../../components/StyledText';
import { data as schedule, getOppositionOutcome, matchup_outcomes } from '../../data/data';
import Table from './Table';

const sortByWins = (a: any, b: any) => b.wins - a.wins

export default function App() {

  const [data, dataSet] = useState(schedule.sort(sortByWins))

  const handleMatchUp = (id: string, opponent: string, week: number) => {

    const clone = [...data]

    const coach = clone.filter((coach) => coach.id === id)[0]
    const opposition = clone.filter((coach) => coach.id === opponent)[0]

    let i = 0
    const currentResultIndex = matchup_outcomes.indexOf(coach.schedule[week].result)
    if (currentResultIndex < matchup_outcomes.length - 1) {
      i = currentResultIndex + 1
    }

    const coachOutcome = matchup_outcomes[i]

    // update week result
    coach.schedule[week].result = coachOutcome
    opposition.schedule[week].result = getOppositionOutcome(coachOutcome)

    // update possible wins
    coach.possibleWins = coach.schedule.reduce((a, c) => c.result === "win" ? a + 1 : a, coach.wins)
    opposition.possibleWins = opposition.schedule.reduce((a, c) => c.result === "win" ? a + 1 : a, opposition.wins)

    // replace ddata  
    dataSet(clone)

  }

  const sortData = () => {
    const sorted = [...data].sort((a, b) => b.possibleWins - a.possibleWins)
    dataSet(sorted)
  }

  const reset = () => dataSet(schedule)

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', alignItems: "center" }}>
          <StyledText style={{ fontSize: 60, fontWeight: '600' }}>TAB</StyledText>
          <View style={styles.divider} />
          <StyledText style={{ fontSize: 30 }}>2021 Playoffs Predictor</StyledText>
        </View>
        <Table {...{ data, handleMatchUp, sortData }} />
        {/* <Button title="Reset" onPress={reset} /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  divider: {
    marginTop: -10,
    width: 3,
    height: 50,
    marginHorizontal: 10,
    backgroundColor: colors.primary
  }
});
