import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import CardMural from './CardMural'

const BodyMural = ({ cards, isLoadingCards }) => {
  return (
    <ScrollView style={styles.color}>

      {!isLoadingCards && Object.keys(cards).map(key => <CardMural key={key}
        title={cards[key].title} content={cards[key].content} />)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#344955',
  }
})

export default BodyMural