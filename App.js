import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {AppLoading} from 'expo'
import HeaderMural from './src/HeaderMural'
import * as Font from 'expo-font'

export default class App extends React.Component {
  state ={
    isLoadingComplete: false
  }

  async componentDidMount(){
    await Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf')
    }).then(() => {
      this.setState({isLoadingComplete: true})
    })
  }

  render() {
    if (!this.state.isLoadingComplete) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <HeaderMural style={styles.header}/>
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
