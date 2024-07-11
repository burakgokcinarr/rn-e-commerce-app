import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import { Fonts } from '../constants'
import { useNavigation } from '@react-navigation/native'

export default function ProductCard({ item }) {

    const navigation= useNavigation();
    const { width } = useWindowDimensions();
    const scale     = size => (width / 430) * size; // 430 => Ekran tasarımın yapıldığı genişlik

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Detail', { detail: item })}>
            <View style={[styles.card, { width: width/2 - 10 }]}>
                <View style={[styles.imageContainer, { backgroundColor: item.primaryColor }]}>
                    <Image 
                    source={item.image}
                    style={[styles.productImage, { width: scale(200), height: scale(200) }]}
                    contentFit='contain'
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.productTitle}>{item.title}</Text>
                    <Text style={styles.productBrand}>{item.category}</Text>
                    <Text style={styles.productPrice}>{item.price}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
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
        width: '80%',
        backgroundColor: '#f2cbc6',
        marginVertical: 5,
        alignSelf: 'center',
        borderRadius: 15
    },
    productImage: {
        width: 160,
        height: 160,
        alignSelf: 'center'
    },
    textContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 8
    },
    productTitle: {
        fontSize: 17,
        fontFamily: Fonts.bold,
        color: '#2a2a2a',
    },
    productBrand: {
        fontSize: 14,
        fontFamily: Fonts.regular,
        color: '#a2a2a2',
    },
    productPrice: {
        fontSize: 20,
        fontFamily: Fonts.bold,
        color: '#6633FF',
        marginTop: 20,
    },
})