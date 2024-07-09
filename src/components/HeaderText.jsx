import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fonts } from '../constants'
import useTheme from '../hooks/useTheme'

export default function HeaderText({ style, children }) {
    
    const { colors }      = useTheme();

    return (
        <Text style={[styles.title, { color: colors.TEXT }, style]}>
            {children}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 11,               // Default
        fontFamily: Fonts.regular   // Default
    }
})