import { StyleSheet, View, Pressable } from 'react-native'
import React from 'react'
import useTheme from '../hooks/useTheme'
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft, Heart } from 'lucide-react-native';

export default function Header() {
    
    const navigation = useNavigation();
    const { colors } = useTheme();

    return (
        <View style={styles.header}>
            <Pressable onPress={() => navigation.goBack()}>
                <ArrowLeft size={30} color={colors.TEXT}/>
            </Pressable>
            <Heart size={30} color={colors.TEXT}/>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginHorizontal: 10
    }
})