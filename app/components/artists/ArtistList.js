'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from 'react-native-button';
import {Actions} from 'react-native-router-flux';


class ArtistList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Artists List
        </Text>
        <Text style={styles.instructions}>
          The artist list goes here
        </Text>
        <Button onPress={Actions.artistShow}>Go to Artist Songs</Button>
        <Button onPress={Actions.player}>Go to Player</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  instructions: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 5,
  },
});

module.exports = ArtistList;
