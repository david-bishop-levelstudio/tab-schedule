import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import StyledText from '../../components/StyledText'
import { getCoachByID, getColorByResult } from '../../data/data'
import { AntDesign } from '@expo/vector-icons';
import colors from '../../colors';

const headers = [
  { id: "tm", isSched: false, isTap: false, label: "Team" },
  { id: "w12", isSched: true, isTap: false, label: "Week 12" },
  { id: "w13", isSched: true, isTap: false, label: "Week 13" },
  { id: "w14", isSched: true, isTap: false, label: "Week 14" },
  { id: "wns", isSched: false, isTap: true, label: "Wins" }
]

const Table = ({ data, handleMatchUp, sortData }: any) => {

  const [sorted, sortedSet] = useState(true);

  const handleTap = () => {
    sortedSet(true);
    sortData();
  }

  return (
    <View>
      <View style={styles.headers}>
        {headers.map(({ id, label, isSched, isTap }) =>
          <TouchableOpacity disabled={!isTap} onPress={handleTap} key={id} style={[styles.item, isSched && styles.schedule]}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <StyledText>{label}</StyledText>
              {isTap && <AntDesign style={{ opacity: sorted ? 1 : 0 }} name="caretdown" size={8} />}
            </View>
          </TouchableOpacity>)}
      </View>
      {data.map(({ id, coach, schedule, possibleWins }: any) => {
        return (
          <View key={id} style={styles.row}>
            <View style={styles.item}>
              <StyledText style={{ color: 'black', fontWeight: '600', textTransform: 'uppercase' }}>{coach}</StyledText>
            </View>
            {schedule
              .map(({ opponent, result }: any, index: number) => {
                const opp = getCoachByID(opponent);
                const backgroundColor = getColorByResult(result)
                return (
                  <TouchableOpacity key={`sched-${index}`} style={[styles.item, styles.schedule, { backgroundColor }]} onPress={() => { sortedSet(false); handleMatchUp(id, opponent, index) }}>
                    <StyledText style={{ color: 'black' }}>{opp.coach}</StyledText>
                  </TouchableOpacity>
                )
              })}
            <View style={styles.item}><StyledText style={{ color: 'black' }}>{possibleWins}</StyledText></View>
          </View>
        )
      })}
    </View>)
}

export default Table

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginVertical: 1, backgroundColor: "#fff", height: 40 },
  headers: { flexDirection: 'row', backgroundColor: colors.primary, height: 50 },
  heading: { color: 'black', fontSize: 16, textTransform: "uppercase" },
  item: { flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 5 },
  schedule: { maxWidth: 100 }
})
