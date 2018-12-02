import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import { WebBrowser, MapView, Marker } from 'expo';

import { MonoText } from '../components/StyledText';

// home screen, where the map will be

export default class HomeScreen extends React.Component {
  _onRegionChange(region) {
    // event caller function
  }

  render() {
    return (
      <MapView
        // init the region
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 49.2606,
          longitude: -123.2460,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // activate event caller and set new region upon regionchange
        onRegionChange={r => _onRegionChange(r)}
        onRegionChange={r => region = { r }}
        showsUserLocation={true}>
      </MapView>
    );
  }
}


/* export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <ImageBackground
          style={{
            width: `100%`,
            height: `100%`,
          }}
          source={require(`D:/Documents/UBCHackathon18/assets/images/welcomeScreen.jpg`)}>
        <Text style={styles.title}>
          Welcome to TBD
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontStyle: `normal`,
    fontWeight: `bold`,
    textAlign: `center`,
    color: `white`,
    lineHeight: 400,
  },
});
 */