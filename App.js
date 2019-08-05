import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './src/Header'
import Body from './src/Body';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Body />
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
});
