import { View, Text, StyleSheet, SafeAreaView, Button, Alert } from 'react-native'
import React, { useState } from 'react'
import { HeaderText, SearchBarView, CategoryList, ProductList } from '../components';
import { Fonts } from '../constants';

export default function HomePage() {

    const [searchText, setSearchText] = useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderText style={styles.headerView}>
                Find your suitable watch now.
            </HeaderText>
            <SearchBarView 
                value={searchText} 
                placeholder="Search Product"
                setSearchText={setSearchText} 
                style={styles.input}
            />
            <CategoryList />
            <ProductList />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerView: {
        fontSize: 36, 
        fontFamily: Fonts.bold, 
        margin: 8,
        textAlign: 'left'
    },
    input: {
        flex: 1
    }
});