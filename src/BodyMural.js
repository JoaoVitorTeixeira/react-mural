import React from 'react'
import CardMural from './CardMural'
import { StyleSheet, View, Button } from 'react-native'
import { SwipeListView } from 'react-native-swipe-list-view'

class BodyMural extends React.Component {

  state = {
    newComment: ''
  }

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
          <View style={styles.rowBack}>
            <Button
              title='Remover'
              icon='edit'
              onPress={() => this.props.deleteCard(data.item)}
            />
            <Button
              title='Editar'
              style={{
                backgroundColor: 'red',
                color: 'white'
              }}
              onPress={() => console.log(data)}
            />
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