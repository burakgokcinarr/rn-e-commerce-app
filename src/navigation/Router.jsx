import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage, DetailPage } from '../screens';
import useTheme from '../hooks/useTheme';

const Stack = createNativeStackNavigator();

export default function Router() {

    const { isDarkMode } = useTheme();

    const stackOption = {
        headerShown: false,
        gestureEnabled: false
    }

    return (
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
            <Stack.Navigator screenOptions={stackOption}>
                <Stack.Screen name="Home" component={HomePage} />
                <Stack.Screen name="Detail" component={DetailPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

