import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import { YellowBox } from 'react-native';
import _ from 'lodash';
import HeaderMural from './src/HeaderMural'
import BodyMural from './src/BodyMural'
import * as Font from 'expo-font'
import { database } from './firebase'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoadingComplete: false,
      cards: {},
      isLoadingCards: false,
    }

    this.deleteCard = this.deleteCard.bind(this)
  }

  async componentDidMount() {
    this.setState({
      isLoadingCards: true
    })

    this.setState({ isLoadingCards: true })
    this.cards = database.ref('cards')
    this.cards.on('value', snapshot => {
      this.setState({
        cards: snapshot.val(),
        isLoadingCards: false
      })
    })

    await Font.loadAsync({
      Roboto: require('./node_modules/native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('./node_modules/native-base/Fonts/Roboto_medium.ttf')
    }).then(() => {
      this.setState({ isLoadingComplete: true })
    })

    YellowBox.ignoreWarnings(['Setting a timer']);
    const _console = _.clone(console);
    console.warn = message => {
      if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
      }
    };
  }

  deleteCard(index) {
    database.ref('cards').child(index).remove()
  }

  render() {
    if (!this.state.isLoadingComplete && !this.isLoadingCards) {
      return <AppLoading />
    }
    return (
      <View style={styles.container}>
        <HeaderMural />
        <BodyMural cards={this.state.cards} deleteCard={this.deleteCard} />
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
