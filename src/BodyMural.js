import React from 'react'
import CardMural from './CardMural'
import { StyleSheet, View, Button } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'

class BodyMural extends React.Component {

  state = {
    newComment: '',
  }

  render() {
    const { cards, deleteCard } = this.props
    let keys = {}

    if (cards !== null) {
      keys = Object.keys(cards)
      return (
        <SwipeListView style={styles.color}
          data={keys}
          renderItem={(cardKey, rowMap) =>
            <CardMural keys={cardKey} title={cards[cardKey.item].title} content={cards[cardKey.item].content} />
          }
          keyExtractor={(card, key) => key.toString()}
          renderHiddenItem={(data, rowMap) => (
            <View style={styles.rowBack}>
              <Button
                title='Remover'
                onPress={() => deleteCard(data.item)}
              />
              <Button
                title='Editar'
                onPress={() => console.log(data)}
              />
            </View>
          )}

          leftOpenValue={75}
          rightOpenValue={-75}
        />
      )
    }

    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344955',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  color: {
    backgroundColor: '#344955',
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15
  }
})

export default BodyMural