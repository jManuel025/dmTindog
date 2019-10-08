import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default class CircleButton extends Component {
    render() {
      return (
        <TouchableOpacity style = {styles.circularButton}>
            <Image source = {require('../images/usuario.png')} style = {styles.circBImage}></Image>
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
        //   shadowOffset:{  width: 10,  height: 10,  },
        //   shadowColor: 'black',
        //   shadowOpacity: 10,
        //   shadowRadius: 10,
      },
      circBImage:{
          width: 30,
          height: 30,
      }
  })