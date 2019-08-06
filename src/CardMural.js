import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, CardItem, Text, Body } from "native-base"

const CardMural = ({ title, content }) => {
  return (
    <Card>
      <CardItem header bordered>
        <Text>{title}</Text>
      </CardItem>
      <CardItem bordered>
        <Body>
          <Text>
            {content}
          </Text>
        </Body>
      </CardItem>
    </Card>
  )
}

export default CardMural