import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import useTheme from '../../src/hooks/useTheme';
import { Camera } from 'lucide-react-native';

export default function HomePage() {

    const { colors }      = useTheme();
    
    return (
        <View style={[styles.container, { backgroundColor: colors.BG_COLOR }]}>
            <Text style={[styles.title, { color: colors.TEXT }]}>Open up App.js to start working on your app!</Text>
            <Camera color="red" size={48} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20
    }
});