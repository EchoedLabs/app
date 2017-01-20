import React from 'react';
import {
  Image,
  Linking,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.welcomeImage}
            />
          </View>

          <Text style={styles.title}>
            Echoed Labs
          </Text>

          <Button
            onPress={learnMore}
            title="Visit Our Blog"
            style={styles.learnMoreButton}
            color="#6ea9c7"
            accessibilityLabel="Learn more about us on our page"
            />
        </ScrollView>
      </View>
    );
  }
}

const learnMore = () => {
    Linking.openURL("https://echoedlabs.com");
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 80,
  },
  title:{
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#6ea9c7",
    marginBottom: 25
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    marginTop: 3,
  },
  learnMoreButton: {
    paddingVertical: 15
  }
});
