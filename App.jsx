import { useFonts } from 'expo-font';
// Custom Fonts Config
import { FontLoader } from './src/config/FontConfig';

import Router from './src/navigation/Router';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {

  const [loaded, error] = useFonts(FontLoader);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}
