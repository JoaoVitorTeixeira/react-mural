import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>M.U.R.A.L</Text>
        </View>
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
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#6495ED',
  },
  textHeader: {
    textAlign: 'right',
    fontSize: 30,
    marginTop: 40,
    color: 'white'
  },  
  body: {
    flex: 5,
    backgroundColor: '#344955',
    textAlign: 'right',
  }
});
