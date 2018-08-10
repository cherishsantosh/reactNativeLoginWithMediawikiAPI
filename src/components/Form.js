import React from 'react';
import { StyleSheet, Text,Component,Navigator, View, TextInput , TouchableOpacity, KeyboardAvoidingView, Alert, ToastAndroid, ActivityIndicator, AsyncStorage} from 'react-native';
import API from '../api/api'

import {Actions} from 'react-native-router-flux'

export default class Form extends React.Component {
  constructor(props){
      super(props);
      this.state={
        username:'',
        password:''
      }
      
  }
  loginAttempt=()=>{ 
    API.getToken(this.state.username,this.state.password);
  }
  render() {
    return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" >
            <TextInput 
            style={styles.inputBox} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder='Enter Email'
            onChangeText={(username) =>this.setState({username})}
            value={this.state.username}
            //value='cherishsantosh'
            />

            <TextInput 
            style={styles.inputBox} 
            secureTextEntry={true} 
            underlineColorAndroid='rgba(0,0,0,0)' 
            placeholder='Enter Psssword' 
            secureTextEntry={true}
            onChangeText={(password) =>this.setState({password})}
            value={this.state.password}
            //value='openweapons'
            />

            <TouchableOpacity style={styles.button} onPress={this.loginAttempt.bind(this)}>
                <Text style={styles.buttonText}>{this.props.type}</Text>
            </TouchableOpacity>
    </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox:{
      backgroundColor : 'rgba(255,255,255,0.7)',
      color:'#000000',
      width:250,
      height: 40,
      paddingHorizontal:40,
      borderRadius: 25,
      fontSize:16,
      marginVertical:5
  },
  button:{
      width:250,
      backgroundColor : '#333333',
       borderRadius: 25,
       marginVertical:5,
       paddingVertical:13
  },
  buttonText:{
      fontSize:16,
      fontWeight:'700',
      color:'#FFFFFF',
      textAlign:'center'
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80
  },
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }

});
