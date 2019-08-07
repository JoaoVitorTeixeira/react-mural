import React from 'react'
import { Header, Left, Body, Right, Title, Button } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

class HeaderMural extends React.Component {
  render() {
    const {createCard} = this.props

    return (
      <Header>
        <Left>
          <Button onPress={() => createCard({title:'opa', content:'hi'})}>
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
}

export default HeaderMural