import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './src/Header'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <Text>oiii</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 5,
    backgroundColor: '#344955',
    textAlign: 'right',
  }
});
