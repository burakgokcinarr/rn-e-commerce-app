import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Fonts } from '../constants';
import useTheme from '../hooks/useTheme';

const { width: screenWidth } = Dimensions.get('window');

export default function Button({ title = '', onPressed = null, style = null, linearColors = [], icon = null }) {

    const { colors } = useTheme();

    return (
        <TouchableOpacity 
            onPress={onPressed} 
        >
            <LinearGradient
                colors={linearColors}
                style={styles.button}
                start={{ x: 2, y: 2 }}
            >
                <Text style={styles.text}>{icon}{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: screenWidth/1.5,
        height: 65,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontFamily: Fonts.medium,
        textAlign: 'center',
        color: 'white'
    }
})