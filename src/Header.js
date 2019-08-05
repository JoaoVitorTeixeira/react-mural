import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import add from '../assets/add.svg'

class Header extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={styles.textHeader}>M.U.R.A.L</Text>
                <Image style={styles.add} source={add}></Image>
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
      add: {
        flex: 0.5,
        flexDirection: 'row',
      },
})

export default Header