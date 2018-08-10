import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Image style={{height:100,width:100}} source={require('../assests/logo.png')} />
          <Text style={styles.logoText}>The Free Encyclopedia</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logoText:{
    marginVertical:15,
    fontSize:18,
    color:'rgba(0,0,0,0.7)'
  }
});
