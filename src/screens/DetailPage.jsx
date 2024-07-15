import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState, useRef } from 'react'
import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
import { ArrowLeft, Heart, Star } from 'lucide-react-native';
import { Image } from 'expo-image';
import { Fonts } from '../constants';

const { width: screenWidth } = Dimensions.get('window');

export default function DetailPage() {

    const navigation = useNavigation();
    const { detail } = useRoute().params;
    const { colors } = useTheme();

    const images = [
        detail.image,
        detail.image,
        detail.image,
        detail.image,
        detail.image
    ]

    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

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
    
    const handleScroll = (event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / screenWidth);
        setActiveIndex(index);
    };
    
    const scrollToIndex = (index) => {
        if (flatListRef.current) {
            flatListRef.current.scrollToIndex({ animated: true, index });
        }
    };

    const Header = () => {
        return (
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <ArrowLeft size={30} color={colors.text}/>
                </Pressable>
                <Heart size={30} color={colors.text}/>
            </View>
        )
    }

    const ProductColor = () => {
       detail.colors.map((val) => {
        console.log(val)
            return (
                <View style={{borderWidth: 1, borderColor: 'gray', padding: 10}}>
                    <Text>{val}</Text>
                </View>
            )
       })
    }

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
                    {images.map((_, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.dot, activeIndex === index && styles.activeDot]}
                        onPress={() => scrollToIndex(index)}
                    />
                    ))}
                </View>
            </View>
            <View style={styles.productDesc}>
                <View>
                    <Text style={styles.productTitle}>{detail.title}</Text>
                    <Text style={styles.productSubTitle}>{detail.subtitle}</Text>
                </View>
                <View style={styles.star}>
                    <Star size="25" color="orange" fill="orange"/>
                    <Text style={styles.productSubTitle}>{detail.star}</Text>
                </View>
            </View>
            <Text style={styles.colorTitle}>Colors</Text>
            <ScrollView horizontal contentInsetAdjustmentBehavior='automatic' showsHorizontalScrollIndicator={false}>
                {
                    detail.colors.map((val) => {
                        console.log(val)
                            return (
                                <View style={{borderWidth: 1, borderColor: 'gray', padding: 10, height: 50, margin: 10}}>
                                    <Text>{val}</Text>
                                </View>
                            )
                       })
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginHorizontal: 10
    },
    sliderView: {
        height: '50%',
        //backgroundColor: 'tomato'
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
})