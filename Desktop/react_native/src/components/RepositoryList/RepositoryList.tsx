import React, { FC } from 'react'
import { View, Text, FlatList } from 'react-native'
import { repositories } from '../../data/repositories'
import RepositoryItem from '../RepositoryItem/RepositoryItem'

const RepositoryList:FC = () => {
  return (
    <FlatList data={repositories}
      keyExtractor={({ id }) => id.toString()}
      ItemSeparatorComponent={() => <View style={{ marginBottom: 40 }}></View>}
      renderItem={({ item: repositories }) => (
        <RepositoryItem {...repositories} />
      )}
    />
  )
}

export default RepositoryList