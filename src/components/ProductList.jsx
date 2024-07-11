import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { ProductCard } from './'

export default function ProductList() {

  const data       = useSelector((state) => state.data.data);

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={({item}) => <ProductCard item={item}/>}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.listWrapper}
    />
  )
}

const styles = StyleSheet.create({
    container: {
      marginVertical: 10
    },
    listWrapper: {
      justifyContent: 'space-around'
    }
})