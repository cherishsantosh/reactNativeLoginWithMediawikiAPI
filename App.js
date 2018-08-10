import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Routes from './src/Routes'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar backgroundColor="#c3c3c3" />
          <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c3c3c3'
  },
   welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
