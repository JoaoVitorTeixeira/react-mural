import React from 'react'
import { Header, Left, Body, Right, Title } from 'native-base'
import {MaterialIcons} from '@expo/vector-icons'

const HeaderMural = () => {
    return (
        <Header>
          <Left>
            <MaterialIcons name='add' size={25}/>
          </Left>
          <Body>
            <Title>M.U.R.A.L</Title>
          </Body>
          <Right>
            <MaterialIcons name='exit-to-app' size={25}/>
          </Right>
        </Header>
    )
}

export default HeaderMural