import React, { FC } from 'react'
import { Alert, Text, TouchableWithoutFeedback, View } from 'react-native'
import Constants from 'expo-constants'
import RepositoryList from './RepositoryList/RepositoryList'

const Main:FC = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <RepositoryList />
    </View>
  )
}

export default Main