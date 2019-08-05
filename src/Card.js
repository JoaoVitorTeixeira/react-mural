import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Card extends React.Component {
    render() {
        return(
            <View style={styles.card}>
                <Text>OPA</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'white',
        margin: 5,
        paddingTop: 80
    }
})

export default Card