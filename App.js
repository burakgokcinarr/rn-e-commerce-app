import { useFonts } from 'expo-font';
// Custom Fonts Config
import { FontLoader } from './src/config/FontConfig';

import Router from './src/navigation/Router';

export default function App() {

  const [loaded, error] = useFonts(FontLoader);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Router/>
  );
}
