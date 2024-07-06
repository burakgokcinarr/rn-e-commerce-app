import { View, Text, StyleSheet, SafeAreaView, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { HeaderText, SearchBarView, CategoryList } from '../components';
import { Fonts } from '../constants';

export default function HomePage() {

    const [searchText, setSearchText] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerView}>
                <HeaderText style={{fontSize: 36, fontFamily: Fonts.bold}}>
                    Find your suitable watch now.
                </HeaderText>
            </View>
            <SearchBarView 
                value={searchText} 
                placeholder="Search Product"
                setSearchText={setSearchText} 
                style={styles.input}
            />
            <CategoryList/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        padding: 8
    },
    input: {
        flex: 1
    }
});