import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState, useRef, useCallback } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Image } from 'expo-image';
import { Fonts } from '../constants';
import { CategorySection, Header, Button } from '../components';
import { Star, ShoppingCart } from 'lucide-react-native';
import useTheme from '../hooks/useTheme';

const { width: screenWidth } = Dimensions.get('window');

export default function DetailPage() {

    const { detail }                        = useRoute().params;
    const { colors }                        = useTheme();
    const [detailTitle, _]                  = useState(["Detail", "Review"]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [activeIndex, setActiveIndex]     = useState(0);
    const flatListRef                       = useRef(null);

    const images = [
        detail.image,
        detail.image,
        detail.image,
        detail.image,
        detail.image
    ]

    const handlePress = useCallback((index) => {
        setSelectedIndex(index);
    }, []);

    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
        setActiveIndex(index);
    };
    
    const scrollToIndex = (index) => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ animated: true, index });
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image
                source={{ uri: item }}
                style={styles.image}
                contentFit='contain'
                transition={1000}
            />
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <View style={styles.sliderView}>
                <FlatList
                    data={images}
                    renderItem={renderItem}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    onScroll={handleScroll}
                    ref={flatListRef}
                />
                <View style={styles.paginationContainer}>
                    {
                        images.map((_, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[styles.dot, activeIndex === index && styles.activeDot]}
                                onPress={() => scrollToIndex(index)}
                            />
                        ))
                    }
                </View>
            </View>
            <View style={styles.productDesc}>
                <View>
                    <Text style={[styles.productTitle, { color: colors.TEXT }]}>{detail.title}</Text>
                    <Text style={styles.productSubTitle}>{detail.subtitle}</Text>
                </View>
                <View style={styles.star}>
                    <Star size="25" color="orange" fill="orange"/>
                    <Text style={styles.productSubTitle}>{detail.star}</Text>
                </View>
            </View>
            <Text style={[styles.colorTitle, { color: colors.TEXT }]}>Colors</Text>
            <View>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    contentInsetAdjustmentBehavior="automatic">
                    {
                        detail.colors.map((val) => {
                            return (
                                <View style={styles.colorView}>
                                    <View style={[styles.productColorOver, { backgroundColor: val.code }]}/>
                                    <Text style={[styles.descriptionTitle, { color: colors.TEXT }]}>{val.name}</Text>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View>
                <ScrollView 
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={true}
                    style={{padding: 8}}
                    contentInsetAdjustmentBehavior="automatic">
                    {
                        detailTitle.map((val, index) => (
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
            {
                selectedIndex === 0 && (
                    <View style={styles.descriptionView}>
                        <Text style={styles.descriptionTitle}>{detail.detail}</Text>
                    </View>
                )
            }
            <Button 
                title={` Add to Card | ${detail.price}`} 
                icon={<ShoppingCart size={20} color={colors.WHITE}/>}
                linearColors={[colors.BLUE, colors.GRAY, colors.BLUE]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderView: {
        height: '40%'
    },
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth
    },
    image: {
        width: screenWidth,
        height: '80%'
    },
    paginationContainer: {
        flexWrap: 'wrap',
        gap: 5,
        alignSelf: 'center',
        flexDirection: 'row',
        bottom: 5
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8,
        backgroundColor: 'gray'
    },
    activeDot: {
        width: 15,
        backgroundColor: 'blue'
    },
    productDesc: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        alignItems: 'center'
    },
    productTitle: {
        fontSize: 20,
        fontFamily: Fonts.bold,
        textAlign: 'left'
    },
    productSubTitle: {
        fontSize: 15,
        fontFamily: Fonts.medium,
        textAlign: 'left',
        color: 'gray'
    },
    star: {
        flexDirection: 'row', 
        alignItems: 'center', 
        gap: 4
    },
    colorTitle: {
        fontSize: 20,
        fontFamily: Fonts.bold,
        textAlign: 'left',
        padding: 10
    },
    colorView: {
        flexDirection: 'row',
        gap: 5,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gray',
        height: 35,
        padding: 5,
        marginHorizontal: 8,
        alignItems: 'center'
    },
    productColorOver: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: 'white'
    },
    descriptionView: {
        padding: 8
    },
    descriptionTitle: {
        fontSize: 17,
        fontFamily: Fonts.medium,
        textAlign: 'left',
        color: 'gray'
    },                     
})