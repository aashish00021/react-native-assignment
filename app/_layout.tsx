import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import Home from './Home';
import Details from './Details';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const Stack = createSharedElementStackNavigator();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    CircularBook: require('../assets/fonts/CircularStd-Book.otf'),
    CircularLight: require('../assets/fonts/CircularStd-Light.otf'),
    CooperHewittMedium: require('../assets/fonts/CooperHewitt-Medium.otf'),
    NTBrickSans: require('../assets/fonts/NTBrickSans.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress
            }
          })
        }}
      >
        <Stack.Screen name="index" component={Home} />
        <Stack.Screen name="details" component={Details} options={{ gestureEnabled: false }} />
      </Stack.Navigator>

  );
}

