import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { categoryData } from '../redux/slices/productSlice';
import { CategorySection } from './';

export default function CategoryList() {

    const dispatch      = useDispatch();
    const categoryList  = useSelector((state) => state.data.category);
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    useEffect(() => {
        dispatch(categoryData())
    }, [])

    const handlePress = useCallback((index) => {
        setSelectedIndex(index);
    }, []);
    
    return (
        <View>
            <ScrollView 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                contentInsetAdjustmentBehavior="automatic"
                style={styles.container}
            >
                {
                    categoryList.map((val, index) => (
                        <CategorySection 
                            item={val} 
                            index={index} 
                            selectedIndex={selectedIndex} 
                            onPress={handlePress}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 8
    }
})