import React from 'react'
import { Header, Left, Body, Right, Title, Button } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

const HeaderMural = ({ createCard }) => {
  return (
    <Header>
      <Left>
        <Button onPress={() => createCard({ title: 'opa', content: 'hi' })} transparent>
          <MaterialIcons name='add' size={25} />
        </Button>
      </Left>
      <Body>
        <Title>M.U.R.A.L</Title>
      </Body>
      <Right>
        <MaterialIcons name='exit-to-app' size={25} />
      </Right>
    </Header>
  )
}

export default HeaderMural