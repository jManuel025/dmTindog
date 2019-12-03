import React, { Component } from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default class Input extends Component {
    render() {
      return (
        // funciona igual que los botones, se sobreescribe la propiedad con props
        <TextInput 
          placeholder = {this.props.placeholder} 
          style = {styles.input}  
          secureTextEntry = {this.props.secureTextEntry} 
          keyboardType={this.props.keyboardType}
          onChangeText = {this.props.onChangeText}  
        ></TextInput>
      )
    }
  }
  
  const styles = new StyleSheet.create({
      input:{
        justifyContent: "center",
        backgroundColor: '#F3F3F3',
        padding: 5,
        margin: 5,
        borderRadius: 5,
        width: 300,
        height: 41.5,
        textAlign: 'center',
        alignSelf: 'center'
      }
  })