import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

export default function ProductList({ data = [] }) {
  return (
    <FlatList
        data={data}
        numColumns={2}
        renderItem={({item}) => <Text>{item.category}</Text>}
        keyExtractor={(item) => item.id.toString()}
        style={styles.container} 
    />
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})