import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'
import { Fonts } from '../constants';

export default function CategorySection({ item, index, selectedIndex, onPress }) {

    const { colors } = useTheme();

    const selectedTitleStyle = {
        color: selectedIndex === index ? colors.BLUE : colors.GRAY,
        fontFamily: selectedIndex === index ? Fonts.bold : Fonts.medium
    }

    const selectedCategoryViewStyle = {
        backgroundColor: selectedIndex === index ? colors.BLUE : colors.GRAY 
    }

    return (
        <TouchableOpacity key={index} style={styles.category} onPress={() => onPress(index)}>
            <Text style={[styles.title, selectedTitleStyle]} >{item}</Text>
            <View style={[selectedIndex === index ? styles.bottomView : null, selectedCategoryViewStyle]}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    category: {
        marginRight: 15,
        marginTop: 10
    },
    title: {
        fontSize: 18
    },
    bottomView: {
        height: 5,
        width: 50
    }
})