import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity,Keyboard} from 'react-native'

export default class BotonTrans extends Component {
    render() {
      return (
        <TouchableOpacity style = {styles.boton} onPress = {this.props.onPress} >  
            <Text style = {styles.textoBoton}> {this.props.texto}</Text>
        </TouchableOpacity>
      )
    }
  }
  
  const styles = new StyleSheet.create({
      boton: {
          justifyContent: "center",
          backgroundColor:"#fff",
          padding: 0.0,
          margin: 0.000,
          
          width: 300,
          height: 30,
          alignSelf: 'center'
      },  
      textoBoton:{
          color: '#BDC6CD',
          fontWeight: 'bold',
          fontSize: 13,
          textAlign: 'center',
      }
  })