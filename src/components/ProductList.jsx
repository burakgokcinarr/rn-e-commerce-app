import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Fonts } from '../constants'
import useTheme from '../hooks/useTheme'
import { useSelector } from 'react-redux'

export default function ProductList() {

  const data       = useSelector((state) => state.data.data);
  const { colors } = useTheme();

  const productCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image 
            source={item.image}
            style={styles.productImage}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.productTitle}>{item.title}</Text>
          <Text style={styles.productBrand}>{item.category}</Text>
          <Text style={styles.productPrice}>{item.price}</Text>
        </View>
      </View>
    )
  }

  return (
    <FlatList
      data={data}
      numColumns={2}
      renderItem={productCard}
      keyExtractor={(item) => item.id.toString()}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={{justifyContent: 'space-around'}}
    />
  )
}

const styles = StyleSheet.create({
    container: {
      marginTop: 10
    },
    card: {
      width: '45%',
      backgroundColor: '#fff',
      borderRadius: 16,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 10 },
      shadowRadius: 10,
      elevation: 3,
      overflow: 'hidden',
      marginBottom: 10
    },
    imageContainer: {
      backgroundColor: '#f2cbc6',
      padding: 20,
      alignItems: 'center',
    },
    productImage: {
      width: 180,
      height: 180,
      resizeMode: 'contain',
    },
    textContainer: {
      flex: 1,
      justifyContent: 'space-between',
      padding: 8,
    },
    productTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#2a2a2a',
    },
    productBrand: {
      fontSize: 14,
      color: '#a2a2a2',
    },
    productPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#6633FF',
      marginTop: 8,
    },
})