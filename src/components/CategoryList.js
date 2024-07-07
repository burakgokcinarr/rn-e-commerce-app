import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Fonts } from '../constants';
import useTheme from '../hooks/useTheme';
 
export default function CategoryList({ data = [] }) {

    const { colors } = useTheme();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [category, setCategory]           = useState(["Smart Watch"]);  // All Smart Watch

    useEffect(() => {
        // DUMMY DATA içerisinde yer alan kategori isimlerinin alınması
        const uniqueCategories = Array.from(new Set(data.map(item => item.category)));
        setCategory([category, ...uniqueCategories])
    }, [])

    const CategoryView = ({ item, index }) => {
        return (
            <TouchableOpacity style={styles.category} key={index} onPress={() => setSelectedIndex(index)}>
                <Text style={[styles.title, { color: selectedIndex === index ? colors.BLUE : colors.GRAY}]} >{item}</Text>
                <View style={[selectedIndex === index ? styles.bottomView : null, { backgroundColor: selectedIndex === index ? colors.BLUE : colors.GRAY }]}/>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                style={styles.container}
            >
                {
                    category.map((val, index) => <CategoryView item={val} index={index}/>)
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
    category: {
        marginRight: 15,
        marginTop: 10
    },
    title: {
        fontSize: 18,
        fontFamily: Fonts.medium
    },
    bottomView: {
        height: 3,
        width: 50
    }
})