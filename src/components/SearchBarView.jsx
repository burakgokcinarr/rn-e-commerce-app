import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Search, LayoutGrid } from 'lucide-react-native'
import useTheme from '../hooks/useTheme'
import { Fonts } from '../constants'

export default function SearchBarView( props ) {

    const { colors } = useTheme();
    
    return (
        <View style={styles.container}>
            <View style={styles.inputView}>
                <Search size={28} color={colors.TEXT}/>
                <TextInput
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.TEXT}
                    onChangeText={props.setSearchText}
                    value={props.value}
                    style={[props.style, styles.input, { color: colors.TEXT }]}
                />
            </View>
            <LayoutGrid size={30} color={colors.TEXT}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        fontSize: 18,
        fontFamily: Fonts.medium
    },
    inputView: {
        flexDirection: 'row',
        padding: 8,
        borderWidth: 0.5,
        borderColor: 'grey',
        borderRadius: 20,
        width: '85%'
    }
})