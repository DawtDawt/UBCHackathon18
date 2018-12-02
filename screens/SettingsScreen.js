import React from 'react';
import { ExpoConfigView } from '@expo/samples';

// settings tab, change ExpoConfigView to another js file to implement

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
