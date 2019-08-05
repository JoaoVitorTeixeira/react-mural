import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.textHeader}>M.U.R.A.L</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#6495ED',
      },
      textHeader: {
        textAlign: 'right',
        fontSize: 30,
        marginTop: 40,
        color: 'white',
      },
})

export default Header