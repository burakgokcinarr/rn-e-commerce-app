import { useColorScheme } from 'react-native';
import { lightThemeColors, darkThemeColors } from '../constants/Theme';

const useTheme = () => {

    const colorScheme = useColorScheme();

    const isDarkMode = colorScheme === 'dark';
    
    return {
        isDarkMode, // true or false
        colors: isDarkMode ? darkThemeColors : lightThemeColors
    };
};

export default useTheme;
