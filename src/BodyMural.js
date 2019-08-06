import React from 'react'
import CardMural from './CardMural'
import { StyleSheet, View, Text } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'
import { AppLoading } from 'expo'

class BodyMural extends React.Component {
  render() {
    const { cards } = this.props
    const keys = Object.keys(cards)

    return (
      <SwipeListView style={styles.color}
        data={keys}
        renderItem={(cardKey, rowMap) =>
          <CardMural keys={cardKey} title={cards[cardKey.item].title} content={cards[cardKey.item].content} />
        }
        keyExtractor={(card, key) => key.toString()}
        renderHiddenItem={(data, rowMap) => (
          <View>
            <Text>Left</Text>
            <Text>Right</Text>
          </View>
        )}

        leftOpenValue={75}
        rightOpenValue={-75}
      />
    )
  }
}

const styles = StyleSheet.create({
  color: {
    backgroundColor: '#344955',
  }
})

export default BodyMural