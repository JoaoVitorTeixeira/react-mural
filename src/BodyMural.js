import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Card from './Card'

class BodyMural extends React.Component {
    render() {
        return (
            <ScrollView style={styles.color}>
                <Card></Card>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#344955',
  }
})

export default BodyMural