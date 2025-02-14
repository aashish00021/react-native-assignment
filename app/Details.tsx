import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { WebDevContent } from "@/components/WebDevContent";
import { AIPythonContent } from "@/components/AIPythonContent";

export default function Details({ route, navigation }: any) {
  const { course } = route.params;
  const [activeTab, setActiveTab] = useState(course === 'python' ? 1 : 0);

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <MaterialIcons name="chevron-left" size={30} color="#888888" />
          <Text style={styles.backText}>BACK</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 0 && styles.activeTab]}
          onPress={() => setActiveTab(0)}
        >
          <Text
            style={[
              styles.tabText,
              { color: activeTab === 0 ? "#00FF9D" : "#888888" },
            ]}
          >
            INTRO TO{"\n"}WEB DEV
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 1 && styles.activeTab]}
          onPress={() => setActiveTab(1)}
        >
          <Text
            style={[
              styles.tabText,
              { color: activeTab === 1 ? "#00FF9D" : "#888888" },
            ]}
          >
            INTRO TO{"\n"}AI PYTHON
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tabIndicator}>
        <View 
          style={[
            styles.indicator, 
            { transform: [{ translateX: activeTab * (Dimensions.get('window').width / 2) }] }
          ]} 
        />
      </View>

      <View style={styles.expandedCard}>
        <View style={styles.contentContainer}>
          <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            position: 'absolute',
            opacity: activeTab === 0 ? 1 : 0,
            zIndex: activeTab === 0 ? 1 : 0,
            bottom: 0,
            top: 0,
          }}>
            <WebDevContent />
          </View>
          <View style={{
            flex: 1,
            width: '100%',
            height: '100%',
            position: 'absolute',
            opacity: activeTab === 1 ? 1 : 0,
            zIndex: activeTab === 1 ? 1 : 0,
            bottom: 0,
            top: 0,
          }}>
            <AIPythonContent />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

Details.sharedElements = (route: any) => {
  const { course } = route.params;
  return [
    {
      id: course === 'python' ? 'item.2.image' : 'item.1.image',
    }
  ];
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    backgroundColor: "#000",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    color: "#888888",
    fontSize: 17,
  },
  tabBar: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#000",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeTab: {
    borderBottomColor: "#00FF9D",
  },
  tabText: {
    fontSize: 15,
    fontFamily: "CircularBook",
    textAlign: "center",
  },
  tabIndicator: {
    height: 2,
    backgroundColor: "#333",
  },
  indicator: {
    width: Dimensions.get("window").width / 2,
    height: 2,
    backgroundColor: "#00FF9D",
  },
  contentContainer: {
    flex: 1,
    position: "relative",
    overflow: "hidden",
  },
  expandedCard: {
    flex: 1,
    backgroundColor: "#000",
  },
});
