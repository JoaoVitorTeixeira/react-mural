import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from './Card'

class Body extends React.Component {
    render() {
        return (
            <View style={styles.body}>
                <Card></Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 5,
        backgroundColor: '#344955',
        textAlign: 'right',
    }
})

export default Body