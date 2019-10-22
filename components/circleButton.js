import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Image} from 'react-native'

export default class CircleButton extends Component {
    render() {
      return (
        <TouchableOpacity style = {styles.circularButton} onPress = {this.props.onPress}>
        </TouchableOpacity>
      )
    }
  }
  
  const styles = new StyleSheet.create({
      circularButton:{
          width: 80,
          height: 80,
          borderRadius: 200,
          backgroundColor: '#fff',
          justifyContent: "center",
          alignItems: "center",
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.8,
          elevation: 4,
      },
      circBImage:{
          width: 30,
          height: 30,
      }
  })