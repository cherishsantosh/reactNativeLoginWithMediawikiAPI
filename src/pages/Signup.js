import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo'
import Form from '../components/Form'

import {Actions} from 'react-native-router-flux'

export default class Signup extends React.Component {
  login(){
    Actions.login()
  }
  render() {
    return (
      <View style={styles.container}>
          <Logo />
          <Form type="Signup"/>
          <View style={styles.signupContext}>
            <Text style={styles.signupText}>Already have an account? </Text>
            <TouchableOpacity onPress={this.login}>
                <Text style={styles.signupButton}>Sign in</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupContext:{
     flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical:16,
    flexDirection:'row'
  },
  signupText:{
      color:'rgba(0,0,0,0.7)',
      fontSize:16
  },
  signupButton:{
      color:'rgba(0,0,0,0.7)',
      fontSize:16,
      fontWeight:'700'
  }
});
