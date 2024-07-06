import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { DUMMY_DATA } from '../dummy/Data';
 
export default function CategoryList() {

    const [category, setCategory] = useState(["Smart Watch"]);  // All Smart Watch

    useEffect(() => {
        // DUMMY DATA içerisinde yer alan kategori isimlerinin alınması
        const uniqueCategories = Array.from(new Set(DUMMY_DATA.map(item => item.category)));
        setCategory([category, ...uniqueCategories])
    }, [])

    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {
                    category.map((val, index) => {
                        return <Text key={index}>{val}</Text>
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8,
        marginVertical: 15
    }
})