import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
import { ArrowLeft, Heart } from 'lucide-react-native';
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
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'gray'
      },
      activeDot: {
        width: 15,
        backgroundColor: 'blue'
      }
})