import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Card from './Card'

const BodyMural = ({ cards, isLoadingCards }) => {
  return (
    <ScrollView style={styles.color}>

      {!isLoadingCards && Object.keys(cards).map(key => <Card key={key} />)}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#344955',
  }
})

export default BodyMural