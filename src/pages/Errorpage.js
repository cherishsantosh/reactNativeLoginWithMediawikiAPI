import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class Errorpage extends Component {
 
  render() {
    return (
      <View style={styles.container}>
          <Text style={styles.header}>
            {this.props.response.reason}
          </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center',
     backgroundColor:'rgba(255,0,0,0.7)',
  },
  header:{
    color:'#FFFFFF',
    height:200,
  },
});