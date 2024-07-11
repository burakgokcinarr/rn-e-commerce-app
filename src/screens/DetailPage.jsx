import { StyleSheet, Text, View, SafeAreaView, Pressable, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useState, useRef } from 'react'
import { useNavigation, useRoute, useTheme } from '@react-navigation/native'
import { ArrowLeft, Heart } from 'lucide-react-native';

const { width: screenWidth } = Dimensions.get('window');

export default function DetailPage() {

    const navigation = useNavigation();
    const { detail } = useRoute().params;
    const { colors } = useTheme();

    const images = [
        'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1694712318/Croma%20Assets/Communication/Wearable%20Devices/Images/300676_0_logazn.png?tr=w-400',
        'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691134303/Croma%20Assets/Wearable/Wearable%20Devices/Images/275944_hmcg6b.png?tr=w-400',
        'https://example.com/image3.jpg'
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);

    const renderItem = ({ item }) => (
        <View style={styles.slide}>
            <Image
            source={{ uri: item }}
            style={styles.image}
            resizeMode="contain"
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
            <Text>{detail.title}</Text>
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
    slide: {
        justifyContent: 'center',
        alignItems: 'center',
        width: screenWidth,
        backgroundColor: 'white'
      },
      image: {
        width: screenWidth,
        height: 300
      },
      paginationContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10
      },
      dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 8,
        backgroundColor: 'gray'
      },
      activeDot: {
        backgroundColor: 'blue'
      }
})