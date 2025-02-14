import { StyleSheet, View, Pressable, Image, ScrollView, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity, Dimensions, Text } from 'react-native';
import { Link } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedElement } from 'react-navigation-shared-element';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import Animated, { FadeIn } from 'react-native-reanimated';

const CARD_WIDTH = Dimensions.get('window').width * 0.85;
const CARD_HEIGHT = CARD_WIDTH * 1.2;

type RootStackParamList = {
  index: undefined;
  details: { course: string };
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

const tracks = [
  {
    id: '1',
    title: 'intro to coding with web dev 🌐',
    description: 'start building websites with html & css, the building blocks that power the web. grow into full-stack coding!',
    image: require('../assets/images/webDev.gif'),
  },
  {
    id: '2',
    title: 'intro to coding with ai python 🤖',
    description: 'learn python basics and dive into ai. build practical ai apps, get hands-on with ml models and grow into ai engineering!',
    image: require('../assets/images/ai.gif'),
  },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <ThemedText style={styles.title}>pick your track</ThemedText>
            <ThemedText style={styles.subtitle}>time to build 🚀</ThemedText>
          </View>
          <View style={styles.levelContainer}>
            <ThemedText style={styles.techText}>tech</ThemedText>
            <View style={styles.badgeContainer}>
              <Image 
                source={require('@/assets/images/level1.png')} 
                style={styles.levelImage}
              />
              <View style={styles.badgeTextContainer}>
                <ThemedText style={styles.badgeText}>LEVEL</ThemedText>
                <ThemedText style={styles.badgeNumber}>1</ThemedText>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.checkContainer}>
          <View style={styles.checkLine}>
            <ThemedText style={styles.checkmark}>✓</ThemedText>
            <ThemedText style={styles.checkText}>switch or add tracks anytime as you grow</ThemedText>
          </View>
          <View style={styles.checkLine}>
            <ThemedText style={styles.checkmark}>✓</ThemedText>
            <ThemedText style={styles.checkText}>complete your track to unlock new skills and projects!</ThemedText>
          </View>
        </View>

        <ScrollView 
          horizontal 
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.cardContainer}
        >
          <View style={styles.carouselContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('details', { course: 'web' })}
              activeOpacity={0.9}>
              <SharedElement id={`item.1`}>
                <View style={styles.cardContent}>
                  <SharedElement id={`item.1.image`} style={styles.imageContainer}>
                    <Image
                      source={require('../assets/images/webDev.gif')}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </SharedElement>
                  <View style={styles.textContainer}>
                    <ThemedText style={styles.cardTitle}>{tracks[0].title}</ThemedText>
                    <ThemedText style={styles.description}>{tracks[0].description}</ThemedText>
                    <View style={styles.button}>
                      <ThemedText style={styles.buttonText}>VIEW TRACK DETAILS →</ThemedText>
                    </View>
                  </View>
                </View>
              </SharedElement>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.card, { marginRight: 24 }]}
              onPress={() => navigation.navigate('details', { course: 'python' })}
              activeOpacity={0.9}>
              <SharedElement id={`item.2`}>
                <View style={styles.cardContent}>
                  <SharedElement id={`item.2.image`} style={styles.imageContainer}>
                    <Image
                      source={require('../assets/images/ai.gif')}
                      style={styles.image}
                      resizeMode="cover"
                    />
                  </SharedElement>
                  <View style={styles.textContainer}>
                    <ThemedText style={styles.cardTitle}>{tracks[1].title}</ThemedText>
                    <ThemedText style={styles.description}>{tracks[1].description}</ThemedText>
                    <View style={styles.button}>
                      <ThemedText style={styles.buttonText}>VIEW TRACK DETAILS →</ThemedText>
                    </View>
                  </View>
                </View>
              </SharedElement>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.lineContainer}>
          <View style={[styles.line, styles.activeLine]} />
          <View style={[styles.line]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollContent: {
    // padding: 24,
    flexGrow: 1,
    marginTop:24
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
    marginHorizontal: 24,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'NTBrickSans',
    letterSpacing: 0,
  },
  subtitle: {
    fontSize: 20,
    color: '#FFE81A',
    marginTop: 8,
    fontFamily: 'NTBrickSans',
  },
  levelContainer: {
    alignItems: 'center',
    marginLeft: 14,
  },
  techText: {
    color: '#00FF9D',
    fontSize: 20,
    fontFamily: 'NTBrickSans',
    marginBottom: 4,
    letterSpacing: 1,
    textShadowColor: '#E073DA',
    textShadowOffset: {
      width: 0,
      height: 1.75
    },
    textShadowRadius: 0,
  },
  badgeContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelImage: {
    width: 48,
    height: 48,
    resizeMode: 'contain',
  },
  badgeTextContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    left: '18%',
    top: '3%',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight:'bold',
    letterSpacing: 0.5,
  },
  badgeNumber: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    top:-9,
  },
  checkContainer: {
    marginBottom: 25,
    gap: 16,
    marginHorizontal: 24,
  },
  checkLine: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
  },
  checkmark: {
    color: '#00FF9D',
    fontSize: 18,
    fontFamily: 'CircularBook',
  },
  checkText: {
    color: '#AAAAAA',
    fontSize: 16,
    flex: 1,
    lineHeight: 24,
    fontFamily: 'CircularLight',
  },
  cardContainer: {
    flexGrow: 0,
  },
  carouselContainer: {
    flexDirection: 'row',
    // paddingHorizontal: 20,
  },
  card: {
    width: 290,
    backgroundColor: '#111',
    overflow: 'hidden',
    borderWidth: 0.4,
    borderColor: '#A3A3A3',
    marginLeft:24,
    height:465
  },
  cardContent: {
    // flex: 1,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 196,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 22,
    color: '#FCF2D0',
    lineHeight: 28,
    fontFamily: 'CircularBook',
    fontWeight: 'bold',
  },
  description: {
    fontFamily: 'CircularLight',
    fontSize: 16,
    color: '#999',
    lineHeight: 22,
    marginBottom: 24,
  },
  button: {
    borderWidth: 2,
    borderColor: '#A3A3A3',
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'CircularBook',
    letterSpacing: 1,
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginTop: 30,
    width: 104,
    height: 2,
    alignSelf: 'center',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#333',
  },
  activeLine: {
    backgroundColor: '#fff',
  },
});

