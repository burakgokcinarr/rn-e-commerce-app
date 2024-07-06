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
            <TouchableOpacity key={index} onPress={() => setSelectedIndex(index)}>
                <View style={[styles.category, { borderBottomColor: selectedIndex === index ? colors.BLUE : colors.GRAY }]}>
                    <Text style={[styles.title, { color: selectedIndex === index ? colors.BLUE : colors.GRAY}]} >{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
       <>
        <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.container}
        >
            {
                category.map((val, index) => <CategoryView item={val} index={index}/>)
            }
        </ScrollView>
        <Text>{selectedIndex}</Text>
       </>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    },
    category: {
        marginRight: 15,
        borderBottomWidth: 3
    },
    title: {
        fontSize: 16,
        fontFamily: Fonts.medium
    }
})